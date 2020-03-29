import React, {HTMLAttributes, PropsWithChildren, Fragment} from 'react'
import Button from "./button"
import cx from "../../util/cx"
import {AsyncState} from "../async"
import Icon from "../icon"
import {LoadingIcon} from "../loading"

export type StatusButtonProps = HTMLAttributes<HTMLButtonElement> & {
  type?: string
  status: AsyncState
}

export default function StatusButton(
  {
    type,
    status,
    children,
    className,
    onClick,
    ...props
  }: PropsWithChildren<StatusButtonProps>
) {

  let child = children
  switch (status) {
    case AsyncState.Success:
      child = <Icon suffix="check" family="fa" />
      break
    case AsyncState.Loading:
      child = <LoadingIcon />
      break
    case AsyncState.Error:
      child = (
        <Fragment>
          <Icon suffix="times" family="fa" className="mr-2" /> Retry
        </Fragment>
      )
  }

  return (
    <Button
      className={cx(className, {
        "disabled": status === AsyncState.Loading,
        "btn-danger": status === AsyncState.Error,
        "btn-success": status === AsyncState.Success,
      })}

      onClick={ status === AsyncState.Available || status === AsyncState.Error? onClick : undefined }

      {...props}
    >
      {child}
    </Button>
  )

}