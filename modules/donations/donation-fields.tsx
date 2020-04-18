import React, {useState, Fragment} from 'react'
import CharitySelector from "../charities/charity-selector"
import Input from "../../components/form/input"
import CurrencySelect from "../../components/form/currency-select"
import {Charity} from "model/charity";

export type DonationFieldsProps = {
    charity? : Charity,
    setCharity: (any) => any,
    amount : string,
    setAmount: (any) => any,
    currency: string,
    setCurrency: (any) => any,
    name: string,
    setName: (any) => any,
}

export default function DonationFields (
    {
        charity,
        setCharity,
        amount,
        setAmount,
        currency,
        setCurrency,
        name,
        setName
    } : DonationFieldsProps
) {
    return (
        <Fragment>
            <CharitySelector value={charity} name={"charity_id"} setValue={setCharity} label={"Charity"}/>
            <Input name="amount" value={amount} setValue={setAmount} label={"Amount"} />
            <CurrencySelect name={"currency"} value={currency} setValue={setCurrency} label={"Currency"} />
            <Input name="name" value={name} setValue={setName} label={"Your Name"} />

        </Fragment>
    )
}