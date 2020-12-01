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

  return (
    <div id={"drive-page"}>
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
          <a>← Back home</a>
        </Link>
      </div>
      <section className="section">
        <div className={"container"}>
          <div className={"columns is-desktop"}>
            <div className={"column is-half-desktop donate-form"}>
              <div className={"box"}>
                <DriveDonateForm drive={drive}/>
              </div>
            </div>
            <div className={"column is-half-desktop drive-info"}>
              <div className={"inner"}>
                <SourceEmbed source={drive.Source} link={true}/>
                <div className={"amount-raised"}><Money amount={drive.USDAmountTotal} currency={"USD"}/> raised</div>
                <div className={"meta"}>{drive.NumDonations || 0} donation{drive.NumDonations == 1 ? '': 's'} since <ElapsedTime time={drive.CreatedAt} /></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"section leaderboard"}>
        <div className={"container"}>
          <div className="columns is-desktop">
            <div className={"column is-half-desktop"}>
              <h3>Top Donations</h3>
              <DonationsList donations={data.TopDonations} drive={data.Drive} />
            </div>
            <div className={"column is-half-desktop"}>
              <h3>Recent Donations</h3>
              <DonationsList donations={data.RecentDonations} drive={data.Drive} />
            </div>
          </div>
        </div>
      </section>
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
