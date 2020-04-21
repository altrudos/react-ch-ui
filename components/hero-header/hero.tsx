import React, {useEffect, useState, useRef} from "react"
import "./hero.less"
import {getRandom, getRandomInt} from "util/random";

export type HeroExample = {
    className: string,
    text: string
}

const examples : HeroExample[] = [
    {
        text: 'reddit comments',
        className: 'reddit'
    },
    {
        text: 'reddit posts',
        className: 'reddit'
    },
    {
        text: 'blog posts',
        className: 'generic'
    },
    {
        text: 'articles',
        className: 'generic'
    },
    {
        text: 'websites',
        className: 'generic'
    },
    {
        text: 'tweets',
        className: 'twitter'
    },
    {
        text: '@people',
        className: 'twitter'
    },
    {
        text: 'channels',
        className: 'youtube'
    },
        {
        text: 'videos',
        className: 'youtube'
    },
        {
        text: 'clips',
        className: 'twitch'
    },
    {
        text: 'streamers',
        className: 'twitch'
    },
    {
        text: 'pictures',
        className: 'instagram'
    },
    {
        text: '@profiles',
        className: 'instagram'
    }
];

const kudoses = [
    'kudos',
    'love',
    'appreciation',
    'thanks',
    'gratitude',
    'admiration',
    'affection',
    'respect'
];

export default function Hero () {
    const [example, setExample] = useState<HeroExample>(getRandom(examples))
    const [kudos, setKudos] = useState<string>(getRandom(kudoses))
    const exampleTimeoutRef = useRef(null);
    const kudosTimeoutRef = useRef(null);

    // These refs are used in the timeout functions to ensure we don't pick the same thing twice in a row
    const exampleRef = useRef(null)
    exampleRef.current = example
    const kudosRef = useRef(null)
    kudosRef.current = kudos

    function loadNewExample () {
        let newest : HeroExample

        let attempts = 0
        do {
            newest = getRandom(examples)
            attempts++
        } while (newest.className == exampleRef.current.className)

        setExample(newest)
        exampleRef.current = newest
        clearTimeout(exampleTimeoutRef.current)
        exampleTimeoutRef.current = setTimeout(loadNewExample, 2000)
    }

    function loadNewKudos () {
        let newest : string
        do {
            newest = getRandom(kudoses)
        } while (newest == kudosRef.current)

        clearTimeout(kudosTimeoutRef.current)
        setKudos(newest)
        kudosRef.current = newest
        kudosTimeoutRef.current = setTimeout(loadNewKudos, 2000)
    }

    useEffect(() => {
        /*// This is for testing to find the longest ones
        let newExample = example
        for (var i = 0; i < examples.length; i++) {
            if (examples[i].text.length > example.text.length) {
                newExample = examples[i]
            }
        }
        setExample(newExample)

        let newKudos = kudos
        for (var i = 0; i < kudoses.length; i++) {
            if (kudoses[i].length > kudos.length) {
                newKudos = kudoses[i]
            }
        }
        setKudos(newKudos)
        return*/
        if (exampleTimeoutRef !== null) {
            clearTimeout(exampleTimeoutRef.current)
        }
        if (kudosTimeoutRef !== null) {
            clearTimeout(kudosTimeoutRef.current)
        }
        kudosTimeoutRef.current = setTimeout(loadNewKudos, 2000)
        exampleTimeoutRef.current = setTimeout(loadNewExample, 1000)

        return () => {
            console.log(' do some kind of cleanup probably')
            if (document.querySelector('.hero-header') == null) {
                //clearTimeout(exampleTimeoutRef.current)
                //clearTimeout(kudosTimeoutRef.current)
            } else {
                console.log('dont clear')
            }
        }
    }, [])

    return <section className={"hero-header hero is-medium"}>
        <div className="hero-head">
            <span className={"hero-row show-kudos"}>
                <span className={"for"}>Show your</span>
                <span className={"kudos"}>{kudos}</span>
            </span>
            <span className={"hero-row for-example " + example.className}>
                <span className={"for"}>for</span>
                <span className={"example"}>{example.text}</span>
            </span>
            <span className={"hero-row cta"}>
                by donating to charity
            </span>
        </div>
    </section>
}