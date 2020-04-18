import Api, {Paged} from "./api"
import {Charity} from "../model/charity"

export function transformCharity (charity : Charity) : Charity {
  if (charity.Subtext) {
    charity.CharityNumber = charity.Subtext.replace("Registered charity No.", "")
  }
  return charity
}

export function sortCharities (c1 : Charity, c2 : Charity) : number {
  if (c1.FeatureScore > c2.FeatureScore) {
    return -1
  }

  if (c1.FeatureScore < c2.FeatureScore) {
    return 1
  }

  return 0
}

const CharityApi = {
  async search (query? : string) : Promise<Paged<Charity>> {
    type CharitiesResponse = {
      Charities: Paged<Charity>
    }
    const resp = await Api.get<CharitiesResponse>("/charities?limit=10&search="+(query||""))
    resp.data.Charities.Data = resp.data.Charities.Data.map(transformCharity)
    resp.data.Charities.Data.sort(sortCharities)
    return resp.data.Charities
  },
}
export default CharityApi