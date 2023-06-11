import React, { useEffect, useState, useCallback } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import Modal from "./Modal";
import Spinner from "./Spinner";

const userNames = [
	"md_jobayedi",
	"toufik_cse21",
	"ahmed_sabib",
	"ashikaslam1111",
	"siddique32",
	"istiaqueahmed",
	"mafuzy007",
	"nayem030",
	"irnayan37",
	"nagiur",
	"md_ariful",
	"mominulislam",
	"elmaakter1412",
	"arsenic_64",
	"sogu7",
	"chanchol20",
	"omar2627",
	"no_one22",
	"coder_dipta",
	"nayem_swe_19",
	"moniruzzaman01",
	"shajjad_gani",
	"dear_mahmud",
	"mdyeasinaraf07",
	"abdullah124",
	"dev_msi_75",
	"rimon23",
	"sayedriad",
	"protik0939",
	"meliash198",
	"soroar",
	"mobashara_215",
	"rafi_shariar",
	"mehedihasa2023",
	"maruf_31",
	"asadullah_147",
	"sazit96",
	"ekra0",
	"sharat17",
	"mr_fm",
	"emondas",
	"itzmrnh",
	"shakib_2001",
	"msalahuddin267",
	"hr100756",
	"nazmulhassan",
	"mahinhasanar",
	"kawsar_12",
	"fardin_emon",
	"kabirbhae22",
	"big_khaled",
	"immanual",
	"prince_ghosh",
	"tanveerarnob",
	"tanvee009",
	"sohan04",
	"mehedi_067",
	"dusty_spider",
	"ekra0",
];

const allUsers = [...new Set(userNames)];

export default function Codechef() {
	const api_url = "https://codechef-cards-api.onrender.com/";

	const [users, setUsers] = useState(allUsers); // Current Users.
	const [usersData, setUsersData] = useState([]); // Current Users Data.
	const [isLoading, setIsLoading] = useState(true);

	// To Control State Of Modal.
	const [showModal, setShowModal] = useState({
		visible: false,
		type: "",
		msg: "",
		acceptFunc: null,
	});

	// To Fetch User Data From API.
	const fetchData = useCallback((username) => {
		fetch(api_url + username)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				// console.log(data);
				if (data.status === "success") {
					setUsersData((old) => [...old, { ...data.data }]);
				} else {
					setShowModal((previous) => {
						return {
							...previous,
							visible: true,
							type: "alert",
							msg: "You entered Invalid Username.",
						};
					});
				}
			})
			.catch((error) => console.log("Error:", error));
	}, []);

	// Loading Stored User And Fetching User Data. [RUNS ONLY ONCE]
	useEffect(() => {
		users.forEach((username) => {
			fetchData(username);
		});
	}, [fetchData]);

	useEffect(() => {
		if (users.length === usersData.length) {
			setIsLoading(false);
		} else {
			setIsLoading(true);
		}
	}, [users, usersData]);
	return (
		<div className="App">
			<Header />
			<div className="Content">
				<div className="CardList">
					{usersData
						.sort((first, second) => {
							return second.rating - first.rating;
						})
						.map((user) => {
							return (
								<Card
									key={user.username}
									user_data={user}
									setShowModal={setShowModal}
								/>
							);
						})}
				</div>

				{(isLoading || showModal.visible) && (
					<div className="backDrop">
						{isLoading && <Spinner />}
						{showModal.visible && (
							<Modal modalData={showModal} setShowModal={setShowModal} />
						)}
					</div>
				)}
			</div>
			<Footer />
		</div>
	);
}
