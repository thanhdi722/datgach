import React from 'react';
import Link from 'next/link';
import Privilege01 from '../../../../public/women-day/privilege-01.png';
import Privilege02 from '../../../../public/women-day/privilege-02.png';
import Privilege03 from '../../../../public/women-day/privilege-03.png';
import Privilege04 from '../../../../public/women-day/privilege-04.png';
import Privilege05 from '../../../../public/women-day/privilege-05.png';
import Promotion01 from '../../../../public/women-day/promotion-01.png';
import Promotion02 from '../../../../public/women-day/promotion-02.png';
import Promotion03 from '../../../../public/women-day/promotion-03.png';
import Promotion04 from '../../../../public/women-day/promotion-04.png';
import Promotion05 from '../../../../public/women-day/promotion-05.png';
import Promotion06 from '../../../../public/women-day/promotion-06.png';
import Promotion07 from '../../../../public/women-day/promotion-07.png';
import Promotion08 from '../../../../public/women-day/promotion-08.png';
import Image from 'next/image';
import './promotion.scss';

type PromotionProps = {
	onScrollToRules: () => void;
};

const Promotion = ({ onScrollToRules }: PromotionProps) => {
	return (
		<div className='promotion'>
			<div className='container'>
				<div className='promotion-header'>5 đặc quyền mua hàng tại Bạch Long Mobile</div>
				<div className='promotion-list-privilege'>
					<div onClick={onScrollToRules} style={{ cursor: 'pointer' }} className='privilege-img'>
						<Image src={Privilege01} alt='privilege-01' width={270} height={117} />
					</div>
					<Link href='https://bachlongmobile.com/thu-cu-doi-moi/' className='privilege-img'>
						<Image src={Privilege02} alt='privilege-02' width={270} height={117} />
					</Link>
					<Link
						href='https://bachlongmobile.com/promotion/tet-apple-bao-hanh-toan-dien/'
						className='privilege-img'
					>
						<Image src={Privilege03} alt='privilege-03' width={270} height={117} />
					</Link>
					<Link href='https://bachlongmobile.com/combo-phu-kien/' className='privilege-img'>
						<Image src={Privilege04} alt='privilege-04' width={270} height={117} />
					</Link>
					<div onClick={onScrollToRules} style={{ cursor: 'pointer' }} className='privilege-img'>
						<Image src={Privilege05} alt='privilege-05' width={270} height={117} />
					</div>
				</div>
			</div>

			<div className='promotion-header'>Ưu đãi trả góp siêu hời</div>
			<div className='promotion-list'>
				<Link
					href='https://bachlongmobile.com/news/tin-cong-nghe/cung-mpos-x-bach-long-mobile-so-huu-iphone-16-series-gia-tot-qua-tang-khung/'
					className='promotion-img'
				>
					<Image src={Promotion01} alt='promotion-01' width={270} height={117} />
				</Link>
				<Link href='https://bachlongmobile.com/promotion/home-pay-later/' className='promotion-img'>
					<Image src={Promotion02} alt='promotion-02' width={270} height={117} />
				</Link>
				<Link href='https://bachlongmobile.com/promotion/tra-gop-kredivo/' className='promotion-img'>
					<Image src={Promotion03} alt='promotion-03' width={270} height={117} />
				</Link>
				<Link href='https://bachlongmobile.com/tra-gop-muadee/' className='promotion-img'>
					<Image src={Promotion04} alt='promotion-04' width={270} height={117} />
				</Link>
				<Link href='https://bachlongmobile.com/promotion/tra-gop-tai-chinh/' className='promotion-img'>
					<Image src={Promotion05} alt='promotion-05' width={270} height={117} />
				</Link>
				<Link href='https://bachlongmobile.com/promotion/tra-gop-tai-chinh/' className='promotion-img'>
					<Image src={Promotion06} alt='promotion-06' width={270} height={117} />
				</Link>
				<Link href='https://bachlongmobile.com/promotion/tra-gop-tai-chinh/' className='promotion-img'>
					<Image src={Promotion07} alt='promotion-07' width={270} height={117} />
				</Link>
				<Link href='https://bachlongmobile.com/promotion/tra-gop-tai-chinh/' className='promotion-img'>
					<Image src={Promotion08} alt='promotion-08' width={270} height={117} />
				</Link>
			</div>
		</div>
	);
};

export default Promotion;
