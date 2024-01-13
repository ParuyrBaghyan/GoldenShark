import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {BsFillTelephoneFill} from 'react-icons/bs'
import { Navigation } from 'swiper/modules';

export default function HomeSlider() {
    return (
        <>
            <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide className='first-swiper'>
                    <div className="yandex-content">
                       <a target='__blank' href="https://eats.yandex.com/en-am/restaurant/golden_shark"> <button>Անցնել հղումով</button></a>
                        <span>Պատվեր գրանցելու համար կարող եք անցնել <p className='yandex-eats-color'>Yandex Eats</p> -ի մեր բաժին</span>
                    </div>
                    <div className="yandex-logo"></div>
                </SwiperSlide>
                <SwiperSlide className='second-swiper'>
                    <div className='Slider-numbers'>
                    <span>Կամ պարզապես զանգահարել նշված հեռախոսահամարներով</span>
                    <div className="slider-numbers">
                        <a href="tel:+37433800180"><BsFillTelephoneFill /> +374 (33)-800-180</a>
                        <a href="tel:+37477800180"><BsFillTelephoneFill /> +374 (77)-800-180</a>
                    </div>
                    </div>
                    <div className="Slider-phone-img"></div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
