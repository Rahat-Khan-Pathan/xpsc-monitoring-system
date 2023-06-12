import React, { useState, useEffect } from "react";
import "./CardCodeforces.css";

export default function CardCodeforces({ user_data, setShowModal }) {
	const { firstName, lastName, handle, rank, rating, maxRating, maxRank } =
		user_data;

	// To Give Accent Color To Card.
	const colorClass = `${rank}`;
	const isActiveUser = true;

	// To Toggle moreDetails Card State.
	const [isMoreDetailsShown, setMoreDetailsShown] = useState(false);

	// To Handle Screen Size Changes.
	const [screenWidth, setScreenWidth] = useState(true);
	const [isScreenSmall, setIsScreenSmall] = useState(true);

	// Handling Screen Resize.
	function handleResize() {
		setScreenWidth(window.innerWidth);
	}
	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// Checking Whether Screen Size Is Small.

	return (
		<div className={`cardBox ${colorClass}`}>
			<div className="cardDetails">
				<h1>{`${firstName || "Unavailable"} ${lastName || "Unavailable"}`}</h1>
				<a
					className="cardUsername"
					href={"https://codeforces.com/profile/" + handle}
					target="_blank"
					rel="noreferrer noopener"
					style={{ cursor: "pointer" }}
				>
					({handle})
				</a>

				<div className="cardRating">
					<p>
						Current - {rank || "No Rank"} | {rating || "No Rating"}
					</p>
				</div>
				<div className={`cardHighestRatingNew ${maxRank}`}>
					{isActiveUser ? (
						<h4>
							Max - {maxRank || "No Rank"} | {maxRating || "No Rating"}
						</h4>
					) : (
						<>
							<h4>Inactive User</h4>
						</>
					)}
				</div>
			</div>

			{/* {(isMoreDetailsShown || !isScreenSmall) && (
				<div className="moreDetails">
					<div className="detailsItemWrapper">
						<h1 className="wrapperHeading">Ranking</h1>
						<div className="detailsItem">
							<p>Global Rank:</p>
							<p>{globalRank || "Not Available"}</p>
						</div>
						<div className="detailsItem">
							<p>Country Rank:</p>
							<p>{countryRank || "Not Available"}</p>
						</div>
					</div>
					<div className="detailsItemWrapper">
						<h1 className="wrapperHeading">Problem Solved</h1>
						<div className="detailsItem">
							<p>Fully:</p>
							<p>{problemFullySolved}</p>
						</div>
						<div className="detailsItem">
							<p>Partially:</p>
							<p>{problemPartiallySolved}</p>
						</div>
					</div>
				</div>
			)} */}
		</div>
	);
}
