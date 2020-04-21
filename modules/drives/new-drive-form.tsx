import React, {useState} from "react"
import DonationFields from "modules/donations/donation-fields";
import Input from "../../components/form/input"
import StatusButton from "../../components/button/status-button"
import Errors from "../../components/errors/errors"
import {NewDrive, Drive} from "model/drive";
import {AsyncState} from "../../components/async"
import DriveApi from "api/drives"
import {parseError} from "util/error";
import getAmount from "util/amount";
import DonationRedirect from "modules/donations/donation-redirect"
import {Charity} from "model/charity";

export default function NewDriveForm () {
    const [charity, setCharity] = useState<Charity>(null)
    const [amount, setAmount] = useState<string>("10")
    const [name, setName] = useState<string>("")
    const [currency, setCurrency] = useState<string>("USD")
    const [sourceUrl, setSourceUrl] = useState<string>("")
    const [errors, setErrors] = useState<string[]>([])
    const [drive, setDrive] = useState<Drive>(null)
    const [donateLink, setDonateLink] = useState<string>("")

    const submit = async (e) => {
        e.preventDefault()
        const errors : string [] = []
        if (sourceUrl.length == 0) {
            errors.push("URL is required")
        }
        else if (sourceUrl.toLowerCase().indexOf('http') != 0) {
            errors.push('URL must start with http')
        }

        const [amtFixed, curr, errs] = getAmount(amount, currency)


        if (errs.length) {
            errors.concat(errs)
        }
        if (errors.length) {
            setErrors(errors)
            return
        }
        if (amtFixed != amount) {
            setAmount(amtFixed)
        }
        const d : NewDrive = {
            SourceUrl: sourceUrl,
            SubmittedDonation: {
                Amount: amtFixed,
                CharityId: charity.Id,
                Currency: curr,
                DonorName: name,
            },
        }
        try {
            const resp = await DriveApi.create(d)
            setDrive(resp.Drive)
            setDonateLink(resp.DonateLink)
        } catch (ex) {
            const err = parseError(ex)
            setErrors([err])
        }
    }

    if (drive != null) {
        return <DonationRedirect url={donateLink} />
    }

    return <form onSubmit={submit} className={"box"}>
        <Errors errors={errors}></Errors>
        <div className={"columns"}>
            <Input name={"sourceUrl"} value={sourceUrl} setValue={setSourceUrl} placeholder={"Paste link"} label={"Content you like"} />
        </div>
        <DonationFields
            name={name}
            setName={setName}
            currency={currency}
            setCurrency={setCurrency}
            amount={amount}
            setAmount={setAmount}
            charity={charity}
            setCharity={setCharity} />
        <div className={"columns"}>
            <div className={"column"}>
                <StatusButton status={AsyncState.Available} className="button is-block is-warning is-medium is-fullwidth is-size-6">Continue to Payment</StatusButton>
            </div>
        </div>
    </form>

}