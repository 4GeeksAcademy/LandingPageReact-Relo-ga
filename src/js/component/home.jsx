import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<>
			<div className="d-flex flex-column min-vh-100">
				<Navbar />
				<div className="container">
					<Jumbotron />
					<Card />
				</div>
				<Footer/>
			</div>
		</>
		
	);
};

export default Home;
