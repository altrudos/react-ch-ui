import React, {useEffect, useState} from 'react'

/// Elapsed time component is used to show the time that has elapsed since the provided time.
/// If the time provided is in the future, it will just show the future time. Otherwise, if
/// it is within 7 days, it will show a human readable elapsed date format.
/// If it is more than 7 days old, it will also just show the provided tiem.
export default function ElapsedTime(
  {
    time
  } : {
    time: Date
  }
) {

  const date = new Date(time)
  const [seconds, setSeconds] = useState<number>(elapsedTimeSecs(date));

  useEffect(()=>{
    const it = setInterval(()=>{
      setSeconds(elapsedTimeSecs(time))
    }, 100)
    return ()=>{
      clearInterval(it)
    }
  }, [])

  const formatted = (seconds > 0 && seconds < 60 * 24 * 7)? formatSeconds(seconds) : date.toLocaleDateString('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })

  return (
    <span title={ date.toISOString() }>{ formatted }</span>
  )
}

const units = ['s', 'm', 'h', 'd']

export function formatSeconds(secs : number ) : string {
  secs = Math.round(secs)

  if (secs < 0 ) return ""

  const tm = [];
  tm.push( secs % 60 )

  while(true){
    secs = Math.floor(secs/60)
    if (secs < 1 ) break

    tm.push(secs % 60)
  }

  if (tm.length == 1) {
    return tm[0] + "s ago"
  }
  const l = tm.length-1

  let str = tm[l] + units[l]
  /*if( tm[l-1] > 0 ){
    str += " " + tm[l-1] + units[l-1]
  }*/
  return str + " ago"
}

export function elapsedTimeSecs(time: Date) : number {
  const n = new Date().getTime()
  return Math.round(n - new Date(time).getTime())/1000
}