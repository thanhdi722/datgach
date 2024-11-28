import React, { useState } from 'react';
import ProMax from '../acess-xs/components/pro-max';
import Pro from '../acess-xs/components/pro';
import Original from '../acess-xs/components/original';
import './acess-women.scss';

const AccessXS: React.FC = () => {
	const [selectedTab, setSelectedTab] = useState<string>('iPhone XS Max');

	// Component tab mapping
	const renderTabContent = () => {
		switch (selectedTab) {
			case 'iPhone XS Max':
				return <ProMax />;
			case 'iPhone XS':
				return <Pro />;
			case 'iPhone Xr':
				return <Original />;
			default:
				return null;
		}
	};

	return (
		<div className='access-container'>
			<div className='tabs'>
				<button
					className={selectedTab === 'iPhone XS Max' ? 'tab active' : 'tab'}
					onClick={() => setSelectedTab('iPhone XS Max')}
				>
					iPhone XS Max
				</button>
				<button
					className={selectedTab === 'iPhone XS' ? 'tab active' : 'tab'}
					onClick={() => setSelectedTab('iPhone XS')}
				>
					iPhone XS
				</button>
				<button
					className={selectedTab === 'iPhone Xr' ? 'tab active' : 'tab'}
					onClick={() => setSelectedTab('iPhone Xr')}
				>
					iPhone XR
				</button>
			</div>
			<div className={`tab-content ${selectedTab === 'iPhone XS Max' ? 'active' : ''}`}>{renderTabContent()}</div>
		</div>
	);
};

export default AccessXS;
