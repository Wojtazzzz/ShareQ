import { useState } from 'react';

export const useMobileNavigation = () => {
	const [isNavigationActive, setIsNavigationActive] = useState(false);

	const openNavigation = () => {
		setIsNavigationActive(true);
	};

	const closeNavigation = () => {
		setIsNavigationActive(false);
	};

	return {
		isNavigationActive,
		openNavigation,
		closeNavigation,
	};
};
