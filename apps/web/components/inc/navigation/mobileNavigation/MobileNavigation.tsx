'use client';

import { NavItem } from '../NavItem';
import { useMobileNavigation } from './useMobileNavigation';
import links from '../links.json';
import { LinkAsButton } from '../../LinkAsButton';
import { Bars } from '../../../icons/Bars';
import { Times } from '../../../icons/Times';
import clsx from 'clsx';

export const MobileNavigation = () => {
	const {
		navigationButtonRef,
		isNavigationActive,
		toggleNavigation,
		closeNavigation,
	} = useMobileNavigation();

	return (
		<div className="lg:hidden">
			<button
				ref={navigationButtonRef}
				aria-label={isNavigationActive ? 'Close navigation' : 'Open navigation'}
				aria-expanded={isNavigationActive}
				aria-controls="mobile-navigation"
				className="relative z-50 rounded p-2"
				onClick={toggleNavigation}
			>
				{isNavigationActive ? <Times /> : <Bars />}
			</button>

			<div
				id="mobile-navigation"
				className={clsx({
					'invisible hidden': !isNavigationActive,
				})}
			>
				<div className="absolute left-0 top-20 z-40 w-full">
					<div className="rounded bg-secondary-base p-4 shadow-md sm:p-6">
						<ul role="list" className="w-full space-y-4">
							{links.map(({ link, label }, key) => (
								<li key={key}>
									<NavItem
										link={link}
										label={label}
										onClick={closeNavigation}
									/>
								</li>
							))}

							<li>
								<NavItem
									link="/sign-in"
									label="Sign in"
									onClick={closeNavigation}
								/>
							</li>

							<li className="flex">
								<LinkAsButton
									link="/sign-up"
									label="Sign up"
									variant="base"
									onClick={closeNavigation}
								/>
							</li>
						</ul>
					</div>
				</div>

				<div
					className="fixed left-0 top-0 z-30 h-screen w-screen bg-black/30"
					onClick={closeNavigation}
				></div>
			</div>
		</div>
	);
};
