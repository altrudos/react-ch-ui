import {Source} from "model/source";

export default function RedditCommentEmbed ({
    source
} : { source : Source})
{
    const meta = source.Meta
    return <div className={"reddit reddit-post"}>
            <a href={source.Url}>{meta['author']}'s post</a> in <a href={"https://www.reddit.com/r/" + meta['subreddit']}>/r/{meta['subreddit']}</a>
    </div>
}