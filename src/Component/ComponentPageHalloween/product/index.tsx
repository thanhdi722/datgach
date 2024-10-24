'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import DecorWomen from '../../../../public/halloween/decor-women-01.png';
import Access10k from '../accessories20_10/acess-10k/index';
import Access20k from '../accessories20_10/acess-20k/index';
import Access110 from '../accessories20_10/acess-110/index';
import AccessTo210 from '../accessories20_10/acess-to210/index';
import Access310 from '../accessories20_10/acess-310/index';
import Access290 from '../accessories20_10/acess-290/index';
import Access210 from '../accessories20_10/acess-210/index';
import 'swiper/css';
import './product.scss';

const ProductList: React.FC = () => {
	const currentDate = new Date();
	const tabs = [
		{
			index: 0,
			name: (
				<span>
					<span style={{ fontSize: '1.4rem', fontWeight: '600' }}>NGÀY 25/10</span>
				</span>
			),
			component: <Access10k />,
			date: new Date('2024-10-25'),
		},
		{
			index: 1,
			name: (
				<span>
					<span style={{ fontSize: '1.4rem', fontWeight: '600' }}>NGÀY 26/10</span>
				</span>
			),
			component: <Access20k />,
			date: new Date('2024-10-26'),
		},
		{
			index: 2,
			name: (
				<span>
					<span style={{ fontSize: '1.4rem', fontWeight: '600' }}>NGÀY 27/10</span>
				</span>
			),
			component: <Access110 />,
			date: new Date('2024-10-27'),
		},
		{
			index: 3,
			name: (
				<span>
					<span style={{ fontSize: '1.4rem', fontWeight: '600' }}>NGÀY 28/10</span>
				</span>
			),
			component: <Access210 />,
			date: new Date('2024-10-28'),
		},
		{
			index: 4,
			name: (
				<span>
					<span style={{ fontSize: '1.4rem', fontWeight: '600' }}>NGÀY 29/10</span>
				</span>
			),
			component: <Access310 />,
			date: new Date('2024-10-29'),
		},
		{
			index: 5,
			name: (
				<span>
					<span style={{ fontSize: '1.4rem', fontWeight: '600' }}>NGÀY 30/10</span>
				</span>
			),
			component: <AccessTo210 />,
			date: new Date('2024-10-30'),
		},
		{
			index: 6,
			name: (
				<span>
					<span style={{ fontSize: '1.4rem', fontWeight: '600' }}>NGÀY 31/10</span>
				</span>
			),
			component: <Access290 />,
			date: new Date('2024-10-31'),
		},
	];
	const initialActiveTab = tabs.findIndex((tab) => currentDate <= tab.date);
	const [activeTab, setActiveTab] = useState<number>(initialActiveTab === -1 ? 0 : initialActiveTab);
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const [disabledTabs, setDisabledTabs] = useState<number[]>([]);

	useEffect(() => {
		const disabled = tabs.filter((tab) => currentDate > tab.date).map((tab) => tab.index);
		setDisabledTabs(disabled);

		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [tabs]);

	return (
		<div className='product-list-halloween'>
			<div className='container'>
				<div className='upgrade-list bg-01'>
					<div className='women-decor'>
						<Image
							src={DecorWomen}
							width={1400}
							height={1200}
							quality={100}
							priority
							alt='product-banner-01'
							sizes='(max-width: 768px) 100vw, (min-width: 768px) 50vw, (min-width: 1200px) 33vw'
						/>
					</div>

					{isMobile ? (
						<Swiper spaceBetween={10} slidesPerView={2.8}>
							{tabs.map((tab) => (
								<SwiperSlide key={tab.index} style={{ padding: '1.2rem 0' }}>
									<button
										onClick={() => setActiveTab(tab.index)}
										className={activeTab === tab.index ? 'tab-halloween active' : 'tab-halloween'}
										style={{
											width: '100%',
											color: activeTab === tab.index ? '#fff' : '#333',
											backgroundColor: activeTab === tab.index ? '#f8f412' : '#fff',
											border: activeTab === tab.index ? '2px solid #ff4d4f' : '2px solid #eee',
											borderRadius: '8px',
											cursor: disabledTabs.includes(tab.index) ? 'not-allowed' : 'pointer',
											transition: 'all 0.3s ease',
											boxShadow:
												activeTab === tab.index ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none',
											fontSize: '1.2rem',
											minHeight: '4rem',
										}}
										disabled={disabledTabs.includes(tab.index)}
									>
										{tab.name}
									</button>
								</SwiperSlide>
							))}
						</Swiper>
					) : (
						<div className='tabs-grid'>
							{tabs.map((tab) => (
								<div key={tab.index} style={{ flex: 1 }}>
									<button
										onClick={() => setActiveTab(tab.index)}
										className={activeTab === tab.index ? 'tab-halloween active' : 'tab-halloween'}
										style={{
											width: '100%',
											backgroundColor: activeTab === tab.index ? '#f8f412' : '#fff',
											borderRadius: '8px',
											cursor: disabledTabs.includes(tab.index) ? 'not-allowed' : 'pointer',
											transition: 'all 0.3s ease',
											boxShadow:
												activeTab === tab.index ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none',
										}}
										disabled={disabledTabs.includes(tab.index)}
									>
										{tab.name}
									</button>
								</div>
							))}
						</div>
					)}

					<div>{tabs[activeTab]?.component}</div>
				</div>
			</div>
		</div>
	);
};

export default ProductList;
