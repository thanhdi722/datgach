import React, { useState } from 'react';
import Image from 'next/image';
import ContentImage from '../../../../public/old/content-01.jpg';
import './content.scss';
import { useQuery } from '@tanstack/react-query';

const query = `
query getCategories($filters:CategoryFilterInput){categories(filters:$filters){__typename items{description icon_image image_banner name url_path daily_sale{start_date end_date sale_type}slider_banner_left{title identifier Banner{items{banner_id caption link media media_alt name}page_info{current_page page_size total_pages}}}slider_banner_right{title identifier Banner{items{banner_id caption link media media_alt name}page_info{current_page page_size total_pages}}}daily_sale_id slider_id slider_two is_trend content_hot content_new check_show_category_in_page check_show_brand_in_page show children{breadcrumbs{...BreadcrumbFields}...CategoryTreeFields children{breadcrumbs{...BreadcrumbFields}...CategoryTreeFields children{breadcrumbs{...BreadcrumbFields}...CategoryTreeFields children{breadcrumbs{...BreadcrumbFields}...CategoryTreeFields}}}image_banner icon_image}}}}fragment CategoryTreeFields on CategoryTree{is_show_category_slider category_trend{__typename name image url_key url_path}icon_image image_banner slider_banner_left{title identifier Banner{items{banner_id caption link media media_alt name}page_info{current_page page_size total_pages}}}slider_banner_right{title identifier Banner{items{banner_id caption link media media_alt name}page_info{current_page page_size total_pages}}}slider_two is_trend show check_show_category_in_page check_show_brand_in_page content_hot content_new uid id available_sort_by canonical_url name image include_in_menu meta_description meta_keywords meta_title display_mode url_key url_path description path path_in_store children_count position}fragment BreadcrumbFields on Breadcrumb{category_level category_name category_uid category_url_key category_url_path}
`;

const variables = {
	filters: { url_key: { eq: 'product-old' } },
};

async function fetchContentData() {
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
	return data.data.categories.items;
}

const Content = () => {
	const [isExpanded, setIsExpanded] = useState(false);

	const { data, error, isLoading } = useQuery({
		queryKey: ['contentData'],
		queryFn: fetchContentData,
		staleTime: 300000,
	});

	const contentData = data?.[0]?.description;

	console.log('contentData: ', contentData);

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<div className='content'>
			<div className='container'>
				<div className='content-wrap'>
					<div
						className={`content-item ${isExpanded ? 'expanded' : 'collapsed'}`}
						dangerouslySetInnerHTML={{ __html: contentData }}
					></div>
					{isExpanded && (
						<div className='image-wrap'>
							<Image src={ContentImage} alt='content' width={1000} height={1000} />
						</div>
					)}
				</div>

				<div style={{ marginTop: '10px', textAlign: 'center' }}>
					<button className='button' onClick={toggleExpand}>
						<span className='button-content'>{isExpanded ? 'Thu gọn' : 'Xem thêm'}</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Content;
