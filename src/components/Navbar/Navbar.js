import React from "react";
import "../../Styles/Navbar.scss"

export const Navbar = () => {
	return (
		<div className="navbar">
			<a href="/home">Home</a>
			<a href="/About">About</a>
			<a href="/Profile">Profile</a>
			<a href="/Contact">Contact</a>
		</div>
	);
};
