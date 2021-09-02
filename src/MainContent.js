import React, {useRef, useEffect} from 'react'
import background from './Images/background.jpg';
import './MainContent.css'
function MainContent({timeline}) {
    let bg = useRef(null)
    let contenth1 = useRef(null)
    let contentp = useRef(null)
    useEffect(()=> {
        timeline.to(bg,{
            delay: 1,
            duration: 2,
            y: "-50%",
            x: "-50%",
            opacity: 1
        })
    })
    return (
        <div>
            <div className="content">
                <h1 ref={el => contenth1 = el}>
                    Shop Now!
                </h1>
                <p ref={el => contentp = el}>
                    New Arrivals!
                </p>
            </div>
            <img src={background} alt="bg" className="background" ref={el => bg = el}/>
        </div>
    )
}

export default MainContent
