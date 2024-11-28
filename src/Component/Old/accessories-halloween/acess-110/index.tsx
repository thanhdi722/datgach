import React, { useState } from 'react';
import './acess-women.scss';
import ProMax from '../../../Old/accessories-halloween/acess-110/components/pro-max';
import Pro from '../../../Old/accessories-halloween/acess-110/components/pro';
import Plus from '../../../Old/accessories-halloween/acess-110/components/plus';
import Original from '../../../Old/accessories-halloween/acess-110/components/original';

const Access110: React.FC = () => {
	const [selectedTab, setSelectedTab] = useState<string>('iPhone 15 Pro Max');

	// Component tab mapping
	const renderTabContent = () => {
		switch (selectedTab) {
			case 'iPhone 15 Pro Max':
				return <ProMax />;
			case 'iPhone 15 Pro':
				return <Pro />;
			case 'iPhone 15 Plus':
				return <Plus />;
			case 'iPhone 15':
				return <Original />;
			default:
				return null;
		}
	};

	return (
		<div className='access-container'>
			<div className='tabs'>
				<button
					className={selectedTab === 'iPhone 15 Pro Max' ? 'tab active' : 'tab'}
					onClick={() => setSelectedTab('iPhone 15 Pro Max')}
				>
					iPhone 15 Pro Max
				</button>
				<button
					className={selectedTab === 'iPhone 15 Pro' ? 'tab active' : 'tab'}
					onClick={() => setSelectedTab('iPhone 15 Pro')}
				>
					iPhone 15 Pro
				</button>
				<button
					className={selectedTab === 'iPhone 15 Plus' ? 'tab active' : 'tab'}
					onClick={() => setSelectedTab('iPhone 15 Plus')}
				>
					iPhone 15 Plus
				</button>
				<button
					className={selectedTab === 'iPhone 15' ? 'tab active' : 'tab'}
					onClick={() => setSelectedTab('iPhone 15')}
				>
					iPhone 15
				</button>
			</div>
			<div className={`tab-content ${selectedTab === 'iPhone 15 Pro Max' ? 'active' : ''}`}>
				{renderTabContent()}
			</div>
		</div>
	);
};

export default Access110;
