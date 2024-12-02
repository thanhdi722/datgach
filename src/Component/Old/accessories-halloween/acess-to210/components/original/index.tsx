import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { Spin } from 'antd';
import './acess-women.scss';

export interface Product {
	id: number;
	name: string;
	url_key: string;
	image_banner: any;
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
      image_banner
      name
      sku
      uid
      url_key
      thumbnail {
        url
      }
      image {
        url
      }
    attributes {
        attribute_code
        label
        value
    }
      price_range {
        minimum_price {
          final_price {
            currency
            value
          }
          regular_price {
            currency
            value
          }
          discount {
            amount_off
            percent_off
          }
        }
        maximum_price {
            final_price {
            currency
            value
          }
          regular_price {
            currency
            value
          }
          discount {
            amount_off
            percent_off
          }
        }

      }
      categories {
        name
        url_key
      }
      stock_status
      daily_sale {
        sale_price
        sale_qty
        start_date
        end_date
      }
    }
    total_count
    page_info {
      current_page
      total_pages
    }
    aggregations {
      attribute_code
      label
      options {
        label
        value
      }
    }
  }
}
`;

const variables = {
	filter: {
		category_uid: {
			eq: 'NDM3',
		},
	},
	pageSize: 15,
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

const Original: React.FC = () => {
	const {
		data: Access20k,
		error,
		isLoading,
	} = useQuery<Product[]>({
		queryKey: ['12OriginalData'],
		queryFn: fetchProductListData,
		staleTime: 300000,
	});

	const [filteredData, setFilteredData] = useState<Product[]>([]);
	const [visibleCount, setVisibleCount] = useState<number>(10);

	useEffect(() => {
		setFilteredData(
			(Access20k || [])
				.filter(
					(product) =>
						product.name.startsWith('iPhone 12') &&
						!product.name.includes('iPhone 12 Pro Max') &&
						!product.name.includes('iPhone 12 Plus') &&
						!product.name.includes('iPhone 12 Mini') &&
						!product.name.includes('iPhone 12 Pro')
				)
				.sort(
					(a, b) =>
						a.price_range.minimum_price.final_price.value - b.price_range.minimum_price.final_price.value
				)
		);

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
	}, [Access20k]);

	if (isLoading) {
		return (
			<div className='loading container-spin'>
				<Spin />
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
		<>
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
								<span></span>
								<span className='percent'>Trả góp 0%</span>
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
								{product.image_banner && (
									<div className='frame-product'>
										<Image
											src={product.image_banner}
											width={500}
											height={500}
											quality={100}
											alt='frame-product'
										/>
									</div>
								)}
							</div>
							<div className='upgrade-item-content'>
								<h4 className='upgrade-item-content-tt'>{product.name}</h4>
								<div className='upgrade-item-content-body'>
									<div className='upgrade-item-content-body-price'>
										{product.price_range.minimum_price.final_price.value.toLocaleString('vi-VN')}{' '}
										{product.price_range.minimum_price.final_price.currency}
									</div>
									<div className='upgrade-item-content-body-reduced'>
										<div className='price-reduced'>
											{product.attributes && product.attributes[0]?.value
												? Number(product.attributes[0].value).toLocaleString('vi-VN')
												: ''}{' '}
											{product.attributes[0].value &&
												product.price_range.minimum_price.final_price.currency}
										</div>

										{product.attributes[0].value && (
											<div className='percent'>
												-
												{Math.ceil(
													((product.attributes[0].value -
														product.price_range.minimum_price.final_price.value) /
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
		</>
	);
};

export default Original;
