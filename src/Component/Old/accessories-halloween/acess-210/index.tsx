import React, { useState } from 'react';
import './acess-women.scss';
import ProMax from '../../../Old/accessories-halloween/acess-210/components/pro-max';
import Pro from '../../../Old/accessories-halloween/acess-210/components/pro';
import Plus from '../../../Old/accessories-halloween/acess-210/components/plus';
import Original from '../../../Old/accessories-halloween/acess-210/components/original';

const Access210: React.FC = () => {
	const [selectedTab, setSelectedTab] = useState<string>('iPhone 14 Pro Max');

	// Component tab mapping
	const renderTabContent = () => {
		switch (selectedTab) {
			case 'iPhone 14 Pro Max':
				return <ProMax />;
			case 'iPhone 14 Pro':
				return <Pro />;
			case 'iPhone 14 Plus':
				return <Plus />;
			case 'iPhone 14':
				return <Original />;
			default:
				return null;
		}
	};

	return (
		<div className='access-container'>
			<div className='tabs'>
				<button
					className={selectedTab === 'iPhone 14 Pro Max' ? 'tab active' : 'tab'}
					onClick={() => setSelectedTab('iPhone 14 Pro Max')}
				>
					iPhone 14 Pro Max
				</button>
				<button
					className={selectedTab === 'iPhone 14 Pro' ? 'tab active' : 'tab'}
					onClick={() => setSelectedTab('iPhone 14 Pro')}
				>
					iPhone 14 Pro
				</button>
				<button
					className={selectedTab === 'iPhone 14 Plus' ? 'tab active' : 'tab'}
					onClick={() => setSelectedTab('iPhone 14 Plus')}
				>
					iPhone 14 Plus
				</button>
				<button
					className={selectedTab === 'iPhone 14' ? 'tab active' : 'tab'}
					onClick={() => setSelectedTab('iPhone 14')}
				>
					iPhone 14
				</button>
			</div>
			<div className={`tab-content ${selectedTab === 'iPhone 14 Pro Max' ? 'active' : ''}`}>
				{renderTabContent()}
			</div>
		</div>
	);
};

export default Access210;
