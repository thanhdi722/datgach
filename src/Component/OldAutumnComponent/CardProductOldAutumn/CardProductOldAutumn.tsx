/* eslint-disable @next/next/no-img-element */
import React from 'react';
import './CardProduct.css';
import ic_card from "../../../../public/ic-card.png"
export interface Product {
	name: string;
	image: string;
	price: number;
}
function CardProduct({ name, image, price }: Omit<Product, 'id'>) {
	return (
		<div className='CardProductOldAutumn'>
			<img className='icon-card-product-autumn' src={ic_card.src} alt=''/>
			<figure className='product__img-card-OldAutumn'>
				
				<img className='product__img-detail-card-OldAutumn' alt={name} src={image} />
			</figure>
			<div className='product__title_Card' style={{ textDecoration: 'none' }}>
				{name}
			</div>
			<div className='product__groupPrice' style={{ textAlign: 'center' }}>
				<span className='product__price'>Giá thu: </span>
				<span className='product__priceSpecial'>{price.toLocaleString()} VND</span>
			</div>
		</div>
	);
}

export default CardProduct;
