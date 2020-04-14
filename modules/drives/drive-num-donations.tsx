export type NumDonationsProps = {
    num: number
}
export default function NumDonations ({
   num
} : NumDonationsProps)
{
    const s = num == 1 ? "" : "s"
    const number = num.toLocaleString('en-US')
    return <span className={"num-donations"}>{number} donation{s}</span>
}