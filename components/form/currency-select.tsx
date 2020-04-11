import React, {useState} from 'react'
import {AsyncState} from "components/async"
import {Charity} from "model/charity";
import CharityApi from "api/charities";
import Select, {SelectProps, SelectOption} from "components/form/select"

const currencies = ["USD", "GBP", "EUR", "CAD", "AUD"].sort()

export type CurrencySelectProps = {
    className?: string
    inline?: boolean
    type?: string

    name: string
    label?: string | React.Component
    value: string
    setValue: (string) => void | Promise<void>
}


export default function CurrencySelector(
    {
        className,
        name,
        inline,
        label,
        value,
        setValue,
    } : CurrencySelectProps
) {
    let options : SelectOption[] = currencies.map(function (c) {
        return {
            value: c,
            label: c
        }
    })
    return <Select className={className}
                   label={label}
                   name={name}
                   inline={inline}
                   setValue={setValue}
                   value={value}
                   options={options} />
}