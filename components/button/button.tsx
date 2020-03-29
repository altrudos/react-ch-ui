import "./button.less"
import React, {HTMLAttributes} from 'react'
import cx from "../../util/cx"

export default function Button(
  {
    className,
    children,
    ...rest
  } : HTMLAttributes<HTMLButtonElement>
){
  return (
    <button
      className={cx("btn", className)}
      {...rest}
    >
      {children}
    </button>
  )
}
