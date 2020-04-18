
export type Charity = {
  Id: string
  CharityNumber: string,
  CountryCode: string,
  Description: string
  FeatureScore: number
  JustGivingCharityId: number
  Name: string
  LogoUrl: string
  Subtext: string
  Summary: string

  MostRecentDonorAmount: number,
  MostRecentUSDAmount: number,
  MostRecentTime: string | Date,
  USDAmountTotal: number,
  DonorAmountTotal: number,
  DonorAmountMax: number,
}