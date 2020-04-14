import React from "react"
import {Source} from "model/source"
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
        case "reddit_comment":
            inner = <RedditComment {...props} />
            break;
        case "reddit_post":
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