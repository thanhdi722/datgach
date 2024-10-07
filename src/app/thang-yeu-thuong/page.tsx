'use client';
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './apple.scss';
import Banner from '@/Component/iPhone/banner';
import Promotion from '@/Component/iPhone/promotion';
import Category from '@/Component/iPhone/category';
import ProductList from '@/Component/iPhone/product';
import ProductIpad from '@/Component/iPhone/product-ipad';
import ProductWatch from '@/Component/iPhone/product-watch';
import ProductMac from '@/Component/iPhone/product-mac';
import ProductAirPods from '@/Component/iPhone/product-airpods';
import ProductAccess from '@/Component/iPhone/product-access';

const categories = [
	{ id: 'item-iphone', src: '/apple/category-fixed-01.png', alt: 'category-fixed-01' },
	{ id: 'item-ipad', src: '/apple/category-fixed-02.png', alt: 'category-fixed-02' },
	{ id: 'item-watch', src: '/apple/category-fixed-03.png', alt: 'category-fixed-03' },
	{ id: 'item-mac', src: '/apple/category-fixed-04.png', alt: 'category-fixed-04' },
	{ id: 'item-airpods', src: '/apple/category-fixed-05.png', alt: 'category-fixed-05' },
	{ id: 'item-access', src: '/apple/category-fixed-06.png', alt: 'category-fixed-06' },
];

const Apple = () => {
	const categoryRef = useRef(null);
	const [isStickyVisible, setIsStickyVisible] = useState(false);
	const [activeCategory, setActiveCategory] = useState<string | null>(null);
	const scrollThreshold = 2000;

	const handleClick = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
			setActiveCategory(id);
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			setIsStickyVisible(window.scrollY > scrollThreshold);
		};

		const sectionObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveCategory(entry.target.id);
					}
				});
			},
			{ root: null, threshold: 0.1 }
		);

		const observeSections = () => {
			categories.forEach((category) => {
				const element = document.getElementById(category.id);
				if (element) {
					sectionObserver.observe(element);
				}
			});
		};

		window.addEventListener('scroll', handleScroll);
		const timeoutId = setTimeout(observeSections, 0);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			clearTimeout(timeoutId);
			categories.forEach((category) => {
				const element = document.getElementById(category.id);
				if (element) {
					sectionObserver.unobserve(element);
				}
			});
		};
	}, []);

	return (
		<div className='apple'>
			<Banner />
			<Promotion />
			<div ref={categoryRef}>
				<Category />
			</div>
			<div id='item-iphone'>
				<ProductList />
			</div>
			<div id='item-ipad'>
				<ProductIpad />
			</div>
			<div id='item-watch'>
				<ProductWatch />
			</div>
			<div id='item-mac'>
				<ProductMac />
			</div>
			<div id='item-airpods'>
				<ProductAirPods />
			</div>
			<div id='item-access'>
				<ProductAccess />
			</div>
			<div className={`sticky-category ${isStickyVisible ? 'visible' : 'hidden'}`}>
				<div className='category-desktop'>
					{categories.map((category, index) => (
						<div
							key={index}
							className={`category-item ${activeCategory === category.id ? 'active' : 'default'}`}
							onClick={() => handleClick(category.id)}
						>
							<Image src={category.src} width={400} height={500} alt={category.alt} />
						</div>
					))}
				</div>
				<div className='category-mobile'>
					<Swiper
						spaceBetween={10}
						breakpoints={{
							300: {
								slidesPerView: 5,
							},
							1200: {
								slidesPerView: 6,
							},
						}}
						slidesPerView='auto'
					>
						{categories.map((category, index) => (
							<SwiperSlide key={index}>
								<div
									className={`swiper-slide ${activeCategory === category.id ? 'active' : 'default'}`}
									onClick={() => handleClick(category.id)}
								>
									<Image src={category.src} width={400} height={500} alt={category.alt} />
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default Apple;
