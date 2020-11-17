import React from "react"
import {Drive} from "../../model/drive";
import Link from "next/link";
import SourceEmbed from "../sources/source-embed";

export default function DriveLink(drive : Drive, inner : any = '') {

	if (!inner) {
		if (drive.Source) {
			inner = <SourceEmbed source={drive.Source} link={false} />
		}
	}

	return <Link href="/d/[uri]" as={`/d/${drive.Uri}`}>
		<a href={"/d/" + drive.Uri}>
			{inner}
		</a>
	</Link>
}
