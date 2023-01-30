/** @type {import('next').NextConfig} */

module.exports = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "upload.wikimedia.org",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "a0.muscache.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "links.papareact.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};
// links.papareact.com
