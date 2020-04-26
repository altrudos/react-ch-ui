import {Drive} from "model/drive";

export type Donation = {
    Id: string
    CreatedAt: Date,
    CharityDescription: string,
    CharityId: string,
    CharityName: string,
    DonorAmount: number,
    DonorName: string,
    DonorCurrency: string,
    FinalAmount: number,
    FinalCurrency: string,
    Drive?: Drive
}

export type SubmittedDonation = {
    Amount: string,
    Currency: string,
    CharityId: string,
    DonorName: string
}