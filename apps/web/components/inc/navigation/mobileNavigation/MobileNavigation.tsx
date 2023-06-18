'use client';

import { NavItem } from '../NavItem';
import { useMobileNavigation } from './useMobileNavigation';
import links from '../links.json';
import Link from 'next/link';
import { LinkAsButton } from '../../LinkAsButton';

export const MobileNavigation = () => {
	const { isNavigationActive, openNavigation, closeNavigation } =
		useMobileNavigation();

	return (
		<div className="lg:hidden">
			<button
				aria-label="Open navigation"
				className="rounded p-2"
				onClick={openNavigation}
			>
				<svg className="w-5 text-gray-100" viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
					/>
					<path
						fill="currentColor"
						d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
					/>
					<path
						fill="currentColor"
						d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
					/>
				</svg>
			</button>

			{isNavigationActive && (
				<>
					<div className="absolute left-0 top-0 z-40 w-full">
						<div className="rounded bg-secondary-base p-4 shadow-md">
							<div className="mb-4 flex items-center justify-between">
								<div>
									<Link
										href="/"
										aria-label="ShareQ"
										className="inline-flex items-center"
									>
										<span className="px-2 py-1 text-xl font-bold uppercase tracking-wide text-gray-100">
											ShareQ
										</span>
									</Link>
								</div>
								<div>
									<button
										aria-label="Close navigation"
										className="rounded p-2"
										onClick={closeNavigation}
									>
										<svg className="w-5 text-gray-100" viewBox="0 0 24 24">
											<path
												fill="currentColor"
												d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
											/>
										</svg>
									</button>
								</div>
							</div>
							<ul role="list" className="w-full space-y-4">
								{links.map(({ link, label }, key) => (
									<li key={key}>
										<NavItem link={link} label={label} />
									</li>
								))}

								<li>
									<NavItem link="/" label="Sign in" />
								</li>

								<li className="flex">
									<LinkAsButton link="/" label="Sign up" variant="base" />
								</li>
							</ul>
						</div>
					</div>

					<div
						className="fixed left-0 top-0 z-30 h-screen w-screen bg-black/20"
						onClick={closeNavigation}
					></div>
				</>
			)}
		</div>
	);
};
