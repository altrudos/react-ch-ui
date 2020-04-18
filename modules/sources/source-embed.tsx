import React from "react"
import {Source, Types} from "model/source"
import RedditComment from "./reddit/reddit-comment"
import RedditPost from "./reddit/reddit-post"
import DefaultSource from "./default-source"

export type SourceEmbedProps = {
    source : Source,
    link?: boolean // If false, don't add hyperlinks to the embed
}

export default function SourceEmbed (props : SourceEmbedProps) {
    let inner;
    const {source} = props
    switch (source.Type) {
        case Types.REDDIT_COMMENT:
            inner = <RedditComment {...props} />
            break;
        case Types.REDDIT_POST:
            inner = <RedditPost {...props} />
            break;
        default:
            inner = <DefaultSource {...props} />
            break;
    }

    return <div className={"source-embed " + source.Type}>
        {inner}
    </div>
}