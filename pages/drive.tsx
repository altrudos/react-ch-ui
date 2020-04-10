import React from 'react'
import DriveApi from "api/drives";
import {Drive, DriveInfo} from "model/drive";
import {parseError} from "util/error";
import Errors from "components/errors/errors";
import DonationsList from "modules/donations/donations-list"
import SourceEmbed from "modules/sources/source-embed";
import Link from "next/link"
export type DrivePageProps = {
    data : DriveInfo,
    error: any
}

export default function DrivePage({
    data,
    error
} : DrivePageProps)
{
    if (error) {
        return <Errors errors={[error]} />
    }
    if (!data) {
        return <Errors errors={["Can't find drive"]} />
    }
    const drive = data.Drive
    console.log('drive', drive)
    return (
        <div className="fullscreen">
            <div>
                <Link href="/">
                    <a>Back home</a>
                </Link>
            </div>
            <h1>Drive {drive.Uri}</h1>
            <SourceEmbed Url={drive.SourceUrl} Type={drive.SourceType} Meta={drive.SourceMeta} Key={drive.SourceKey}/>
            <div>
                <h3>Top Donations</h3>
                <DonationsList donations={data.TopDonations} />
            </div>
            <div>
                <h3>Recent Donations</h3>
                <DonationsList donations={data.RecentDonations} />
            </div>
        </div>

    )
}

export async function getServerSideProps (context) {
    let data : DriveInfo = {
        Drive: null,
        TopDonations: [],
        RecentDonations: []
    }
    let err = null
    try {
        data = await DriveApi.info(context.query.uri)
    } catch (ex) {
        err = parseError(ex)

    }

    return {
        props: {
            data,
            error: err
        }
    }
}