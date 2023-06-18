import type { ReactNode } from 'react';
import '../styles/tailwind.css';

type RootLayoutProps = {
	children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="pl">
			<body className="bg-black">
				<div className="h-screen w-screen bg-red-400">{children}</div>
			</body>
		</html>
	);
}
