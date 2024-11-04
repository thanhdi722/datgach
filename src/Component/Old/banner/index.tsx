'use client';
import React from 'react';
import Image from 'next/image';
import { Spin } from 'antd';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './banner.scss';
import bannerMobile from '../../../../public/old/banner-mobile.jpg';
import { useQuery } from '@tanstack/react-query';

const query = `
query getSlider($filter: SliderFilterInput) {
  Slider(filter: $filter) {
    items {
      title
      identifier
      Banner {
        __typename
        items {
          banner_id
          caption
          link
          media
          media_alt
          name
          slider_id
        }
        page_info {
          current_page
          page_size
          total_pages
        }
      }
    }
    total_count
  }
}`;

const variables = {
	filter: {
		identifier: {
			eq: 'banner-may-cu',
		},
	},
};

async function fetchBannerData() {
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
	return data.data.Slider.items;
}

const Banner: React.FC = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['fetchBannerData'],
		queryFn: fetchBannerData,
		staleTime: 300000,
	});

	const categoryData = data?.[0]?.Banner?.items;
	const bannerDesktopData = categoryData?.find((cateData: { name: string }) =>
		cateData.name.startsWith('Head Máy Cũ Desktop')
	);
	const bannerMobileData = categoryData?.find((cateData: { name: string }) =>
		cateData.name.startsWith('Head Máy Cũ Mobile')
	);

	return (
		<div className='banner'>
			<div className='banner-desktop'>
				{isLoading ? (
					<Spin>
						<div style={{ width: 1820, height: 500 }} />
					</Spin>
				) : (
					bannerDesktopData && (
						<Image
							src={bannerDesktopData.media}
							alt={bannerDesktopData.media_alt || 'banner desktop'}
							width={1820}
							height={1400}
						/>
					)
				)}
			</div>
			<div className='banner-mobile'>
				{isLoading ? (
					<Spin>
						<div style={{ width: 1820, height: 500 }} />
					</Spin>
				) : (
					bannerMobileData && (
						<Image
							src={bannerMobileData.media}
							alt={bannerMobileData.media_alt || 'banner desktop'}
							width={1820}
							height={1400}
						/>
					)
				)}
			</div>
		</div>
	);
};

export default Banner;
