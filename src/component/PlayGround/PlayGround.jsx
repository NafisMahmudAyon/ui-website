import React, { useEffect, useState } from "react";
import {
	Accordion,
	Avatar,
	Badge,
	IconButton,
	Icon,
	List,
	Tabs,
	Text,
	Block,
	Image,
	ImageGallery,
	Grid,
	Flex,
	ComboList,
	AccordionHeader,
	AccordionDetails,
	// Code,
	// CodeHeader,
	// CodeBody,
} from "landing-page-ui"; // Import your components here
import CodeSnippet from "../components/CodeSnippet";

import {
	fontawesomeClasses,
	bootstrapIcons,
	iconfontClasses,
} from "../components/Icons";
import PlayAccordion from "./PlayAccordion";
import PlayTabs from "./PlayTabs";

const PlayGround = () => {
	const [iconClassNames, setIconClassNames] = useState([]);
	console.log(iconClassNames);

	useEffect(() => {
		const fetchFontAwesomeIcons = async () => {
			try {
				const response = await fetch(
					"https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.1/css/fontawesome.min.css"
				);
				const cssText = await response.text();

				// Regular expression to match class names
				const regex = /\.fa-[a-zA-Z0-9-]+/g;
				const classNames = cssText.match(regex);

				if (classNames) {
					// Remove leading dot (.) from class names
					const cleanedClassNames = classNames.map((className) =>
						className.substring(1)
					);
					setIconClassNames(cleanedClassNames);
				}
			} catch (error) {
				console.error("Error fetching Font Awesome Icons:", error);
			}
		};

		fetchFontAwesomeIcons();
	}, []);
	const components = [
		"accordion",
		"avatar",
		"badge",
		"icon-button",
		"icon",
		"list",
		"tabs",
		"text",
		"block",
		"image",
		"image-gallery",
		"grid",
		"flex",
		"comboList",
	];
	const [selectedComponent, setSelectedComponent] = useState(components[6]);
	console.log(selectedComponent);
	const handleComponentSelectChange = (event) => {
		setSelectedComponent(event.target.value);
	};

	return (
		<Block tagName={"div"} styles="">
			<Text tagName="h2" styles="flex flex-col items-center mb-4 ">
				<Text tagName="span" styles="text-xs">
					Landing Page UI
				</Text>
				<Text tagName="span" styles="text-2xl font-semibold underline">
					PlayGround
				</Text>
			</Text>
			<Block tagName={"div"}>
				<select
					name=""
					className="capitalize bg-inherit text-inherit border-b"
					onChange={handleComponentSelectChange}
					value={selectedComponent}>
					{components.map((component, i) => (
						<option
							value={component}
							key={i}
							className="capitalize bg-bgColor dark:bg-darkBgColor text-textColor dark:text-darkTextColor px-2">
							{component}
						</option>
					))}
				</select>
			</Block>
			{/* Render the selected component */}
			{/* {componentMap[selectedComponent]} */}

			{selectedComponent == "accordion" && <PlayAccordion />}
			{selectedComponent == "tabs" && <PlayTabs />}
		</Block>
	);
};

export default PlayGround;
