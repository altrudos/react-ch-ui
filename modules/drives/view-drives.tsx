import React, {useEffect, useState} from 'react'
import useAsync from "../../hooks/use-async"
import {AsyncState} from "../../components/async"
import {LoadingIcon} from "../../components/loading"
import {Drive} from "../../model/drive"
import {FullScreenCentered} from "../../components/layout/container"
import Icon from "../../components/icon"
import DriveApi from "../../api/drives"
import {Panel} from "../../components/layout/row"
import Link from 'next/link'

export default function DrivesView() {

    const [drives, setDrives] = useState<Drive[]>([]);
    const {
        status,
        errMsg,
        runAsync
    } = useAsync(AsyncState.Loading)

    useEffect(()=>{
        runAsync(loadDrives, {
            ThrowError: false,
            AvailableAfterError: false,
            AvailableMsg: "",
        })
    }, [])

    async function loadDrives() {
        const drives = await DriveApi.all()
        setDrives(drives.Data)
    }

    switch(status) {
        case AsyncState.Loading:
            return (
                <FullScreenCentered>
                    <LoadingIcon className="fa-8x"/>
                    <div>...Loading...</div>
                </FullScreenCentered>
            )
        case AsyncState.Error:
            return (
                <FullScreenCentered className="bg-danger color-danger">
                    <Icon suffix="times" family="fa" className="fa-8x mb-4"/>
                    <div>{errMsg || "Oops! There's been an error."}</div>
                </FullScreenCentered>
            )
    }

    return (
        <Panel>
            <Panel.Header>
                Drives
            </Panel.Header>
            <Panel.Body>
                <ul>
                    {
                        drives.map( d => (
                            <li key={d.Id}>
                                <Link href={"/"+d.Uri}>
                                    <a >{d.Uri}: {d.SourceUrl} ({d.SourceType})</a>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </Panel.Body>
        </Panel>
    )

}