import React, {useEffect, useState} from 'react'
import {AsyncState} from "components/async"
import {Charity} from "model/charity";
import CharityApi from "api/charities";
import Select from "components/form/select"
import useAsync from "../../hooks/use-async"

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
        name,
        value,
        setValue,
        label,
    } : CharitySelectorProps
) {

    const {
        status,
        runAsync,
    } = useAsync(AsyncState.Available)

    const [charities, setCharities] = useState<Charity[]>([])

    useEffect(()=>{
        runAsync(loadCharities, {
            AvailableMsg: '',
            ThrowError: false,
            AvailableAfterError: true
        })

        //TODO: we may want to change this to run each time
        // on search, for example.
    }, [])

    async function loadCharities() {
        const charities = await CharityApi.all()
        setValue(charities.Data[0].Id)
        setCharities(charities.Data)
    }

    let options = status == AsyncState.Available ? charities.map(c => ({
        value: c.Id,
        label: c.Name,
    })) : [{
        value: '627e0410-c75d-48c8-b41f-6318d04f1e65',
        label: 'loading'
    }]

    return <Select label={label} name={name} setValue={setValue} value={value} options={options} />
}