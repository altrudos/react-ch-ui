import React, {useState} from "react"
import DonationFields from "modules/donations/donation-fields";
import Input from "../../components/form/input"
import StatusButton from "../../components/button/status-button"
import Errors from "../../components/errors/errors"
import {NewDrive, Drive} from "model/drive";
import {AsyncState} from "../../components/async"
import DriveApi from "api/drives"
import {parseError} from "util/error";

const validCurrencies = ['USD', 'CAD', 'EUR']

export default function NewDriveForm () {
    const [charityId, setCharity] = useState<string>("")
    const [amount, setAmount] = useState<string>("10")
    const [currency, setCurrency] = useState<string>("USD")
    const [sourceUrl, setSourceUrl] = useState<string>("")
    const [errors, setErrors] = useState<string[]>([])
    const [drive, setDrive] = useState<Drive>(null)
    const [donateLink, setDonateLink] = useState<string>("")

    const submit = async (e) => {
        e.preventDefault()
        const errors : string [] = []
        const amt = parseFloat(amount)

        if (isNaN(amt)) {
            errors.push("Amount is invalid")
        } else if (amt < 0) {
            errors.push("Amount must be positive")
        }

        if (sourceUrl.length == 0) {
            errors.push("URL is required")
        }
        else if (sourceUrl.toLowerCase().indexOf('http') != 0) {
            errors.push('URL must start with http')
        }

        if (!currency) {
            errors.push("Currency is require")
        } else if (validCurrencies.indexOf(currency.toUpperCase()) == -1) {
            errors.push("Invalid currency")
        }

        if (errors.length) {
            setErrors(errors)
            return
        }

        const amtFixed = amt.toFixed()
        if (amtFixed != amount) {
            setAmount(amtFixed)
        }

        const d : NewDrive = {
            Amount: amtFixed,
            CharityId: charityId,
            SourceUrl: sourceUrl,
            Currency: currency,

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
        window.location.href = donateLink
        return <div>
            Created drive {drive.Uri} {drive.SourceType}/{drive.SourceKey}
            <br /><small>{drive.SourceUrl}</small>
            <br />Redirecting to payment form...
            <br /><a href={donateLink}>Click here if you aren't taken.</a>
        </div>
    }

    return <form onSubmit={submit}>
        <Errors errors={errors}></Errors>
        <Input name={"sourceUrl"} value={sourceUrl} setValue={setSourceUrl} label={"Content URL"} />
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