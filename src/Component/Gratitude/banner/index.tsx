'use client';
import React from 'react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './banner.scss';
import bannerDesktop from '../../../../public/gratitude/head-teacher.png';
import bannerMobile from '../../../../public/apple/banner-mobile.jpg';

const Banner: React.FC = () => {
	return (
		<div className='banner'>
			<div className='banner-desktop'>
				<Image src={bannerDesktop} alt='banner desktop' width={2000} height={1400} quality={100} />
			</div>
			{/* <div className='banner-mobile'>
				<Image src={bannerMobile} alt='banner mobile' width={1820} height={1820} />
			</div> */}
		</div>
	);
};

export default Banner;
