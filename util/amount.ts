export const validCurrencies = ['USD', 'CAD', 'EUR', 'GBP']

export default function getAmount (amtS : string, currency : string) : [string, string, string[]] {
    const errors = []

    const amt = parseFloat(amtS)

    if (isNaN(amt)) {
        errors.push("Amount is invalid")
    } else if (amt < 0) {
        errors.push("Amount must be positive")
    }

    if (!currency) {
        errors.push("Currency is require")
    } else if (validCurrencies.indexOf(currency.toUpperCase()) == -1) {
        errors.push("Invalid currency")
    }

    return [amt.toFixed(2), currency, errors]
}