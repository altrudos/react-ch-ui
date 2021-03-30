import React from 'react'
import {Source, Types} from "model/source"

export const svgAtlas = {
	[Types.REDDIT_POST]: 'reddit.svg',
	[Types.REDDIT_COMMENT]: 'reddit.svg'
}

const defaultSvg = 'default-link.svg'

export default function SourceIcon(source: Source) {
	let icon = svgAtlas[source.Type]

	if (!icon) {
		icon = defaultSvg
	}

	return <img src={"/static/svgs/" + icon} className={"source-icon icon-" + source.Type} />
}
