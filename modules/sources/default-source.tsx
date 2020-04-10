import {Source} from "model/source";

export default function DefaultSourceEmbed ({
    source
} : { source : Source})
{
    let inner = source.Url
    if (inner.length > 50) {
        inner = inner.substr(0, 48) + '...'
    }
    return <div className={"reddit reddit-comment"}>
        <div className={"label"}>Whatever is at</div>
        <a href={source.Url} title={source.Url}>{inner}</a>
    </div>
}