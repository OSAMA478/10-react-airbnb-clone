import React from "react";
import Image from "next/image";
import bannerImagePng from "../src/57b9f708-bb12-498c-bc33-769f8fc43e63.png";

const Banner = () => {
	const bannerImageLink =
		"https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg";

	const bannerImage = bannerImageLink ? bannerImageLink : bannerImagePng;
	return (
		<div className="relative h-[300px] transition duration-150 sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] ">
			<Image className="object-cover" fill src={bannerImage} />
			<div className="absolute w-full text-sm text-center top-1/2 sm:text-lg">
				<p>Not sure where to go? Perfect.</p>
				<button className="px-10 py-4 my-3 font-semibold text-purple-700 transition duration-150 bg-white rounded-full shadow-md hover:shadow-lg active:scale-90">
					I'm flexible
				</button>
			</div>
		</div>
	);
};

export default Banner;
