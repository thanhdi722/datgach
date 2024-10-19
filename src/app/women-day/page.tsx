'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import './women-day.scss';
import 'swiper/css';
import Banner from '../../Component/WomenDay/banner';
import Promotion from '../../Component/WomenDay/promotion';
import ProductList from '../../Component/WomenDay/product';
import AppleList from '../../Component/WomenDay/apple';
import ProductPercent from '../../Component/WomenDay/99percent';
import AndroidList from '../../Component/WomenDay/android';
import LaptopList from '../../Component/WomenDay/laptop';
import ToyList from '../../Component/WomenDay/toy';
import AccessoriesList from '../../Component/WomenDay/accessories';
import Rules from '../../Component/WomenDay/rules';

const categories = [
	{ id: 'item-iphone', name: 'Phụ kiện tặng nàng' },
	{ id: 'item-ipad', name: 'Apple' },
	{ id: 'item-airpods', name: 'Likenew 99%' },
	{ id: 'item-mac', name: 'Android' },
	{ id: 'item-watch', name: 'Laptop' },
	{ id: 'item-toy', name: 'Đồ chơi công nghệ' },
	{ id: 'item-accessories', name: 'Phụ kiện giảm sốc' },
];

const WomenDay = () => {
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
		<div className='women-day'>
			{/* <Image src={BgWomen} alt='bg-women' className='bg-women' /> */}
			<Banner onScrollToRules={handleScrollToRules} />
			<Promotion onScrollToRules={handleScrollToRules} />
			<div id='item-iphone'>
				<ProductList />
			</div>
			<div id='item-ipad'>
				<AppleList />
			</div>
			<div id='item-airpods'>
				<ProductPercent />
			</div>
			<div id='item-mac'>
				<AndroidList />
			</div>
			<div id='item-watch'>
				<LaptopList />
			</div>
			<div id='item-toy'>
				<ToyList />
			</div>
			<div id='item-accessories'>
				<AccessoriesList />
			</div>

			<div id='item-rules'>
				<Rules />
			</div>

			<div className='rose' />
			<div className='rose' />
			<div className='rose' />
			<div className='rose' />
			<div className='rose' />
			<div className='rose' />
			<div className='rose' />
			<div className='rose' />
			<div className='rose' />
			<div className='rose' />

			<div className={`sticky-category ${isStickyVisible ? 'visible' : 'hidden'}`}>
				<div className='category-desktop'>
					{categories.map((category, index) => (
						<div
							key={index}
							className={`category-item ${activeCategory === category.id ? 'active' : 'default'}`}
							onClick={() => handleClick(category.id)}
						>
							<span className='category-name'>{category.name}</span>
						</div>
					))}
				</div>
				<div className='category-mobile'>
					<Swiper
						centeredSlides={true}
						slideToClickedSlide={true}
						spaceBetween={10}
						watchSlidesProgress={true} // Track slide progress to update center
						onSlideChange={(swiper) => setActiveCategory(categories[swiper.activeIndex].id)} // Set active category on change
						breakpoints={{
							300: {
								slidesPerView: 2.5,
							},
							850: {
								slidesPerView: 5,
							},
						}}
						slidesPerView='auto'
					>
						{categories.map((category, index) => (
							<SwiperSlide key={index} onClick={() => handleClick(category.id)}>
								<div
									className={`swiper-slide ${activeCategory === category.id ? 'active' : 'default'}`}
								>
									<span className='category-name'>{category.name}</span>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default WomenDay;
