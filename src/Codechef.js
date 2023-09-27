import React, { useEffect, useState, useCallback } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import Modal from "./Modal";
import Spinner from "./Spinner";
import api from "./config.json";
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
	"mehedihasa2023",
	"maruf_31",
	"asadullah_147",
	"sazit96",
	"ekra0",
	"nisikto",
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
	"shakhawat_cse",
	"jison_jummo",
	"mamun170902",
	// "rahatkhan99",
];
const userNames2 = [
	"sabuj2064",
	"abdul_lah",
	"alamgir65",
	"aminu_ldola",
	"apaul213146",
	"arup_43",
	"asif_abdullah1",
	"atik203",
	"ahramu584",
	"aushamim",
	"farhansh18",
	"haquewasif",
	"hasan_dev04",
	"hironmoy_ray",
	"imran_258",
	"ishtiaq_mahin",
	"fazlyfardin",
	"mjony",
	"jubayer75",
	"kaium2909",
	"kausar111",
	"meem01",
	"ayirbik",
	"labib1204",
	"mdmahabub55",
	"mahbub_turza",
	"mahmudqudrati",
	"masud_abdullah",
	"hossain0012",
	"alif23",
	"bhamithasan",
	"minhaj01",
	"heisenberg_120",
	"notstrongenouh",
	"mdmerazulislam",
	"mehadi214100",
	"mohiuddinsizan",
	"moin46",
	"morshedhasan19",
	"mubarak24",
	"muhammad_sayem",
	"labyr1nth",
	"nasim_ahmed",
	"nasrullah9867",
	"niloy097",
	"niloymahmudapu",
	"onceuponnion_9",
	"freshman_01",
	"ra_mid",
	"rakibulhassan2",
	"ratulhasan2108",
	"rayhan_03",
	"sanzidtonu",
	"riad28",
	"robot_riad",
	"rocky20809",
	"rollno_infinit",
	"s_popy",
	"sadif609",
	"samiunblack",
	"ssksan",
	"schrosmiley",
	"shafaitzaman",
	"shafiq1st",
	"shahmoaz10",
	"sharifdupharma",
	"shawmitra_bu",
	"shawon_oc",
	"hridoymahbub45",
	"b14ckb3rry",
	"soaib056",
	"soumick940",
	"srayosikder",
	"sumit_chandra",
	"sanjida77",
	"syedagulnaj",
	"tahdiislam",
	"tahsinferdous3",
	"talatmcc",
	"voidd_nulll",
];

const allUsers = [...new Set(userNames)];
const allUsers2 = [...new Set(userNames2)];

export default function Codechef() {
	const api_url = api.apiOne;

	const users = allUsers;
	const users2 = allUsers2;
	const [usersData, setUsersData] = useState([]); // Current Users Data.
	const [isLoading, setIsLoading] = useState(true);
	const [select, setSelect] = useState("batch3");

	// To Control State Of Modal.
	const [showModal, setShowModal] = useState({
		visible: false,
		type: "",
		msg: "",
		acceptFunc: null,
	});

	// To Fetch User Data From API.
	const fetchData = useCallback((users) => {
		// console.log(users);
		users?.forEach((username) => {
			fetch(api_url + username)
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					// console.log(data);
					if (data.status === "success") {
						setUsersData((old) => [...old, { ...data.data }]);
					} else {
						// console.log(username);
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
		});
		setIsLoading(false);
	}, []);

	// Loading Stored User And Fetching User Data. [RUNS ONLY ONCE]
	useEffect(() => {
		fetchData(users2);
	}, []);

	useEffect(() => {
		if (
			allUsers.length === usersData.length ||
			allUsers2.length === usersData.length
		) {
			setIsLoading(false);
		} else {
			setIsLoading(true);
		}
	}, [select, usersData]);
	return (
		<div className="App">
			<Header />
			<div
				className="Content"
				style={{ marginBottom: "50px", paddingTop: "100px" }}
			>
				<div className="dropdown w-100 text-center">
					<button
						className="btn py-3 btn-secondary dropdown-toggle w-25"
						type="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						{select === "batch2" ? "Barch 2" : "Batch 3"}
					</button>
					<ul
						className="dropdown-menu w-25 text-center"
						style={{ cursor: "pointer" }}
					>
						<li>
							<p
								className="dropdown-item"
								onClick={() => {
									setSelect("batch3");
									setUsersData([]);
									setIsLoading(true);
									fetchData(users2);
								}}
								style={{ cursor: "pointer" }}
							>
								Batch 3
							</p>
						</li>
						<li>
							<p
								className="dropdown-item"
								onClick={() => {
									setSelect("batch2");
									setUsersData([]);
									setIsLoading(true);
									fetchData(users);
								}}
								style={{ cursor: "pointer" }}
							>
								Batch 2
							</p>
						</li>
					</ul>
				</div>
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
