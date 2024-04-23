import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import {Link} from 'react-scroll'

export default function NavBar() {
	const [showNav, setShowNav] = useState(false);

	//  To Make NavBar Instead of Creating the Clutter in code we create array of objects and hover using loops
	const links = [
		{
			id: 1,
			link: "home",
		},
		{
			id: 2,
			link: "about",
		},
		{
			id: 3,
			link: "portfolio",
		},
		{
			id: 4,
			link: "experience",
		},
		{
			id: 5,
			link: "contact",
		},
	];

	return (
		<div className="flex justify-between items-center w-full h-20 text-white fixed bg-black px-4 ">
			<div>
				<h1 className="text-5xl font-signature ml-2">Shubham Karale</h1>
			</div>

			<ul className="hidden md:flex">
				{links.map(({ id, link }) => (
					<li
						key={id}
						className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
					>
						<Link to={link} smooth duration={500}>{link} </Link>
					</li>
				))}
			</ul>

			{/* Showing Nav Bar */}

			<div
				onClick={() => setShowNav(!showNav)}
				className="md:hidden text-3xl pr-4 z-10 text-gray-500 cursor-pointer"
			>
				{showNav ? <FaTimes size={30} /> : <FaBars size={30} />}
				{/* If the mode is desktop print faBars and if the mode is mobile it prints the FaBars  */}
			</div>

			{/* Show NavBar when website open in the mobile Version */}

			{showNav && (
				<ul className="flex flex-col justify-center items-center absolute top-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 ">
					{links.map(({ id, link }) => (
						<li
							key={id}
							className="px-4 cursor-pointer capitalize py-6 text-4xl"
						>
							<Link onClick={()=>setShowNav(!showNav)} to={link} smooth duration={500}>{link} </Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
