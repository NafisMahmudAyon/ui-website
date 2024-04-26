import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "./Layout/Navbar";
import LeftSideBar from "./Layout/LeftSideBar";
import RightSideBar from "./Layout/RightSideBar";
import MiddleContent from "./Layout/MiddleContent";

const AppLayout = ({ children, RightSideBarContent }) => {
	const location = useLocation();
	const isPlaygroundPage = location.pathname === "/playground";
	const isTestPage = location.pathname === "/test";

	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar state
	};
	return (
		<div className="bg-slate-100 font-sans text-slate-700 dark:text-slate-200  dark:bg-darkBgColor  min-h-screen relative ">
			<Navbar
				toggleSidebar={toggleSidebar}
				className="fixed z-30 top-0 left-0 w-full"
			/>
			<div
				className={` ${
					isSidebarOpen
						? "absolute top-[73px] left-0 w-full  min-h-[calc(100%_-_73px)] -z-0 bg-black/50"
						: ""
				} `}></div>
			<div className="flex pt-[73px] flex-nowrap flex-col md:flex-row lg:flex-row relative h-screen overflow-y-scroll">
				<div
					className={`fixed top-[73px] -left-[300px] w-[300px] transition-all duration-300 ease-in-out  pl-3 pr-5  border-r bg-darkBgColor text-darkTextColor z-50 overflow-y-scroll h-[calc(100vh_-_73px)] ${
						isSidebarOpen ? "left-0" : ""
					} `}>
					<LeftSideBar />
				</div>
				<div className="hidden lg:w-[20%]  lg:block border-r lg:overflow-y-scroll border-slate-950 dark:border-slate-300/60 pl-3 pr-5  ">
					<LeftSideBar />
				</div>
				<div className="w-full lg:w-[80%] flex-1 md:pl-5 md:pr-5 ">
					<MiddleContent>{children}</MiddleContent>
					{/* {!isPlaygroundPage && !isTestPage && <RightSideBar />} */}
				</div>
				{/* <div className="w-full md:w-[10%] md:border-l md:border-slate-950 pl-3 pr-5 ">
				<RightSideBar />
				</div> */}
			</div>
		</div>
	);
};

export default AppLayout;
