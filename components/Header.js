import Image from "next/image";
import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { BsGlobe } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { HiUserCircle } from "react-icons/hi";
import { BsPersonFill } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";

import { DateRangePicker } from "react-date-range";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import Link from "next/link";

const brandLogo =
	"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png";

const Header = () => {
	const [searchInput, setSearchInput] = useState("");
	const [numberOfPeople, setNumberOfPeople] = useState(1);
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());

	const handleSelect = (ranges) => {
		setStartDate(ranges.selection.startDate);
		setEndDate(ranges.selection.endDate);
	};

	const selectionRange = {
		startDate: startDate,
		endDate: endDate,
		key: "selection",
	};

	const iconHandler = (event) => {
		setNumberOfPeople(event.target.value);
	};

	return (
		<header className="sticky top-0 z-50 grid grid-cols-3 p-5 bg-white shadow-md md:px-10">
			{/* left side */}
			<Link href="/">
				<div className="relative flex items-center h-10 my-auto cursor-pointer">
					<Image
						className="object-contain object-left"
						src={brandLogo}
						alt="brand logo"
						fill
					/>
				</div>
			</Link>
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
				<p className="hidden capitalize md:inline">become a host</p>
				<BsGlobe className="h-4" />
				<div className="flex items-center p-2 space-x-2 border-2 rounded-full">
					<AiOutlineMenu className="h-4" />
					<HiUserCircle className="h-4" />
				</div>
			</div>
			{searchInput && (
				<div className="flex flex-col col-span-3 mx-auto mt-2 ">
					<DateRangePicker
						ranges={[selectionRange]}
						minDate={new Date()}
						rangeColors={["#F87171"]}
						onChange={handleSelect}
					/>
					<div className="flex items-center mb-4 border-b">
						<h2 className="flex-grow text-2xl font-semibold">
							Number of Guest
						</h2>
						{numberOfPeople == 1 ? <BsPersonFill /> : <BsPeopleFill />}

						<input
							value={numberOfPeople}
							type="number"
							min={1}
							onChange={iconHandler}
							className="w-12 pl-2 text-lg outline-none"
						/>
					</div>
					<div className="flex gap-8">
						<button
							onClick={() => setSearchInput("")}
							className="flex-grow py-2 text-white bg-gray-300 rounded-lg"
						>
							Cancel
						</button>
						<button className="flex-grow py-2 rounded-lg text-white bg-[#F87171]">
							search
						</button>
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
