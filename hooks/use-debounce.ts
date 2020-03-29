import {useRef} from "react"

export function useDebounce(fn : Function, timeout = 200){

  const tm = useRef(null)

  function timed(...args){
    return new Promise( (res, rej)=>{
      if( tm.current ) {
        clearTimeout(tm.current)
      }
      tm.current = setTimeout( async ()=>{
        try{
          res(await fn(...args))
        }catch(err){
          rej(err)
        }
      }, timeout)
    } )
  }

  return timed
}