import React from "react"
import {Donation} from "model/donation";
import Money from "components/money"
import Link from "next/link"
import "./donations-list.less"
import ElapsedTime from "components/date/elapsed-time";

export type DonationsListProps = {
    donations: Donation[]
    showDrive?: boolean
}

export function DonationListItem (donation : Donation, showDrive : boolean) {
    let driveLink = null
    if (showDrive) {
        const drive = donation.Drive
        driveLink = <Link href="/d/[uri]" as={`/d/${drive.Uri}`}>
            <a href={"/d/" + drive.Uri}>{drive.SourceType}/{drive.SourceKey} {drive.Uri}</a>
        </Link>
    }
    return <li key={donation.Id}>
        <div className={"amount"} title={donation.FinalAmount + ' ' + donation.FinalCurrency}><Money amount={donation.DonorAmount} currency={donation.DonorCurrency} /></div>
        <div className={"date"}><ElapsedTime time={donation.Created} /></div>
        {showDrive && driveLink}
    </li>
}

export default function DonationsList ({
    donations,
    showDrive
} : DonationsListProps) {
    const children = donations.map((donation) => {
        return DonationListItem(donation, showDrive)
    })
    return <ul className={"donations-list"}>
        {!donations.length && <li>No donations.</li>}
        {donations.length && children}
    </ul>
}