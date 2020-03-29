import {FormEvent} from "react"

export function applyPreventDefault(fn: (e?) => void ) : (e: FormEvent) => void {
  return function(e) {
    e.preventDefault()
    fn(e)
  }
}

export function applyStopPropagation(fn: (e?) => void ) : (e: FormEvent) => void {
  return function (e) {
    e.stopPropagation()
    fn(e)
  }
}