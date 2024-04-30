import React from 'react'
import NavbarHome from './Layout/NavbarHome';
import { UI } from './Icons';
import { Block, Icon, Image } from 'landing-page-ui';
import Lottie from "react-lottie";
import animationData from "../../public/scroll-down.json";

const Home = () => {

	const handleGetStarted = () => {
		// Navigate to "/install"
		window.location.href = "/install";
	};
	const handleCopy = () => {
		navigator.clipboard.writeText("npm i landing-page-ui");
	}
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
  return (
		<>
			<div className="relative w-full text-textColor dark:text-darkTextColor transition-all duration-300 ease-in-out ">
				<div className="absolute -z-[1] inset-0 bg-color bg-top bg-no-repeat dark:bg-home h-[1000px] lg:h-[100dvh]">
					<div
						className="absolute inset-0 bg-[bottom_1px_center] bg-grid dark:bg-bottom dark:border-b dark:border-slate-100/5"
						style={{ maskImage: "linear-gradient(transparent, black)" }}></div>
				</div>
				<NavbarHome />
				{/* container  */}
				<div className=" w-full mx-auto  ">
					<div className="relative grid grid-cols-1 lg:grid-cols-2 gap-28 lg:gap-8 h-[calc(100vh-85px)] w-full max-w-[1400px] place-items-center mx-auto ">
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
							<p className=" text-balance text-center text-base mt-6 ">
								Introducing Landing Page UI – your go-to library for creating
								stunning landing pages with React and Tailwind CSS. Effortlessly
								create captivating pages with our seamless blend of React
								components. <br></br>Elevate your designs today!
							</p>
							<div className="mt-7 flex flex-col lg:flex-row items-center gap-5">
								<div className="flex items-center gap-3 border border-gray-500 px-3 py-2 rounded-md">
									<p className="font-code">npm i landing-page-ui</p>
									<Icon
										icon=" fa-copy"
										iconLibrary="font-awesome"
										title="Click to copy"
										onClick={handleCopy}
									/>{" "}
								</div>
								<Block tagName='button' styles='px-6 py-2 dark:bg-bgColor dark:text-textColor bg-darkBgColor text-darkTextColor transition-all duration-300 ease-in-out rounded-lg text-lg font-semibold hover:bg-darkHoverBgColor hover:text-textHoverColor ' onClick={handleGetStarted} >Get Started</Block>
							</div>
						</div>
						<div className="relative before:absolute before:top-1/2  before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:w-[100%] before:h-[100%] before:bg-[url('/ttt.svg')] before:bg-[length:80%_100%] before:lg:bg-contain before:bg-no-repeat before:bg-center before:content-[''] before:pb-7">
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
					{/* <div className="h-[100vh]"></div>
					<div className="h-[100vh]"></div> */}
				</div>
			</div>
		</>
	);
}

export default Home