import React, { useContext } from 'react'
import { Context } from './Context'

export default function Total() {

  let { total } = useContext(Context)


  return (
    <div className='Total-container'>
      <div className="Total-main">
        <div className="common-total">
          <h3>Ընդհանու գումար</h3>
          <span>{total}դր․</span>
        </div>
      </div>
    </div>
  )
}
