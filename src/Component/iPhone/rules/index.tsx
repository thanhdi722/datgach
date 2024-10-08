import React from 'react';
import './rules.scss';

const Rules = () => {
	return (
		<div className='rules' id='item-rules'>
			<div className='container'>
				<div className='rules-header'>
					<h1 className='rules-title'>Thể Lệ Chương Trình</h1>
					<p className='rules-section-title'>Tháng Yêu Thương – Trao Ngàn Hạnh Phúc Muôn Ngàn Quà Tặng.</p>
					<p className='rules-description'>
						Thời gian: <span className='rules-section-title-hot'>06/10 - 31/10/2024</span> tại hệ thống Bạch
						Long Mobile.
					</p>
				</div>

				<div className='rules-content'>
					<h2 className='rules-section-title'>I/ THÁNG YÊU THƯƠNG – MÁY TRAO TAY NHẬN QUÀ NGAY</h2>
					<ul className='rules-list'>
						<li>Giảm giá tất cả các sản phẩm Apple MỚI - CŨ lên đến 50%</li>
						<li>Hoàn 100% chi phí di chuyển cho khách hàng trong nội thành TP.HCM (tối đa 300.000Đ)</li>
						<li>Bạch Long chơi lớn với vòng quay may mắn vật lý:</li>
						<ul className='rules-sublist'>
							<li>
								Với hóa đơn mua hàng iPhone | iPad | MacBook | Apple Watch từ 5.000.000 Đồng =&gt;{' '}
								<span className='rules-section-title-hot'>
									Nhận 1 Phiếu tham gia vòng quay trúng thưởng iPhone 16 trị giá 21 TRIỆU ĐỒNG.
								</span>
							</li>
							<li>
								Hóa đơn mua phụ kiện Apple từ 300.000 Đồng =&gt;{' '}
								<span className='rules-section-title-hot'>
									Nhận 1 Phiếu tham gia vòng quay trúng Trạm sạc Pisen chính hãng trị giá 5 TRIỆU
									ĐỒNG.
								</span>
							</li>
							<li>
								Tất cả các khách hàng tham gia vòng quay may mắn đều{' '}
								<span className='rules-section-title-hot'>trúng quà 100%</span>
							</li>
							<li>
								Thời gian: <span className='rules-section-title-hot'>09h30</span>, ngày{' '}
								<span className='rules-section-title-hot'>02/11/2024</span> tại Bạch Long Mobile,{' '}
								<span className='rules-section-title-hot'>251 - 253 Trần Hưng Đạo.</span>
							</li>
						</ul>
					</ul>

					<h2 className='rules-section-title'>II/ SALE TƯNG BỪNG – NGÀNH HÀNG APPLE GIẢM ĐẾN 50%</h2>
					<ul className='rules-list'>
						<li>
							Giờ vàng giá sốc gồm 25 sản phẩm Apple hàng tuần{' '}
							<span className='rules-section-title-hot'>giảm đến 50%.</span>
						</li>
						<li>
							Giảm đến 30% cho các sản phẩm Apple MỚI và lì xì lên đến{' '}
							<span className='rules-section-title-hot'>300.000đ.</span>
						</li>
						<li>
							Giảm đến 50% cho iPhone Likenew và lì xì lên đến{' '}
							<span className='rules-section-title-hot'>300.000đ.</span>
						</li>
						<li>
							Phụ kiện Apple giảm đến <span className='rules-section-title-hot'>70%</span>
						</li>
						<li>
							Mua 1 tặng 1: Khi mua cường lực màn hình, ốp lưng,… sẽ được tặng 1 Camera Lens trị giá{' '}
							<span className='rules-section-title-hot'>350.000đ</span>
						</li>
						<li>
							Combo phụ kiện giảm đến <span className='rules-section-title-hot'>50%</span>
						</li>
						<li>
							Combo 1: Ốp lưng và Cường lực chính hãng giá chỉ{' '}
							<span className='rules-section-title-hot'>640.000đ</span> (Giá gốc 1.140.000đ)
						</li>
						<li>
							Combo 2: Cường lực và Cốc sạc chính hãng giá chỉ{' '}
							<span className='rules-section-title-hot'>880.000đ</span> (Giá gốc 1.410.000đ)
						</li>
						<li>
							Combo 3: Ốp lưng, Cường lực và Camera lens chính hãng giá chỉ{' '}
							<span className='rules-section-title-hot'>890.000đ</span> (Giá gốc 1.650.000đ)
						</li>
						<li>
							Combo 4: Ốp lưng, Cường, Camera lens và Cốc sạc chính hãng giá chỉ{' '}
							<span className='rules-section-title-hot'>1.380.000đ</span> (Giá gốc 2.470.000đ)
						</li>
					</ul>

					<h2 className='rules-section-title'>III/ 5 ĐẶC QUYỀN KHI MUA HÀNG TẠI BẠCH LONG MOBILE</h2>
					<ul className='rules-list'>
						<li>Vòng quay trúng iPhone 16 | Trạm sạc Pisen</li>
						<li>Thu cũ đổi mới 100% giá trị máy bán ra</li>
						<li>60 ngày đổi trả miễn phí</li>
						<li>Combo phụ kiện giảm đến 60%</li>
						<li>
							Vòng quay may mắn <span className='rules-section-title-hot'>HẰNG NGÀY</span> – Lì xì Tết
							Apple 100% trúng quà:{' '}
							<span className='rules-section-title-hot'>
								Tiền mặt từ 50.000 đồng đến 300.000 đồng hoặc quà tặng cốc sạc, cáp sạc và nón bảo hiểm
							</span>
						</li>
					</ul>

					<h2 className='rules-section-title'>IV/ CÁC DỊCH VỤ ƯU ĐÃI THANH TOÁN, TRẢ GÓP, HOÀN TIỀN</h2>
					<ul className='rules-list'>
						<li>
							Trả góp <span className='rules-section-title-hot'>HD Saison</span> | 
							<span className='rules-section-title-hot'>Mcredit</span> | 
							<span className='rules-section-title-hot'>Home credit</span> | 
							<span className='rules-section-title-hot'>Shinhang</span> | 
							<span className='rules-section-title-hot'>Homepaylater</span> | 
							<span className='rules-section-title-hot'>Kredivo</span> | 
							<span className='rules-section-title-hot'>mPos</span> | 
							<span className='rules-section-title-hot'>Muadee</span> : Giảm thêm đến 
							<span className='rules-section-title-hot'>1.000.000</span>
						</li>
						<li>
							Hoàn tiền <span className='rules-section-title-hot'>300K</span> khi mua kèm 
							<span className='rules-section-title-hot'>BHTD + chuyển khoản 100% giá trị</span> (áp dụng
							sản phẩm từ <span className='rules-section-title-hot'>15 triệu</span> trở lên)
						</li>
						<li>
							Cà thẻ <span className='rules-section-title-hot'>MIỄN PHÍ</span> với Visa, MasterCard
						</li>
						<li>
							Giao hàng Online tận nhà <span className='rules-section-title-hot'>MIỄN PHÍ</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Rules;
