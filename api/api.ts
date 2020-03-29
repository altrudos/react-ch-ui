import axios from 'axios'
export const baseURL = process.env.BASEURL
export default axios.create({baseURL, withCredentials: true})

export type Paged<T> = {
  Data: T[],
  Limit: number,
  Offset: number,
  Total: number,
}