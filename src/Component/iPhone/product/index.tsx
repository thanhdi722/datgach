import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { Spin } from 'antd';
import './product.scss';

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
    aggregations {
      attribute_code
      count
      label
      options {
        count
        label
        value
        swatch_data {
          type
          value
        }
      }
      position
    }
    sort_fields {
      default
      options {
        label
        value
      }
    }
    total_count
    page_info {
      current_page
      page_size
      total_pages
    }  }
}
fragment ProductInterfaceField on ProductInterface {
 image_banner
  __typename
  sku
  uid
  name
  url_key
  url_suffix
  canonical_url
  stock_status
  categories {
    __typename
    name
    url_key
    url_path
    level
    uid
    position
    icon_image
    image
    path
  }
  id
  meta_description
  meta_keyword
  meta_title
  new_from_date
  new_to_date
  rating_summary
  review_count
  thumbnail {
    url
    position
  }
  image {
    url
  }
  price_range {
    ...PriceRangeField
  }
  ...CustomField
}
fragment CustomField on ProductInterface {
  color
  country_of_manufacture
  daily_sale {
    end_date
    entity_id
    sale_price
    sale_qty
    saleable_qty
    sold_qty
    start_date
    __typename
  }
  rating_summary_start {
    star_1
    star_2
    star_3
    star_4
    star_5
  }
  attributes {
    attribute_code
    label
    value
  }
}
fragment PriceRangeField on PriceRange {
  __typename
  maximum_price {
    ...ProductPriceField
  }
  minimum_price {
    ...ProductPriceField
  }
}
fragment ProductPriceField on ProductPrice {
  discount {
    amount_off
    percent_off
  }
  final_price {
    currency
    value
  }
  regular_price {
    currency
    value
  }
}
`;

const variables = {
	filter: {
		category_uid: {
			eq: 'MTk4',
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

const ProductList: React.FC = () => {
	const { data, error, isLoading } = useQuery<Product[]>({
		queryKey: ['productListData'],
		queryFn: fetchProductListData,
		staleTime: 300000,
	});

	const [activeTab, setActiveTab] = useState<string>('iPhone 16');
	const [activeSubTab, setActiveSubTab] = useState<string>('');
	const [filteredData, setFilteredData] = useState<Product[]>([]);
	const [visibleCount, setVisibleCount] = useState<number>(10);

	const tabs = [
		{
			name: 'iPhone 16',
			subTabs: ['iPhone 16 Pro Max', 'iPhone 16 Pro', 'iPhone 16 Plus', 'iPhone 16'],
		},
		{
			name: 'iPhone 15',
			subTabs: ['iPhone 15 Pro Max', 'iPhone 15 Pro', 'iPhone 15 Plus', 'iPhone 15'],
		},
		{
			name: 'iPhone 14',
			subTabs: ['iPhone 14 Pro Max', 'iPhone 14 Pro', 'iPhone 14 Plus', 'iPhone 14'],
		},
		{
			name: 'iPhone 13',
			subTabs: [],
		},
		{
			name: 'iPhone 11',
			subTabs: [],
		},
	];

	useEffect(() => {
		const filtered = data?.filter((product) => {
			const matchesTab =
				(activeTab === 'iPhone 16' && activeSubTab === 'iPhone 16') ||
				(activeTab === 'iPhone 15' && activeSubTab === 'iPhone 15') ||
				(activeTab === 'iPhone 14' && activeSubTab === 'iPhone 14')
					? product.name.includes(activeTab) &&
					  !product.name.includes('Pro') &&
					  !product.name.includes('Plus')
					: product.name.includes(activeTab);

			const matchesSubTab = activeSubTab
				? activeSubTab.includes('Pro Max')
					? product.name.includes('Pro Max')
					: activeSubTab.includes('Pro')
					? product.name.includes('Pro') && !product.name.includes('Pro Max')
					: product.name.includes(activeSubTab)
				: true;

			return matchesTab && matchesSubTab;
		});
		setFilteredData(filtered || []);

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
	}, [data, activeTab, activeSubTab]);

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
		setVisibleCount((prevCount) => prevCount + 5);
	};

	return (
		<div className='product-list'>
			<div className='upgrade-list'>
				<div className='container'>
					<Image
						src='/apple/product-banner-01.png'
						width={1820}
						height={1200}
						alt='product-banner-01'
						className=''
					/>
					<div className='tabs'>
						{tabs.map((tab) => (
							<div key={tab.name} style={{ marginBottom: '10px' }}>
								<button
									onClick={() => {
										setActiveTab(tab.name);
										setActiveSubTab('');
									}}
									className={activeTab === tab.name ? 'tab active' : 'tab'}
									style={{
										color: activeTab === tab.name ? 'white' : '#000',
										backgroundColor: activeTab === tab.name ? '#ef373e' : '#f1f1f1',
										border: activeTab === tab.name ? '1px solid #ef373e' : '1px solid #ccc',
										padding: '10px 20px',
										margin: '5px',
										borderRadius: '5px',
										cursor: 'pointer',
									}}
								>
									{tab.name}
								</button>
							</div>
						))}
					</div>

					<div style={{ display: 'flex', marginBottom: '12px' }} className='sub-tab-list'>
						{tabs
							.find((tab) => tab.name === activeTab)
							?.subTabs.map((subTab) => (
								<button
									key={subTab}
									onClick={() => setActiveSubTab(subTab)}
									className={activeSubTab === subTab ? 'sub-tab active' : 'sub-tab'}
									style={{
										color: activeSubTab === subTab ? 'white' : '#000',
										backgroundColor: activeSubTab === subTab ? '#ef373e' : '#f1f1f1',
										border: activeSubTab === subTab ? '1px solid #ef373e' : '1px solid #ccc',
										padding: '5px 10px',
										margin: '5px',
										borderRadius: '5px',
										cursor: 'pointer',
									}}
								>
									{subTab}
								</button>
							))}
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
										<span className='percent'>Trả góp 0%</span>
										<Image
											src='/apple/author.webp'
											width={60}
											height={20}
											quality={100}
											alt='author'
										/>
									</div>
									<div className='upgrade-item-img'>
										<Image
											src={product.image.url}
											width={1400}
											height={1200}
											quality={100}
											alt={`product-${index}`}
										/>
									</div>
									<div className='upgrade-item-content'>
										<h4 className='upgrade-item-content-tt'>{product.name}</h4>
										<div className='upgrade-item-content-body'>
											<div className='upgrade-item-content-body-price'>
												{product.price_range.minimum_price.final_price.value.toLocaleString(
													'vi-VN'
												)}{' '}
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
									backgroundColor: '#ef373e',
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
	);
};

export default ProductList;
