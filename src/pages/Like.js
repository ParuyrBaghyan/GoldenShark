import React from 'react'
import { useContext } from 'react'
import { Context } from '../components/js/Context'
import Prod from '../components/js/Prod'

export default function Like() {

    const { like } = useContext(Context)

    return (
        <div className='Like-container'>
            <div className="ALlProd-empty-place"></div>
            <div className="Like-main">
                <h2>Նախընտրած ուտեստների ցանկ</h2>
                <div className="Like-items">
                    {like.map((item) => {
                        return <Prod key={item.id} item={item} />
                    })}
                </div>
            </div>
        </div>
    )
}
