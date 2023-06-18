import type { ReactNode } from 'react';
import '../styles/tailwind.css';
import { Navigation } from '../components/inc/navigation/Navigation';

type RootLayoutProps = {
	children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="pl">
			<body className="bg-black">
				<Navigation />

				<div className="h-screen w-screen bg-red-400">{children}</div>
			</body>
		</html>
	);
}
