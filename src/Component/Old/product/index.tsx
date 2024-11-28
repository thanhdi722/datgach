'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import DecorWomen from '../../../../public/halloween/decor-women-07.png';
import Access110 from '../accessories-halloween/acess-110';
import Access20k from '../accessories-halloween/acess-20k/index';
import Access210 from '../accessories-halloween/acess-210';
import AccessTo210 from '../accessories-halloween/acess-to210';
import Access310 from '../accessories-halloween/acess-310';
import Access290 from '../accessories-halloween/acess-290';
import AccessXS from '../accessories-halloween/acess-xs';
import './product.scss';
import 'swiper/css';

const ProductList: React.FC = () => {
	const [activeTab, setActiveTab] = useState<number>(0);
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const [disabledTabs, setDisabledTabs] = useState<number[]>([]);

	const tabs = [
		{
			index: 0,
			name: <span>iPhone 16</span>,
			component: <Access20k />,
		},
		{
			index: 1,
			name: <span>iPhone 15</span>,
			component: <Access110 />,
		},
		{
			index: 2,
			name: <span>iPhone 14</span>,
			component: <Access210 />,
		},
		{
			index: 3,
			name: <span>iPhone 13</span>,
			component: <Access310 />,
		},
		{
			index: 4,
			name: <span>iPhone 12</span>,
			component: <AccessTo210 />,
		},
		{
			index: 5,
			name: <span>iPhone 11</span>,
			component: <Access290 />,
		},
		{
			index: 6,
			name: <span>iPhone XS Max/Xs/Xr</span>,
			component: <AccessXS />,
		},
	];

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div className='product-list'>
			<div className='container'>
				<div className='upgrade-list bg-01'>
					<div className='upgrade-list-tt'>
						<span>iPhone</span>
					</div>

					{isMobile ? (
						<Swiper spaceBetween={10} slidesPerView={2.8}>
							{tabs.map((tab) => (
								<SwiperSlide key={tab.index} style={{ padding: '1.2rem 0' }}>
									<button
										onClick={() => setActiveTab(tab.index)}
										className={activeTab === tab.index ? 'tab active' : 'tab'}
										style={{
											width: '100%',
											color: activeTab === tab.index ? '#fff' : '#333',
											backgroundColor: activeTab === tab.index ? '#ff4d4f' : '#fff',
											borderRadius: '8px',
											cursor: 'pointer',
											transition: 'all 0.3s ease',
											padding: '10px',
											boxShadow:
												activeTab === tab.index ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none',
											fontSize: '1.4rem',
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
						<div className='tabs'>
							{tabs.map((tab) => (
								<div key={tab.index} style={{ flex: 1 }}>
									<button
										onClick={() => setActiveTab(tab.index)}
										className={activeTab === tab.index ? 'tab-access active' : 'tab-access'}
										style={{
											width: '100%',
											color: activeTab === tab.index ? '#fff' : '#333',
											backgroundColor: activeTab === tab.index ? '#ff4d4f' : '#fff',
											borderRadius: '8px',
											padding: '15px',
											cursor: 'pointer',
											fontSize: '1.4rem',
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
