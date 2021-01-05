import Api, {Paged} from "./api"
import {Drive, NewDrive, DriveInfo} from "../model/drive"
import {trimSourceUrl, Types} from "model/source"
import {parseError} from "util/error";
import {SubmittedDonation} from "model/donation";
import {transformDonation} from "api/donations";

export type NewDriveResponse = {
    Drive: Drive,
    DonateLink: string
}

export type NewDonationResponse = {
    Drive: Drive,
    DonateLink: string
}

export enum DriveTopRange {
    Week,
    Day,
    Month
}


// Some of the server data is inconsistent
export function transformMeta (meta : any) : object {
    const m = {}
    Object.keys(meta).forEach((key) => {
        m[key.toLowerCase()] = meta[key]
    })
    return m
}


export function transformDrive (drive : Drive | any) : Drive {
    if (!drive.Source) {
        drive.Source = {
            Url: drive.SourceUrl,
            Meta: transformMeta(drive.SourceMeta),
            Key: drive.SourceKey,
            Type: drive.SourceType
        }
    }
    return drive
}

// Some things we want the title to be different for the <title> than from the title
// we use for the textarea that they can copy their message from
export function getDriveShareTitle (drive: Drive) {
    const meta = transformMeta(drive.Source.Meta)
    switch (drive.SourceType) {
        case Types.REDDIT_POST:
            return `${meta['author']}'s post in /r/${meta['subreddit']}`
         default:
            return getDriveTitle(drive)
    }
}

export function getDriveTitle (drive : Drive) : string {
    const meta = transformMeta(drive.Source.Meta)
    switch (drive.SourceType) {
        case Types.REDDIT_COMMENT:
            return `${meta['author']}'s comment in /r/${meta['subreddit']}`
            break
        case Types.REDDIT_POST:
            return `${meta['title']} - ${meta['author']} - /r/${meta['subreddit']}`
            break
        default:
            const trimmed = trimSourceUrl(drive.SourceUrl)
            // This is just a very simplistic check to see if this drive is for the domain
            // or for a page on that domain
            if (trimmed.split("/").length >= 2 || trimmed.indexOf("?") != -1) {
                return `Page at ${trimmed}`
            }
            return `${trimmed}`
    }
}

const DriveApi = {
    async all () : Promise<Paged<Drive>> {
        type DrivesResponse = {
            Drives: Paged<Drive>
        }
        const resp = await Api.get<DrivesResponse>("/drives")
        resp.data.Drives.Data = resp.data.Drives.Data.map(transformDrive)
        return resp.data.Drives
    },
    async top (range : DriveTopRange) : Promise<Drive[]> {
        type DrivesResponse = {
            Drives: Drive[]
        }
        const resp = await Api.get<DrivesResponse>("/drives/top/" + DriveTopRange[range])
        return resp.data.Drives.map(transformDrive)
    },
    async one(id: string) : Promise<Drive> {
        type DriveResponse = {
            Drive: Drive
        }
        const resp = await Api.get<DriveResponse>("/drive/" + id)
        return transformDrive(resp.data.Drive)
    },
    async info(uri: string) : Promise<DriveInfo> {
        let resp
        try {
            resp = await Api.get<DriveInfo>("/drive/" + uri)
        } catch (ex) {
            throw parseError(ex)
        }
        resp.data.Drive = transformDrive(resp.data.Drive)
        resp.data.TopDonations = transformDonation(resp.data.TopDonations)
        resp.data.RecentDonations = transformDonation(resp.data.RecentDonations)
        return resp.data
    },
    async create(d : NewDrive) : Promise<NewDriveResponse> {
        const resp = await Api.post<NewDriveResponse>("/drive", d)
        return resp.data
    },
    async createDonation(driveId : string, donation : SubmittedDonation) : Promise<NewDonationResponse> {
        const resp = await Api.post<NewDonationResponse>("/drive/"+driveId+"/donate", {
            SubmittedDonation: donation
        })
        return resp.data
    }
}
export default DriveApi
