import {AsyncState} from "../components/async"
import {useRef, useState} from "react"
import {parseError} from "../util/error"

export type StatusItem = {
  Status: AsyncState,
  Message: string,
}

export type RunAsyncOptions = {
  AvailableMsg: string
  AvailableAfterError: boolean
  ThrowError: boolean
}

const DefaultOptions = {
  AvailableMsg: "",
  AvailableAfterError: true,
  ThrowError: false
}

export type Async = {
  status: AsyncState,
  setStatus: (status: AsyncState, err?: string) => void,
  errMsg: string,
  runAsync: (fn: () => Promise<void>, options?: RunAsyncOptions) => Promise<void>
}

export default function useAsync(
  defaultState = AsyncState.Available,
  duration = 300
): Async {

  // Stores whether it is currently already running or not. If it is running that means we are adding to
  // the end of the queue, which also means that we should be running any side effects as it will run itself.
  const isRunning = useRef(false)

  // This is the handle for the interval while it is running. It will be cleared when there are no more
  // items left in the queue.
  const it = useRef(null)

  // Queue will store future statuses that should be shown.
  const queue = useRef<StatusItem[]>([])

  // Current status and message to show (if any)
  const [status, setStatus] = useState(defaultState)
  const [errMsg, setErrMsg] = useState("")

  // Next is the iterative process. It will continue until the queue is cleared, where upon it needs to set the
  // statuses `isRunning` and `it` properly to reset the state.
  function next() {
    if (queue.current.length == 0) {
      isRunning.current = false
      clearInterval(it.current)
      it.current = null
      return
    }
    const curr = queue.current.shift()
    setStatus(curr.Status)
    setErrMsg(curr.Message)
  }

  function _setStatus(status: AsyncState, err: string = "") {
    queue.current.push({
      Status: status,
      Message: err,
    })
    if (isRunning.current) {
      return
    }

    isRunning.current = true
    it.current = setInterval(next, duration)
  }

  return {
    status,
    setStatus: _setStatus,
    errMsg,
    runAsync: async (fn: () => Promise<void>, options: RunAsyncOptions = {...DefaultOptions}) => {
      _setStatus(AsyncState.Loading)
      try {
        await fn()
        _setStatus(AsyncState.Success)
        _setStatus(AsyncState.Available, options.AvailableMsg)
      } catch (err) {
        console.log('err', err, {...err})
        _setStatus(AsyncState.Error, parseError(err))
        if (options.AvailableAfterError) _setStatus(AsyncState.Available, options.AvailableMsg)
        if (options.ThrowError) throw err
      }
    }
  }
}