import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Codechef from "./Codechef";
import Home from "./Home";
import Codeforces from "./Codeforces";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/codechef" element={<Codechef />} />
				<Route path="/codeforces" element={<Codeforces />} />
			</Routes>
		</Router>
	);
};

export default App;
