import Image from "next/image";
import React from "react";

const MediumCard = (props) => {
	return (
		<div className="p-2 transition duration-300 ease-out transform cursor-pointer hover:scale-105">
			<div className="relative w-48 h-48 overflow-hidden md:w-64 md:h-64 rounded-xl">
				<Image src={props.img} fill className="object-cover" alt={"img"} />
			</div>
			<h3 className="mt-3 text-2xl">{props.title}</h3>
		</div>
	);
};

export default MediumCard;
