import React, { useEffect, useState, useCallback } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Modal from "./Modal";
import Spinner from "./Spinner";
import CardCodeforces from "./CardCodeforces";

const userNames = [
	"mdjobayed",
	"toufikislam268",
	"Anchord",
	"ashikaslam",
	"siddique32",
	"Istiaque190515",
	"GENERALMAHFUZ",
	"nayem030",
	"irnayan37",
	"nagiur",
	"Ariful_islam_cp",
	"786mominulislam",
	"elmaakter14120",
	"Arsenic33",
	"sogu7",
	"chanchol_kumar",
	"omar2627",
	"Neyamul_Haq",
	"Coder_Dipta",
	"Nayem_SWE_19",
	"Md.Moniruzzaman",
	"Shajjad_Gani",
	"dear_Mahmud",
	"mdyeasinaraf07",
	"abdullah124",
	"DEV_MSI_75",
	"n0bas1c",
	"Sayed_Riad",
	"protik0939",
	"elias198",
	"miasoroar",
	"Mobashera",
	"Rafi_Shariar",
	"Mehedi22",
	"CF_MaruF_",
	"asadullah147",
	"sazit96",
	"EKRA_24",
	"17sharat",
	"Mr_FM",
	"Emondas",
	"itzmrnh",
	"worshipper",
	"msalahuddin267",
	"ev__an",
	"Nazmul_TheDarkHorse",
	"Mahir_Hasan",
	"MD_Kawsar_Mahmud",
	"Emonhossainnoob",
	"ArafatKabir",
	"Khaled_Amin",
	"immanual19",
	"13samiul",
	"Prince_Ghosh",
	"tanveershahriara",
	"mamun170902",
	"tanvee009",
	"Sohan5303",
	"Mehethe_hasan",
	"dusty_spider",
	"EKRA_24",
	"rahat_khan_pathan",
];

const allUsers = [...new Set(userNames)];

export default function Codeforces() {
	const api_url = "https://codeforces.com/api/";

	const [users, setUsers] = useState(allUsers.join(";")); // Current Users.
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
		fetch(`${api_url}user.info?handles=${username}`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				data?.result?.forEach((data) => {
					if (data.rating === undefined) {
						data.rating = 0;
					}
				});
				if (data.status === "OK") {
					setUsersData(data.result);
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
		fetchData(users);
	}, []);

	useEffect(() => {
		if (allUsers.length === usersData.length) {
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
								<CardCodeforces
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
