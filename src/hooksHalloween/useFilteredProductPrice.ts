type Product = {
	product: {
		name: string;
		sale_price: number | null; // Assuming sale_price is a number, adjust if needed
	};
};

export const useFilteredProductPrice = (productSale: Product[] | undefined, targetNames: string[]) => {
	if (!productSale || !Array.isArray(productSale)) {
		return [];
	}

	const filteredPrices = targetNames.map((targetName) => {
		const foundProduct = productSale.find(
			(product) => product.product.name === targetName
		);
		return foundProduct ? foundProduct.product.sale_price : null;
	});

	return filteredPrices;
};
