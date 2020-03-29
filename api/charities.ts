import Api, {Paged} from "./api"
import {Charity} from "../model/charity"

const CharityApi = {
  async all () : Promise<Paged<Charity>> {
    type CharitiesResponse = {
      Charities: Paged<Charity>
    }
    const resp = await Api.get<CharitiesResponse>("/charities")
    return resp.data.Charities
  },
  async one(id: string) : Promise<Charity> {
    type CharityResponse = {
      Charity: Charity
    }
    const resp = await Api.get<CharityResponse>("/charity/" + id)
    return resp.data.Charity
  },
}
export default CharityApi