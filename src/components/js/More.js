import React from 'react'
import { useContext } from 'react'
import { AiFillHeart, AiOutlineClose } from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'
import { Context } from './Context'
import Count from './Count'

export default function More({ openMore, setOpenMore, item }) {

    const { like, addLike, removeLike, addCart, removeCart, cart, total, setTotal } = useContext(Context)

    if (!openMore) return null
    return (
        <div className='More-popup'>
            <div className="More-main">
                <div className="left-side"
                    style={{
                        background: `url(${item.product})`,
                        width: '50%',
                    }}></div>
                <div className="right-side">
                    <div>
                        <div>
                            <p>Անվանում</p>
                            <p>{item.name}</p>
                        </div>
                        <AiOutlineClose onClick={() => setOpenMore(false)} />
                    </div>
                    <div>
                        <p>Տեսակ</p>
                        <p>{item.category}</p>
                    </div>
                    <div>
                        <p>Բաղադրություն</p>
                        <span className='components'>{item.components}</span>
                    </div>
                    <div>
                        <p>Գին</p>
                        <span>{item.data}դր․</span>
                    </div>
                    <div className="More-bottom-box">
                        <div className='More-quanity'>
                            <p>քանակ</p>
                            <Count item={item} />
                        </div>
                        <div className="More-bottom-icons">
                            <AiFillHeart
                                style={{
                                    color: !like.includes(item) ? '#C7A135' : '#836a26'
                                }}
                                onClick={(e) => {
                                    like.includes(item) ? removeLike(item.id) : addLike(item);
                                }}
                            />
                            <FaShoppingCart
                                style={{
                                    color: !cart.includes(item) ? '#C7A135' : '#836a26'
                                }}
                                onClick={() => {
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
        </div>
    )
}
