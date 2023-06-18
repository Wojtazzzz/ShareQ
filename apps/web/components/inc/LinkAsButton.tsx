import clsx from 'clsx';
import Link from 'next/link';

type LinkAsButtonProps = {
	link: string;
	label: string;
	variant: 'base' | 'outline';
};

export const LinkAsButton = ({ link, label, variant }: LinkAsButtonProps) => {
	return (
		<Link
			href={link}
			className={clsx(
				'w-full rounded-md px-5 py-3 text-center font-medium tracking-wide text-gray-100 transition-colors ease-in active:bg-primary-base/70',
				{
					'hover:bg-primary-base hover:shadow-md': variant === 'outline',
					'bg-primary-base shadow-md hover:bg-primary-base/80':
						variant === 'base',
				}
			)}
		>
			{label}
		</Link>
	);
};
