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
    <div className={cx("form-group", className, {inline})}>
      {!!label && (
        <label htmlFor={name}>{label}</label>
      )}
      <div className="form-input">
        <input
          placeholder={ placeholder || name }
          type={type}
          value={value}
          onChange={ e => setValue(e.target.value) }
        />
        {children}
      </div>
    </div>
  )
}