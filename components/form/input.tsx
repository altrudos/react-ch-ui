import "./input.less"
import React from 'react'
import cx from "../../util/cx"

export type InputProps = {
  className?: string
  inline?: boolean // whether or not the label is inline
  type?: string

  name: string
  label?: string | React.Component
  placeholder?: string
  value: string
  setValue: (string) => void | Promise<void>

  children?: any
}

export default function Input(
  {
    className,
    inline,
    type = "text",

    name,
    label,
    placeholder,
    value,
    setValue,

    children
  } : InputProps
) {

  return (
    <div className={cx("column", className, {inline})}>
      <div className="field">
        {!!label && (
          <label className="label">{label}</label>
        )}
        <input
          placeholder={ placeholder || name }
          type={type}
          value={value}
          className={"input"}
          onChange={ e => setValue(e.target.value) }
        />
        {children}
      </div>
    </div>
  )
}