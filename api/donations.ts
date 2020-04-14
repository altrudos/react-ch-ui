import Api from "./api"
import {Donation} from "../model/donation"
import {transformDrive} from "api/drives"

export function transformDonation (donation) : Donation {
    if (donation.Drive) {
        donation.Drive = transformDrive(donation.Drive)
    }
    return donation
}

const DonationApi = {
    async recent () : Promise<Donation[]> {
        type DonationsResponse = {
            Donations: Donation[]
        }
        const resp = await Api.get<DonationsResponse>("/donations/recent")
        return resp.data.Donations.map(transformDonation)
    },
}
export default DonationApi