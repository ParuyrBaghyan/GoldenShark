import React from 'react'
import { rollList } from './ProdList'
import { useState } from 'react'
import Prod from './Prod'


export default function BestSellers() {

    let [bestSellArr, setBestSellArr] = useState([rollList[0],rollList[1],rollList[2],rollList[3]])
    
    return (
        <div className='BestSellers'>
            <div className="BestSeller-main">
                <h2>Ամենապահանջվածները</h2>
                <div className="BestSeller-box">
                    {bestSellArr.map((item, i) => {
                        return (
                         <Prod key={item.id} item={item}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
