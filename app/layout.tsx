import { NavLink } from "./nav-link";
import "./globals.css";
import { getCurrentTime } from "@/lib";
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body>
				<RenderTime testId="root-layout-render-time" />
				<Links />
				{children}
			</body>
		</html>
	);
}

const RenderTime = ({ testId }: { testId?: string }) => {
	return <p data-testid={testId}>{getCurrentTime()}</p>;
};

const Links = () => (
	<nav>
		<ul className="flex gap-1">
			<li>
				<NavLink href="/mix">mix</NavLink>
			</li>
			<li>
				<NavLink href="/static">static</NavLink>
			</li>{" "}
			<li>
				<NavLink href="/dynamic">dynamic</NavLink>
			</li>
		</ul>
	</nav>
);
