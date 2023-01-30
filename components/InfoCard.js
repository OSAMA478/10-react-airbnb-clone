import Image from "next/image";
import React, { useState } from "react";
import { icons } from "react-icons";
import { AiFillHeart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

const InfoCard = ({
	img,
	location,
	title,
	description,
	star,
	price,
	total,
}) => {
	const [isliked, setIsLiked] = useState(false);
	return (
		<div className="flex px-2 py-6 transition duration-200 ease-out border border-b rounded-lg cursor-pointer hover:opacity-80 hover:shadow-lg">
			<div className="relative flex-shrink-0 w-40 h-24 md:h-52 md:w-80">
				<Image src={img} fill className="object-cover rounded-lg" />
			</div>
			<div className="flex flex-col flex-grow pl-5">
				<div className="flex justify-between">
					<p>{location}</p>

					<AiFillHeart
						onClick={() => setIsLiked(!isliked)}
						className={`cursor-pointer ${
							isliked ? `text-red-600` : `text-gray-500`
						} h-7`}
					/>
				</div>
				<h4 className="text-xl">{title}</h4>
				<div className=""></div>
				<p className="flex-grow p-2 text-sm text-gray-500">{description}</p>
				<div className="flex items-end justify-between pt-4">
					<p className="flex items-center ">
						<AiFillStar className={`text-red-400 h-5`} />

						{star}
					</p>
					<div className="">
						<p className="pb-2 text-lg font-semibold lg:text-2xl">{price}</p>
						<p className="text-right font-extralight">{total}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InfoCard;
