import React, { useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import { AiFillInstagram } from 'react-icons/ai'
import { FaTiktok } from 'react-icons/fa'
import CartLike from './CartLike'
import { useContext } from 'react'
import { Context } from './Context'

export default function Header() {
  const phoneNumRef = useRef()
  const [phoneNumbBoo, phoneNumbBooSet] = useState(true)
  const { headerRef } = useContext(Context)

  return (
    <header ref={headerRef}>
      <div className="header-top">
        <div className="logo-name">
          <Link to='/'><div className="logo-img"></div></Link>
          <h1><Link to='/'>Golden Shark Sushi Express</Link></h1>
        </div>
        <div className="contacts-box">
          <div className="phone-numbers" ref={phoneNumRef}>
            <a href="tel:+37433800180">+374 (33)-800-180</a>
            <a href="tel:+37477800180">+374 (77)-800-180</a>
          </div>
          <a href="tel:+37433800180"><BsFillTelephoneFill
            onClick={(e) => {
              phoneNumbBooSet(!phoneNumbBoo)
              phoneNumbBoo ? phoneNumRef.current.style = 'visibility:visible; opacity:1;' : phoneNumRef.current.style = 'visibility:hidden;opacity:1;'
            }}
          /></a>
          <a href="https://maps.app.goo.gl/VPbGxHXKnsnWqYHN7" target='_blank'><MdLocationOn /></a>
          <a href="https://www.instagram.com/goldenshark___sushiexpress/" target='_blank'><AiFillInstagram /></a>
          <a href=""><FaTiktok /></a>
        </div>
      </div>
      <div className="header-bottom">
        <NavLink to='/'>Գլխավոր էջ</NavLink>
        <NavLink to='/Ողջ տեսականին'>Ողջ տեսականին</NavLink>
        <CartLike />
      </div>
    </header>
  )
}
