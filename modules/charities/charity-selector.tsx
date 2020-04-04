import React from 'react'
import cx from "../../util/cx"

export type CharitySelectorProps = {
    className?: string
    inline?: boolean // whether or not the label is inline

    name: string
    label?: string | React.Component
    placeholder?: string
    value: string
    setValue: (string) => void | Promise<void>
}

export default function CharitySelector(
    {
        className,
        inline,

        name,
        label,
        value,
        setValue,
    } : CharitySelectorProps
) {

    const options = [{
        Id: "4389204832948032",
        Name: "American Red Cross",
    },{
        Id: "34tu4nuewtuee",
        Name: "Dunder Mifflin Fun Run",
    }]
    return (
        <div className={cx("form-group", className, {inline})}>
            {!!label && (
                <label htmlFor={name}>{label}</label>
            )}
            <div className="form-input">
                <select
                    value={value}
                    onChange={ e => setValue(e.target.value) }>
                    {options.map(o => <option value={o.Id} key={o.Id}>{o.Name}</option>)}
                </select>
            </div>
        </div>
    )
}