import {trimSourceUrl} from "model/source";
import {SourceEmbedProps} from "modules/sources/source-embed";

export default function DefaultSourceEmbed ({
    source,
    link
} : SourceEmbedProps )
{
    let inner = trimSourceUrl(source.Url)
    return <div className={"default-source"}>
        <div className={"label"}>Whatever is at</div>
        {link && <a href={source.Url} title={source.Url} className={"url"}>{inner}</a>}
        {!link && <span className={"url"}>{inner}</span>}
    </div>
}
