import React, {useState} from "react"
import DonationFields from "modules/donations/donation-fields";
import StatusButton from "../../components/button/status-button"
import Errors from "../../components/errors/errors"
import {AsyncState} from "../../components/async"
import getAmount from "util/amount"
import {NewDonation} from "model/donation";
import {Drive} from "model/drive";
import DriveApi from "api/drives";
import {parseError} from "util/error";


export default function NewDriveForm (
    {
        drive
    } : {
        drive : Drive
    }
) {
    const [charityId, setCharity] = useState<string>("")
    const [amount, setAmount] = useState<string>("10")
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

        const dono : NewDonation = {
            Amount: amtFixed,
            Currency: curr,
            CharityId: charityId
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
        window.location.href = donateLink
        return <div>
            Redirecting to payment form...
            <br /><a href={donateLink}>Click here if you aren't taken.</a>
        </div>
    }

    return <form onSubmit={submit} className={"donate-form"}>
        <Errors errors={errors}></Errors>
        <DonationFields
            currency={currency}
            setCurrency={setCurrency}
            amount={amount}
            setAmount={setAmount}
            charity={charityId}
            setCharity={setCharity} />
        <div className={"form-group"}>
            <StatusButton status={AsyncState.Available}>Submit</StatusButton>
        </div>
    </form>

}