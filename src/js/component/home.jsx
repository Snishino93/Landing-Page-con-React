import React from "react";
import Nav from "./nav.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<Nav/>
			<div className="container">
				<Jumbotron />
				<div className="tarjetas row">
					<div className="col-sm-3 d-flex justify-content-center">
						<Card className="mb-3 " />
					</div>
					<div className="col-sm-3 d-flex justify-content-center">
						<Card className="mb-3" />
					</div>
					<div className="col-sm-3 d-flex justify-content-center">
						<Card className="mb-3" />
					</div>
					<div className="col-sm-3 d-flex justify-content-center">
						<Card className="mb-3" />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
