import Api from "./api"
import {Donation} from "../model/donation"
import {transformDrive} from "api/drives"
import {Drive} from "../model/drive";

export function transformDonation (donation) : Donation {
    if (donation.Drive) {
        donation.Drive = transformDrive(donation.Drive)
    }
    return donation
}

type DonationResponse = {
    Donation: Donation
    Drive: Drive
}

type DonationsResponse = {
    Donations: Donation[]
}

const DonationApi = {
    async recent () : Promise<Donation[]> {

        const resp = await Api.get<DonationsResponse>("/donations/recent")
        return resp.data.Donations.map(transformDonation)
    },
    async getByRef (ref: string) : Promise<Donation> {
        const resp = await Api.get<DonationResponse>(`/donations/byref/${ref}`)
        resp.data.Donation.Drive = resp.data.Drive
        return transformDonation(resp.data.Donation)
    }
}
export default DonationApi
