import Api, {Paged} from "./api"
import {Drive, NewDrive, DriveInfo} from "../model/drive"
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

export function transformDrive (drive) : Drive {
    if (!drive.Source) {
        drive.Source = {
            Url: drive.SourceUrl,
            Meta: drive.SourceMeta,
            Key: drive.SourceKey,
            Type: drive.SourceType
        }
    }
    return drive
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