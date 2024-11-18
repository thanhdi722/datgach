'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './new-year.scss';

import itemAccess from '../../../public/apple/category-fixed-06.png';
import itemIphone from '../../../public/apple/category-fixed-01.png';
import itemIpad from '../../../public/apple/category-fixed-02.png';
import itemWatch from '../../../public/apple/category-fixed-03.png';
import itemMac from '../../../public/apple/category-fixed-04.png';
import itemAirPods from '../../../public/apple/category-fixed-05.png';

import Banner from '../../Component/NewYear/banner';
import Category from '../../Component/NewYear/category';
import ProductList from '../../Component/NewYear/product';
import ProductIpad from '../../Component/NewYear/product-ipad';
import ProductWatch from '../../Component/NewYear/product-watch';
import ProductMac from '../../Component/NewYear/product-mac';
import ProductAirPods from '../../Component/NewYear/product-airpods';
import ProductAccess from '../../Component/NewYear/product-access';
import Rules from '../../Component/NewYear/rules';
import Promotion from '../../Component/NewYear/promotion';
import TimeLine from '../../Component/NewYear/timeline';
import Snowfall from '../../Component/NewYear/snow/Snowfall';

const categories = [
	{ id: 'item-iphone', src: itemIphone, alt: 'category-fixed-01' },
	{ id: 'item-ipad', src: itemIpad, alt: 'category-fixed-02' },
	{ id: 'item-watch', src: itemWatch, alt: 'category-fixed-03' },
	{ id: 'item-mac', src: itemMac, alt: 'category-fixed-04' },
	{ id: 'item-airpods', src: itemAirPods, alt: 'category-fixed-05' },
	{ id: 'item-access', src: itemAccess, alt: 'category-fixed-06' },
];

const NewYear = () => {
	const categoryRef = useRef(null);
	const swiperRef = useRef<any>(null);
	const [isStickyVisible, setIsStickyVisible] = useState(false);
	const [activeCategory, setActiveCategory] = useState<string | null>(null);
	const scrollThreshold = 1500;

	const handleClick = (id: string, offset = 0) => {
		const element = document.getElementById(id);
		if (element) {
			const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
			const offsetPosition = elementPosition - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth',
			});
			setActiveCategory(id);
		}
	};

	const handleScrollToRules = () => {
		const customOffset = 500;
		handleClick('item-rules', customOffset);
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
			categories.forEach((category, index) => {
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
		<div className='new-year'>
			<Snowfall />
			<Banner />
			<TimeLine onScrollToRules={handleScrollToRules} />
			<Promotion onScrollToRules={handleScrollToRules} />
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
			<div id='item-rules'>
				<Rules />
			</div>
			<div className='container'>
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
							slideToClickedSlide={true}
							spaceBetween={10}
							watchSlidesProgress={true}
							onSwiper={(swiperInstance) => {
								swiperRef.current = swiperInstance; // Store swiper instance in ref
							}}
							onSlideChange={(swiperInstance) => {
								setActiveCategory(categories[swiperInstance.activeIndex].id);
								swiperInstance.slideTo(swiperInstance.activeIndex, 300, true); // Center the active slide when scrolling
							}}
							breakpoints={{
								300: {
									slidesPerView: 5,
								},
								850: {
									slidesPerView: 6,
								},
							}}
							slidesPerView='auto'
							initialSlide={0}
						>
							{categories.map((category, index) => (
								<SwiperSlide
									key={index}
									onClick={() => {
										setActiveCategory(category.id);
										swiperRef.current?.slideTo(index, 300, true);
										handleClick(category.id);
									}}
								>
									<div
										className={`swiper-slide ${
											activeCategory === category.id ? 'active' : 'default'
										}`}
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

export default NewYear;
