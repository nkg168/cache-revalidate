"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
export const NavLink = ({
	href,
	children,
}: { href: string; children: ReactNode }) => {
	const pathname = usePathname();
	return (
		<>
			<Link href={href}>{children}</Link>
			{pathname === href ? "👈" : ""}
		</>
	);
};
