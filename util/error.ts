import {AxiosError} from "axios"

export function parseError(err: Error | AxiosError) : string {
  if ('response' in err){
    if (!err.response || !err.response.data) {
      return "Network Error"
    }
    return err.response.data.Message
  }
  return err.message
}