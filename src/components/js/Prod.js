import React, { useEffect } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'
import More from './More'
import { useState } from 'react'
import { useContext } from 'react'
import { Context } from './Context'
import Count from './Count'


export default function Prod({ item }) {
    let { like, addLike, removeLike, addCart, removeCart, cart, setcart, total, setTotal } = useContext(Context)
    const [openMore, setOpenMore] = useState(false)


    return (
        <div className="prod-item">
            <div className="prod-item-img" style={{
                width: '100%',
                height: '65%',
                background: `url(${item.product})`,
            }}></div>
            <div className="prod-item-bottom">
                <div className="name-price">
                    <p>{item.name}</p>
                    <span>{item.data}դր․</span>
                </div>
                <span onClick={() => {
                    setOpenMore(true)
                }}>Ավելին...</span>
                <More openMore={openMore} setOpenMore={setOpenMore} item={item} />
                <div className="prod-item-bottom-buttons">
                    <AiFillHeart
                        style={{
                            color: !like.includes(item) ? '#000201' : '#C7A135'
                        }}
                        onClick={(e) => {
                            like.includes(item) ? removeLike(item.id) : addLike(item);
                        }}
                    />
                    <div className="buy-quantity">
                        <Count item={item} />
                        <FaShoppingCart
                            style={{
                                color: !cart.includes(item) ? '#000201' : '#C7A135'
                            }}
                            onClick={(e) => {
                                if (cart.includes(item)) {
                                    removeCart(item.id)
                                    setTotal(total - item.data)
                                } else {
                                    addCart(item);
                                    setTotal(total + item.data)
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
