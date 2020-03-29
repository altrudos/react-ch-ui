
export type Charity = {
  Id: string
  Description: string
  JustGivingCharityId: number
  Name: string
  LogoUrl: string
  Summary: string

  MostRecentDonorAmount: number,
  MostRecentFinalAmount: number,
  MostRecentTime: string | Date,
  FinalAmountTotal: number,
  FinalAmountMax: number,
  DonorAmountTotal: number,
  DonorAmountMax: number,
}