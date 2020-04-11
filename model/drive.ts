import {Donation, SubmittedDonation} from "model/donation";
import {Source} from "model/source";

export type DriveInfo = {
  Drive : Drive,
  TopDonations: Donation[],
  RecentDonations: Donation[],
}

export type Drive = {
  Id: string
  Created: Date,
  Source?: Source,
  SourceUrl: string,
  SourceMeta?: object,
  SourceType: string,
  SourceKey: string,
  Uri: string,

  MostRecentDonorAmount: number,
  MostRecentUSDAmount: number,
  MostRecentTime: string | Date,
  USDAmountTotal: number,
  DonorAmountTotal: number,
  DonorAmountMax: number,

  TopAmount: number,
  NumDonations: number
}

export type NewDrive = {
  SourceUrl: string,
  SubmittedDonation: SubmittedDonation
}
