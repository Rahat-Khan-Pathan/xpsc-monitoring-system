import React from "react";

export default function Footer() {
	return (
		<footer
			style={{
				position: "fixed",
				bottom: 0,
				left: 0,
				width: "100%",
				zIndex: 999,
			}}
		>
			<p className="pt-2">
				© Modified by{" "}
				<span className="text-primary fw-bold">Rahat Khan Pathan</span>.
				Copyright Yash Chaudhari.{" "}
				<a
					className="github fw-bold"
					target="_blank"
					rel="noreferrer"
					style={{ cursor: "pointer" }}
					href="https://github.com/Rahat-Khan-Pathan/xpsc-monitoring-system"
				>
					Github Repository
				</a>
			</p>
		</footer>
	);
}
