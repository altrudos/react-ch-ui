import React from "react"
import {Source} from "model/source"
import RedditComment from "./reddit/reddit-comment"
import RedditPost from "./reddit/reddit-post"
import DefaultSource from "./default-source"

export default function SourceEmbed (source : Source) {
    let inner;

    switch (source.Type) {
        case "reddit_comment":
            inner = <RedditComment source={source} />
            break;
        case "reddit_post":
            inner = <RedditPost source={source} />
            break;
        default:
            inner = <DefaultSource source={source} />
            break;
    }

    return <div className={"source-embed " + source.Type}>
        {inner}
    </div>
}