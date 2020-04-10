import React from "react"

export type MoneyProps = {
    amount: number,
    currency: string
}

const prefixes = {
    usd: '$',
    cad: '$'
}

export default function Money ({
    amount,
    currency
} : MoneyProps) {
    let prefix = ''
    if (prefixes[currency.toLowerCase()]) {
        prefix = prefixes[currency.toLowerCase()]
    }
    return <span className={"money " + currency}>
        <span className={"currency"}>{currency}</span>
        <span className={"amount"}>{prefix}{(amount/100).toFixed(2)}</span>
    </span>
}
