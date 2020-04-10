import Api, {Paged} from "./api"
import {Drive, NewDrive, DriveInfo} from "../model/drive"
import {parseError} from "util/error";

export type NewDriveResponse = {
    Drive: Drive,
    DonateLink: string
}

export enum DriveTopRange {
    Week,
    Day,
    Month
}


const DriveApi = {
    async all () : Promise<Paged<Drive>> {
        type DrivesResponse = {
            Drives: Paged<Drive>
        }
        const resp = await Api.get<DrivesResponse>("/drives")
        return resp.data.Drives
    },
    async top (range : DriveTopRange) : Promise<Drive[]> {
        type DrivesResponse = {
            Drives: Drive[]
        }
        const resp = await Api.get<DrivesResponse>("/drives/top/" + DriveTopRange[range])
        return resp.data.Drives
    },
    async one(id: string) : Promise<Drive> {
        type DriveResponse = {
            Drive: Drive
        }
        const resp = await Api.get<DriveResponse>("/drive/" + id)
        return resp.data.Drive
    },
    async info(uri: string) : Promise<any> {
        let resp
        try {
            resp = await Api.get<any>("/drive/" + uri)
        } catch (ex) {
            console.log('ex', ex)
            throw parseError(ex)
        }
        return resp.data
    },
    async create(d : NewDrive) : Promise<NewDriveResponse> {
        const resp = await Api.post<NewDriveResponse>("/drive", d)
        return resp.data
    }
}
export default DriveApi