import React, {useEffect, useState} from 'react'
import NewDriveForm from "modules/drives/new-drive-form";
import DriveApi, {DriveTopRange} from "api/drives"
import {Drive} from "model/drive"
import {Donation} from "model/donation"
import Link from 'next/link'

export default function HomePage () {
    const [drives, setDrives] = useState<Drive[]>([])

    useEffect(() => {
        window['loaded'] = window['loaded'] || 0
        if (window['loaded'] > 0) {
            return
        }
        window['loaded']++
        DriveApi.top(DriveTopRange.Week).then((drives) => {
            console.log('drives.Data')
            setDrives(drives)
        })
    }, [])

    return (
    <div className="fullscreen">
        <div className={"new-drive-container"}>
            <NewDriveForm/>
        </div>
        <div className={"row"}>
            <div className={"col-md-6 col-sm-12"}>
                <h6>Weekly Top Drives</h6>
                <ul>
                {drives.map(d => <li key={d.Uri}>
                    <Link href="/d/[uri]" as={`/d/${d.Uri}`}>
                        <a>{d.Uri}</a>
                    </Link>
                </li>)}
                </ul>
            </div>
        </div>
    </div>
  )
}