import React, {useEffect, useState} from 'react'
import DriveApi, {getDriveTitle} from "api/drives";
import {DriveInfo} from "model/drive";
import {parseError} from "util/error";
import Errors from "components/errors/errors";
import DonationsList from "modules/donations/donations-list"
import DriveDonateForm from "modules/drives/drive-donate-form"
import SourceEmbed from "modules/sources/source-embed";
import Link from "next/link"
import Money from "components/money";
import "./css/drive.less"
import ElapsedTime from "components/date/elapsed-time";
import Head from "node_modules/next/dist/next-server/lib/head";

export type DrivePageProps = {
  data: DriveInfo,
  error: any
}

export default function DrivePage(
    {
      data,
      error,
    }: DrivePageProps
) {
  if (error) {
    return <Errors errors={[error]}/>
  }
  if (!data) {
    return <Errors errors={["Can't find drive"]}/>
  }
  return <_DrivePage initialData={data}/>
}

export function _DrivePage(
    {
      initialData
    }: {
      initialData: DriveInfo
    }
) {
  const [data, setData] = useState<DriveInfo>(initialData)

  useEffect(() => {
    const it = setInterval(_update, 5000)
    return () => clearInterval(it)
  }, [])

  function _update () {
      DriveApi.info(initialData.Drive.Uri).then((data) => {
        setData(data)
      })
  }

  const drive = data.Drive
  const title = getDriveTitle(drive)
  console.log('title', title)

  return (
    <div className="fullscreen" id={"drive-page"}>
      <Head>
          <title>{title} - Charity Drive - Altrudos</title>
          <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
              key="viewport"
          />
          <meta
            name="descrkption"
            content={`Donate to charity to show appreciation for ${title}`}
            key="description"
          />
      </Head>
      <div className={"container back-container"}>
        <Link href="/">
          <a>Back home</a>
        </Link>
      </div>
      <div className={"container header"}>
        <div className={"inner"}>
          <div className={"amount-raised"}><Money amount={drive.USDAmountTotal} currency={"USD"}/> raised</div>
          <SourceEmbed source={drive.Source} link={true}/>
          <div className={"meta"}>{drive.NumDonations || 0} donations since <ElapsedTime time={drive.Created} /></div>
        </div>
      </div>
      <div className={"donate-form"}>
        <div className={"container"}>
          <DriveDonateForm drive={drive}/>
        </div>
      </div>
      <div className={"leaderboards"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-md-6 col-sm-12"}>
              <h3>Top Donations</h3>
              <DonationsList donations={data.TopDonations}/>
            </div>
            <div className={"col-md-6 col-sm-12"}>
              <h3>Recent Donations</h3>
              <DonationsList donations={data.RecentDonations}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps (context) {
  let data: DriveInfo = {
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