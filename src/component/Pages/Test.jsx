import React, { useState } from "react";

import {
	Text,
	Block,
	Tabs,
	TabsNav,
	Tab,
	TabsPanel,
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
	UseThemeSwitcher,
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
			<Text styles="text-4xl my-6">Component List</Text>
			<Block styles="flex gap-4 flex-wrap p-4">
				<h3 className="px-5 py-2 text-xl font-semibold border rounded-md shadow-md">
					Block
				</h3>
				<h3 className="px-5 py-2 text-xl font-semibold border rounded-md shadow-md">
					Text
				</h3>
				<h3 className="px-5 py-2 text-xl font-semibold border rounded-md shadow-md">
					Accordion
				</h3>
				<h3 className="px-5 py-2 text-xl font-semibold border rounded-md shadow-md">
					Tabs
				</h3>
				<h3 className="px-5 py-2 text-xl font-semibold border rounded-md shadow-md">
					Image
				</h3>
				<h3 className="px-5 py-2 text-xl font-semibold border rounded-md shadow-md">
					Image Gallery
				</h3>
				<h3 className="px-5 py-2 text-xl font-semibold border rounded-md shadow-md">
					Icon
				</h3>
				<h3 className="px-5 py-2 text-xl font-semibold border rounded-md shadow-md">
					Icon Button
				</h3>
				<h3 className="px-5 py-2 text-xl font-semibold border rounded-md shadow-md">
					Grid
				</h3>
				<h3 className="px-5 py-2 text-xl font-semibold border rounded-md shadow-md">
					Flex
				</h3>
				<h3 className="px-5 py-2 text-xl font-semibold border rounded-md shadow-md">
					List
				</h3>
				<h3 className="px-5 py-2 text-xl font-semibold border rounded-md shadow-md">
					Avatar
				</h3>
				<h3 className="px-5 py-2 text-xl font-semibold border rounded-md shadow-md">
					Badge
				</h3>
				<h3 className="px-5 py-2 text-xl font-semibold border rounded-md shadow-md">
					CodeSnippet
				</h3>
				<h3 className="px-5 py-2 text-xl font-semibold border rounded-md shadow-md">
					Card
				</h3>
				<h3 className="px-5 py-2 text-xl font-semibold border rounded-md shadow-md">
					Divider
				</h3>
				<h3 className="px-5 py-2 text-xl font-semibold border rounded-md shadow-md">
					Table
				</h3>
				<h3 className="px-5 py-2 text-xl font-semibold border rounded-md shadow-md">
					Carousel
				</h3>
				<h3 className="px-5 py-2 text-xl font-semibold border rounded-md shadow-md">
					Progress Bar
				</h3>
				<h3 className="px-5 py-2 text-xl font-semibold border rounded-md shadow-md">
					Circular Progress Bar
				</h3>
				<h3 className="px-5 py-2 text-xl font-semibold border rounded-md shadow-md">
					Label
				</h3>
				<h3 className="px-5 py-2 text-xl font-semibold border rounded-md shadow-md">
					Input
				</h3>
				<h3 className="px-5 py-2 text-xl font-semibold border rounded-md shadow-md">
					TextArea
				</h3>
			</Block>
			<Block>
				<Text styles="my-3 text-5xl">Accordion</Text>
				<Text styles="my-3 text-2xl">Accordion With Icon</Text>
				<Accordion active={true} variant="1">
					<AccordionHeader
						icon="fa-caret-down"
						iconLibrary="font-awesome"
						iconPosition="before">
						<Text tagName="h3" styles=" text-xl font-medium !text-gray-200 ">
							Accordion 1
						</Text>
					</AccordionHeader>
					<AccordionDetails>
						<Text styles=" ">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
							deserunt sapiente nostrum iure excepturi vel debitis, quae
							quibusdam officiis. Atque nesciunt pariatur praesentium optio, at
							vel harum aliquam illo labore?
						</Text>
					</AccordionDetails>
				</Accordion>
				<Accordion variant="1">
					<AccordionHeader
						icon="fa-caret-down"
						iconLibrary="font-awesome"
						iconPosition="before">
						<Text tagName="h3" styles=" text-xl font-medium !text-gray-200 ">
							Accordion 2
						</Text>
					</AccordionHeader>
					<AccordionDetails>
						<Text styles="">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
							deserunt sapiente nostrum iure excepturi vel debitis, quae
							quibusdam officiis. Atque nesciunt pariatur praesentium optio, at
							vel harum aliquam illo labore?
						</Text>
					</AccordionDetails>
				</Accordion>
				<Accordion variant="1">
					<AccordionHeader
						icon="fa-caret-down"
						iconLibrary="font-awesome"
						iconPosition="before">
						<Text tagName="h3" styles=" text-xl font-medium !text-gray-200 ">
							Accordion 3
						</Text>
					</AccordionHeader>
					<AccordionDetails>
						<Text styles="">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
							deserunt sapiente nostrum iure excepturi vel debitis, quae
							quibusdam officiis. Atque nesciunt pariatur praesentium optio, at
							vel harum aliquam illo labore?
						</Text>
					</AccordionDetails>
				</Accordion>
				{/* //* Accordion With Icon */}
				<Text styles="my-3 text-2xl">Accordion With Toggle Icon</Text>
				<Accordion active={true} variant="1">
					<AccordionHeader
						icon="fa-caret-right"
						iconLibrary="font-awesome"
						iconPosition="before"
						toggleIcon="fa-caret-down">
						<Text tagName="h3" styles=" text-xl font-medium !text-gray-200 ">
							Accordion 1
						</Text>
					</AccordionHeader>
					<AccordionDetails>
						<Text styles=" ">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
							deserunt sapiente nostrum iure excepturi vel debitis, quae
							quibusdam officiis. Atque nesciunt pariatur praesentium optio, at
							vel harum aliquam illo labore?
						</Text>
					</AccordionDetails>
				</Accordion>
				<Accordion variant="1">
					<AccordionHeader
						icon="fa-caret-right"
						iconLibrary="font-awesome"
						iconPosition="before"
						toggleIcon="fa-caret-down">
						<Text tagName="h3" styles=" text-xl font-medium !text-gray-200 ">
							Accordion 2
						</Text>
					</AccordionHeader>
					<AccordionDetails>
						<Text styles="">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
							deserunt sapiente nostrum iure excepturi vel debitis, quae
							quibusdam officiis. Atque nesciunt pariatur praesentium optio, at
							vel harum aliquam illo labore?
						</Text>
					</AccordionDetails>
				</Accordion>
				<Accordion variant="1">
					<AccordionHeader
						icon="fa-caret-right"
						iconLibrary="font-awesome"
						iconPosition="before"
						toggleIcon="fa-caret-down">
						<Text tagName="h3" styles=" text-xl font-medium !text-gray-200 ">
							Accordion 3
						</Text>
					</AccordionHeader>
					<AccordionDetails>
						<Text styles="">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
							deserunt sapiente nostrum iure excepturi vel debitis, quae
							quibusdam officiis. Atque nesciunt pariatur praesentium optio, at
							vel harum aliquam illo labore?
						</Text>
					</AccordionDetails>
				</Accordion>
				<Text styles="my-3 text-2xl">
					Accordion Style with Predefined Variations
				</Text>
				<Accordion active={true} variant="1">
					<AccordionHeader
						icon="fa-caret-right"
						iconLibrary="font-awesome"
						iconPosition="before"
						toggleIcon="fa-caret-down">
						<Text tagName="h3" styles=" text-xl font-medium !text-gray-200 ">
							Accordion 1
						</Text>
					</AccordionHeader>
					<AccordionDetails>
						<Text styles=" ">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
							deserunt sapiente nostrum iure excepturi vel debitis, quae
							quibusdam officiis. Atque nesciunt pariatur praesentium optio, at
							vel harum aliquam illo labore?
						</Text>
					</AccordionDetails>
				</Accordion>
				<Accordion variant="2">
					<AccordionHeader
						icon="fa-caret-right"
						iconLibrary="font-awesome"
						iconPosition="before"
						toggleIcon="fa-caret-down">
						<Text tagName="h3" styles="  ">
							Accordion 2
						</Text>
					</AccordionHeader>
					<AccordionDetails>
						<Text styles="">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
							deserunt sapiente nostrum iure excepturi vel debitis, quae
							quibusdam officiis. Atque nesciunt pariatur praesentium optio, at
							vel harum aliquam illo labore?
						</Text>
					</AccordionDetails>
				</Accordion>
				<Accordion variant="3">
					<AccordionHeader
						icon="fa-caret-right"
						iconLibrary="font-awesome"
						iconPosition="before"
						toggleIcon="fa-caret-down">
						<Text tagName="h3" styles="  ">
							Accordion 3
						</Text>
					</AccordionHeader>
					<AccordionDetails>
						<Text styles="">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
							deserunt sapiente nostrum iure excepturi vel debitis, quae
							quibusdam officiis. Atque nesciunt pariatur praesentium optio, at
							vel harum aliquam illo labore?
						</Text>
					</AccordionDetails>
				</Accordion>
				{/* //* Accordion Style with Predefined Variations */}
			</Block>
			<Block>
				<Text styles="my-3 text-5xl">Avatar</Text>
				<Text styles="my-3 text-2xl">Image Avatar</Text>
				<Block styles="flex gap-4">
					<Avatar src="/avatar-1.jpg" altText="Avatar 1" styles="border" />
					<Avatar src="/avatar-2.jpg" altText="Avatar 2" styles="border" />
					<Avatar src="/avatar-3.jpg" altText="Avatar 3" styles="border" />
				</Block>
				{/* //* Image Avatar */}
				<Text styles="my-3 text-2xl">Name Avatar</Text>
				<Block styles="flex gap-4 my-4">
					<Avatar name="Michael Brown" />
					<Avatar name="Emily Johnson" />
					<Avatar name="John" />
				</Block>
				{/* //* Name  Avatar */}
				<Text styles="my-3 text-2xl">Group Avatar</Text>
				<AvatarGroup>
					<Avatar src="/avatar-1.jpg" altText="Avatar 1" styles="border" />
					<Avatar src="/avatar-2.jpg" altText="Avatar 2" styles="border" />
					<Avatar src="/avatar-3.jpg" altText="Avatar 3" styles="border" />
				</AvatarGroup>
				{/* //* Group   Avatar */}
			</Block>
			<Block>
				<Text styles="my-3 text-5xl">Badge</Text>
				<Text styles="my-3 text-2xl">Default Badge</Text>
				<Badge content="7" badgeStyles="">
					<Icon
						icon="fa-envelope"
						iconLibrary="font-awesome"
						iconStyles="text-lg"
					/>
				</Badge>
				<Text styles="my-3 text-2xl">Badge with Max Count</Text>
				<Badge content="30" maxContent="25" badgeStyles="">
					<Icon
						icon="fa-envelope"
						iconLibrary="font-awesome"
						iconStyles="text-xl"
					/>
				</Badge>
				<Text styles="my-3 text-2xl">Badge in Different Position</Text>
				<Block styles="flex gap-10 my-6">
					<Badge content="7" position="top right" badgeStyles="">
						<Icon
							icon="fa-envelope"
							iconLibrary="font-awesome"
							iconStyles="text-xl"
						/>
					</Badge>
					<Badge content="7" position="top left" badgeStyles="">
						<Icon
							icon="fa-envelope"
							iconLibrary="font-awesome"
							iconStyles="text-xl"
						/>
					</Badge>
					<Badge content="7" position="bottom left" badgeStyles="">
						<Icon
							icon="fa-envelope"
							iconLibrary="font-awesome"
							iconStyles="text-xl"
						/>
					</Badge>
					<Badge content="7" position="bottom right" badgeStyles="">
						<Icon
							icon="fa-envelope"
							iconLibrary="font-awesome"
							iconStyles="text-xl"
						/>
					</Badge>
				</Block>
			</Block>
			<Block>
				<Text styles="my-3 text-5xl">Icon Button</Text>
				<Text styles="my-3 text-2xl">Default Icon</Text>
				<IconButton text="Default Icon Button" textStyles="mx-3" />
				<Text styles="my-3 text-2xl">Badge with Max Count</Text>
				<Badge content="30" maxContent="25" badgeStyles="">
					<Icon
						icon="fa-envelope"
						iconLibrary="font-awesome"
						iconStyles="text-xl"
					/>
				</Badge>
				<Text styles="my-3 text-2xl">Badge in Different Position</Text>
				<Block styles="flex gap-10 my-6">
					<Badge content="7" position="top right" badgeStyles="">
						<Icon
							icon="fa-envelope"
							iconLibrary="font-awesome"
							iconStyles="text-xl"
						/>
					</Badge>
					<Badge content="7" position="top left" badgeStyles="">
						<Icon
							icon="fa-envelope"
							iconLibrary="font-awesome"
							iconStyles="text-xl"
						/>
					</Badge>
					<Badge content="7" position="bottom left" badgeStyles="">
						<Icon
							icon="fa-envelope"
							iconLibrary="font-awesome"
							iconStyles="text-xl"
						/>
					</Badge>
					<Badge content="7" position="bottom right" badgeStyles="">
						<Icon
							icon="fa-envelope"
							iconLibrary="font-awesome"
							iconStyles="text-xl"
						/>
					</Badge>
				</Block>
			</Block>
			{/* //*End  */}
			<Block tagName="div">
				<Accordion active={true} variant="1">
					<AccordionHeader>
						<Text tagName="h3" styles=" text-xl font-medium !text-gray-200 ">
							Accordion 1
						</Text>
					</AccordionHeader>
					<AccordionDetails>
						<Text styles=" ">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
							deserunt sapiente nostrum iure excepturi vel debitis, quae
							quibusdam officiis. Atque nesciunt pariatur praesentium optio, at
							vel harum aliquam illo labore?
						</Text>
					</AccordionDetails>
				</Accordion>
				<Accordion variant="1">
					<AccordionHeader>
						<Text tagName="h3" styles=" text-xl font-medium !text-gray-200 ">
							Accordion 2
						</Text>
					</AccordionHeader>
					<AccordionDetails>
						<Text styles="">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
							deserunt sapiente nostrum iure excepturi vel debitis, quae
							quibusdam officiis. Atque nesciunt pariatur praesentium optio, at
							vel harum aliquam illo labore?
						</Text>
					</AccordionDetails>
				</Accordion>
				<Accordion variant="1">
					<AccordionHeader>
						<Text tagName="h3" styles=" text-xl font-medium !text-gray-200 ">
							Accordion 3
						</Text>
					</AccordionHeader>
					<AccordionDetails>
						<Text styles="">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
							deserunt sapiente nostrum iure excepturi vel debitis, quae
							quibusdam officiis. Atque nesciunt pariatur praesentium optio, at
							vel harum aliquam illo labore?
						</Text>
					</AccordionDetails>
				</Accordion>
			</Block>
			<div className="relative overflow-x-auto">
				<Table
					styles="w-full text-sm text-left rtl:text-right text-gray-500 "
					variant="1">
					<TableCaption styles="text-slate-500 dark:text-slate-400 py-4 text-xs">
						Table Caption
					</TableCaption>
					<TableHead styles=" text-gray-200 uppercase bg-gray-500">
						<TableRow>
							<TableCell header={true} scope="cell" styles="px-6 py-3">
								#
							</TableCell>
							<TableCell header={true} styles="px-6 py-3">
								First Name
							</TableCell>
							<TableCell header={true} styles="px-6 py-3">
								Last Name
							</TableCell>
							<TableCell header={true} styles="px-6 py-3">
								Username
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow styles="border-b border-gray-700 odd:bg-gray-800 even:bg-gray-700">
							<TableCell
								thStyles="font-medium text-gray-200 whitespace-nowrap"
								styles="px-6 py-4 ">
								1
							</TableCell>
							<TableCell styles="px-6 py-4 ">Mark</TableCell>
							<TableCell styles="px-6 py-4 ">Otto</TableCell>
							<TableCell styles="px-6 py-4 ">@mdo</TableCell>
						</TableRow>
						<TableRow styles="border-b border-gray-700 odd:bg-gray-800 even:bg-gray-700">
							<TableCell styles="px-6 py-4 font-medium text-gray-200 whitespace-nowrap">
								2
							</TableCell>
							<TableCell styles="px-6 py-4 ">Jacob</TableCell>
							<TableCell styles="px-6 py-4 ">Thornton</TableCell>
							<TableCell styles="px-6 py-4 ">@fat</TableCell>
						</TableRow>
						<TableRow styles="border-b border-gray-700 odd:bg-gray-800 even:bg-gray-700">
							<TableCell styles="px-6 py-4 font-medium text-gray-200 whitespace-nowrap">
								3
							</TableCell>
							<TableCell styles="px-6 py-4 ">Larry</TableCell>
							<TableCell styles="px-6 py-4 ">the Bird</TableCell>
							<TableCell styles="px-6 py-4 ">@twitter</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</div>
			<div className="h-[300px] "></div>
			<Carousel trans>
				<div>
					<Image src="/avatar-1.jpg" />
					<h2>Slide 1</h2>
					<p>Description for Slide 1</p>
					{/* Add any HTML or React components here */}
				</div>
				<div>
					<Image src="/avatar-2.jpg" />
					<h2>Slide 2</h2>
					<p>Description for Slide 2</p>
					{/* Add any HTML or React components here */}
				</div>
				<div>
					<Image src="/avatar-3.jpg" />
					<h2>Slide 3</h2>
					<p>Description for Slide 3</p>
					{/* Add any HTML or React components here */}
				</div>
			</Carousel>
			<Text
				tagName="h1"
				styles=" text-2xl text-green-800 dark:text-green-600 !font-bold underline underline-offset-4 text-center transition-all duration-300">
				Test Page
			</Text>
			{/* // * TextArea */}
			<Block styles=" my-4 ">
				<Text tagName="h2" styles=" text-lg mb-2 underline underline-offset-2 ">
					TextArea Component:
				</Text>
				<Label styles="my-2 text-base text-gray-400 ">
					Textarea Default Styles:{" "}
				</Label>
				<TextArea disabled={false} placeholder="This is placeholder." />
				<Label styles="my-2 text-base text-gray-400 ">
					Textarea Required:*{" "}
				</Label>
				<TextArea placeholder="This is placeholder." required />

				<Label styles="my-2 text-base text-gray-400 ">
					Textarea With Error:{" "}
				</Label>
				<TextArea
					placeholder="This is placeholder."
					required
					error
					errorStyles="text-xs "
				/>
			</Block>
			{/* // * Avatar */}
			<Block styles=" my-4 ">
				<Text tagName="h2" styles=" text-lg mb-2 underline underline-offset-2 ">
					Avatar Component:
				</Text>
				<Text styles="my-2 text-base text-gray-400 ">
					Avatar Default Styles:{" "}
				</Text>
				<Avatar />
				<Text styles="my-2 text-base text-gray-400 ">Avatar With Image: </Text>
				<Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" />
				<Text styles="my-2 text-base text-gray-400 ">Avatar With Name: </Text>
				<Avatar name="Nafis Mahmud Ayon" />
				<Text styles="my-2 text-base text-gray-400 ">
					AvatarGroup With Different Type of Avatar:{" "}
				</Text>
				<AvatarGroup styles="mt-3 ">
					<Avatar
						src="https://images.unsplash.com/photo-1554151228-14d9def656e4"
						styles="border-2 border-white  "
					/>
					<Avatar
						src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
						styles="border-2 border-white  "
					/>
					<Avatar name="Nafis Mahmud Ayon" styles="border-2 border-white  " />
					<Avatar
						src="https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c"
						styles="border-2 border-white  "
					/>
					<Avatar />
				</AvatarGroup>
			</Block>
			{/* // * Divider */}
			<Block styles=" my-4 ">
				<Text tagName="h2" styles=" text-lg mb-2 underline underline-offset-2 ">
					Divider Component:
				</Text>
				<Text styles="my-2 text-base text-gray-400 ">
					Divider Default Styles:{" "}
				</Text>
				<Block styles="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg  shadow-sm ">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
					mollitia rerum nesciunt ipsum deserunt in illo similique eius
					veritatis ex, natus sint voluptas sunt placeat officia laboriosam,
					explicabo magni dicta?
					<Divider />
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
					consequatur impedit veniam modi amet.
				</Block>

				<Text styles="my-2 text-base text-gray-400 ">Divider With Text: </Text>
				<Block styles="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg  shadow-sm ">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
					mollitia rerum nesciunt ipsum deserunt in illo similique eius
					veritatis ex, natus sint voluptas sunt placeat officia laboriosam,
					explicabo magni dicta?
					<Divider> Text Position Center </Divider>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
					consequatur impedit veniam modi amet.
				</Block>
				<Text styles="my-2 text-base text-gray-400 ">
					Divider With Right Align:{" "}
				</Text>
				<Block styles="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg  shadow-sm ">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
					mollitia rerum nesciunt ipsum deserunt in illo similique eius
					veritatis ex, natus sint voluptas sunt placeat officia laboriosam,
					explicabo magni dicta?
					<Divider position="right"> Text Position Right </Divider>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
					consequatur impedit veniam modi amet.
				</Block>
				<Text styles="my-2 text-base text-gray-400 ">
					Divider With Text Left Align:{" "}
				</Text>
				<Block styles="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg  shadow-sm ">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
					mollitia rerum nesciunt ipsum deserunt in illo similique eius
					veritatis ex, natus sint voluptas sunt placeat officia laboriosam,
					explicabo magni dicta?
					<Divider position="left"> Text Position Left </Divider>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
					consequatur impedit veniam modi amet.
				</Block>
			</Block>
			<CodeSnippet
				lang="jsx"
				headerStyles="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
				bodyStyles=" !font-code max-h-[300px] !my-0 "
				content={`import {Avatar} from "landing-page-ui";`}
			/>
			<Block styles="my-3 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				<Card>
					<CardAction link="/components/accordion">
						<CardMedia
							mediaStyles="h-40 w-full "
							badge="Hello"
							src="https://images.unsplash.com/photo-1501854140801-50d01698950b"
							badgePosition="bottom left"
						/>
						<CardContent>
							<Text tagName="h3" styles="text-2xl  ">
								Lizard
							</Text>
							<Text tagName="p" styles="text-sm text-pretty  ">
								Lizards are a widespread group of squamate reptiles, with over
								6,000 species, ranging across all continents except Antarctica
							</Text>
						</CardContent>
					</CardAction>
				</Card>
				<Card>
					<CardAction link="/components/accordion">
						<CardMedia
							mediaStyles="h-40 w-full "
							badge="Hello"
							src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d"
							badgePosition="bottom left"
						/>
						<CardContent>
							<Text tagName="h3" styles="text-2xl  ">
								Lizard
							</Text>
							<Text tagName="p" styles="text-sm text-pretty  ">
								Lizards are a widespread group of squamate reptiles, with over
								6,000 species, ranging across all continents except Antarctica
							</Text>
						</CardContent>
					</CardAction>
				</Card>
				<Card>
					<CardAction link="/components/accordion">
						<CardMedia
							mediaStyles="h-40 w-full "
							src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
						/>
						<CardContent>
							<Text tagName="h3" styles="text-2xl  ">
								Lizard
							</Text>
							<Text tagName="p" styles="text-sm text-pretty  ">
								Lizards are a widespread group of squamate reptiles, with over
								6,000 species, ranging across all continents except Antarctica
							</Text>
						</CardContent>
					</CardAction>
				</Card>
			</Block>
			<Label htmlFor="data">Input</Label>
			<Input
				placeholder="Data"
				// id="data"
				iconStyles=""
				// value={inputValue}
				type="password"
				iconEnable={true}
				// error
				autoComplete="on"
				onChange={handleInputChange}
			/>
			<p>You entered: {inputValue}</p>
			<div className="h-60 bg-red-100 mt-6 "></div>
			<Text styles="text-3xl my-6">Circular Progress Bar</Text>
			<CircularProgressBar
				value={progress}
				onVisible
				max="1500"
				duration={10}
			/>
			<Text styles="text-3xl my-6">Progress Bar</Text>
			<ProgressBar value={progress} animateOnVisible duration="1000" />
			<div className="h-60 bg-red-100 mt-6 "></div>
		</div>
	);
};

export default TestPage;
