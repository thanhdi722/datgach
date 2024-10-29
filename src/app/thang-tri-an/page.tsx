'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import itemAccess from '../../../public/apple/category-fixed-06.png';
import 'swiper/css';
import itemIphone from '../../../public/apple/category-fixed-01.png';
import itemIpad from '../../../public/apple/category-fixed-02.png';
import itemWatch from '../../../public/apple/category-fixed-03.png';
import itemMac from '../../../public/apple/category-fixed-04.png';
import itemAirPods from '../../../public/apple/category-fixed-05.png';

import './apple.scss';
import Banner from '../../Component/Gratitude/banner';
import TimeLine from '../../Component/Gratitude/timeline';
import Promotion from '../../Component/Gratitude/promotion';
import Category from '../../Component/Gratitude/category';
import ProductList from '../../Component/Gratitude/product';
import ProductIpad from '../../Component/Gratitude/product-ipad';
import ProductWatch from '../../Component/Gratitude/product-watch';
import ProductMac from '../../Component/Gratitude/product-mac';
import ProductAirPods from '../../Component/Gratitude/product-airpods';
import ProductAccess from '../../Component/Gratitude/product-access';
import Rules from '../../Component/Gratitude/rules';

const categories = [
	{ id: 'item-iphone', src: itemIphone, alt: 'category-fixed-01' },
	{ id: 'item-ipad', src: itemIpad, alt: 'category-fixed-02' },
	{ id: 'item-watch', src: itemWatch, alt: 'category-fixed-03' },
	{ id: 'item-mac', src: itemMac, alt: 'category-fixed-04' },
	{ id: 'item-airpods', src: itemAirPods, alt: 'category-fixed-05' },
	{ id: 'item-access', src: itemAccess, alt: 'category-fixed-06' },
];

const Apple = () => {
	const categoryRef = useRef(null);
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
		const customOffset = 300;
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
