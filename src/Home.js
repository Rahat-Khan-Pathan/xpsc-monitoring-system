import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
			}}
		>
			<div className="row row-cols1">
				<div className="col" style={{ padding: "1rem" }}>
					<Link
						to="/codechef"
						style={{
							color: "white",
							fontSize: "2rem",
							textDecoration: "none",
							cursor: "pointer",
							backgroundColor: "#4d2c18",
						}}
					>
						CodeChef
					</Link>
				</div>
				<div className="col" style={{ padding: "1rem" }}>
					<Link
						to="/codeforces"
						style={{
							color: "white",
							fontSize: "2rem",
							textDecoration: "none",
							cursor: "pointer",
							backgroundColor: "#fb5",
						}}
					>
						CodeForces
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
