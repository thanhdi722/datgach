'use client';
import HeaderHalloween from '../../Component/ComponentPageHalloween/HeaderHalloween/HeaderHalloween';
import BodyHallowween from '../../Component/ComponentPageHalloween/BodyHalloween/BodyHalloween';
import ProductList from '../../Component/ComponentPageHalloween/product/index';
import AppleList from '../../Component/ComponentPageHalloween/apple/index';
import ProductPercent from '../../Component/ComponentPageHalloween/99percent/index';
import AndroidList from '../../Component/ComponentPageHalloween/android/index';
import LaptopList from '../../Component/ComponentPageHalloween/laptop/index';
import ToyList from '../../Component/ComponentPageHalloween/toy/index';
import Rules from '../../Component/ComponentPageHalloween/rules/index';
import BannerHalloween from '../../Component/ComponentPageHalloween/BannerHalloween/page';
import AccessoriesList from '../../Component/ComponentPageHalloween/accessories';
import IpadList from '../../Component/ComponentPageHalloween/ipad';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './halloween.scss';

const categories = [
	{ id: 'item-hot', name: 'Giá sốc' },
	{ id: 'item-access', name: 'Phụ kiện' },
	{ id: 'item-iphone', name: 'iPhone' },
	{ id: 'item-airpods', name: 'Máy 99%' },
	{ id: 'item-ipad', name: 'iPad' },
	{ id: 'item-mac', name: 'Laptop' },
	{ id: 'item-watch', name: 'Android' },
	{ id: 'item-toy', name: 'Phụ kiện Apple' },
];

export default function HalloweenPage() {
	const categoryRef = useRef(null);
	const [isStickyVisible, setIsStickyVisible] = useState(false);
	const [activeCategory, setActiveCategory] = useState<string | null>(null);
	const scrollThreshold = 500;

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
		<div className='halloween'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='60'
				height='93'
				className='ghost1'
				viewBox='0 0 15.875 24.606'
			>
				<defs>
					<linearGradient
						id='A'
						x1='-1.181'
						y1='-16.316'
						x2='16.115'
						y2='26.184'
						gradientUnits='userSpaceOnUse'
					>
						<stop offset='0' stopColor='#fff' />
						<stop offset='1' stopColor='#fff' stopOpacity='0' />
					</linearGradient>
				</defs>
				<path
					d='M9.312 0C6.974-.013 4.607 1.2 3.496 3.286 2.2 5.573 1.726 8.202 1.234 10.752L.05 18.044c-.132 1.49-.062 3.198.997 4.365.853.845 2.754-1.447 2.646.327.36 1.194 2.36 1.318 2.644.018.5-1.302.72.74 1.374.99.762.76 2.217.892 2.797-.146.902-1.143 1.377.67 2.287.82.96.524 2.215-.106 2.262-1.215.186-1.31-.39-2.587-.268-3.903-.074-4.664 1.724-9.268.842-13.93-.32-1.956-1.546-3.738-3.336-4.63C11.38.26 10.348-.01 9.312 0zM5.634 5.943c1.353.27.433 3.13-.716 1.974-.533-.652-.14-1.845.716-1.974zm5.384.83c1.324-.163 1.62 2.074.175 1.98-1.114.097-1.26-1.873-.175-1.98zm.41 4.732c.462.93-.845 1.384-1.35.377-.56-1.117-1.933.614-2.92-.214-.857-.72-1.552.556-2.458.653-1.448.154.274-1.56.8-2.087.88-.878 2.257-.274 3.448-.597 1.074-.29 2.08 1.065 2.478 1.868z'
					fill='url(#A)'
				/>
			</svg>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='ghost2'
				width='60'
				height='93'
				viewBox='0 0 15.875 24.606'
			>
				<defs>
					<linearGradient
						id='A'
						x1='17.056'
						y1='-16.316'
						x2='-.24'
						y2='26.184'
						gradientUnits='userSpaceOnUse'
					>
						<stop offset='0' stopColor='#fff' />
						<stop offset='1' stopColor='#fff' stopOpacity='0' />
					</linearGradient>
				</defs>
				<path
					d='M6.563 0C8.9-.013 11.268 1.2 12.38 3.286c1.297 2.286 1.77 4.915 2.262 7.465l1.184 7.292c.132 1.49.062 3.198-.997 4.365-.853.845-2.754-1.447-2.646.327-.36 1.194-2.36 1.318-2.644.018-.5-1.302-.72.74-1.374.99-.762.76-2.217.892-2.797-.146-.902-1.143-1.377.67-2.287.82-.96.524-2.215-.106-2.262-1.215-.186-1.31.39-2.587.268-3.903.074-4.664-1.724-9.268-.842-13.93C.565 3.415 1.8 1.633 3.58.74 4.495.26 5.527-.01 6.563 0zm3.677 5.943c-1.353.27-.433 3.13.716 1.974.533-.652.14-1.845-.716-1.974zm-5.384.83c-1.324-.163-1.62 2.074-.175 1.98 1.114.097 1.26-1.873.175-1.98zm-.41 4.732c-.462.93.845 1.384 1.35.377.56-1.117 1.933.614 2.92-.214.857-.72 1.552.556 2.458.653 1.448.154-.274-1.56-.8-2.087-.88-.878-2.257-.274-3.448-.597-1.074-.29-2.08 1.065-2.478 1.868z'
					fill='url(#A)'
				/>
			</svg>
			<BannerHalloween />
			<HeaderHalloween onScrollToRules={handleScrollToRules} />
			<BodyHallowween />
			<div id='item-hot'>
				<ProductList />
			</div>
			<div id='item-access'>
				<AccessoriesList />
			</div>
			<div id='item-iphone'>
				<AppleList />
			</div>
			<div id='item-airpods'>
				<ProductPercent />
			</div>
			<div id='item-ipad'>
				<IpadList />
			</div>
			<div id='item-mac'>
				<LaptopList />
			</div>
			<div className='item-watch'>
				<AndroidList />
			</div>
			<div id='item-toy'>
				<ToyList />
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
								slidesPerView: 3.5,
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
}
