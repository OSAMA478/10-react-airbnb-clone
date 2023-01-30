import React from "react";

const footerData = [
	{
		heading: "ABOUT",
		subTopic1: "How Airbnb works",
		subTopic2: "Newsroom",
		subTopic3: "Investors",
		subTopic4: "Airbnb Plus",
		subTopic5: "Airbnb Luxe",
	},
	{
		heading: "COMMUNITY",
		subTopic1: "Accessibility",
		subTopic2: "This is not a real site",
		subTopic3: "Its pretty awesome clone",
		subTopic4: "Referrals accepted",
		subTopic5: "papafam",
	},
	{
		heading: "HOST",
		subTopic1: "Papa React",
		subTopic2: "Presents",
		subTopic3: "Zero to Full Stack Hero",
		subTopic4: "Hundreds of students",
		subTopic5: "Join Now",
	},
	{
		heading: "SUPPORT",
		subTopic1: "Help Center",
		subTopic2: "Ttrust & Safety",
		subTopic3: "Say Hi YouTube",
		subTopic4: "Easter Eggs",
		subTopic5: "For the Win",
	},
];

const Footer = () => {
	return (
		<div className="grid grid-cols-1 px-32 text-gray-600 bg-gray-100 md:grid-cols-4 py-14 gap-y-10">
			{footerData.map((item) => (
				<div className="space-y-4 text-xs text-gray-800">
					<h5 className="font-bold">{item.heading}</h5>
					<p>{item.subTopic1}</p>
					<p>{item.subTopic2}</p>
					<p>{item.subTopic3}</p>
					<p>{item.subTopic4}</p>
					<p>{item.subTopic5}</p>
				</div>
			))}
		</div>
	);
};
export default Footer;
