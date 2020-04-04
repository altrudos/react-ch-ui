export type Source = {

}


export type Drive = {
  Id: string
  Created: string | Date,
  Source?: Source,
  SourceUrl: string,
  SourceMeta?: object,
  SourceType: string,
  Uri: string,

  RedditCommentId?: number
  RedditUsername: string
  RedditSubreddit: string
  RedditMarkdown: string

  MostRecentDonorAmount: number,
  MostRecentFinalAmount: number,
  MostRecentTime: string | Date,
  FinalAmountTotal: number,
  FinalAmountMax: number,
  DonorAmountTotal: number,
  DonorAmountMax: number,
}

export type NewDrive = {
  Amount: string,
  SourceUrl: string,
  CharityId: string,
  Currency: string
}