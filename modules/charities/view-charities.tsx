import React, {useEffect, useState} from 'react'
import useAsync from "../../hooks/use-async"
import {AsyncState} from "../../components/async"
import {LoadingIcon} from "../../components/loading"
import {Charity} from "../../model/charity"
import {FullScreenCentered} from "../../components/layout/container"
import Icon from "../../components/icon"
import CharityApi from "../../api/charities"
import {Panel} from "../../components/layout/row"

export default function CharitiesView() {

  const [charities, setCharities] = useState<Charity[]>([]);
  const {
    status,
    errMsg,
    runAsync
  } = useAsync(AsyncState.Loading)

  useEffect(()=>{
    runAsync(loadCharities, {
      ThrowError: false,
      AvailableAfterError: false,
      AvailableMsg: "",
    })
  }, [])

  async function loadCharities() {
    const charities = await CharityApi.all()
    setCharities(charities.Data)
  }

  switch(status) {
    case AsyncState.Loading:
      return (
        <FullScreenCentered>
          <LoadingIcon className="fa-8x"/>
          <div>...Loading...</div>
        </FullScreenCentered>
      )
    case AsyncState.Error:
      return (
        <FullScreenCentered className="bg-danger color-danger">
          <Icon suffix="times" family="fa" className="fa-8x mb-4"/>
          <div>{errMsg || "Oops! There's been an error."}</div>
        </FullScreenCentered>
      )
  }

  return (
    <Panel>
      <Panel.Header>
        Charities
      </Panel.Header>
      <Panel.Body>
        <ul>
          {
            charities.map( ch => (
              <li>{ ch.Name }</li>
            ))
          }
        </ul>
      </Panel.Body>
    </Panel>
  )

}