import React, { useState } from 'react';
import './acess-women.scss';
import ProMax from '../acess-to210/components/pro-max';
import Pro from '../acess-to210/components/pro';
import Plus from '../acess-to210/components/plus';
import Original from '../acess-to210/components/original';

const AccessTo210: React.FC = () => {
	const [selectedTab, setSelectedTab] = useState<string>('iPhone 12 Pro Max');

	// Component tab mapping
	const renderTabContent = () => {
		switch (selectedTab) {
			case 'iPhone 12 Pro Max':
				return <ProMax />;
			case 'iPhone 12 Pro':
				return <Pro />;
			case 'iPhone 12 Mini':
				return <Plus />;
			case 'iPhone 12':
				return <Original />;
			default:
				return null;
		}
	};

	return (
		<div className='access-container'>
			<div className='tabs'>
				<button
					className={selectedTab === 'iPhone 12 Pro Max' ? 'tab active' : 'tab'}
					onClick={() => setSelectedTab('iPhone 12 Pro Max')}
				>
					iPhone 12 Pro Max
				</button>
				<button
					className={selectedTab === 'iPhone 12 Pro' ? 'tab active' : 'tab'}
					onClick={() => setSelectedTab('iPhone 12 Pro')}
				>
					iPhone 12 Pro
				</button>
				<button
					className={selectedTab === 'iPhone 12 Mini' ? 'tab active' : 'tab'}
					onClick={() => setSelectedTab('iPhone 12 Mini')}
				>
					iPhone 12 Mini
				</button>
				<button
					className={selectedTab === 'iPhone 12' ? 'tab active' : 'tab'}
					onClick={() => setSelectedTab('iPhone 12')}
				>
					iPhone 12
				</button>
			</div>
			<div className={`tab-content ${selectedTab === 'iPhone 12 Pro Max' ? 'active' : ''}`}>
				{renderTabContent()}
			</div>
		</div>
	);
};

export default AccessTo210;
