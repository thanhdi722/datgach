const query = `query router($url:String!){route(url:$url){... on ConfigurableProduct{...ProductFields Installment_products image_banner categories{__typename name id uid level url_path parent_id}media_gallery{__typename url label disabled position ... on ProductVideo{video_content{video_provider video_url video_title media_type video_metadata}}}...PoductFiledConfigurable ...ConfigurableProductField options{...CustomizableOption}}... on SimpleProduct{...ProductFields image_banner __typename categories{__typename name uid level url_path}media_gallery{__typename url label disabled position ... on ProductVideo{video_content{video_provider video_url video_title media_type video_metadata}}}...PoductFiledSimple options{...CustomizableOption}}}}fragment PoductFiledSimple on ProductInterface{Installment_products attribute_set_id canonical_url category_for_product color country_of_manufacture created_at gift_message_available id manufacturer meta_description meta_keyword meta_title name new_from_date new_to_date only_x_left_in_stock options_container percent rating_summary review_count sku special_from_date special_price special_to_date stock_status swatch_image type_id uid updated_at url_key url_path url_suffix attributes{attribute_code label value}image{__typename disabled label position url}special_price price_range{__typename maximum_price{__typename discount{__typename amount_off percent_off}final_price{__typename currency value}}minimum_price{__typename discount{__typename amount_off percent_off}final_price{__typename currency value}}}short_description{html}description{html}}fragment PoductFiledConfigurable on ProductInterface{attribute_set_id category_for_product color country_of_manufacture created_at id manufacturer meta_description meta_keyword meta_title name options_container rating_summary sku special_from_date special_price special_to_date stock_status swatch_image type_id uid updated_at url_key url_path url_suffix accessories_bought_together{sku attribute_set_id canonical_url category_for_product color country_of_manufacture id manufacturer meta_description meta_keyword meta_title name new_from_date new_to_date options_container percent rating_summary review_count special_from_date special_price special_to_date stock_status swatch_image type_id uid url_key url_path attributes{attribute_code label value}image{disabled label position url}price_range{minimum_price{discount{amount_off percent_off}final_price{currency value}regular_price{currency value}}maximum_price{final_price{currency value}regular_price{currency value}}}reviews{items{average_rating created_at nickname summary text}}small_image{disabled label position url}thumbnail{disabled label position url}}old_products{sku attribute_set_id canonical_url category_for_product color id manufacturer meta_description meta_keyword meta_title name options_container percent rating_summary review_count special_from_date special_price special_to_date stock_status swatch_image type_id uid updated_at url_key url_path attributes{attribute_code label value}image{disabled label position url}price_range{minimum_price{discount{amount_off percent_off}final_price{currency value}regular_price{currency value}}maximum_price{final_price{currency value}regular_price{currency value}}}reviews{items{average_rating created_at nickname summary text}}small_image{disabled label position url}thumbnail{disabled label position url}}upsell_products{sku attribute_set_id canonical_url category_for_product color country_of_manufacture id manufacturer meta_description meta_keyword meta_title name options_container percent rating_summary review_count special_from_date special_price special_to_date stock_status swatch_image type_id uid url_key url_path attributes{attribute_code label value}image{disabled label position url}price_range{minimum_price{discount{amount_off percent_off}final_price{currency value}regular_price{currency value}}}reviews{items{average_rating created_at nickname summary text}}small_image{disabled label position url}thumbnail{disabled label position url}}related_products{sku attribute_set_id canonical_url category_for_product color country_of_manufacture id manufacturer meta_description meta_keyword meta_title name options_container percent rating_summary review_count special_from_date special_price special_to_date stock_status swatch_image type_id uid url_key url_path attributes{attribute_code label value}image{disabled label position url}price_range{minimum_price{discount{amount_off percent_off}final_price{currency value}regular_price{currency value}}}reviews{items{average_rating created_at nickname summary text}}small_image{disabled label position url}thumbnail{disabled label position url}}crosssell_products{name category_for_product color created_at id meta_title name options_container rating_summary sku special_from_date special_price special_to_date stock_status swatch_image type_id uid updated_at url_key url_path price_range{minimum_price{__typename discount{__typename amount_off percent_off}final_price{__typename currency value}regular_price{__typename currency value}}}attributes{attribute_code label value}image{disabled label position url}small_image{disabled label position url}...ConfigurableProductField}attributes{attribute_code label value}image{disabled label position url}price_range{minimum_price{__typename discount{__typename amount_off percent_off}final_price{__typename currency value}regular_price{__typename currency value}}}review_count short_description{html}description{html}small_image{disabled label position url}thumbnail{disabled label position url}}fragment ConfigurableProductField on ConfigurableProduct{configurable_options{label attribute_code uid attribute_uid values{default_label label uid swatch_data{__typename value}}}configurable_product_options_selection{__typename configurable_options{attribute_code label uid values{__typename uid label is_use_default is_available}}}variants{attributes{code label uid value_index}product{__typename sku name daily_sale{sale_price}image{url}price_range{maximum_price{__typename discount{__typename amount_off percent_off}final_price{__typename currency value}}minimum_price{discount{__typename amount_off percent_off}final_price{__typename currency value}regular_price{__typename currency value}}}small_image{__typename disabled label position url}url_key}}}fragment CustomizableOption on CustomizableOptionInterface{... on CustomizableDropDownOption{option_id required sort_order title uid value{option_type_id price price_type title sort_order uid}}}fragment ProductFields on ProductInterface{daily_sale{end_date entity_id sale_price sale_qty saleable_qty sold_qty start_date __typename}} `;
const productUrls = {
    "iphone-16-plus-512gb": "iphone-16-plus-512gb-chinh-hang-vn-a",
    "iphone-16-pro-max-1tb": "iphone-16-pro-max-1tb-chinh-hang-vn-a",
    "iphone-16-pro-max-512gb": "iphone-16-pro-max-512gb-chinh-hang-vn-a",
    "iphone-16-pro-max-256gb": "iphone-16-pro-max-256gb-chinh-hang-vn-a",
    "iphone-16-pro-1tb": "iphone-16-pro-1tb-chinh-hang-vn-a",
    "iphone-16-pro-512gb": "iphone-16-pro-512gb-chinh-hang-vn-a",
    "iphone-16-pro-256gb": "iphone-16-pro-256gb-chinh-hang-vn-a",
    "iphone-16-pro-128gb": "iphone-16-pro-128gb-chinh-hang-vn-a",
    "iphone-16-plus-256gb": "iphone-16-plus-256gb-chinh-hang-vn-a",
    "iphone-16-plus-128gb": "iphone-16-plus-128gb-chinh-hang-vn-a",
    "iphone-16-512gb": "iphone-16-512gb-chinh-hang-vn-a",
    "iphone-16-256gb": "iphone-16-256gb-chinh-hang-vn-a",
    "iphone-16-128gb": "iphone-16-128gb-chinh-h-ng-vn-a",
  };
  
  export const fetchProducts = async (productKey: keyof typeof productUrls) => {
    const variables = { url: productUrls[productKey] };
  
    const response = await fetch("https://beta-api.bachlongmobile.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });
  
    const data = await response.json();
    return data;
  };
  export interface Author {
    author_id: number;
    author_url: string;
    content: string | null;
    creation_time: string | null;
    custom_theme_to: string | null;
    facebook_page_url: string | null;
    featured_image: string | null;
    filtered_content: string | null;
    identifier: string;
    instagram_page_url: string | null;
    is_active: number;
    layout_update_xml: string | null;
    linkedin_page_url: string | null;
    meta_description: string;
    meta_title: string;
    name: string;
    page_layout: string | null;
    relative_url: string | null;
    title: string;
    twitter_page_url: string | null;
    type: string | null;
    url: string | null;
}
interface Category {
    canonical_url: string;
    category_id: number;
    category_level: number;
    category_url: string;
    category_url_path: string;
    content: string | null;
    content_heading: string | null;
    custom_layout: string | null;
    custom_layout_update_xml: string | null;
    custom_theme: string | null;
    custom_theme_from: string | null;
    custom_theme_to: string | null;
    display_mode: number;
    featured_img: string;
    identifier: string;
    include_in_menu: number;
    is_active: number;
    layout_update_xml: string | null;
    meta_description: string;
    meta_keywords: string | null;
    meta_title: string;
    page_layout: string | null;
    parent_category_id: number;
    path: string | null;
    position: number;
    posts_count: number;
    posts_sort_by: number;
    relative_url: string | null;
    title: string;
    type: string | null;
    breadcrumbs: Array<{
        category_id: number;
        category_level: number;
        category_name: string;
        category_uid: string;
        category_url_key: string;
        category_url_path: string;
    }>;
}

interface MediaGallery {
    url: string;
}
export interface BlogPost {
    author: Author;
    author_id: number;
    canonical_url: string;
    category_id: number | null;
    categories: Category[];
    content_heading: string | null;
    creation_time: string;
    end_time: string | null;
    featured_image: string;
    featured_img_alt: string | null;
    featured_list_image: string;
    featured_list_img_alt: string | null;
    media_gallery: MediaGallery[];
    first_image: string;
    identifier: string;
    is_active: number;
    page_layout: string | null;
    position: number;
    post_id: number;
    post_url: string;
    publish_time: string;
    search: string | null;
    title: string;
    type: string | null;
    update_time: string;
    views_count: number;
}

export const queryBNew = `query blogPosts( $filter: BlogPostsFilterInput $pageSize: Int $currentPage: Int $sortFiled: String $allPosts: Boolean $sort: [String] ) { blogPosts( filter: $filter pageSize: $pageSize currentPage: $currentPage sortFiled: $sortFiled allPosts: $allPosts sort: $sort ) { items { author { author_id author_url content creation_time custom_theme_to facebook_page_url featured_image filtered_content identifier instagram_page_url is_active layout_update_xml linkedin_page_url meta_description meta_title name page_layout relative_url title twitter_page_url type url } author_id canonical_url category_id content_heading creation_time end_time featured_image featured_img_alt featured_list_image featured_list_img_alt first_image identifier is_active page_layout position post_id post_url publish_time search title type update_time views_count categories { canonical_url category_id category_level category_url category_url_path content content_heading custom_layout custom_layout_update_xml custom_theme custom_theme_from custom_theme_to display_mode featured_img identifier include_in_menu is_active layout_update_xml meta_description meta_keywords meta_title page_layout parent_category_id path position posts_count posts_sort_by relative_url title type breadcrumbs { category_id category_level category_name category_uid category_url_key category_url_path } } filtered_content media_gallery { url } meta_description meta_keywords meta_title promotion_image tags { content custom_layout custom_layout_update_xml custom_theme custom_theme_from custom_theme_to identifier is_active layout_update_xml meta_description meta_keywords meta_robots meta_title page_layout relative_url tag_id tag_url title type } tag_id short_content short_filtered_content } total_count total_pages type } }`;
export const queryBNewDetail =`query BlogPostByUrlKey($url_key: String) {
        blogPostByUrlKey(url_key: $url_key) {
                author {
            author_id
            author_url
            content
            creation_time
            custom_layout
            custom_layout_update_xml
            custom_theme
            custom_theme_from
            custom_theme_to
            facebook_page_url
            featured_image
            filtered_content
            identifier
            instagram_page_url
            is_active
            layout_update_xml
            linkedin_page_url
            meta_description
            meta_title
            name
            page_layout
            relative_url
            role
            short_content
            short_filtered_content
            title
            twitter_page_url
            type
            url
        }
        author_id
        canonical_url
        categories {
            canonical_url
            category_id
            category_level
            category_url
            category_url_path
            content
            content_heading
            custom_layout
            custom_layout_update_xml
            custom_theme
            custom_theme_from
            custom_theme_to
            display_mode
            identifier
            include_in_menu
            is_active
            layout_update_xml
            meta_description
            meta_keywords
            meta_title
            page_layout
            parent_category_id
            path
            position
            posts_count
            posts_sort_by
            relative_url
            title
            type
        }
        category_id
        content_heading
        creation_time
        custom_layout
        custom_layout_update_xml
        custom_theme
        custom_theme_from
        custom_theme_to
        end_time
        featured_list_image
        featured_list_img_alt
        filtered_content
        first_image
        include_in_recent
        is_active
        is_recent_posts_skip
        layout_update_xml
        media_gallery {
            url
        }
        meta_description
        meta_keywords
        meta_title
        og_description
        og_image
        og_title
        og_type
        page_layout
        publish_time
        related_posts {
            ...BlogPostFields
        }
        relatedproduct_id
        relative_url
        search
        secret
        short_content
        short_filtered_content
        tag_id
        tags {
            content
            custom_layout
            custom_layout_update_xml
            custom_theme
            custom_theme_from
            custom_theme_to
            identifier
            is_active
            layout_update_xml
            meta_description
            meta_keywords
            meta_robots
            meta_title
            page_layout
            relative_url
            tag_id
            tag_url
            title
            type
        }
        type
        update_time
        views_count
        ...BlogPostFields
    }
}fragment BlogPostFields on BlogPost {
    featured_image
    featured_img_alt
    identifier
    position
    post_id
    post_url
    title
publish_time
 }
`