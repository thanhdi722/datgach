'use client';
import React from 'react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './banner.scss';
import banner from '../../../../public/apple/banner-apple.jpg';

const Banner: React.FC = () => {
	return (
		<div className='banner'>
			<Image src={banner} alt='banner' width={1820} height={1400} />
			{/* <div className='banner-content'>
				<Image src='/apple/heart.png' alt='heart' width={1200} height={900} />
			</div> */}
		</div>
	);
};

export default Banner;
