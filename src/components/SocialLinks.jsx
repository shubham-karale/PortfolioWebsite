import React, { useState } from "react";

// Adding the icons of Linkedin, Github, Twitter,Mail
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
	const links = [
		{
			id: 1,
			child: (
				<>
					LinkedIn <FaLinkedin size={30} />
				</>
			),
			href: "https://www.linkedin.com/",
			style: "rounded-tr-md",
		},
		{
			id: 2,
			child: (
				<>
					Github <FaGithub size={30} />
				</>
			),
			href: "https://www.github.com/",
		},
		{
			id: 3,
			child: (
				<>
					Mail <HiOutlineMail size={30} />
				</>
			),
			href: "mailto:shubhamkarale207@gmail.com",
		},
		{
			id: 4,
			child: (
				<>
					Twitter <FaTwitter size={30} />
				</>
			),
			href: "https://www.linkedin.com/",
		},
		{
			id: 5,
			child: (
				<>
					Resume <BsFillPersonLinesFill size={30} />
				</>
			),
			href: "../ShubhamKaraleResume.pdf",
			style: "rounded-br-md",
			download: true,
		},
	];

	return (
        // Due to hidden Social links display only when the display is larger than lg
		<div className="hidden lg:flex flex-col top-[35%] left-0 fixed  ">
			{/* Creating the Social Links */}
			<ul>
				{links.map(({ id, child, href, style, download }) => (
					<li
						key={id}
						className={
							"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px]  hover:rounded-md duration-30 bg-gray-500" +
							" " +
							style // Adding the style
						}
					>
						<a
							href={href}
							className="flex justify-between items-center w-full text-white"
							download={download} // Download the resume
                            target="_blank"  // Open the link in new tab
                            rel="noreferrer" // Prevent the security risk
						>
							{child}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SocialLinks;
