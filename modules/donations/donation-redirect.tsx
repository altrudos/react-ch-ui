import React, {useEffect} from "react"
import "./donation-redirect.less"

export type DonationRedirectProps = {
    url: string,
}

export default function DonationRedirect(
    {
        url
    } : DonationRedirectProps
) {
    useEffect(() => {
        window.location.href = url
    })
    return <div className={"donation-success-redirecting"}>
        <div className={"redirecting"}>Redirecting to payment form...</div>
        <a className={"direct-link"} href={url}>Click here if it's taking too long.</a>
    </div>
}