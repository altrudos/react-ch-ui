import React from 'react'
import NewDriveForm from "modules/drives/new-drive-form";
import DriveApi, {DriveTopRange} from "api/drives"
import DonationApi from "api/donations"
import {Drive} from "model/drive"
import {Donation} from "model/donation"
import DrivesList from "modules/drives/drives-list";
import DonationsList from "modules/donations/donations-list";
import HeroHeader from "components/hero-header"
import "./css/index.less"
import Head from 'next/head'


export type HomePageInfo = {
    TopDrives: Drive[],
    RecentDonations: Donation[]
}

export default function HomePage ({data}) {
    return (
    <div className="">
        <Head>
            <title>Donate to charity to show you like something - Altrudos</title>
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
                key="viewport"
            />
            <meta
                name="descrkption"
                content="Show your love for online content by giving money to charity. Give kudos to reddit comments, YouTube videos, tweets, Twitch clips, and more."
                key="description"
            />
        </Head>

        <section className="section">
            <div className={"container new-drive-container"}>
                <div className="columns is-desktop">
                    <div className="column is-half-desktop m-auto">
                        <div className={"hero-header-container"}>
                            <HeroHeader />
                        </div>
                    </div>
                    <div className="column is-half-desktop">
                        <NewDriveForm/>
                    </div>
                </div>
            </div>
        </section>

        <div className={"container"}>
            <div className="columns">
                <div className={"column is-6"}>
                    <h6>Weekly Top Drives</h6>
                    <DrivesList drives={data.TopDrives}/>
                </div>
                <div className={"column is-6"}>
                    <h6>Recent Donations</h6>
                    <DonationsList donations={data.RecentDonations} showDrive={true}/>
                </div>
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