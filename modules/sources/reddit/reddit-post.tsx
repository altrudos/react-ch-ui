import {Source} from "model/source";
import {Fragment} from "react"

export default function RedditCommentEmbed ({
  source,
  link
} : {
  source : Source,
  link?: boolean
})
{
    const meta = source.Meta

    let inner = <Fragment>
      <a href={source.Url}>{meta['author']}'s post</a> in <a href={"https://www.reddit.com/r/" + meta['subreddit']}>/r/{meta['subreddit']}</a>
    </Fragment>

    if (!link) {
      inner = <Fragment>{meta['author']}'s post in /r/{meta['subreddit']}</Fragment>
    }

    return <div className={"reddit reddit-post"}>
      {inner}
    </div>
}
