import React from "react";
import code_scree from "../assets/code_scree.jpg";
import imac_screen from "../assets/design_quote.jpg";
import design_scree from "../assets/imac_screen.jpg";
import keyboard from "../assets/keyboard.jpg";
import laptop_photo from "../assets/laptop_photo.jpg";
import laptop_photo_2 from "../assets/laptop_photo_2.jpg";
import quote_1 from "../assets/quote_1.jpg";
import quote_2 from "../assets/quote_2.jpg";

const Portfolio = () => {
	const portfolios = [
		{
			id: 1,
			src: code_scree,
		},
		{
			id: 2,
			src: imac_screen,
		},
		{
			id: 3,
			src: design_scree,
		},
		{
			id: 4,
			src: keyboard,
		},
		{
			id: 5,
			src: laptop_photo,
		},
		{
			id: 6,
			src: laptop_photo_2,
		},
		// {
		//     id:7,
		//     src:quote_1,
		// },
		// {
		//     id:8,
		//     src:quote_2,
		// },
	];

	return (
		<div
			name="portfolio"
			className="bg-gradient-to-b from-black to-gray-800 text-white w-full md:h-screen"
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full  ">
				<div className="pb-8">
					<p className="text-4xl p-2 font-bold inline border-b-4 border-gray-500 ">
						Portfolio
					</p>
					<p className="py-6">Check Out My Projects</p>
				</div>
				{/* //NOTES: */}

				<div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
					{portfolios.map((portfolio) => (
						<div className="shadow-md shadow-gray-600 rounded-lg">
							<img
								src={portfolio.src}
								alt=""
								className="rounded-md duration-200 hover:scale-105 transform transition-all ease-in-out w-96 h-48 object-cover "
							/>
							<div className="flex items-center justify-center ">
								<button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
									Demo
								</button>
								<button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
									Code
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
