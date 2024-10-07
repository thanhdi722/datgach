import Image from 'next/image';
import React from 'react';
import './promotion.scss';
import Link from 'next/link';

const Promotion = () => {
	return (
		<div className='promotion'>
			<div className='container'>
				<div className='promotion-header'>5 đặc quyền mua hàng tại Bạch Long Mobile</div>
				<div className='promotion-list-privilege'>
					<Link href='https://bachlongmobile.com/news/tin-cong-nghe/tet-apple-vong-quay-may-man-nhan-li-xi-tet-cung-bach-long-mobile/'>
						<Image src='/apple/privilege-01.png' alt='privilege-01' width={270} height={117} />
					</Link>
					<Link href='https://bachlongmobile.com/tra-gop-0-lai-suat/'>
						<Image src='/apple/privilege-02.png' alt='privilege-02' width={270} height={117} />
					</Link>
					<Link href='https://bachlongmobile.com/news/tin-cong-nghe/tet-apple-thu-cu-doi-moi-tro-gia-den-100-gia-tri-may-ban-ra/'>
						<Image src='/apple/privilege-03.png' alt='privilege-03' width={270} height={117} />
					</Link>
					<Link href='https://bachlongmobile.com/news/tin-cong-nghe/chuong-trinh-n-ng-cap-bao-hanh-iphone-16-series-tai-bach-long-mobile/'>
						<Image src='/apple/privilege-04.png' alt='privilege-04' width={270} height={117} />
					</Link>
					<Link href='https://bachlongmobile.com/news/tin-cong-nghe/chuong-trinh-n-ng-cap-bao-hanh-iphone-16-series-tai-bach-long-mobile/'>
						<Image src='/apple/privilege-05.png' alt='privilege-05' width={270} height={117} />
					</Link>
				</div>
			</div>

			<div className='promotion-header'>Ưu đãi trả góp siêu hời</div>
			<div className='promotion-list'>
				<Link href='https://bachlongmobile.com/news/tin-cong-nghe/cung-mpos-x-bach-long-mobile-so-huu-iphone-16-series-gia-tot-qua-tang-khung/'>
					<Image src='/apple/promotion-01.png' alt='promotion-01' width={270} height={117} />
				</Link>
				<Link href='https://bachlongmobile.com/promotion/home-pay-later/'>
					<Image src='/apple/promotion-02.png' alt='promotion-02' width={270} height={117} />
				</Link>
				<Link href='https://bachlongmobile.com/promotion/tra-gop-kredivo/'>
					<Image src='/apple/promotion-03.png' alt='promotion-03' width={270} height={117} />
				</Link>
				<Link href='https://bachlongmobile.com/tra-gop-muadee/'>
					<Image src='/apple/promotion-04.png' alt='promotion-04' width={270} height={117} />
				</Link>
				<Link href='https://bachlongmobile.com/promotion/tra-gop-tai-chinh/'>
					<Image src='/apple/promotion-05.png' alt='promotion-05' width={270} height={117} />
				</Link>
				<Link href='https://bachlongmobile.com/promotion/tra-gop-tai-chinh/'>
					<Image src='/apple/promotion-06.png' alt='promotion-06' width={270} height={117} />
				</Link>
				<Link href='https://bachlongmobile.com/promotion/tra-gop-tai-chinh/'>
					<Image src='/apple/promotion-07.png' alt='promotion-07' width={270} height={117} />
				</Link>
				<Link href='https://bachlongmobile.com/promotion/tra-gop-tai-chinh/'>
					<Image src='/apple/promotion-08.png' alt='promotion-08' width={270} height={117} />
				</Link>
			</div>
		</div>
	);
};

export default Promotion;
