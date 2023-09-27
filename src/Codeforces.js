import React, { useEffect, useState, useCallback } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Modal from "./Modal";
import Spinner from "./Spinner";
import CardCodeforces from "./CardCodeforces";
import api from "./config.json";

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
	"Nisikto",
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
	"SHAKHAWAT_SHIHAB",
	"Jison_Chakma",
	"Coder_Dipta",
	// "rahat_khan_pathan",
];
const userNames2 = [
	"ahammed.sabuj_",
	"abdul_lah",
	"phitron_batch_3",
	"aminul_dola",
	"Arjun_UiU",
	"Arup_43",
	"asif_abdullah",
	"Atik203",
	"ramim-ahmed",
	"aushamim",
	"UnSolvedBug_Farhan",
	"HaqueWasif",
	"hasan_dev04",
	"Hironmoy_Ray",
	"imran_258",
	"_BigHero",
	"Fazly-Fardin",
	"mjony",
	"Jubayer__Hossain",
	"kaium2020",
	"kausar0.5",
	"Khushnor_Rahman_Meem",
	"Ayirbik",
	"labib1204",
	"mdmahabub55",
	"Mahbub_Turza",
	"mahmudqudrati",
	"Masud_Abdullah",
	"Hossain0012",
	"mdalifahmed114510",
	"hasan_03",
	"learnerminj",
	"Heisenburg-120",
	"_Grandmaster",
	"Md-Merazul-Islam",
	"mehadi40758",
	"mohiuddin_sizan",
	"MOIN46",
	"Morshed_Alam33",
	"Mubarak_Hossain",
	"muhammad_sayem",
	"BLACK-HEAD",
	"nasimahemd0909",
	"MD.Naerullah",
	"niloy097",
	"niloymahmudapu",
	"onceuponnion_9",
	"-11",
	"Black_Pencil",
	"rakibulhassan29052000",
	"ratulhasan2108",
	"Rayhan_03",
	"sanzidtonu",
	"RiadMEhedi",
	"robot_riad",
	"Rocky20809",
	"rollno_infinity",
	"S.Popy",
	"sadif609",
	"samiunblack",
	"SSKsan",
	"schrodingersmile",
	"shafaitzaman1234",
	"shafiq1st",
	"makmodol1173",
	"sharif_dupharma",
	"Mistake_factory",
	"CRYP70N1C",
	"BugBane_Hridoy",
	"b14ckb3rry",
	"soaib056",
	"Soumick",
	"srayosikder",
	"sumit_chandra",
	"Sunjida_Akter",
	"SyedaGulnaj",
	"tahdiislam",
	"tahsin005",
	"talatmcc",
	"voidd_nulll",
];

const allUsers = [...new Set(userNames)];
const allUsers2 = [...new Set(userNames2)];

export default function Codeforces() {
	const api_url = api.apiTwo;

	const users = allUsers.join(";");
	const users2 = allUsers2.join(";");
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
		fetchData(users2);
	}, []);

	useEffect(() => {
		// console.log(users.length, usersData.length);
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
						className="btn py-3  btn-secondary dropdown-toggle w-25"
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
