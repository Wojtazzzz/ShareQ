import Link from 'next/link';
import { NavItem } from './NavItem';
import links from './links.json';
import { MobileNavigation } from './mobileNavigation/MobileNavigation';

export const Navigation = () => {
	return (
		<nav className="bg-secondary-base">
			<div className="mx-auto px-4 py-5 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
				<div className="relative flex items-center justify-between">
					<div className="flex items-center">
						<Link href="/" aria-label="ShareQ" className="px-2 py-1">
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

					<ul role="list" className="hidden items-center space-x-8 lg:flex">
						<li>
							<a
								href="/"
								aria-label="Sign in"
								title="Sign in"
								className="hover:text-teal-accent-400 font-medium tracking-wide text-gray-100 transition-colors duration-200"
							>
								Sign in
							</a>
						</li>
						<li>
							<a
								href="/"
								className="bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline inline-flex h-12 items-center justify-center rounded px-6 font-medium tracking-wide text-white shadow-md transition duration-200 focus:outline-none"
								aria-label="Sign up"
								title="Sign up"
							>
								Sign up
							</a>
						</li>
					</ul>

					<MobileNavigation />
				</div>
			</div>
		</nav>
	);
};
