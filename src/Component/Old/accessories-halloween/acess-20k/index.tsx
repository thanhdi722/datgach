import React, { useState } from 'react';
import ProMax from '../../accessories-halloween/acess-20k/components/pro-max';
import Pro from '../../accessories-halloween/acess-20k/components/pro';
import Plus from '../../accessories-halloween/acess-20k/components/plus';
import Original from '../../accessories-halloween/acess-20k/components/original';
import './acess-women.scss';

const Access20k: React.FC = () => {
	const [selectedTab, setSelectedTab] = useState<string>('iPhone 16 Pro Max');

	// Component tab mapping
	const renderTabContent = () => {
		switch (selectedTab) {
			case 'iPhone 16 Pro Max':
				return <ProMax />;
			case 'iPhone 16 Pro':
				return <Pro />;
			case 'iPhone 16 Plus':
				return <Plus />;
			case 'iPhone 16':
				return <Original />;
			default:
				return null;
		}
	};

	return (
		<div className='access-container'>
			<div className='tabs'>
				<button
					className={selectedTab === 'iPhone 16 Pro Max' ? 'tab active' : 'tab'}
					onClick={() => setSelectedTab('iPhone 16 Pro Max')}
				>
					iPhone 16 Pro Max
				</button>
				<button
					className={selectedTab === 'iPhone 16 Pro' ? 'tab active' : 'tab'}
					onClick={() => setSelectedTab('iPhone 16 Pro')}
				>
					iPhone 16 Pro
				</button>
				<button
					className={selectedTab === 'iPhone 16 Plus' ? 'tab active' : 'tab'}
					onClick={() => setSelectedTab('iPhone 16 Plus')}
				>
					iPhone 16 Plus
				</button>
				<button
					className={selectedTab === 'iPhone 16' ? 'tab active' : 'tab'}
					onClick={() => setSelectedTab('iPhone 16')}
				>
					iPhone 16
				</button>
			</div>
			<div className={`tab-content ${selectedTab === 'iPhone 16 Pro Max' ? 'active' : ''}`}>
				{renderTabContent()}
			</div>
		</div>
	);
};

export default Access20k;
