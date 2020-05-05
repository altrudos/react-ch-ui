import React from "react"
import {Drive} from "model/drive";
import Link from "next/link";
import Money from "components/money";
import DriveNumDonations from "modules/drives/drive-num-donations"
import SourceEmbed from "modules/sources/source-embed";
import "./drives-list.less"
import ElapsedTime from "components/date/elapsed-time";

export type DrivesListProps = {
    drives : Drive[]
}

export function DriveListItem (drive : Drive) {
    return <li key={drive.Uri} className={"drive " + drive.SourceType}>
        <Link href="/d/[uri]" as={`/d/${drive.Uri}`}>
            <a href={"/d/"+drive.Uri}>
                <div className={"drive-raised"}>
                    <Money amount={drive.TopAmount} currency={"USD"}/>
                </div>
                <div className={"drive-meta"}>
                    <DriveNumDonations num={drive.TopNumDonations} />
                </div>
                <div className={"source-preview-contiainer"}>
                    <SourceEmbed source={drive.Source} link={false}/>
                </div>
            </a>
        </Link>
    </li>
}

export default function DrivesList(
    {
        drives
    } : DrivesListProps
) {

    return <ul className={"drives-list"}>
        {!drives.length && <li className={"empty-message"}>No drives.</li>}
        {drives.length && drives.map(DriveListItem)}
    </ul>
}