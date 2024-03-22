import React, { useState } from "react";

import {
	Text,
	Block,
	Tabs,
	TabsNav,
	Tab,
	TabPanel,
	List,
	ImageGallery,
	Image,
	IconButton,
	Icon,
	Grid,
	GridItem,
	Flex,
	FlexItem,
	ComboList,
	ComboListItem,
	Accordion,
	AccordionDetails,
	AccordionHeader,
	AvatarGroup,
	Avatar,
	Badge,
	Code,
	CodeHeader,
	CodeBody,
	Divider,
	useThemeSwitcher,
	Card,
	CardContent,
	CardMedia,
	CardAction,
	Label,
	Input,
	ProgressBar,
	CircularProgressBar,
	// TextArea,
} from "../test/Test";

const TestPage = () => {
	const [inputValue, setInputValue] = useState("fdfdfd");

	const handleInputChange = (newValue) => {
		setInputValue(newValue);
	};

	const [progress, setProgress] = useState(60);

	const increaseProgress = () => {
		setProgress((prevProgress) => Math.min(prevProgress + 10, 100)); 
	};

	const decreaseProgress = () => {
		setProgress((prevProgress) => Math.max(prevProgress - 10, 0)); 
	};
	return (
		<div>
			<AvatarGroup style="mt-3 ">
				<Avatar
					src="https://react.keepdesign.io/images/avatar/avatar-2.png"
					style="border-2 border-white  "
				/>
				<Avatar
					src="https://react.keepdesign.io/images/avatar/avatar-2.png"
					style="border-2 border-white  "
				/>
				<Avatar
					src="https://react.keepdesign.io/images/avatar/avatar-2.png"
					style="border-2 border-white  "
				/>
				<Avatar
					src="https://react.keepdesign.io/images/avatar/avatar-2.png"
					style="border-2 border-white  "
				/>
				<Avatar />
			</AvatarGroup>
			{/* <TextArea /> */}
			<div>
				{/* <CircularProgressBar value={progress} /> */}

				<button onClick={increaseProgress}>Increment Progress</button>
				<button onClick={decreaseProgress}>Decrement Progress</button>
			</div>
			<AvatarGroup></AvatarGroup>
			<Divider />
			<Divider style="border-t-red-500">
				heloo dfgdfg dfg dfg dfg dfg d{" "}
			</Divider>
			<Card>
				<CardAction link="http://localhost:5173/components/accordion">
					<CardMedia
						mediaStyle="h-40 w-full "
						badge="Hello"
						badgePosition="bottom left"
					/>
					<CardContent>
						<Text tagName="h3" style="text-2xl  ">
							Lizard
						</Text>
						<Text tagName="p" style="text-sm text-pretty  ">
							Lizards are a widespread group of squamate reptiles, with over
							6,000 species, ranging across all continents except Antarctica
						</Text>
					</CardContent>
				</CardAction>
			</Card>
			<Label htmlFor="data">Input</Label>
			<Input
				placeholder="Data"
				// id="data"
				iconStyle=""
				// value={inputValue}
				type="password"
				iconEnable={true}
				// error
				autoComplete="on"
				onChange={handleInputChange}
			/>
			<p>You entered: {inputValue}</p>
			<div className="h-60 bg-red-100 mt-6 "></div>
			<CircularProgressBar
				value={progress}
				onVisible
				max="1500"
				duration={10}
			/>
			<ProgressBar value={progress} animateOnVisible duration="12"  />
			<div className="h-60 bg-red-100 mt-6 "></div>
		</div>
	);
};

export default TestPage;
