import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import './category.scss';

const Category = () => {
	const categoryImages = [
		'/sam-sung/category-01.png',
		'/sam-sung/category-02.png',
		'/sam-sung/category-03.png',
		'/sam-sung/category-04.png',
		'/sam-sung/category-05.png',
		'/sam-sung/category-06.png',
		'/sam-sung/category-07.png',
	];

	const handleClickiPhone = () => {
		const iPhone = document.getElementById('item-iphone');
		if (iPhone) {
			iPhone.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const handleClickiPad = () => {
		const iPad = document.getElementById('item-ipad');
		if (iPad) {
			iPad.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const handleClickWatch = () => {
		const Watch = document.getElementById('item-watch');
		if (Watch) {
			Watch.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const handleClickMac = () => {
		const Mac = document.getElementById('item-mac');
		if (Mac) {
			Mac.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const handleClickAirpods = () => {
		const AirPods = document.getElementById('item-airpods');
		if (AirPods) {
			AirPods.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const handleClickAccess = () => {
		const Access = document.getElementById('item-access');
		if (Access) {
			Access.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const categoryLinks = {
		6: 'https://bachlongmobile.com/bnews/applecare-chinh-thuc-co-mat-tai-bach-long-mobile-bao-hanh-tat-ca-ke-ca-roi-vo-vao-nuoc/',
		7: 'https://bachlongmobile.com/bnews/tra-truoc-0-dong-de-dang-len-doi-samsung-galaxy-voi-samsung-finance/',
	};

	const renderCategoryItem = (src: string, index: number) => {
		const isLinkWrapped = index === 6 || index === 7;

		const content = (
			<div
				className='category-it'
				onClick={
					index === 0
						? handleClickiPhone
						: index === 1
						? handleClickiPad
						: index === 2
						? handleClickWatch
						: index === 3
						? handleClickMac
						: index === 4
						? handleClickAirpods
						: index === 5
						? handleClickAccess
						: undefined
				}
			>
				<Image
					src={src}
					width={1200}
					height={1100}
					alt={`category-apple-${index + 1}`}
					className='category-image'
				/>
			</div>
		);

		if (isLinkWrapped) {
			return (
				<Link href={categoryLinks[index] || '/default-link'} key={index}>
					{content}
				</Link>
			);
		}

		return <div key={index}>{content}</div>;
	};

	return (
		<div className='category-wrapper'>
			<div className='container'>
				<div className='category-container-samsung'>
					{categoryImages.map((src, index) => renderCategoryItem(src, index))}
				</div>
			</div>
		</div>
	);
};

export default Category;
