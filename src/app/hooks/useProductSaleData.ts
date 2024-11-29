import { useQuery } from '@tanstack/react-query';

const query = `
	query getProductDailySales(
  $filter: DailySaleFilterInput
  $pageSize: Int
  $currentPage: Int
) {
  DailySales(filter: $filter, pageSize: $pageSize, currentPage: $currentPage) {
    items {
	 title
      identifier
      items {
        product {
          name
          url_key
		   image {
            url
          }
          
        }
        sale_price
        price_original
      }
    }
    page_info {
      current_page
      page_size
      total_pages
    }
    total_count
  }
}
`;

const variables = {
	filter: {
		sale_type: {
			eq: 'sale-multiple-product',
		},
	},
	pageSize: 200,
	currentPage: 1,
};

async function fetchProductSaleData() {
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
	return data.data.DailySales.items;
}

export const useProductSaleData = () => {
	return useQuery({
		queryKey: ['productSale'],
		queryFn: fetchProductSaleData,
		staleTime: 5000,
	});
};
