import React from "react"
import {Drive} from "model/drive";
import Link from "next/link";
import Money from "components/money";

export type DrivesListProps = {
    drives : Drive[]
}

export function DriveListItem (drive : Drive) {
    return <li key={drive.Uri} className={"drive " + drive.SourceType}>
        <Link href="/d/[uri]" as={`/d/${drive.Uri}`}>
            <a href={"/d/"+drive.Uri}>
                <Money amount={drive.TopAmount} currency={"USD"}/>
                {/*TODO: Get a proper currency amount somehow*/}
            </a>
        </Link>
        <div>
            <a href={drive.SourceUrl}>{drive.SourceUrl}</a>
        </div>
    </li>
}

export default function DrivesList(
    {
        drives
    } : DrivesListProps
) {

    return <ul className={"drives-list"}>
        {drives.length && drives.map(DriveListItem)}
        {!drives.length && <li className={"empty-message"}>No drives</li>}
    </ul>
}