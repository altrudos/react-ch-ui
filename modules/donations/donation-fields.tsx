import React, {useState, Fragment} from 'react'
import CharitySelector from "../charities/charity-selector"
import Input from "../../components/form/input"

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
            <Input name="currency" value={currency} setValue={setCurrency} label={"Currency"} />
        </Fragment>
    )
}