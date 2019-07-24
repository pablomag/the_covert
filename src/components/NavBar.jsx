import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {

	return (
		<nav>
			<div className="nav-wrapper">
				<Link to="/" className="brand-logo"><img className="logo" src="/iso.png" alt="_the_Covert"/></Link>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li><Link to="/register">Register</Link></li>
				</ul>
			</div>
		</nav>
	);
}

export default NavBar;
