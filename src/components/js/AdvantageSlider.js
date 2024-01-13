import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { EffectCube, Pagination } from 'swiper/modules';

export default function AdvantageSlider() {
    return (
        <>
        <h2 className='swiper-titel'>Ի՞նչու են մարդիկ ընտրում մեզ</h2>
            <Swiper
                effect={'cube'}
                grabCursor={true}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                loop={true}
                pagination={true}
                modules={[EffectCube, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="each-swiper-item"
                    style={{
                        background : 'url(https://cdn.abcotvs.com/dip/images/6028956_031920-kfsn-food-delivery-img.jpg?w=1600)',
                        backgroundPositionY:'20%'
                    }}>
                        <span><b>Արագ առաքում քաղաքի յուրաքանչյուր վայր</b></span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="each-swiper-item" 
                    style={{
                        background: 'url(https://imgtest.mir24.tv/uploaded/images/crops/2021/July/1200x600_0x500_wide_crop_20210710103146_e4d588bf_dae008581a646b7a19827091ab623c4d36f232c715cac323cc0d574a36fe2f56.jpg)',
                        backgroundPosition:'center'
                    }}>
                        <span><b>7000 և ավել դրամի պատվերի դեպքում առաքումն անվճար է</b></span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="each-swiper-item"
                    style={{
                        background: 'url(https://i1.wp.com/crispy.news/wp-content/uploads/2020/12/chef-1209161_1280.jpg?w=1200&ssl=1)',
                        backgroundPosition:'center'
                    }}>
                        <span><b>Պատրաստվում Է անմիջապես պատվիրելուց հետո</b></span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="each-swiper-item"
                    style={{
                        background:'url(https://sm.askmen.com/t/askmen_gr/photo/default/ep-10192015-freezerpanty-salmon-hero_26pp.1200.jpg)',
                        backgroundPosition:'center'
                    }}>
                        <span><b>Պատրաստում ենք միայն բարձրորակ և թարմ ծովամթերքներից</b></span>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
