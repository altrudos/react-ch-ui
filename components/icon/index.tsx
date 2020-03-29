import React, {HTMLAttributes} from 'react'
import cx from "../../util/cx"

export type IconProps = {
  suffix: string
  family: string
} & HTMLAttributes<HTMLSpanElement>

export default function Icon(
  {
    className,
    suffix,
    family,
    ...rest
  } : IconProps
) {
  return (
    <i
      className={cx(family, `${family}-${suffix}`, className)}
      {...rest}
    />
  )
}