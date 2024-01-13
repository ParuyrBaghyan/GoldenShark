import React from 'react'
import { useContext } from 'react'
import { Context } from './Context'

export default function Count({ item }) {

    let { setCount, cart, total, setTotal } = useContext(Context)

    return (
        <div className='Count-container'>

            <button
                onClick={(e) => {
                    if (item.quanity <= 1) {
                        item.data = item.price * item.quanity
                        setCount(1)
                    } else {
                        setCount(item.quanity -= 1)
                        item.data = item.price * item.quanity
                        if (cart.includes(item)) {
                            setTotal(total - item.price)
                        }
                    }
                }}
            >-</button>
            <span>{item.quanity}</span>
            <button
                onClick={() => {
                    setCount(item.quanity += 1)
                    item.data = item.price * item.quanity
                    if (cart.includes(item)) {
                        setTotal(total + item.price)
                    }
                }}
            >+</button>
        </div>
    )
}
