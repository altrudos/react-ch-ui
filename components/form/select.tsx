import cx from "util/cx";

export type SelectOption = {
    label?: string
    value: string | number
}

export type SelectProps = {
    className?: string
    inline?: boolean // whether or not the label is inline
    type?: string

    name: string
    label?: string | React.Component
    value: string
    setValue: (string) => void | Promise<void>

    options: SelectOption []
}

export default function Select({
    options,
    className,
    label,
    inline,
    name,
    value,
    setValue
} : SelectProps) {
    return (
        <div className={cx("column", className, {inline})}>
            <div className="field">
                {!!label && (
                    <label className="label">{label}</label>
                )}
                <div className="select">
                    <select
                        value={value}
                        onChange={ e => setValue(e.target.value) }>
                        {options.map(o => <option value={o.value} key={o.value}>{o.label}</option>)}
                    </select>
                </div>
            </div>
        </div>
    )
}