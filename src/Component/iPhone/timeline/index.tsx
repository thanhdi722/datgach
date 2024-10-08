import React, { useState, useEffect } from 'react';
import './timeline.scss';

interface TimeLineProps {
	onScrollToRules: () => void;
}

const TimeLine: React.FC<TimeLineProps> = ({ onScrollToRules }) => {
	const [isProgramEnded, setIsProgramEnded] = useState(false);
	const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });

	useEffect(() => {
		const endDate = new Date('2024-10-31T00:00:00');
		const updateCountdown = () => {
			const currentDate = new Date();
			const difference = endDate.getTime() - currentDate.getTime();

			if (difference <= 0) {
				setIsProgramEnded(true);
				clearInterval(intervalId);
			} else {
				const days = Math.floor(difference / (1000 * 60 * 60 * 24))
					.toString()
					.padStart(2, '0');
				const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
					.toString()
					.padStart(2, '0');
				const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
					.toString()
					.padStart(2, '0');
				const seconds = Math.floor((difference % (1000 * 60)) / 1000)
					.toString()
					.padStart(2, '0');
				setTimeLeft({ days, hours, minutes, seconds });
			}
		};

		const intervalId = setInterval(updateCountdown, 1000);
		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className='timeline'>
			<div className='container'>
				<div className='timeline-content'>
					<button className='timeline-content-button' onClick={onScrollToRules}>
						Xem thể lệ
					</button>
					<div className='timeline-content-countdown'>
						{isProgramEnded ? (
							<div className='timeline-content-ended'>Chương Trình Đã Kết Thúc</div>
						) : (
							<div className='timeline-content-countdown-item'>
								<span className='timeline-content-countdown-item-text'>Kết thúc sau : </span>
								{parseInt(timeLeft.days) > 0 && (
									<div className='timeline-content-countdown-flip-card'>
										<div className='timeline-content-countdown-item-number'>{timeLeft.days}</div>
										<div className='timeline-content-countdown-item-text'>Ngày</div>
									</div>
								)}
								{parseInt(timeLeft.hours) > 0 && (
									<div className='timeline-content-countdown-flip-card'>
										<div className='timeline-content-countdown-item-number'>{timeLeft.hours}</div>
										<div className='timeline-content-countdown-item-text'>Giờ</div>
									</div>
								)}
								{parseInt(timeLeft.minutes) > 0 && (
									<div className='timeline-content-countdown-flip-card'>
										<div className='timeline-content-countdown-item-number'>{timeLeft.minutes}</div>
										<div className='timeline-content-countdown-item-text'>Phút</div>
									</div>
								)}
								{Number(timeLeft.seconds) > 0 && (
									<div className='timeline-content-countdown-flip-card'>
										<div className='timeline-content-countdown-item-number'>{timeLeft.seconds}</div>
										<div className='timeline-content-countdown-item-text'>Giây</div>
									</div>
								)}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TimeLine;
