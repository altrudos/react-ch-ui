import React, {useState} from 'react'
import cx from "../../util/cx"
import {AsyncState} from "components/async"
import {Charity} from "model/charity";
import CharityApi from "api/charities";

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
    const [state, setState] = useState<AsyncState>(AsyncState.Available)
    const [charities, setCharities] = useState<Charity[]>(null)

    if (state == AsyncState.Available) {
        setState(AsyncState.Loading)
        try {
            /*const resp =  CharityApi.all()
            setCharities(resp.Data)
            setState(AsyncState.Success)*/
        } catch (ex) {
            setState(AsyncState.Error)
            throw ex
        }
    }

    let options = [{
        value: '627e0410-c75d-48c8-b41f-6318d04f1e65',
        label: 'loadingy'
    }]
    if (state == AsyncState.Success) {
        options = charities.map(c =>{
            return {
                value: c.Id,
                label: c.Name,
            }
        })
    } else if (state == AsyncState.Available) {
        CharityApi.all().then((c) => {
            setCharities(c.Data)
            setState(AsyncState.Success)
            setValue(c.Data[0].Id)
        }).catch((ex) => {
            setState(AsyncState.Error)
            console.log('ex', ex)
        })
    }

    return (
        <div className={cx("form-group", className, {inline})}>
            {!!label && (
                <label htmlFor={name}>{label}</label>
            )}
            <div className="form-input">
                <select
                    value={value}
                    onChange={ e => setValue(e.target.value) }>
                    {options.map(o => <option value={o.value} key={o.value}>{o.label}</option>)}
                </select>
            </div>
        </div>
    )
}