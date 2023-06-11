import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				zIndex: 999,
			}}
		>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<Link
					to="/"
					style={{
						color: "white",
						textDecoration: "none",
						cursor: "pointer",
					}}
				>
					Home
				</Link>
				<Link
					to="/codechef"
					style={{
						color: "white",
						textDecoration: "none",
						cursor: "pointer",
						marginLeft: "2rem",
					}}
				>
					CodeChef
				</Link>
				<Link
					to="/codeforces"
					style={{
						color: "white",
						textDecoration: "none",
						cursor: "pointer",
						marginLeft: "2rem",
					}}
				>
					CodeForces
				</Link>
			</div>
		</header>
	);
}
