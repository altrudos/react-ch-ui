import React from "react"
import {Donation} from "model/donation";
import Money from "components/money"
import Link from "next/link"
import "./donations-list.less"
import ElapsedTime from "components/date/elapsed-time";
import SourceEmbed from "modules/sources/source-embed";
import DriveLink from "modules/drives/drive-link";
import {Drive} from "../../model/drive";

export type DonationsListProps = {
    donations: Donation[]
    drive?: Drive
    showDrive?: boolean
}

export function DonationListItem (donation : Donation, showDrive : boolean) {
    let driveLink = null
    if (showDrive) {
        const drive = donation.Drive
        driveLink = DriveLink(drive)
    }
    let name = <span className={"donor-name anonymous"}>Anon</span>
    if (donation.DonorName) {
        name = <span className={"donor-name"}>{donation.DonorName}</span>
    }

    const moneyLink = DriveLink(donation.Drive, <React.Fragment><Money amount={donation.DonorAmount} currency={donation.DonorCurrency}  title={donation.FinalAmount + ' ' + donation.FinalCurrency}/>
        to
        <span className={"charity-name"} title={donation.CharityDescription}>{donation.CharityName}</span></React.Fragment>)
    return <li key={donation.Id}>
        <div className={"top-link"}>
            {moneyLink}
        </div>
        {showDrive && driveLink}
        <div className={"bottom-line"}><ElapsedTime time={donation.CreatedAt} /> by {name}</div>
    </li>
}

export default function DonationsList ({
    donations,
    showDrive,
    drive
} : DonationsListProps) {
    const children = donations.map((donation) => {
        if (drive && !donation.Drive) {
            donation.Drive = drive
        }
        return DonationListItem(donation, showDrive)
    })
    return <ul className={"donations-list"}>
        {!donations.length && <li>No donations.</li>}
        {donations.length && children}
    </ul>
}
