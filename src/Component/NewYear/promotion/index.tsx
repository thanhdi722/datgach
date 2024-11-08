import React from 'react';
import Link from 'next/link';
import Privilege01 from '../../../../public/gratitude/privilege-01.png';
import Privilege02 from '../../../../public/gratitude/privilege-02.png';
import Privilege03 from '../../../../public/gratitude/privilege-03.png';
import Privilege04 from '../../../../public/gratitude/privilege-04.png';
import Privilege05 from '../../../../public/gratitude/privilege-05.png';
import Privilege06 from '../../../../public/gratitude/privilege-06.png';
import Image from 'next/image';
import './promotion-new-year.scss';

type PromotionProps = {
	onScrollToRules: () => void;
};

const Promotion = ({ onScrollToRules }: PromotionProps) => {
	return (
		<div className='promotion-new-year'>
			<div className='container'>
				<div className='promotion-new-year-header'>6 đặc quyền mua hàng tại Bạch Long Mobile</div>
				<div className='promotion-new-year-list-privilege'>
					<div onClick={onScrollToRules} style={{ cursor: 'pointer' }}>
						<Image src={Privilege01} alt='privilege-01' width={270} height={117} />
					</div>
					<Link href='https://bachlongmobile.com/thu-cu-doi-moi/'>
						<Image src={Privilege02} alt='privilege-02' width={270} height={117} />
					</Link>
					<Link href='https://bachlongmobile.com/promotion/tet-apple-bao-hanh-toan-dien/'>
						<Image src={Privilege03} alt='privilege-03' width={270} height={117} />
					</Link>
					<Link href='https://bachlongmobile.com/combo-phu-kien/'>
						<Image src={Privilege04} alt='privilege-04' width={270} height={117} />
					</Link>
					<div onClick={onScrollToRules} style={{ cursor: 'pointer' }}>
						<Image src={Privilege05} alt='privilege-05' width={270} height={117} />
					</div>
					<Link href='https://bachlongmobile.com/promotion/cung-mpos-x-bach-long-mobile-so-huu-iphone-16-series-gia-tot-qua-tang-khung/'>
						<Image src={Privilege06} alt='privilege-06' width={270} height={117} />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Promotion;
