import React, { useState } from 'react';
import './acess-women.scss';
import ProMax from '../acess-310/components/pro-max';
import Pro from '../acess-310/components/pro';
import Plus from '../acess-310/components/plus';
import Original from '../acess-310/components/original';

const Access310: React.FC = () => {
	const [selectedTab, setSelectedTab] = useState<string>('iPhone 13 Pro Max');

	// Component tab mapping
	const renderTabContent = () => {
		switch (selectedTab) {
			case 'iPhone 13 Pro Max':
				return <ProMax />;
			case 'iPhone 13 Pro':
				return <Pro />;
			case 'iPhone 13 Mini':
				return <Plus />;
			case 'iPhone 13':
				return <Original />;
			default:
				return null;
		}
	};

	return (
		<div className='access-container'>
			<div className='tabs'>
				<button
					className={selectedTab === 'iPhone 13 Pro Max' ? 'tab active' : 'tab'}
					onClick={() => setSelectedTab('iPhone 13 Pro Max')}
				>
					iPhone 13 Pro Max
				</button>
				<button
					className={selectedTab === 'iPhone 13 Pro' ? 'tab active' : 'tab'}
					onClick={() => setSelectedTab('iPhone 13 Pro')}
				>
					iPhone 13 Pro
				</button>
				<button
					className={selectedTab === 'iPhone 13 Mini' ? 'tab active' : 'tab'}
					onClick={() => setSelectedTab('iPhone 13 Mini')}
				>
					iPhone 13 Mini
				</button>
				<button
					className={selectedTab === 'iPhone 13' ? 'tab active' : 'tab'}
					onClick={() => setSelectedTab('iPhone 13')}
				>
					iPhone 13
				</button>
			</div>
			<div className={`tab-content ${selectedTab === 'iPhone 13 Pro Max' ? 'active' : ''}`}>
				{renderTabContent()}
			</div>
		</div>
	);
};

export default Access310;
