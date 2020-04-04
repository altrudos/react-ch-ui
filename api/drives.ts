import Api, {Paged} from "./api"
import {Drive} from "../model/drive"

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
}
export default DriveApi