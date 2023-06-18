import clsx from 'clsx';
import Link from 'next/link';

type LinkAsButtonProps = {
	link: string;
	label: string;
	variant: 'base' | 'outline';
	onClick?: () => void;
};

export const LinkAsButton = ({
	link,
	label,
	variant,
	onClick = null,
}: LinkAsButtonProps) => {
	return (
		<Link
			href={link}
			className={clsx(
				'w-full rounded-md px-5 py-3 text-center font-medium tracking-wide text-gray-100 transition-colors ease-in active:bg-primary-dark/70',
				{
					'hover:bg-primary-dark hover:shadow-md': variant === 'outline',
					'bg-primary-dark shadow-md hover:bg-primary-dark/80':
						variant === 'base',
				}
			)}
			onClick={onClick}
		>
			{label}
		</Link>
	);
};
