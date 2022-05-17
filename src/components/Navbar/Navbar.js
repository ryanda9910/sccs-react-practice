import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Navbar.scss"

export const Navbar = () => {
	return (
		<div className="navbar">
			<Link to={'/'}>
				Home
			</Link>
			<Link to={'/About'}>
				About
			</Link>
			<Link to={"/Profile"}>
				Profile
			</Link>
			<Link to={"/Contact"}>
				Contact
			</Link>
		</div>
	);
};
