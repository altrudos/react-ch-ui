import "./loading.less"
import React, {HTMLAttributes} from 'react'
import DivFactory from "../div-factory"
import Icon from "../icon"
import cx from "../../util/cx"

export const LoadingPage = DivFactory("loading-page")
export const LoadingSection = DivFactory("loading-section")

export function LoadingIcon(
  {
    className,
    ...rest
  } : HTMLAttributes<HTMLSpanElement>
) {
  return (
    <Icon suffix="spin" family="fa" className={cx("fa-circle-notch", className)} {...rest} />
  )
}