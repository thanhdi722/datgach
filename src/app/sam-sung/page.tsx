'use client';
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './sam-sung.scss';
import Banner from '@/Component/SamSung/banner';
import Category from '@/Component/SamSung/category';
import ProductList from '@/Component/SamSung/product';
import ProductIpad from '@/Component/SamSung/product-ipad';
import ProductWatch from '@/Component/SamSung/product-watch';
import ProductMac from '@/Component/SamSung/product-mac';
import ProductAirPods from '@/Component/SamSung/product-airpods';
import ProductAccess from '@/Component/SamSung/product-access';

const categories = [
	{ id: 'item-iphone', src: '/apple/category-fixed-01.png', alt: 'category-fixed-01' },
	{ id: 'item-ipad', src: '/apple/category-fixed-02.png', alt: 'category-fixed-02' },
	{ id: 'item-watch', src: '/apple/category-fixed-03.png', alt: 'category-fixed-03' },
	{ id: 'item-mac', src: '/apple/category-fixed-04.png', alt: 'category-fixed-04' },
	{ id: 'item-airpods', src: '/apple/category-fixed-05.png', alt: 'category-fixed-05' },
	{ id: 'item-access', src: '/apple/category-fixed-06.png', alt: 'category-fixed-06' },
];

const SamSung = () => {
	const categoryRef = useRef(null);
	const [isStickyVisible, setIsStickyVisible] = useState(false);
	const [activeCategory, setActiveCategory] = useState<string | null>(null);

	const handleClick = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
			setActiveCategory(id);
		}
	};

	useEffect(() => {
		const stickyObserver = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				setIsStickyVisible(!entry.isIntersecting);
			},
			{ root: null, threshold: 0 }
		);

		const sectionObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						console.log('Visible section ID:', entry.target.id);
						setActiveCategory(entry.target.id as string);
					}
				});
			},
			{ root: null, threshold: 0.5 }
		);

		if (categoryRef.current) {
			stickyObserver.observe(categoryRef.current);
		}

		categories.forEach((category) => {
			const element = document.getElementById(category.id);
			if (element) {
				console.log('Observing element:', category.id);
				sectionObserver.observe(element);
			} else {
				console.warn('Element not found:', category.id);
			}
		});

		return () => {
			if (categoryRef.current) {
				stickyObserver.unobserve(categoryRef.current);
			}
			categories.forEach((category) => {
				const element = document.getElementById(category.id);
				if (element) {
					sectionObserver.unobserve(element);
				}
			});
		};
	}, []);

	return (
		<div className='sam-sung'>
			<Banner />
			<div ref={categoryRef}>
				<Category />
			</div>
			<ProductList />
			<ProductIpad />
			<ProductWatch />
			<ProductMac />
			<ProductAirPods />
			<ProductAccess />
			<div>
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
										className={`swiper-slide ${
											activeCategory === category.id ? 'active' : 'default'
										}`}
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
		</div>
	);
};

export default SamSung;
