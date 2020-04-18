import React, {Fragment, useRef} from 'react'
import {Charity} from "model/charity";
import CharityApi from "api/charities";
import cx from "../../util/cx"
import AsyncSelect, {Option} from 'react-select/async'
import "./charity-selector.less"
import { css } from "emotion"

export type CharitySelectorProps = {
    className?: string
    inline?: boolean // whether or not the label is inline

    name: string
    label?: string | React.Component
    value: Charity
    setValue: (string) => void | Promise<void>
}

function CharityOption (props) {
    const {
        getStyles,
        innerRef,
        isDisabled,
        isFocused,
        isSelected,
        innerProps,
        data
    } = props

    const textInfo = <Fragment>
        <div className="charity-name">{data.Name} <span className={"charity-number"}>{data.CharityNumber}</span></div>
        <div className="charity-description">{data.Description}</div>
        <div className="charity-country">{data.CountryCode}</div>
    </Fragment>

    let inner

    if (data.LogoUrl) {
        inner = <Fragment>
            <div className={"charity-image-container"}>
                <img src={data.LogoUrl} />
            </div>
            <div className={"charity-info-container"}>
                {textInfo}
            </div>
        </Fragment>
    } else {
        inner = textInfo
    }

    return (
        <div
            ref={innerRef}
            className={cx(
                css(getStyles('option', props)),
                {
                    'option': true,
                    'charity-selector-option': true,
                    'option--is-disabled': isDisabled,
                    'option--is-focused': isFocused,
                    'option--is-selected': isSelected,
                    'has-image': data.LogoUrl
                },
                'global-search-option'
            )}
            {...innerProps}
        >
            {inner}
        </div>
    )
}

export default function CharitySelector(
    {
        name,
        setValue,
        value,
        label,
    } : CharitySelectorProps
) {
    const searchRef = useRef(null)
    searchRef.current = ""

    const debounceRef = useRef(null)

    async function searchCharities () {
        clearTimeout(debounceRef.current)
        return new Promise(async (resolve) => {
            debounceRef.current = setTimeout(async () => {
                const charities = await CharityApi.search(searchRef.current)
                const options = charities.Data.map((charity) => {
                    return {
                        ...charity,
                        label: charity.Name,
                        value: charity.Id
                    }
                })
                resolve(options)
            }, 250)
        })
    }

    const handleInputChange = (newValue : string) => {
        searchRef.current = newValue
    }

    const onChange = (e) => {
        setValue(e)
    }

    const components = {
        Option: CharityOption
    }

    return <div className={"form-group charity-selector-container"}>
        <label htmlFor={name}>{label}</label>

        <AsyncSelect
            instanceId={"charity-selector"}
            loadOptions={searchCharities}
            defaultOptions
            value={value}
            components={components}
            onInputChange={handleInputChange}
            onChange={onChange}
        />
    </div>
}