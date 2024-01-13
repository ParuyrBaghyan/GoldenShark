import React from 'react'
import { rollList } from '../components/js/ProdList'
import { hotRollList } from '../components/js/ProdList'
import { makiList } from '../components/js/ProdList'
import { soupList } from '../components/js/ProdList'
import { desertList } from '../components/js/ProdList'
import Prod from '../components/js/Prod'
import Sections from '../components/js/Sections'
import { useContext } from 'react'
import { Context } from '../components/js/Context'

export default function AllProducts() {

  const { rollRef, hotRollRef, makiRef, soupRef, desertRef } = useContext(Context)

  return (
    <div className='AllProducts-container'>
      <div className="ALlProd-empty-place"></div>
      <div className="AllProducts-main">
        <div className="Sections-box">
          <Sections />
        </div>
        <div className="AllProducts-items">
          <h2 ref={rollRef}>Ռոլլեր</h2>
          <div className="AllProducts-section">
            {rollList.map((item, i) => {
              return (
                <Prod item={item} key={item.id} />
              )
            })}
          </div>
          <h2 ref={hotRollRef}>Տաք Ռոլլեր</h2>
          <div className="AllProducts-section">
            {hotRollList.map((item, i) => {
              return (
                <Prod id='Տաք Ռոլլեր' item={item} key={item.id} />
              )
            })}
          </div>
          <h2 ref={makiRef}>Մակիներ</h2>
          <div className="AllProducts-section">
            {makiList.map((item, i) => {
              return (
                <Prod item={item} key={item.id} />
              )
            })}
          </div>
          <h2 ref={soupRef}>Ապուրներ</h2>
          <div className="AllProducts-section">
            {soupList.map((item, i) => {
              return (
                <Prod item={item} key={item.id} />
              )
            })}
          </div>
          <h2 ref={desertRef}>Դեսերտներ</h2>
          <div className="AllProducts-section">
            {desertList.map((item, i) => {
              return (
                <Prod item={item} key={item.id} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
