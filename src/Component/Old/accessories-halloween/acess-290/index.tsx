import React, { useState } from 'react';
import './acess-women.scss';
import ProMax from '../acess-290/components/pro-max';
import Pro from '../acess-290/components/pro';
import Plus from '../acess-to210/components/plus';
import Original from '../acess-290/components/original';

const Access290: React.FC = () => {
	const [selectedTab, setSelectedTab] = useState<string>('iPhone 11 Pro Max');

	// Component tab mapping
	const renderTabContent = () => {
		switch (selectedTab) {
			case 'iPhone 11 Pro Max':
				return <ProMax />;
			case 'iPhone 11 Pro':
				return <Pro />;
			case 'iPhone 11':
				return <Original />;
			default:
				return null;
		}
	};

	return (
		<div className='access-container'>
			<div className='tabs'>
				<button
					className={selectedTab === 'iPhone 11 Pro Max' ? 'tab active' : 'tab'}
					onClick={() => setSelectedTab('iPhone 11 Pro Max')}
				>
					iPhone 11 Pro Max
				</button>
				<button
					className={selectedTab === 'iPhone 11 Pro' ? 'tab active' : 'tab'}
					onClick={() => setSelectedTab('iPhone 11 Pro')}
				>
					iPhone 11 Pro
				</button>
				<button
					className={selectedTab === 'iPhone 11' ? 'tab active' : 'tab'}
					onClick={() => setSelectedTab('iPhone 11')}
				>
					iPhone 11
				</button>
			</div>
			<div className={`tab-content ${selectedTab === 'iPhone 11 Pro Max' ? 'active' : ''}`}>
				{renderTabContent()}
			</div>
		</div>
	);
};

export default Access290;
