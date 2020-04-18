import Api, {Paged} from "./api"
import {Charity} from "../model/charity"

const CharityApi = {
  async search (query? : string) : Promise<Paged<Charity>> {
    type CharitiesResponse = {
      Charities: Paged<Charity>
    }
    const resp = await Api.get<CharitiesResponse>("/charities?limit=10&search="+(query||""))
    return resp.data.Charities
  },
}
export default CharityApi