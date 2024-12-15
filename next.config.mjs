/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "**",
				port: "",
				pathname: "**",
			},
			{
				protocol: "http",
				hostname: "**",
				port: "81",
				pathname: "**",
			},
		],
	},
}

export default nextConfig
