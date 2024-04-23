import React from "react";

import cpp from "../assets/cpp.png";
import css from "../assets/css.png";
import html from "../assets/html_1.png";
import js from "../assets/js.png";
import java from "../assets/java.png";
import kotlin from "../assets/kotlin.png";
import react from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import tailwind from "../assets/tailwind.png";
import android from "../assets/android.png";
import dsa from "../assets/dsa.png";
import react_native from "../assets/react_native.png";

const Experience = () => {
	const skills = [
		{
			id: 1,
			src: html,
			title: "HTML",
			style: "shadow-orange-500",
		},
		{
			id: 2,
			src: css,
			title: "CSS",
			style: "shadow-blue-500",
		},
		{
			id: 3,
			src: js,
			title: "JavaScript",
			style: "shadow-yellow-500",
		},
		{
			id: 4,
			src: java,
			title: "Java",
			style: "shadow-red-500",
		},
		{
			id: 5,
			src: kotlin,
			title: "Kotlin",
			style: "shadow-purple-500",
		},
		{
			id: 6,
			src: react,
			title: "React",
			style: "shadow-blue-500",
		},
		{
			id: 7,
			src: nextjs,
			title: "NextJS",
			style: "shadow-white",
		},
		{
			id: 8,
			src: tailwind,
			title: "Tailwind CSS",
			style: "shadow-blue-500",
		},
		{
			id: 9,
			src: android,
			title: "Android",
			style: "shadow-green-500",
		},
		{
			id: 10,
			src: react_native,
			title: "React Native",
			style: "shadow-blue-500",
		},
		{
			id: 11,
			src: dsa,
			title: "DSA",
			style: "shadow-red-500",
		},
	];
	
	// NOTE: Added the margin Top in the first div block to adjust the overlapping of the prev section

	return (
		<div
			name="experience"
			className="bg-gradient-to-b from-gray-800 to-black text-white w-full h-screen  "
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white ">
				<div className="mt-64" > 
					<p className="text-4xl p-2 font-bold inline border-b-4 border-gray-500  ">
						Experience
					</p>
					<p className="text-xl py-6">
						These are the Technologies I've worked on
					</p>
				</div>

				{/* JS Logic Starts */}

				<div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">

					{
						skills.map((skill) => (
							<div key={skill.id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${skill.style}`}>
								<img
									className="w-20 mx-auto"
									src={skill.src}
									alt={skill.title}
								/>
								<p className="mt-4">{skill.title}</p>
							</div>
						))
					}




				</div>
			</div>
		</div>
	);
};

export default Experience;
