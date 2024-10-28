'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Spin } from 'antd';
import DecorProduct from '../../../../../public/halloween/ic-to.png';
import DecorProduct2 from '../../../../../public/halloween/ICON-DRAGON.png';
import FrameProduct from '../../../../../public/halloween/frame-product.png';
import { useProductSaleData } from '../../../../hooksHalloween/useProductSaleData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './acess-women.scss';

export interface Product {
	id: number;
	name: string;
	url_key: string;
	image: {
		url: string;
	};
	attributes: any;
	price_range: {
		minimum_price: {
			final_price: {
				value: number;
				currency: string;
			};
		};
	};
}

const formatPriceWithCondition = (salePrice: number) => {
	const salePriceStr = salePrice.toString();
	const numberOfDigits = salePriceStr.length;

	if (numberOfDigits > 7) {
		const formattedPrice = salePriceStr.replace(/(?<=\d)\d(?=\d{6})/g, 'x').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
		return formattedPrice;
	} else {
		const formattedPrice = salePriceStr.replace(/^(\d)(\d)/, '$1.x').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
		return formattedPrice;
	}
};

const AccessTo210: React.FC = () => {
	const { data, isLoading } = useProductSaleData();
	const currentDate = new Date();
	const targetDate = new Date('2024-10-30');
	const filteredItem = data?.find((item: any) => item.title === 'Giá sốc ngày 6');
	const productSale = filteredItem?.items || [];

	return (
		<div className='upgrade-list'>
			{isLoading ? (
				<div className='container-spin'>
					<Spin size='large' />
				</div>
			) : (
				<div className=''>
					{productSale.length > 5 ? (
						<Swiper
							modules={[Navigation, Pagination]}
							spaceBetween={10}
							slidesPerView={5}
							navigation
							pagination={{ clickable: true }}
						>
							{productSale.map((item: any, index: number) => (
								<SwiperSlide key={index}>
									<Link
										href={`https://bachlongmobile.com/products/${item.product?.url_key}`}
										passHref
										target='_blank'
										rel='noopener noreferrer'
										style={{ textDecoration: 'none', color: 'black' }}
									>
										<div className='upgrade-item'>
											<div className='upgrade-item-header'>
												<Image
													src={DecorProduct}
													width={80}
													height={80}
													quality={100}
													alt='decor-product'
													className='decor-product'
												/>
												<Image
													src={DecorProduct2}
													width={80}
													height={80}
													quality={100}
													alt='decor-product'
													className='decor-product2'
												/>
												<span></span>
												<span className='percent'>Trả góp 0%</span>
											</div>
											<div className='upgrade-item-img'>
												<div className='img-content'>
													<Image
														src={item.product?.image.url}
														width={1400}
														height={1200}
														quality={100}
														alt={`product-${index}`}
													/>
												</div>
												<div className='frame-product'>
													<Image
														src={FrameProduct}
														width={500}
														height={500}
														quality={100}
														alt='frame-product'
													/>
												</div>
											</div>
											<div className='upgrade-item-content'>
												<h4 className='upgrade-item-content-tt'>{item.product.name}</h4>
												<div className='upgrade-item-content-body'>
													<div className='upgrade-item-content-body-price'>
														{currentDate >= targetDate ? (
															<>
																{Number(item?.sale_price)?.toLocaleString('vi-VN')}{' '}
																{
																	item?.product.price_range.minimum_price.final_price
																		.currency
																}
															</>
														) : (
															<>
																{formatPriceWithCondition(Number(item?.sale_price))}{' '}
																{
																	item?.product.price_range.minimum_price.final_price
																		.currency
																}
															</>
														)}
													</div>
													<div className='upgrade-item-content-body-reduced'>
														<div className='price-reduced'>
															{Number(item?.price_original)?.toLocaleString('vi-VN')}{' '}
															{
																item?.product.price_range.minimum_price.final_price
																	.currency
															}
														</div>
														{currentDate >= targetDate && (
															<div className='percent'>
																-
																{Math.ceil(
																	((item?.price_original - item.sale_price) /
																		item?.price_original) *
																		100
																)}
																%
															</div>
														)}
													</div>
												</div>
											</div>
										</div>
									</Link>
								</SwiperSlide>
							))}
						</Swiper>
					) : (
						<div className='upgrade'>
							{productSale.map((item: any, index: number) => (
								<Link
									key={index}
									href={`https://bachlongmobile.com/products/${item.product?.url_key}`}
									passHref
									target='_blank'
									rel='noopener noreferrer'
									style={{ textDecoration: 'none', color: 'black' }}
								>
									<div className='upgrade-item'>
										<div className='upgrade-item-header'>
											<Image
												src={DecorProduct}
												width={80}
												height={80}
												quality={100}
												alt='decor-product'
												className='decor-product'
											/>
											<Image
												src={DecorProduct2}
												width={80}
												height={80}
												quality={100}
												alt='decor-product'
												className='decor-product2'
											/>
											<span></span>
											<span className='percent'>Trả góp 0%</span>
										</div>
										<div className='upgrade-item-img'>
											<div className='img-content'>
												<Image
													src={item.product?.image.url}
													width={1400}
													height={1200}
													quality={100}
													alt={`product-${index}`}
												/>
											</div>
											<div className='frame-product'>
												<Image
													src={FrameProduct}
													width={500}
													height={500}
													quality={100}
													alt='frame-product'
												/>
											</div>
										</div>
										<div className='upgrade-item-content'>
											<h4 className='upgrade-item-content-tt'>{item.product.name}</h4>
											<div className='upgrade-item-content-body'>
												<div className='upgrade-item-content-body-price'>
													{currentDate >= targetDate ? (
														<>
															{Number(item?.sale_price)?.toLocaleString('vi-VN')}{' '}
															{
																item?.product.price_range.minimum_price.final_price
																	.currency
															}
														</>
													) : (
														<>
															{formatPriceWithCondition(Number(item?.sale_price))}{' '}
															{
																item?.product.price_range.minimum_price.final_price
																	.currency
															}
														</>
													)}
												</div>
												<div className='upgrade-item-content-body-reduced'>
													<div className='price-reduced'>
														{Number(item?.price_original)?.toLocaleString('vi-VN')}{' '}
														{item?.product.price_range.minimum_price.final_price.currency}
													</div>
													{currentDate >= targetDate && (
														<div className='percent'>
															-
															{Math.ceil(
																((item?.price_original - item.sale_price) /
																	item?.price_original) *
																	100
															)}
															%
														</div>
													)}
												</div>
											</div>
										</div>
									</div>
								</Link>
							))}
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default AccessTo210;
