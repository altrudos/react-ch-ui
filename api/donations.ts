import Api, {Paged} from "./api"
import {Donation} from "../model/donation"

const DonationApi = {
    async recent () : Promise<Donation[]> {
        type DonationsResponse = {
            Donations: Donation[]
        }
        const resp = await Api.get<DonationsResponse>("/donations/recent")
        return resp.data.Donations
    },
}
export default DonationApi