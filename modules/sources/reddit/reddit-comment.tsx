import {Source} from "model/source";
import {SourceEmbedProps} from "modules/sources/source-embed";

export default function RedditCommentEmbed ({
    source,
    link
} : SourceEmbedProps )
{
    const meta = source.Meta

    let inner = <span><a href={source.Url}>{meta['author']}'s comment</a> in <a href={"https://www.reddit.com/r/" + meta['subreddit']}>/r/{meta['subreddit']}</a></span>

    if (!link) {
        inner = <span><span>{meta['author']}'s comment</span> in <span>/r/{meta['subreddit']}</span></span>
    }

    return <div className={"reddit reddit-comment"}>
        {inner}
    </div>
}