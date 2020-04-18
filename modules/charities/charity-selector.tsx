import React, {useEffect, useState, useRef} from 'react'
import {AsyncState} from "components/async"
import {Charity} from "model/charity";
import CharityApi from "api/charities";
import useAsync from "../../hooks/use-async"
import cx from "../../util/cx"
import "./charity-selector.less"

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
    const [search, setSearch] = useState<string>("")
    const selectedIndex = charities.findIndex(c => c.Id == value)
    const searchTimeout = useRef(null)

    const searchRef = useRef(null)

    useEffect(()=>{
        runAsync(loadCharities, {
            AvailableMsg: '',
            ThrowError: false,
            AvailableAfterError: true
        })

        //TODO: we may want to change this to run each time
        // on search, for example.
    }, [])

    // This initial load will show the featured ones
    async function loadCharities() {
        const charities = await CharityApi.search()
        setValue(charities.Data[0].Id)
        setCharities(charities.Data)
    }

    async function searchCharities () {
        const charities = await CharityApi.search(searchRef.current)
        console.log('charities from search', charities.Data)
        setCharities(charities.Data)
    }

    let options = status == AsyncState.Available ? charities.map(c => ({
        value: c.Id,
        label: c.Name,
    })) : []

    function keyPress (e) {
        if (e.nativeEvent.keyCode == 40) {
            selectNext()
        } else if (e.nativeEvent.keyCode == 38) {
            selectPrevious()
        }
    }

    function selectIndex (index) {
        if (charities[index]) {
            setValue(charities[index].Id)
        }
    }

    function clickOption (e, charity : Charity) {
        setValue(charity.Id)
    }

    function selectNext () {
        let newIndex = selectedIndex + 1
        selectIndex(newIndex)
    }

    function selectPrevious () {
        let newIndex = selectedIndex - 1
        if (newIndex < 0) {
            setValue("")
            console.log('focus on the search input')
            return
        }
        selectIndex(newIndex)
    }

    function charityOption (charity : Charity) {
        const selected = charity.Id == value
        return <li key={charity.Id} className={cx("charity-option", (selected ? "selected" : ""))} onClick={(e) => clickOption(e, charity)}>
            <div className={"name"}>{charity.Name}</div>
            <div className={"description"}>{charity.Description}</div>
        </li>
    }

    async function changeSearch (e) {
        clearTimeout(searchTimeout.current)
        setSearch(e.target.value)
        searchRef.current = e.target.value

        searchTimeout.current = setTimeout(async () => {
            console.log('do the search async call')
            runAsync(searchCharities, {
                AvailableMsg: '',
                ThrowError: true,
                AvailableAfterError: true
            })
        }, 250)
    }


    return <div className={"form-group charity-selector-container"}>
        <label htmlFor={name}>{label}</label>

        <div className={"form-input"}>
            <input type={"text"}
                   value={search}
                   placeholder={"Search charities"}
                   onChange={changeSearch}
                   onKeyDown={keyPress}

            />
            <ol className={"charity-options"}>
                {!charities.length && <li className={"empty-message"}>Couldn't find anything</li>}
                {charities.map(charityOption)}
            </ol>
        </div>
    </div>
}