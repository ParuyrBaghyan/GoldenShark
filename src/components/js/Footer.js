import React from 'react'
import { BsFillTelephoneFill, BsFillClockFill, BsFacebook } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import { HiMail } from 'react-icons/hi'
import { AiFillInstagram } from 'react-icons/ai'
import { FaTiktok } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='Footer-container'>
            <div className="Footer-main">
                <div className="footer-top">
                    <div className="footer-section section1">
                        <div className="logo-place">
                            <div className="footer-logo"></div>
                            <Link to='/'>Golden Shark Sushi Express</Link>
                        </div>
                       <div className="visa-mastercard"></div>
                    </div>
                    <div className="footer-section section2">
                        <h2>Տվյալներ</h2>
                        <p><BsFillTelephoneFill />  +374 (33)(77) 800180</p>
                        <p><HiMail /> goldenshark@gmail.com</p>
                        <p><MdLocationOn /> Միքայելյան փողոց, 3</p>
                        <p><BsFillClockFill /> 11:00 - 00:00</p>
                    </div>
                    <div className="footer-section section3">
                        <h2>Արագ հասանելիություն</h2>
                        <Link to='/'>Գլխավոր էջ</Link>
                        <Link to='/Ողջ տեսականին'>Ողջ տեսականին</Link>
                        <Link to='/Զամբյուղ'>Զամբյուղ</Link>
                        <Link to='/Նախընտրած ապրանքներ'>Հավանածներ</Link>
                    </div>
                    <div className="footer-section section4">
                        <h2>Հետևեք մեզ</h2>
                        <div className="footer-icons">
                            <a href="https://www.instagram.com/goldenshark___sushiexpress/" target='_blank'><AiFillInstagram /></a>
                            <a href="#"><FaTiktok /></a>
                            <a href="#"><BsFacebook /></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <span>© Golden Shark Sushi Express : Բոլոր իրավունքները պաշտպանված են</span>
                </div>
            </div>
        </div>
    )
}
