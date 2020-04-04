import React, {Fragment} from "react"
import cx from "../../util/cx"
import "./errors.less"

export type ErrorProps = {
    errors: string [],
    className?: string
}
export default function Errors(
    {
        errors,
        className,
        ...props
    } : ErrorProps
){
    if (errors.length == 0) {
        return <Fragment />
    }

    return (
        <ul
            {...props}
            className={cx("errors", className)}
        >
            {errors.map((err, i) => <li key={i}>{err}</li>)}
        </ul>
    )
}
