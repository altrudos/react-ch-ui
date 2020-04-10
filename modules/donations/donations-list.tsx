import React from "react"
import {Donation} from "model/donation";
import Money from "components/money"

export type DonationsListProps = {
    donations: Donation[]
}

export function DonationListItem (donation : Donation) {
    return <li key={donation.Id}>
        <div title={donation.FinalAmount + ' ' + donation.FinalCurrency}><Money amount={donation.DonorAmount} currency={donation.DonorCurrency} /></div>
        <div>{donation.Created}</div>
    </li>
}

export default function DonationsList ({
    donations
} : DonationsListProps) {
    const children = donations.map(DonationListItem)
    return <ul className={"donations-list"}>
        {!donations.length && <li>No donations.</li>}
        {donations.length && children}
    </ul>
}