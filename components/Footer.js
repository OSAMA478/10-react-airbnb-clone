import React from "react";

const Footer = (props) => {
	console.log(props.footerData);
	return (
		<div className="grid grid-cols-1 px-32 text-gray-600 bg-gray-100 md:grid-cols-4 py-14 gap-y-10">
			{props.footerData.map((item) => (
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
