'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { Spin } from 'antd';
import DecorProduct from '../../../../public/halloween/ic-to.png';
import DecorWomen from '../../../../public/halloween/decor-women-06.png';
import FrameProduct from '../../../../public/halloween/frame-product.png';
import './apple.scss';
import { useProductSaleData } from '../../../hooksHalloween/useProductSaleData';
import DecorProduct2 from '../../../../public/halloween/ICON-DRAGON.png';
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

const query = `
 query getProducts(
  $search: String
  $filter: ProductAttributeFilterInput
  $sort: ProductAttributeSortInput
  $pageSize: Int
  $currentPage: Int
) {
  products(
    search: $search
    filter: $filter
    sort: $sort
    pageSize: $pageSize
    currentPage: $currentPage
  ) {
    items {
      ...ProductInterfaceField
    }
  }
}
fragment ProductInterfaceField on ProductInterface {
  name
  url_key
  image {
    url
  }
  attributes {
    attribute_code
    value
  }
  price_range {
    minimum_price {
      final_price {
        value
        currency
      }
    }
  }
}
`;

const variables = {
	filter: {
		category_uid: {
			eq: 'Mzg2',
		},
	},
	pageSize: 200,
	currentPage: 1,
};

async function fetchProductListData() {
	const response = await fetch('https://beta-api.bachlongmobile.com/graphql', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query,
			variables,
		}),
	});

	const data = await response.json();
	return data.data.products.items as Product[];
}

const ToyList: React.FC = () => {
	const {
		data: DataToy,
		error,
		isLoading,
	} = useQuery<Product[]>({
		queryKey: ['productToy'],
		queryFn: fetchProductListData,
		staleTime: 300000,
	});

	const { data } = useProductSaleData();
	const productSale = data?.[0]?.items;

	const productSaleNames = productSale?.map((productSale: any) => productSale.product.name);
	const productSalePrices = productSale?.map((productSale: any) => productSale.sale_price);

	const getProductSalePrice = (productName: string, originalPrice: number) => {
		if (productSaleNames && productSalePrices) {
			const saleIndex = productSaleNames.findIndex((name: string) => name === productName);
			if (saleIndex !== -1) {
				return productSalePrices[saleIndex].toLocaleString('vi-VN');
			}
		}
		return originalPrice.toLocaleString('vi-VN');
	};

	const [filteredData, setFilteredData] = useState<Product[]>([]);
	const [visibleCount, setVisibleCount] = useState<number>(10);

	useEffect(() => {
		let filtered = DataToy || [];
		setFilteredData(filtered);

		const handleResize = () => {
			if (window.innerWidth < 768) {
				setVisibleCount(4);
			} else {
				setVisibleCount(10);
			}
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [DataToy]);

	if (isLoading) {
		return (
			<div className='container-spin'>
				<Spin size='large' />
			</div>
		);
	}

	if (error) {
		return <div>Error loading data</div>;
	}

	const visibleProducts = filteredData.slice(0, visibleCount);

	const loadMore = () => {
		setVisibleCount((prevCount) => prevCount + 10);
	};

	return (
		<div
			className='product-list-halloween'
			style={
				{
					// background: 'linear-gradient(180deg, #15001B 0, var(--bg-gradient-white, #5D0069) 90%)',
				}
			}
		>
			<div>
				<div className='upgrade-list'>
					<div className='container'>
						<div className='women-decor'>
							<Image src={DecorWomen} width={1920} height={1200} alt='product-banner-01' className='' />
						</div>

						<div className='upgrade'>
							{visibleProducts.map((product, index) => (
								<Link
									key={index}
									href={`https://bachlongmobile.com/products/${product.url_key}`}
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
											{/* Only show "Trả góp 0%" if the product price is greater than 3,000,000 */}
											{product.price_range.minimum_price.final_price.value > 3000000 && (
												<span className='percent'>Trả góp 0%</span>
											)}
										</div>
										<div className='upgrade-item-img'>
											<div className='img-content'>
												<Image
													src={product.image.url}
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
											<h4 className='upgrade-item-content-tt'>{product.name}</h4>
											<div className='upgrade-item-content-body'>
												<div className='upgrade-item-content-body-price'>
													{getProductSalePrice(
														product.name,
														product.price_range.minimum_price.final_price.value
													)}{' '}
													{product.price_range.minimum_price.final_price.currency}
												</div>
												<div className='upgrade-item-content-body-reduced'>
													<div className='price-reduced'>
														{product.attributes && product.attributes[0]?.value
															? Number(product.attributes[0].value).toLocaleString(
																	'vi-VN'
															  )
															: ''}{' '}
														{product.attributes[0].value &&
															product.price_range.minimum_price.final_price.currency}
													</div>

													{product.attributes[0].value && (
														<div className='percent'>
															-
															{Math.ceil(
																((product.attributes[0].value -
																	product.price_range.minimum_price.final_price
																		.value) /
																	product.attributes[0].value) *
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
						{visibleCount < filteredData.length && (
							<div style={{ textAlign: 'center', marginTop: '20px' }}>
								<button
									onClick={loadMore}
									style={{
										backgroundColor: '#ff7518',
										color: 'white',
										border: 'none',
										padding: '10px 20px',
										borderRadius: '5px',
										cursor: 'pointer',
									}}
								>
									Xem thêm
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ToyList;