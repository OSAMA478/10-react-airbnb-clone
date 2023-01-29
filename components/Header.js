import Image from "next/image";
import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { BsGlobe } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { HiUserCircle } from "react-icons/hi";

const brandLogo =
	"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png";

const Header = () => {
	const [searchInput, setSearchInput] = useState("");
	return (
		<header className="sticky top-0 z-50 grid grid-cols-3 p-5 bg-white shadow-md md:px-10">
			{/* left side */}
			<div className="relative flex items-center h-10 my-auto cursor-pointer">
				<Image
					className="object-contain object-left"
					src={brandLogo}
					alt="brand logo"
					fill
				/>
			</div>
			{/* middle side */}
			<div className="flex items-center py-2 rounded-full md:border-2 md:shadow-sm">
				<input
					value={searchInput}
					onChange={(event) => {
						setSearchInput(event.target.value);
					}}
					className="flex-grow w-full pl-5 text-sm text-gray-600 placeholder-gray-400 bg-transparent outline-none"
					type="text"
					placeholder="type your text"
				/>
				<GoSearch className="hidden w-8 h-8 p-2 text-white bg-red-400 rounded-full cursor-pointer md:inline-flex md:mx-2" />
			</div>
			{/* right side */}
			<div className="flex items-center justify-end space-x-4 ">
				<p className="hidden md:inline">become a host</p>
				<BsGlobe className="h-4" />
				<div className="flex items-center p-2 space-x-2 border-2 rounded-full">
					<AiOutlineMenu className="h-4" />
					<HiUserCircle className="h-4" />
				</div>
			</div>
		</header>
	);
};

export default Header;
