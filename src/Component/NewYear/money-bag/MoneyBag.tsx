'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useAnimate } from 'framer-motion';
import Confetti from 'react-confetti';
import './money-bag.scss';
import Image from 'next/image';
import MoneyBagImage from '../../../../public/new-year/money-bag.png';

const CoinShape = ({ color = '#FFD700' }) => (
	<svg width='100%' height='100%' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'>
		<circle cx='50' cy='50' r='50' fill={color} />
		<circle cx='50' cy='50' r='45' fill={`${color}CC`} />
		<path d='M50 20V80M30 50H70' stroke={color} strokeWidth='8' />
	</svg>
);

export default function MoneyBag() {
	const [scope, animate] = useAnimate();
	const [confetti, setConfetti] = useState(false);
	const bagRef = useRef<HTMLDivElement>(null);
	const [bagPosition, setBagPosition] = useState({ x: 0, y: 0 });
	const [windowSize, setWindowSize] = useState({
		width: typeof window !== 'undefined' ? window.innerWidth : 100,
		height: typeof window !== 'undefined' ? window.innerHeight : 200,
	});

	const updateWindowSize = useCallback(() => {
		if (typeof window !== 'undefined') {
			setWindowSize({ width: window.innerWidth, height: window.innerHeight });
		}
	}, []);

	useEffect(() => {
		window.addEventListener('resize', updateWindowSize);
		return () => window.removeEventListener('resize', updateWindowSize);
	}, [updateWindowSize]);

	useEffect(() => {
		if (bagRef.current) {
			const rect = bagRef.current.getBoundingClientRect();
			setBagPosition({ x: rect.left + rect.width / 2, y: rect.top });
		}
	}, [windowSize]);

	const animateCoins = async () => {
		await animate(
			'div.coin',
			{
				y: [0, -60, 200],
				x: (i) => [-100 + i * 20, -50 + i * 10],
				rotate: [-45, 0, 45],
				scale: [0, 1, 1, 0],
				opacity: [0, 1, 1, 0],
			},
			{
				duration: 2,
				delay: (i) => i * 0.1,
				ease: [0.22, 1, 0.36, 1],
			}
		);
		setConfetti(true);
		setTimeout(() => setConfetti(false), 2000);
		setTimeout(animateCoins, 2000);
	};

	useEffect(() => {
		animateCoins();
	}, []);

	return (
		<div className='money-bag-container' ref={scope}>
			{confetti && (
				<Confetti
					width={windowSize.width}
					height={windowSize.height}
					recycle={false}
					numberOfPieces={20}
					gravity={0.3}
					initialVelocityY={{ min: -15, max: -5 }}
					initialVelocityX={{ min: -10, max: 10 }}
					confettiSource={{
						x: bagPosition.x,
						y: bagPosition.y,
						w: 0,
						h: 0,
					}}
					drawShape={(ctx) => {
						ctx.beginPath();
						ctx.arc(0, 0, 6, 0, 2 * Math.PI);
						ctx.fillStyle = '#FFD700';
						ctx.fill();
						ctx.strokeStyle = '#FFA500';
						ctx.lineWidth = 2;
						ctx.stroke();
					}}
				/>
			)}

			<div className='money-bag' ref={bagRef}>
				{/* <div className='money-bag__opening' /> */}
				<Image src={MoneyBagImage} alt='money-bag' />

				{/* <div className='money-bag__body'>
					<div className='money-bag__trim' />

					<div className='money-bag__fortune'>
						<span>福</span>
					</div>
				</div> */}

				{[...Array(15)].map((_, i) => (
					<motion.div key={i} className='coin'>
						<CoinShape color={i % 2 === 0 ? '#FFD700' : '#FFA500'} />
					</motion.div>
				))}
			</div>

			{/* {[...Array(30)].map((_, i) => (
				<motion.div
					key={i}
					className='sparkle'
					style={{
						top: `${Math.random() * 100}%`,
						left: `${Math.random() * 100}%`,
					}}
					animate={{
						scale: [0, 1, 0],
						opacity: [0, 1, 0],
					}}
					transition={{
						duration: 2,
						repeat: Infinity,
						delay: Math.random() * 2,
					}}
				/>
			))} */}
		</div>
	);
}
