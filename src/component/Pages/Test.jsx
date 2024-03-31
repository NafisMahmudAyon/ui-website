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
	TextArea,
	CodeSnippet,
	Carousel,
	Table,
	TableCaption,
	TableHead,
	TableBody,
	TableFooter,
	TableRow,
	TableCell,
	// XXX,
	// Slide
} from "../test/Test";

const TestPage = () => {
	const [inputValue, setInputValue] = useState("");

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

	const slides = [
		{
			imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
			title: "Slide 1",
			description: "This is the first slide.",
		},
		{
			imageUrl: "https://images.unsplash.com/photo-1554151228-14d9def656e4",
			title: "Slide 2",
			description: "This is the second slide.",
		},
		{
			imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
			title: "Slide 3",
			description: "This is the third slide.",
		},
	];
	return (
		<div>
			<div className="relative overflow-x-auto">
				<Table style="w-full text-sm text-left rtl:text-right text-gray-500 " variant="1">
					<TableCaption style="text-slate-500 dark:text-slate-400 py-4 text-xs">
						Table Caption
					</TableCaption>
					<TableHead style="text-xs text-gray-200 uppercase bg-gray-500">
						<TableRow>
							<TableCell header={true} scope="cell" style="px-6 py-3">
								#
							</TableCell>
							<TableCell header={true} style="px-6 py-3">
								First Name
							</TableCell>
							<TableCell header={true} style="px-6 py-3">
								Last Name
							</TableCell>
							<TableCell header={true} style="px-6 py-3">
								Username
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow style="border-b border-gray-700 odd:bg-gray-800 even:bg-gray-700">
							<TableCell
								thStyle="font-medium text-gray-200 whitespace-nowrap"
								style="px-6 py-4 ">
								1
							</TableCell>
							<TableCell style="px-6 py-4 ">Mark</TableCell>
							<TableCell style="px-6 py-4 ">Otto</TableCell>
							<TableCell style="px-6 py-4 ">@mdo</TableCell>
						</TableRow>
						<TableRow style="border-b border-gray-700 odd:bg-gray-800 even:bg-gray-700">
							<TableCell style="px-6 py-4 font-medium text-gray-200 whitespace-nowrap">
								2
							</TableCell>
							<TableCell style="px-6 py-4 ">Jacob</TableCell>
							<TableCell style="px-6 py-4 ">Thornton</TableCell>
							<TableCell style="px-6 py-4 ">@fat</TableCell>
						</TableRow>
						<TableRow style="border-b border-gray-700 odd:bg-gray-800 even:bg-gray-700">
							<TableCell style="px-6 py-4 font-medium text-gray-200 whitespace-nowrap">
								3
							</TableCell>
							<TableCell style="px-6 py-4 ">Larry</TableCell>
							<TableCell style="px-6 py-4 ">the Bird</TableCell>
							<TableCell style="px-6 py-4 ">@twitter</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</div>
			<div className="h-[300px] "></div>
			<Carousel>
				<div>
					<h2>Slide 1</h2>
					<p>Description for Slide 1</p>
					{/* Add any HTML or React components here */}
				</div>
				<div>
					<h2>Slide 2</h2>
					<p>Description for Slide 2</p>
					{/* Add any HTML or React components here */}
				</div>
				<div>
					<h2>Slide 3</h2>
					<p>Description for Slide 3</p>
					{/* Add any HTML or React components here */}
				</div>
			</Carousel>
			<Text
				tagName="h1"
				style=" text-2xl text-green-800 dark:text-green-600 !font-bold underline underline-offset-4 text-center transition-all duration-300">
				Test Page
			</Text>
			{/* // * TextArea */}
			<Block style=" my-4 ">
				<Text tagName="h2" style=" text-lg mb-2 underline underline-offset-2 ">
					TextArea Component:
				</Text>
				<Label style="my-2 text-base text-gray-400 ">
					Textarea Default Style:{" "}
				</Label>
				<TextArea disabled={false} placeholder="This is placeholder." />
				<Label style="my-2 text-base text-gray-400 ">
					Textarea Required:*{" "}
				</Label>
				<TextArea placeholder="This is placeholder." required />

				<Label style="my-2 text-base text-gray-400 ">
					Textarea With Error:{" "}
				</Label>
				<TextArea
					placeholder="This is placeholder."
					required
					error
					errorStyle="text-xs "
				/>
			</Block>
			{/* // * Avatar */}
			<Block style=" my-4 ">
				<Text tagName="h2" style=" text-lg mb-2 underline underline-offset-2 ">
					Avatar Component:
				</Text>
				<Text style="my-2 text-base text-gray-400 ">
					Avatar Default Style:{" "}
				</Text>
				<Avatar />
				<Text style="my-2 text-base text-gray-400 ">Avatar With Image: </Text>
				<Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" />
				<Text style="my-2 text-base text-gray-400 ">Avatar With Name: </Text>
				<Avatar name="Nafis Mahmud Ayon" />
				<Text style="my-2 text-base text-gray-400 ">
					AvatarGroup With Different Type of Avatar:{" "}
				</Text>
				<AvatarGroup style="mt-3 ">
					<Avatar
						src="https://images.unsplash.com/photo-1554151228-14d9def656e4"
						style="border-2 border-white  "
					/>
					<Avatar
						src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
						style="border-2 border-white  "
					/>
					<Avatar name="Nafis Mahmud Ayon" style="border-2 border-white  " />
					<Avatar
						src="https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c"
						style="border-2 border-white  "
					/>
					<Avatar />
				</AvatarGroup>
			</Block>
			{/* // * Divider */}
			<Block style=" my-4 ">
				<Text tagName="h2" style=" text-lg mb-2 underline underline-offset-2 ">
					Divider Component:
				</Text>
				<Text style="my-2 text-base text-gray-400 ">
					Divider Default Style:{" "}
				</Text>
				<Block style="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg  shadow-sm ">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
					mollitia rerum nesciunt ipsum deserunt in illo similique eius
					veritatis ex, natus sint voluptas sunt placeat officia laboriosam,
					explicabo magni dicta?
					<Divider />
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
					consequatur impedit veniam modi amet.
				</Block>

				<Text style="my-2 text-base text-gray-400 ">Divider With Text: </Text>
				<Block style="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg  shadow-sm ">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
					mollitia rerum nesciunt ipsum deserunt in illo similique eius
					veritatis ex, natus sint voluptas sunt placeat officia laboriosam,
					explicabo magni dicta?
					<Divider> Text Position Center </Divider>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
					consequatur impedit veniam modi amet.
				</Block>
				<Text style="my-2 text-base text-gray-400 ">
					Divider With Right Align:{" "}
				</Text>
				<Block style="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg  shadow-sm ">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
					mollitia rerum nesciunt ipsum deserunt in illo similique eius
					veritatis ex, natus sint voluptas sunt placeat officia laboriosam,
					explicabo magni dicta?
					<Divider position="right"> Text Position Right </Divider>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
					consequatur impedit veniam modi amet.
				</Block>
				<Text style="my-2 text-base text-gray-400 ">
					Divider With Text Left Align:{" "}
				</Text>
				<Block style="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg  shadow-sm ">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
					mollitia rerum nesciunt ipsum deserunt in illo similique eius
					veritatis ex, natus sint voluptas sunt placeat officia laboriosam,
					explicabo magni dicta?
					<Divider position="left"> Text Position Left </Divider>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
					consequatur impedit veniam modi amet.
				</Block>
			</Block>
			<CodeSnippet content={`hello`}></CodeSnippet>
			hhh
			<Card>
				<CardAction link="/components/accordion">
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
			<ProgressBar value={progress} animateOnVisible duration="12" />
			<div className="h-60 bg-red-100 mt-6 "></div>
		</div>
	);
};

export default TestPage;
