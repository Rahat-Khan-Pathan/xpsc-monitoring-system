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
			</p>
		</footer>
	);
}
