import React from 'react'
import NewDriveForm from "modules/drives/new-drive-form";
import DriveApi, {DriveTopRange} from "api/drives"
import DonationApi from "api/donations"
import {Drive} from "model/drive"
import {Donation} from "model/donation"
import DrivesList from "modules/drives/drives-list";
import DonationsList from "modules/donations/donations-list";

export type HomePageInfo = {
    TopDrives: Drive[],
    RecentDonations: Donation[]
}

export default function HomePage ({data}) {
    return (
    <div className="fullscreen">
        <div className={"new-drive-container"}>
            <NewDriveForm/>
        </div>
        <div className={"row"}>
            <div className={"col-md-6 col-sm-12"}>
                <h6>Weekly Top Drives</h6>
                <DrivesList drives={data.TopDrives}/>
            </div>
            <div className={"col-md-6 col-sm-12"}>
                <h6>Recent Donations</h6>
                <DonationsList donations={data.RecentDonations} showDrive={true}/>
            </div>
        </div>
    </div>
  )
}


export async function getServerSideProps (context) {
    let data : HomePageInfo = {
        TopDrives: [],
        RecentDonations: []
    }

    try {
        data.TopDrives = await DriveApi.top(DriveTopRange.Week)
    } catch (ex) {
        console.log('ex', ex)
    }

    try {
        data.RecentDonations = await DonationApi.recent()
    } catch (ex) {
        console.log('ex', ex)
    }

    return {
        props: {
            data,
        }
    }
}