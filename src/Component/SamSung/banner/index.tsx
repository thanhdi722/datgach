'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Row, Col } from 'antd';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './banner.scss';

const Banner: React.FC = () => {
	const bannerSlides = [
		{ image: '/sam-sung/banner-01.jpg' },
		{ image: '/sam-sung/banner-02.jpg' },
		{ image: '/sam-sung/banner-03.jpg' },
		{ image: '/sam-sung/banner-04.jpg' },
		{ image: '/sam-sung/banner-05.png' },
		{ image: '/sam-sung/banner-06.png' },
		{ image: '/sam-sung/banner-07.jpg' },
		{ image: '/sam-sung/banner-08.png' },
		{ image: '/sam-sung/banner-09.png' },
	];

	return (
		<div className='banner'>
			<div className='container'>
				<Row justify='center'>
					<Col>
						<div className='apple-swiper-wrapper'>
							<Swiper
								modules={[Navigation, Pagination, Autoplay]}
								spaceBetween={0}
								slidesPerView={1}
								navigation
								autoplay={{ delay: 5000 }}
								className='apple-swiper-banner'
							>
								{bannerSlides.map((slide, index) => (
									<SwiperSlide key={index} className='apple-swiper-slide-banner'>
										<Image
											src={slide.image}
											alt='banner-apple'
											className='image'
											width={1200}
											height={1000}
										/>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default Banner;
