import React, { useState } from "react";
import NavbarHome from "./Layout/NavbarHome";
import { UI } from "./Icons";
import { Block, Icon, Image, Text } from "landing-page-ui";
import Lottie from "react-lottie";
import animationData from "../../public/scroll-down.json";
import Links from "../links";
import LeftSideBar from "./Layout/LeftSideBar";

const Home = () => {
	const [componentData, setComponentData] = useState({
		title: "Accordion",
		path: "/components/accordion",
		headTitle: "Accordion Component - Landing Page UI",
		headDescription: "Explore the Accordion component of the Landing Page UI.",
	});
	console.log(componentData);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar state
	};
	const handleGetStarted = () => {
		// Navigate to "/install"
		window.location.href = "/install";
	};
	const handleCopy = () => {
		navigator.clipboard.writeText("npm i landing-page-ui");
	};
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	const handleHover = (data) => {
		setComponentData(data);
	};
	const imgData = [
		{
			title: "Accordion",
			src: "/rrr.png",
		},
		{
			title: "Avatar",
			src: "/avatar-1.jpg",
		},
	];

	const currentImageData = imgData.find(
		(data) => data.title === componentData.title
	);

	console.log(currentImageData)

	return (
		<>
			<div className="relative w-full text-textColor dark:text-darkTextColor transition-all duration-300 ease-in-out ">
				<div className="absolute -z-[1] inset-0 bg-color bg-top bg-no-repeat bg-home h-[960px] lg:h-[100dvh]">
					<div
						className="absolute inset-0 bg-[bottom_1px_center] bg-grid dark:bg-bottom dark:border-b dark:border-slate-100/5"
						style={{ maskImage: "linear-gradient(transparent, black)" }}></div>
				</div>
				<NavbarHome
					toggleSidebar={toggleSidebar}
					// className="fixed z-30 top-0 left-0 w-full"
				/>
				{/* <div
					className={` ${
						isSidebarOpen
							? "absolute top-[85px] left-0 w-full  min-h-[calc(100%_-_85px)] -z-0 bg-black/50"
							: ""
					} `}></div>
					<div className="flex pt-[85px] flex-nowrap flex-col md:flex-row lg:flex-row relative h-screen overflow-y-scroll">
						<div
							className={`fixed top-[85px] -left-[300px] w-[300px] transition-all duration-300 ease-in-out  pl-3 pr-5  border-r bg-darkBgColor text-darkTextColor z-50 overflow-y-scroll h-[calc(100vh_-_85px)] ${
								isSidebarOpen ? "left-0" : ""
							} `}>
							<LeftSideBar />
						</div></div> */}
				{/* container  */}
				<div className=" w-full mx-auto  ">
					<div className="relative pb-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-28 lg:gap-8  lg:h-[calc(100vh-85px)] w-full max-w-[1400px] place-items-center mx-auto ">
						<div className="flex flex-col items-center pt-7 px-4">
							<h1 className="text-3xl lg:text-5xl xl:text-7xl flex items-center gap-2 justify-center">
								Landing Page{" "}
								<span className="text-4xl inline-block lg:hidden">
									<UI width={40} height={40} />
								</span>
								<span className="text-7xl hidden lg:inline-block xl:hidden">
									<UI width={48} height={48} />
								</span>
								<span className="text-7xl hidden xl:inline-block">
									<UI width={72} height={72} />
								</span>
							</h1>
							<p className="text-lg lg:text-2xl flex items-center gap-2 justify-center lg:pt-3">
								React Component library
							</p>
							<p className=" text-balance text-center text-base mt-6 group">
								Introducing Landing Page UI – your go-to library for creating
								stunning landing pages with React and Tailwind CSS. Effortlessly
								create captivating pages with our seamless blend of React
								components. <br></br>
								<Text
									tagName="span"
									styles="underline underline-offset-2 decoration-[#6fb8e6] group-hover:decoration-[3px] group:transition-all group:duration-300 group:ease-in-out">
									Elevate your designs today!
								</Text>
							</p>
							<div className="mt-7 flex flex-col lg:flex-row items-center gap-5">
								<div className="flex items-center gap-3 border border-gray-500 hover:border-gray-950 hover:dark:border-[#6fb8e6] group px-3 py-2 rounded-md">
									<p className="font-code flex gap-2">
										<Text
											tagName="span"
											styles="dark:text-[#c699e3] text-[#7e4bdd] ">
											npm
										</Text>{" "}
										<Text
											tagName="span"
											styles="group-hover:text-gray-950 group-hover:dark:text-[#6fb8e6]">
											i landing-page-ui
										</Text>
									</p>
									<Icon
										icon=" fa-copy"
										iconLibrary="font-awesome"
										title="Click to copy"
										iconStyles="group-hover:text-gray-950 group-hover:dark:text-[#6fb8e6]"
										onClick={handleCopy}
									/>{" "}
								</div>
								<Block
									tagName="button"
									styles="px-6 py-2 dark:bg-bgColor dark:text-textColor bg-darkBgColor text-darkTextColor transition-all duration-300 ease-in-out rounded-lg text-lg font-semibold hover:bg-darkHoverBgColor hover:text-textHoverColor dark:hover:bg-darkHoverBgColor dark:hover:text-[#6fb8e6] "
									onClick={handleGetStarted}>
									Get Started
								</Block>
							</div>
							<a
								href="https://www.producthunt.com/posts/landing-page-ui?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-landing-page-ui"
								target="_blank" className="w-[200px] mt-4 ">
								<img
									src={`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=456159&theme=light`}
									alt="Landing Page UI - Easily Create Beautiful Landing Pages with us. | Product Hunt"
									style={{ width: "250px", height: "54px" }}
									width="250"
									height="54"
								/>
							</a>
						</div>
						<div className="relative before:absolute before:top-1/2  before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:w-[100%] before:h-[100%] before:bg-[url('/rrr.svg')] before:dark:bg-[url('/ttt.svg')] before:bg-[length:80%_100%] before:lg:bg-contain before:bg-no-repeat before:bg-center before:content-[''] before:pb-7">
							<Image
								src="/rrr.png"
								alt="Hero Image"
								imageStyles="shadow-none"
							/>
						</div>
						<Block styles="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block ">
							<Lottie options={defaultOptions} width={60} />{" "}
						</Block>
					</div>
					<Block tagName="div" styles="hidden w-full bg-home pb-10">
						<Block
							tagName="div"
							styles=" pt-8 w-full max-w-[1400px] mx-auto px-4 ">
							<Text tagName="h2" styles="text-center text-4xl font-medium ">
								Components
							</Text>
							<Text
								tagName="p"
								styles="text-center text-lg font-medium pt-2 pb-6 ">
								Explore all Components.
							</Text>
							<Block
								tagName="div"
								styles="pt-8 pb-6 flex gap-3 flex-wrap items-center justify-center ">
								{Object.entries(Links).map(([category, links]) => {
									if (category == "Components") {
										return (
											<>
												{links.map((link, index) => (
													<Block
														tagName="div"
														key={index}
														styles="px-6 py-2 dark:bg-bgColor dark:text-textColor bg-darkBgColor text-darkTextColor transition-all duration-300 ease-in-out rounded-lg text-lg font-semibold hover:bg-darkHoverBgColor hover:text-textHoverColor dark:hover:bg-darkHoverBgColor dark:hover:text-[#6fb8e6]"
														onMouseEnter={() => handleHover(link)}>
														{link.title}
													</Block>
												))}
											</>
										);
									}
								})}
							</Block>
							<Block
								tagName="div"
								styles="flex items-center justify-center min-h-[600px]">
								{/* {currentImageData && ( */}
								<Image
									src={
										currentImageData !== undefined
											? currentImageData?.src
											: "/rrr.png"
									}
									imageStyles="w-3/4 object-contain max-h-[600px]"
								/>
								{/* )} */}

								{/* {componentData.title} */}
							</Block>
						</Block>
					</Block>
					{/* <div className="h-[100vh]"></div> */}
				</div>
			</div>
		</>
	);
};

export default Home;
