import Api, {Paged} from "./api"
import {Drive, NewDrive} from "../model/drive"

export type NewDriveResponse = {
    Drive: Drive,
    DonateLink: string
}

const DriveApi = {
    async all () : Promise<Paged<Drive>> {
        type DrivesResponse = {
            Drives: Paged<Drive>
        }
        const resp = await Api.get<DrivesResponse>("/drives")
        return resp.data.Drives
    },
    async one(id: string) : Promise<Drive> {
        type DriveResponse = {
            Drive: Drive
        }
        const resp = await Api.get<DriveResponse>("/drive/" + id)
        return resp.data.Drive
    },
    async create(d : NewDrive) : Promise<NewDriveResponse> {
        const resp = await Api.post<NewDriveResponse>("/drive", d)
        return resp.data
    }
}
export default DriveApi