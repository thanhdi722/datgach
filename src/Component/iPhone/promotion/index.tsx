import React from 'react';
import Link from 'next/link';
import Privilege01 from '../../../../public/apple/privilege-01.png';
import Privilege02 from '../../../../public/apple/privilege-02.png';
import Privilege03 from '../../../../public/apple/privilege-03.png';
import Privilege04 from '../../../../public/apple/privilege-04.png';
import Privilege05 from '../../../../public/apple/privilege-05.png';
import Promotion01 from '../../../../public/apple/promotion-01.png';
import Promotion02 from '../../../../public/apple/promotion-02.png';
import Promotion03 from '../../../../public/apple/promotion-03.png';
import Promotion04 from '../../../../public/apple/promotion-04.png';
import Promotion05 from '../../../../public/apple/promotion-05.png';
import Promotion06 from '../../../../public/apple/promotion-06.png';
import Promotion07 from '../../../../public/apple/promotion-07.png';
import Promotion08 from '../../../../public/apple/promotion-08.png';
import Image from 'next/image';
import './promotion.scss';

const Promotion = () => {
	return (
		<div className='promotion'>
			<div className='container'>
				<div className='promotion-header'>5 đặc quyền mua hàng tại Bạch Long Mobile</div>
				<div className='promotion-list-privilege'>
					<Link href='https://bachlongmobile.com/news/tin-cong-nghe/tet-apple-vong-quay-may-man-nhan-li-xi-tet-cung-bach-long-mobile/'>
						<Image src={Privilege01} alt='privilege-01' width={270} height={117} />
					</Link>
					<Link href='https://bachlongmobile.com/tra-gop-0-lai-suat/'>
						<Image src={Privilege02} alt='privilege-02' width={270} height={117} />
					</Link>
					<Link href='https://bachlongmobile.com/news/tin-cong-nghe/tet-apple-thu-cu-doi-moi-tro-gia-den-100-gia-tri-may-ban-ra/'>
						<Image src={Privilege03} alt='privilege-03' width={270} height={117} />
					</Link>
					<Link href='https://bachlongmobile.com/news/tin-cong-nghe/chuong-trinh-n-ng-cap-bao-hanh-iphone-16-series-tai-bach-long-mobile/'>
						<Image src={Privilege04} alt='privilege-04' width={270} height={117} />
					</Link>
					<Link href='https://bachlongmobile.com/news/tin-cong-nghe/chuong-trinh-n-ng-cap-bao-hanh-iphone-16-series-tai-bach-long-mobile/'>
						<Image src={Privilege05} alt='privilege-05' width={270} height={117} />
					</Link>
				</div>
			</div>

			<div className='promotion-header'>Ưu đãi trả góp siêu hời</div>
			<div className='promotion-list'>
				<Link href='https://bachlongmobile.com/news/tin-cong-nghe/cung-mpos-x-bach-long-mobile-so-huu-iphone-16-series-gia-tot-qua-tang-khung/'>
					<Image src={Promotion01} alt='promotion-01' width={270} height={117} />
				</Link>
				<Link href='https://bachlongmobile.com/promotion/home-pay-later/'>
					<Image src={Promotion02} alt='promotion-02' width={270} height={117} />
				</Link>
				<Link href='https://bachlongmobile.com/promotion/tra-gop-kredivo/'>
					<Image src={Promotion03} alt='promotion-03' width={270} height={117} />
				</Link>
				<Link href='https://bachlongmobile.com/tra-gop-muadee/'>
					<Image src={Promotion04} alt='promotion-04' width={270} height={117} />
				</Link>
				<Link href='https://bachlongmobile.com/promotion/tra-gop-tai-chinh/'>
					<Image src={Promotion05} alt='promotion-05' width={270} height={117} />
				</Link>
				<Link href='https://bachlongmobile.com/promotion/tra-gop-tai-chinh/'>
					<Image src={Promotion06} alt='promotion-06' width={270} height={117} />
				</Link>
				<Link href='https://bachlongmobile.com/promotion/tra-gop-tai-chinh/'>
					<Image src={Promotion07} alt='promotion-07' width={270} height={117} />
				</Link>
				<Link href='https://bachlongmobile.com/promotion/tra-gop-tai-chinh/'>
					<Image src={Promotion08} alt='promotion-08' width={270} height={117} />
				</Link>
			</div>
		</div>
	);
};

export default Promotion;
