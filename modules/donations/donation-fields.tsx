import React, {useState, Fragment} from 'react'
import CharitySelector from "../charities/charity-selector"
import Input from "../../components/form/input"
import CurrencySelect from "../../components/form/currency-select"

export default function DonationFields (
    {
        charity,
        setCharity,
        amount,
        setAmount,
        currency,
        setCurrency
    }
) {
    return (
        <Fragment>
            <CharitySelector value={charity} name={"charity_id"} setValue={setCharity} label={"Charity"}/>
            <Input name="amount" value={amount} setValue={setAmount} label={"Amount"} />
            <CurrencySelect name={"currency"} value={currency} setValue={setCurrency} label={"Currency"} />
        </Fragment>
    )
}