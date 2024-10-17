'use client';
import React, { useState, useEffect } from 'react';
import './banner.scss';
import Image from 'next/image';
import banner from '../../../../public/women-day/banner-women.png';
import countdown from '../../../../public/women-day/decor-countdown.png';

interface TimeLeft {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

interface TimeLineProps {
	onScrollToRules: () => void;
}

const Banner: React.FC<TimeLineProps> = ({ onScrollToRules }) => {
	const calculateTimeLeft = (): TimeLeft => {
		const eventDate = new Date('2024-10-20T00:00:00');
		const currentTime = new Date();
		const difference = eventDate.getTime() - currentTime.getTime();

		let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}

		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

	useEffect(() => {
		setTimeLeft(calculateTimeLeft());

		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	if (!timeLeft) {
		return null;
	}

	return (
		<div className='banner'>
			<Image src={banner} alt='banner' width={1920} height={1200} className='banner-img' />
			<div className='container'>
				<div className='countdown-wrap'>
					<div className='countdown'>
						<div className='countdown-item'>
							<Image src={countdown} alt='countdown' />
							<div className='countdown-box'>
								<span></span>
								<span className='count'>{timeLeft.days}</span>
								<span className='label'>Ngày</span>
							</div>
						</div>
						<div className='countdown-item'>
							<Image src={countdown} alt='countdown' />
							<div className='countdown-box'>
								<span></span>
								<span className='count'>{timeLeft.hours}</span>
								<span className='label'>Giờ</span>
							</div>
						</div>
						<div className='countdown-item'>
							<Image src={countdown} alt='countdown' />
							<div className='countdown-box'>
								<span></span>
								<span className='count'>{timeLeft.minutes}</span>
								<span className='label'>Phút</span>
							</div>
						</div>
						<div className='countdown-item'>
							<Image src={countdown} alt='countdown' />
							<div className='countdown-box'>
								<span></span>
								<span className='count'>{timeLeft.seconds}</span>
								<span className='label'>Giây</span>
							</div>
						</div>
					</div>
					<button className='timeline-content-button' onClick={onScrollToRules}>
						Xem thể lệ
					</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
