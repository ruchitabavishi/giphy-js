import styled from '@emotion/styled'
import { giphyWhite } from '@giphy/js-brand'
import React, { useLayoutEffect, useState } from 'react'
import useRaf from 'react-use/lib/useRaf'

const Bar = styled.div<{ barHeight: number }>`
    background: ${giphyWhite};
    height: ${(props) => props.barHeight}px;
    position: absolute;
    width: 5px;
    bottom: 0;
    left: 0;
    opacity: 0.95;
`
const ProgressBar = ({ videoEl }: { videoEl: HTMLVideoElement }) => {
    const [progress, setProgress] = useState(0)
    useRaf(2147483647, 100)
    const time = videoEl?.currentTime || 0
    const duration = videoEl?.duration || 0
    const val = time / duration
    useLayoutEffect(() => {
        setProgress(val)
    }, [val, setProgress])
    let perc = Math.round(progress * 100)
    let barHeight = 5
    if (videoEl?.height < 200) {
        barHeight = 3
    } else if (videoEl?.height < 300) {
        barHeight = 4
    }
    perc = duration < 10 && perc > 98 ? 100 : perc
    return <Bar style={{ width: `${perc}%` }} barHeight={barHeight} />
}

export default ProgressBar
