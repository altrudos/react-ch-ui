import React from "react"
import {Donation} from "model/donation";
import Money from "components/money"
import Link from "next/link"
import "./donations-list.less"
import ElapsedTime from "components/date/elapsed-time";
import SourceEmbed from "modules/sources/source-embed";

export type DonationsListProps = {
    donations: Donation[]
    showDrive?: boolean
}

export function DonationListItem (donation : Donation, showDrive : boolean) {
    let driveLink = null
    if (showDrive) {
        const drive = donation.Drive

        let driveInner = <span>{donation.Drive.Uri}</span>

        if (donation.Drive.Source) {
            driveInner = <SourceEmbed source={drive.Source} link={false} />
        }

        driveLink = <Link href="/d/[uri]" as={`/d/${drive.Uri}`}>
            <a href={"/d/" + drive.Uri}>
                {driveInner}
            </a>
        </Link>
    }
    let name = <span className={"donor-name anonymous"}>Anon</span>
    if (donation.DonorName) {
        name = <span className={"donor-name"}>{donation.DonorName}</span>
    }
    return <li key={donation.Id}>
        <div className={"top-link"}>
            <Money amount={donation.DonorAmount} currency={donation.DonorCurrency}  title={donation.FinalAmount + ' ' + donation.FinalCurrency}/>
            to
            <span className={"charity-name"} title={donation.CharityDescription}>{donation.CharityName}</span>
        </div>
        <div className={"bottom-lin"}><ElapsedTime time={donation.Created} /> by {name}</div>
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