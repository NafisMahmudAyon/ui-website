import React, { useState } from "react";
// import UseThemeSwitcher from "../Hooks/UseThemeSwitcher";
import { Logo, Logo1, MoonIcon, SunIcon, UI } from "../Icons";
import { useNavigate } from "react-router-dom";
import { Block, UseThemeSwitcher } from "landing-page-ui";

const NavbarHome = ({ toggleSidebar, className }) => {
	const [mode, setMode] = UseThemeSwitcher();
	const [isOpen, setIsOpen] = useState(false);

	const navigate = useNavigate();

	const handleLogoClick = () => {
		navigate("/");
	};

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div
			className={` ${className} text-textColor dark:text-darkTextColor border-b border-slate-900/30 px-[20px] py-3  `}>
			<div className="mx-auto max-w-[1600px] flex justify-between items-center">
				<button
					className="flex flex-col items-center justify-center lg:hidden"
					onClick={() => {
						toggleSidebar();
						handleClick();
					}}>
					<span
						className={`bg-darkBgColor dark:bg-bgColor block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
							isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
						} `}></span>
					<span
						className={`bg-darkBgColor dark:bg-bgColor block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
							isOpen ? "opacity-0" : "opacity-100"
						} `}></span>
					<span
						className={`bg-darkBgColor dark:bg-bgColor block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
							isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
						} `}></span>
				</button>
				<Block styles="flex gap-2 items-center">
<UI width={60} />
				<Logo
					className="fill-darkBgColor dark:fill-bgColor cursor-pointer "
					width={115}
					onClick={handleLogoClick}
					/>
					</Block>
				<button
					onClick={() => setMode(mode === "light" ? "dark" : "light")}
					className={`ml-3 flex items-center justify-center rounded-full p-1 ${
						mode === "light"
							? "bg-darkBgColor text-darkTextColor"
							: "bg-bgColor text-textColor"
					}`}>
					{mode === "dark" ? (
						<SunIcon className={"fill-darkBgColor"} />
					) : (
						<MoonIcon className={"fill-darkBgColor"} />
					)}
				</button>
			</div>
		</div>
	);
};



export default NavbarHome;
