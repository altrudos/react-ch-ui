import React from "react"

export type MoneyProps = {
    amount: number,
    currency: string
    title?: string
}

const prefixes = {
    usd: '$',
    cad: '$',
    aud: '$',
    gbp: '£',
    eur: '€'
}

const suffixes = {
    usd: ' USD',
    cad: ' CAD',
    aud: ' AUD'
}

export function MoneyToString (amount, currency) : string {
    let prefix = ''
    if (prefixes[currency.toLowerCase()]) {
        prefix = prefixes[currency.toLowerCase()]
    }
    let suffix = ''
    if (suffixes[currency.toLowerCase()]) {
        suffix = suffixes[currency.toLowerCase()]
    }
    if (isNaN(amount)) {
        amount = 0
        prefix = '$'
        suffix = ''
    }
    return `${prefix}${(amount/100).toFixed(2)}${suffix}`
}

export default function Money ({
    amount,
    currency,
    title
} : MoneyProps) {

    const str = MoneyToString(amount, currency);
    return <span className={"money " + currency} title={title}>
        <span className={"amount"}>{str}</span>
    </span>
}
