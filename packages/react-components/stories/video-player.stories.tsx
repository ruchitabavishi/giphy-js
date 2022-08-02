import styled from '@emotion/styled'
import { GiphyFetch } from '@giphy/js-fetch-api'
import { IGif } from '@giphy/js-types'
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs'
import React, { useCallback, useEffect, useState } from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import VideoPlayer from '../src/components/video'
import { Story } from '@storybook/react'

const gf = new GiphyFetch('sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh')

const useGif = (id: string) => {
    const [gif, setGif] = useState<IGif>()

    const fetch = useCallback(async () => {
        const { data: gif } = await gf.gif(id)
        setGif(gif)
    }, [id])

    useEffect(() => {
        fetch()
    }, [fetch, id])
    return gif
}

export default {
    title: 'React Components/Video Player',
    decorators: [withKnobs, jsxDecorator],
}

type StoryProps = Partial<React.ComponentProps<typeof VideoPlayer>>

export const VideoWithControls: Story<StoryProps> = (props) => {
    const gif = useGif(text('id', 'WtUBmrAK1Yda649Ayr'))
    return gif ? (
        <VideoPlayer
            controls
            width={number('width', 300)}
            height={number('height', 0)}
            muted={boolean('muted', false)}
            gif={gif}
            {...props}
        />
    ) : (
        <div>video loading</div>
    )
}

export const VideoNoAttribution: Story<StoryProps> = (props) => {
    const gif = useGif(text('id', 'WtUBmrAK1Yda649Ayr'))
    return gif ? (
        <VideoPlayer
            gif={gif}
            controls
            hideAttribution
            width={number('width', 300)}
            height={number('height', 0)}
            muted={boolean('muted', false)}
            {...props}
        />
    ) : (
        <div>video loading</div>
    )
}

export const VideoNoProgressBar: Story<StoryProps> = (props) => {
    const gif = useGif(text('id', 'WtUBmrAK1Yda649Ayr'))
    return gif ? (
        <VideoPlayer
            gif={gif}
            controls
            hideProgressBar
            width={number('width', 300)}
            height={number('height', 0)}
            muted={boolean('muted', false)}
            {...props}
        />
    ) : (
        <div>video loading</div>
    )
}

export const VideoNoMute: Story<StoryProps> = (props) => {
    const gif = useGif(text('id', 'WtUBmrAK1Yda649Ayr'))
    return gif ? (
        <VideoPlayer
            gif={gif}
            controls
            hideMute
            width={number('width', 300)}
            height={number('height', 0)}
            muted={boolean('muted', false)}
            {...props}
        />
    ) : (
        <div>video loading</div>
    )
}

export const VideoPersistentControlsSmall: Story<StoryProps> = (props) => {
    const gif = useGif(text('id', 'WtUBmrAK1Yda649Ayr'))
    return gif ? (
        <VideoPlayer
            gif={gif}
            controls
            persistentControls
            width={number('width', 300)}
            height={number('height', 0)}
            muted={boolean('muted', false)}
            {...props}
        />
    ) : (
        <div>video loading</div>
    )
}

export const VideoPersistentControlsMedium: Story<StoryProps> = (props) => {
    const gif = useGif(text('id', 'WtUBmrAK1Yda649Ayr'))
    return gif ? (
        <VideoPlayer
            gif={gif}
            controls
            persistentControls
            width={number('width', 400)}
            height={number('height', 0)}
            muted={boolean('muted', false)}
            {...props}
        />
    ) : (
        <div>video loading</div>
    )
}

export const VideoPersistentControlsLarge: Story<StoryProps> = (props) => {
    const gif = useGif(text('id', 'WtUBmrAK1Yda649Ayr'))
    return gif ? (
        <VideoPlayer
            gif={gif}
            controls
            persistentControls
            width={number('width', 600)}
            height={number('height', 0)}
            muted={boolean('muted', false)}
            {...props}
        />
    ) : (
        <div>video loading</div>
    )
}

const Overlay = styled.div`
    background: pink;
    position: absolute;
    bottom: 5px;
    right: 5px;
`

export const VideoOverlay: Story<StoryProps> = (props) => {
    const gif = useGif(text('id', 'WtUBmrAK1Yda649Ayr'))
    return gif ? (
        <VideoPlayer
            gif={gif}
            controls
            width={number('width', 300)}
            height={number('height', 0)}
            muted={boolean('muted', true)}
            overlay={() => <Overlay>OVERLAY</Overlay>}
            {...props}
        />
    ) : (
        <div>video loading</div>
    )
}
