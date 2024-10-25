'use client';
import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './old.scss';
import Banner from '../../Component/Old/banner';
import Category from '../../Component/Old/category';
import ProductList from '../../Component/Old/product';
import ProductIpad from '../../Component/Old/product-ipad';
import ProductWatch from '../../Component/Old/product-watch';
import ProductMac from '../../Component/Old/product-mac';
import ProductAirPods from '../../Component/Old/product-airpods';
import Content from '../../Component/Old/content';

const categories = [
	{ id: 'item-iphone', name: 'iPhone' },
	{ id: 'item-ipad', name: 'iPad' },
	{ id: 'item-airpods', name: 'Samsung' },
	{ id: 'item-mac', name: 'Mac' },
	{ id: 'item-watch', name: 'Watch' },
];

const Old = () => {
	const categoryRef = useRef(null);
	const swiperRef = useRef<any>(null);
	const [isStickyVisible, setIsStickyVisible] = useState(false);
	const [activeCategory, setActiveCategory] = useState<string | null>(null);
	const scrollThreshold = 500;

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

	useEffect(() => {
		if (swiperRef.current) {
			const activeIndex = categories.findIndex((category) => category.id === activeCategory);
			if (activeIndex !== -1) {
				swiperRef.current.slideTo(activeIndex, 300, true);
			}
		}
	}, [activeCategory]);

	return (
		<div className='apple'>
			<Banner />
			<div ref={categoryRef}>
				<Category />
			</div>
			<div id='item-iphone'>
				<ProductList />
			</div>
			<div id='item-ipad'>
				<ProductIpad />
			</div>
			<div id='item-airpods'>
				<ProductAirPods />
			</div>
			<div id='item-mac'>
				<ProductMac />
			</div>
			<div id='item-watch'>
				<ProductWatch />
			</div>
			<Content />
			<div className={`sticky-category ${isStickyVisible ? 'visible' : 'hidden'}`}>
				<div className='category-desktop'>
					{categories.map((category, index) => (
						<div
							key={index}
							className={`category-item ${activeCategory === category.id ? 'active' : 'default'}`}
							onClick={() => handleClick(category.id)}
						>
							{category.name}
						</div>
					))}
				</div>
				<div className='category-mobile'>
					<Swiper
						spaceBetween={10}
						breakpoints={{
							300: {
								slidesPerView: 4,
							},
							1400: {
								slidesPerView: 5,
							},
						}}
						centeredSlides={true}
						slideToClickedSlide={true}
						slidesPerView='auto'
						watchSlidesProgress={true}
						onSwiper={(swiperInstance) => {
							swiperRef.current = swiperInstance; // Store swiper instance in ref
						}}
						onSlideChange={(swiperInstance) => {
							setActiveCategory(categories[swiperInstance.activeIndex].id);
							swiperInstance.slideTo(swiperInstance.activeIndex, 300, true); // Center the active slide when scrolling
						}}
						initialSlide={0}
					>
						{categories.map((category, index) => (
							<SwiperSlide key={index}>
								<div
									className={`swiper-slide ${activeCategory === category.id ? 'active' : 'default'}`}
									onClick={() => {
										setActiveCategory(category.id);
										swiperRef.current?.slideTo(index, 300, true); // Center the clicked slide
										handleClick(category.id);
									}}
								>
									{category.name}
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default Old;
