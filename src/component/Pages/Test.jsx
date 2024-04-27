import React, { useState, useEffect } from "react";
import {
	fontawesomeClasses,
	bootstrapIcons,
	iconfontClasses,
} from "../test/Test";
import { Icon } from "../test/Test";
// import Spinner from "./Spinner"; // Assuming you have a Spinner component

const Spinner = () => {
	return (
		<svg
			className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24">
			<circle
				class="opacity-25"
				cx="12"
				cy="12"
				r="10"
				stroke="currentColor"
				stroke-width="4"></circle>
			<path
				class="opacity-75"
				fill="currentColor"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
		</svg>
	);
}

const Test = () => {
	const [iconLibrary, setIconLibrary] = useState("font-awesome");
	const [searchQuery, setSearchQuery] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [showHelp, setShowHelp] = useState(false);
	const [mappedArray, setMappedArray] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		const timeoutId = setTimeout(() => {
			const filteredIcons = getFilteredIcons();
			const mappedIcons = filteredIcons.map((icon, index) => (
				<div
					key={index}
					className="aspect-square border border-gray-500 rounded-md shadow-md dark:shadow-slate-700 hover:shadow-none transition-shadow duration-300 grid place-items-center cursor-pointer"
					onClick={() => {
						const iconData = `icon = "${icon}" iconLibrary = "${iconLibrary}"`;
						handleCopyClick(iconData);}}>
						{isLoading ? <Spinner /> : 
					<Icon icon={icon} iconLibrary="font-awesome" iconStyles="text-3xl" />}
				</div>
			));
			setMappedArray(mappedIcons);
			setIsLoading(false);
		}, 300);

		return () => clearTimeout(timeoutId);
	}, [searchQuery, iconLibrary]);

	const handleCopyClick = (content) => {
		navigator.clipboard.writeText(content);
	};

	const getIconArray = () => {
		switch (iconLibrary) {
			case "font-awesome":
				return fontawesomeClasses;
			case "bootstrap-icons":
				return bootstrapIcons;
			case "icon-font":
				return iconfontClasses;
			default:
				return [];
		}
	};

	const getFilteredIcons = () => {
		const iconArray = getIconArray();
		return iconArray.filter((icon) =>
			icon.toLowerCase().includes(searchQuery.toLowerCase())
		);
	};

	return (
		<div className="relative">
			<div className="flex justify-center gap-10 my-6 relative">
				<div className="flex gap-3">
					<input
						type="radio"
						id="font-awesome"
						name="iconLibrary"
						value="font-awesome"
						checked={iconLibrary === "font-awesome"}
						onChange={() => setIconLibrary("font-awesome")}
					/>
					<label htmlFor="font-awesome">Font Awesome</label>
				</div>

				<div className="flex gap-3">
					<input
						type="radio"
						id="bootstrap-icons"
						name="iconLibrary"
						value="bootstrap-icons"
						checked={iconLibrary === "bootstrap-icons"}
						onChange={() => setIconLibrary("bootstrap-icons")}
					/>
					<label htmlFor="bootstrap-icons">Bootstrap Icons</label>
				</div>
				<span
					className="absolute top-0 right-0 border w-10 h-10 flex items-center justify-center rounded-full"
					onClick={() => setShowHelp(!showHelp)}>
					?
				</span>
			</div>

			<input
				type="text"
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
				placeholder="Search icons..."
				className="block w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
			/>
			{showHelp && (
				<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-block px-6 py-4 bg-red-500 ">
					use this
				</div>
			)}
			<div className="grid grid-cols-10 gap-3">{mappedArray}</div>
		</div>
	);
};

export default Test;
