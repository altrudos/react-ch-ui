import React, {useState} from "react"
import DonationFields from "modules/donations/donation-fields";
import StatusButton from "../../components/button/status-button"
import Errors from "../../components/errors/errors"
import {AsyncState} from "../../components/async"
import getAmount from "util/amount"
import {SubmittedDonation} from "model/donation";
import {Charity} from "model/charity";
import {Drive} from "model/drive";
import DriveApi from "api/drives";
import {parseError} from "util/error";
import DonationRedirect from "modules/donations/donation-redirect"


export default function NewDriveForm (
    {
        drive
    } : {
        drive : Drive
    }
) {
    const [charity, setCharity] = useState<Charity>(null)
    const [amount, setAmount] = useState<string>("10")
    const [name, setName] = useState<string>("")
    const [currency, setCurrency] = useState<string>("USD")
    const [errors, setErrors] = useState<string[]>([])
    const [donateLink, setDonateLink] = useState<string>("")

    const submit = async (e) => {
        e.preventDefault()
        const errors : string [] = []
        const [amtFixed, curr, errs] = getAmount(amount, currency)

        if (errs.length) {
            errors.concat(errs)
        }

        if (errors.length) {
            setErrors(errors)
            return
        }

        const dono : SubmittedDonation = {
            Amount: amtFixed,
            Currency: curr,
            CharityId: charity.Id,
            DonorName: name,
        }

        try {
            const resp = await DriveApi.createDonation(drive.Id, dono)
            setDonateLink(resp.DonateLink)
        } catch (ex) {
            const err = parseError(ex)
            setErrors([err])
        }
    }

    if (donateLink != "") {
        return <DonationRedirect url={donateLink} />
    }

    return <form onSubmit={submit} className={"donate-form"}>
        <Errors errors={errors}></Errors>
        <DonationFields
            currency={currency}
            setCurrency={setCurrency}
            amount={amount}
            setAmount={setAmount}
            name={name}
            setName={setName}
            charity={charity}
            setCharity={setCharity} />
        <div className={"form-group"}>
            <StatusButton status={AsyncState.Available}>Continue to Payment</StatusButton>
        </div>
    </form>

}