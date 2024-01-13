import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'
import { Link,NavLink } from 'react-router-dom'
export default function CartLike() {

  return (
    <div className='CartLike-container'>
      
        
      <NavLink to='/Նախընտրած ապրանքներ'><AiFillHeart /></NavLink>
      <NavLink to='/Զամբյուղ'><FaShoppingCart /></NavLink>

    </div>
  )
}
