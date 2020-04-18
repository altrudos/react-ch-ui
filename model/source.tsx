export type Source = {
    Url: string
    Type: string
    Meta: object
    Key: string
}

export const Types = {
    REDDIT_COMMENT: "reddit_comment",
    REDDIT_POST: "reddit_post"
}

export function trimSourceUrl (url : string) : string {
    let trimmed = url.replace(/https?:\/\//i, '')
    if (trimmed.substr(trimmed.length-1, 1) == "/") {
        return trimmed.substr(0, trimmed.length-1)
    }
    return trimmed
}