
export type Charity = {
  Id: string
  Description: string
  JustGivingCharityId: number
  Name: string
  LogoUrl: string
  Summary: string

  MostRecentDonorAmount: number,
  MostRecentUSDAmount: number,
  MostRecentTime: string | Date,
  USDAmountTotal: number,
  DonorAmountTotal: number,
  DonorAmountMax: number,
}