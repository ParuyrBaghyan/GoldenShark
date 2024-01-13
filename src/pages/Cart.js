import React from 'react'
import { useContext } from 'react'
import { Context } from '../components/js/Context'
import Count from '../components/js/Count'
import { AiOutlineClose } from 'react-icons/ai'
import Total from '../components/js/Total'

export default function Cart() {
  const { removeCart, cart, openMore, setOpenMore, total, setTotal } = useContext(Context)
  return (
    <div className='cart-container'>
      <div className="ALlProd-empty-place"></div>
      <div className="cart-main">
        <h2>Զամբյուղ</h2>
        <div className="cart-main-child">
          <div className="cart-item-place">
            <div className="cart-titles">
              <span></span>
              <span>Անվանում</span>
              <span>Քանակ</span>
              <span>Գին</span>
              <span></span>
            </div>
            {cart.map(item => {
              return <div className="cart-item" key={item.id}>
                <div className="cart-item-img"
                  style={{
                    background: `url(${item.product})`
                  }}
                ></div>
                <div className="cart-item-name-more">
                  <b><p className="cart-item-name">{item.name}</p></b>
                </div>
                <Count item={item} />
                <span>{item.data}դր․</span>
                <AiOutlineClose
                  onClick={() => {
                    removeCart(item.id)
                    setTotal(total - item.data)
                    item.quanity = 1
                    item.data = item.price * item.quanity
                  }}
                />
              </div>
            })}
          </div>
          <Total />
        </div>
      </div>
    </div>
  )
}
