import Link from 'next/link';

type NavItemProps = {
	link: string;
	label: string;
};

export const NavItem = ({ link, label }: NavItemProps) => {
	return (
		<Link
			href={link}
			className="p-2 font-medium tracking-wide text-gray-100 transition-colors lg:hover:text-gray-100/80"
		>
			{label}
		</Link>
	);
};
