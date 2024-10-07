import Image from 'next/image';
export default function Home() {
	return (
		<div className='' style={{ display: 'flex', alignItems: 'center' }}>
			<Image src='/apple/privilege-01.png' alt='privilege-01' width={270} height={117} />
			<Image src='/apple/privilege-02.png' alt='privilege-02' width={270} height={117} />
			<Image src='/apple/privilege-03.png' alt='privilege-03' width={270} height={117} />
			<Image src='/apple/privilege-04.png' alt='privilege-04' width={270} height={117} />
		</div>
	);
}
