import {Drive} from "model/drive";

export type Donation = {
    Id: string
    Created: Date,
    DonorAmount: number,
    DonorCurrency: string,
    FinalAmount: number,
    FinalCurrency: string,
    Drive?: Drive
}

export type SubmittedDonation = {
    Amount: string,
    Currency: string,
    CharityId: string,
}