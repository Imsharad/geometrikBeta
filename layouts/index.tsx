import React from "react";
import Seo from "./Seo";
import { frontendBaseUrl } from "@/constants/variables";

const Layout: React.FC<any> = ({ children }) => {
	return (
		<>
			<Seo
				title="Geometrik AI"
				description="Accelerate your career with our online courses in leveraging chatGPT to become data scientist."
				image="/images/og-image.png"
				icons={["icon", "shortcut icon", "apple-touch-icon"].map(
					(item) => {
						return {
							rel: item,
							href: "/favicon.ico",
							type: "icon/ico",
						};
					}
				)}
				twitter={{
					card: "summary_large_image",
					site: "@AthenasquareHQ",
					author: "@AthenasquareHQ",
					title: "Geometrik AI",
					description:
						"Accelerate your career with our online courses in leveraging chatGPT to become data scientist.",
					image: "/images/og-image.png",
					url: frontendBaseUrl,
				}}
				og={{
					title: "Geometrik AI",
					description:
						"Accelerate your career with our online courses in leveraging chatGPT to become data scientist.",
					images: [
						{
							url: "/images/og-image.png",
							secureUrl: "/images/og-image.png",
							type: "image/png",
							width: 1200,
							height: 630,
							alt: "Geometrik AI",
						},
					],
					url: frontendBaseUrl,
					type: "website",
					siteName: "Geometrik AI",
				}}
			/>
			{/* <Header /> */}
			{children}
			{/* <Footer /> */}
		</>
	);
};

export default Layout;
