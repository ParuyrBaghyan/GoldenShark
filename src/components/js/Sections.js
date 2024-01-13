import React, { useRef, useState } from 'react'
import { sectionsList } from './SectionsList'
import { useContext } from 'react'
import { Context } from './Context'

export default function Sections() {
    const { rollRef, hotRollRef, makiRef, soupRef, desertRef } = useContext(Context)
    const handleClick = function (sec) {
        if (sec === 'Ռոլլեր') rollRef.current?.scrollIntoView({ behavior: 'smooth' })
        if (sec === 'Տաք Ռոլլեր') hotRollRef.current?.scrollIntoView({ behavior: 'smooth' })
        if (sec === 'Մակիներ') makiRef.current?.scrollIntoView({ behavior: 'smooth' })
        if (sec === 'Ապուրներ') soupRef.current?.scrollIntoView({ behavior: 'smooth' })
        if (sec === 'Դեսերտներ') desertRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const [fix, setFix] = useState(false)
    function setFixed() { window.scrollY >= 250 ? setFix(true) : setFix(false) }
    window.addEventListener('scroll', setFixed)
    let x = window.scrollY
    



    return (
        <div className='Sections-container'
            // style={{
            //     position: fix ? 'fixed' : 'absolute',
            //     top: fix ? '8.5%' : '35.5%'
            // }}
        >
            {sectionsList.map(sec => {
                return <a key={Math.random()} onClick={(e) => { handleClick(sec) }}>{sec}</a>
            })}

        </div>
    )
}
