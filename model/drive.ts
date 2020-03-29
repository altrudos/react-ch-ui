
export type Drive = {
  Id: string
  Amount: number,
  Created: string | Date,
  Source?: string,
  SourceUrl: string,
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