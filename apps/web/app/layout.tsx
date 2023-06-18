import type { ReactNode } from 'react';
import '../styles/tailwind.css';
import { Navigation } from '../components/inc/navigation/Navigation';

type RootLayoutProps = {
	children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="pl">
			<body>
				<Navigation />

				<main>{children}</main>
			</body>
		</html>
	);
}
