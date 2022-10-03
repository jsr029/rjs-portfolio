import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'

const Parallaxing = (props) => {
    console.log(props.children)
    let contentStyle={
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height:'100%',
        color:'#fffff',
        backgroundColor: 'rgba(0,0,0,.4)',
        WebKitFilter: 'blur(0px) saturate(2)'
    }
    return (
        <ParallaxBanner
            layers={[{ image: props.imgsrc, amount: 0.6, expanded: false }]}
            style={{ height: props.height }}
        >
            <div style={contentStyle}>
                {props.children}
            </div>
        </ParallaxBanner>
  )
}

export default Parallaxing
