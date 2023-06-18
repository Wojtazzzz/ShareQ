import Link from 'next/link';
import { NavItem } from './NavItem';
import links from './links.json';
import { MobileNavigation } from './mobileNavigation/MobileNavigation';
import { LinkAsButton } from '../LinkAsButton';

export const Navigation = () => {
	return (
		<nav className="bg-secondary-base" aria-label="Main navigation">
			<div className="mx-auto px-4 py-5 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
				<div className="relative flex items-center justify-between">
					<div className="flex items-center">
						<Link href="/" className="px-2 py-1">
							<h1 className="text-xl font-bold uppercase tracking-wide text-gray-100">
								ShareQ
							</h1>
						</Link>

						<ul
							role="list"
							className="ml-4 hidden items-center space-x-2 lg:flex"
						>
							{links.map(({ link, label }, key) => (
								<li key={key}>
									<NavItem link={link} label={label} />
								</li>
							))}
						</ul>
					</div>

					<ul role="list" className="hidden items-center space-x-2 lg:flex">
						<li>
							<LinkAsButton link="/" label="Sign in" variant="outline" />
						</li>
						<li>
							<LinkAsButton link="/" label="Sign up" variant="base" />
						</li>
					</ul>

					<MobileNavigation />
				</div>
			</div>
		</nav>
	);
};
