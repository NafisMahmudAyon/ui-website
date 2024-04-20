import {
	Block,
	CodeSnippet,
	Icon,
	Image,
	ImageGallery,
	Tab,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Tabs,
	TabsNav,
	TabsPanel,
	Text,
} from "landing-page-ui";
import React from "react";
import RightSideBar from "../Layout/RightSideBar";


const ImageGalleryPage = () => {
	const gallery = Array.from({ length: 9 }, (_, index) => ({
		src: `https://source.unsplash.com/random/800x600?nature=${index}`,
		imageCaption: `Nature ${index + 1}`,
	}));
	const defaultGalleryContent = `
import { Image, ImageGallery } from "landing-page-ui"

const App = () => {
	const gallery = Array.from({ length: 9 }, (_, index) => ({
		src: \`https://source.unsplash.com/random/800x600?nature=\${index}\`,
		imageCaption: \`Nature \${index + 1}\`,
	}));
  return (
    <ImageGallery style="grid grid-cols-3 gap-2">
		{gallery.map((item, index) => (
			<Image
				key={index}
				src={item.src}
			/>
		))}
	</ImageGallery>
  );
}

export default App;
	`;

	const galleryWithCaptionContent = `
import { Image, ImageGallery } from "landing-page-ui"

const App = () => {
	const gallery = Array.from({ length: 9 }, (_, index) => ({
		src: \`https://source.unsplash.com/random/800x600?nature=\${index}\`,
		imageCaption: \`Nature \${index + 1}\`,
	}));
  return (
    <ImageGallery captionEnabled={true} style="grid grid-cols-3 gap-2">
		{gallery.map((item, index) => (
			<Image
				key={index}
				src={item.src}
				imageCaption={item.imageCaption}
			/>
		))}
	</ImageGallery>
  );
}

export default App;
	`;
	const galleryWithLightboxContent = `
import { Image, ImageGallery } from "landing-page-ui"

const App = () => {
	const gallery = Array.from({ length: 9 }, (_, index) => ({
		src: \`https://source.unsplash.com/random/800x600?nature=\${index}\`,
		imageCaption: \`Nature \${index + 1}\`,
	}));
  return (
    <ImageGallery captionEnabled={true} lightBox={true} style="grid grid-cols-3 gap-2">
		{gallery.map((item, index) => (
			<Image
				key={index}
				src={item.src}
				imageCaption={item.imageCaption}
			/>
		))}
	</ImageGallery>
  );
}

export default App;
	`;

	const imageGalleryProps = [
		{
			name: "imageCaption",
			type: "string",
			description: "Caption for image.",
			defaultValue: "div",
		},
		{
			name: "captionEnabled",
			type: "boolean",
			description: "Is caption enable.",
			defaultValue: "div",
		},
		{
			name: "lightBox",
			type: "boolean",
			description: "Is lightBox enable?",
			defaultValue: "-",
		},
		{
			name: "lightBoxCaptionEnabled",
			type: "boolean",
			description: "Is lightBox caption enable?",
			defaultValue: "-",
		},
		{
			name: "style",
			type: "string",
			description: "Any CSS className to style the gallery wrapper.",
			defaultValue: "-",
		},
		{
			name: "imageStyle",
			type: "string",
			description: "Any CSS className to style the image.",
			defaultValue: "-",
		},
		{
			name: "captionStyle",
			type: "string",
			description: "Any CSS className to style the image caption.",
			defaultValue: "-",
		},
		{
			name: "lightBoxStyle",
			type: "string",
			description: "Any CSS className to style the lightbox.",
			defaultValue: "-",
		},
		{
			name: "lightBoxImageStyle",
			type: "string",
			description: "Any CSS className to style the lightbox image.",
			defaultValue: "-",
		},
		{
			name: "lightBoxCaptionStyle",
			type: "string",
			description: "Any CSS className to style the lightbox image caption.",
			defaultValue: "-",
		},
		{
			name: "closeButtonStyle",
			type: "string",
			description: "Any CSS className to style the lightbox close button.",
			defaultValue: "-",
		},
		{
			name: "children",
			type: "node",
			description: "Child components and content to be placed within it.",
			defaultValue: "-",
		},
		// {
		// 	name: "variant",
		// 	type: "number",
		// 	description: "Variant of the accordion",
		// 	defaultValue: '"1"',
		// },
	];
	return (
		<Block tagName={"div"} style="scroll-smooth md:w[65%] lg:w-[73%]">
			<Block>
				<Text tagName={"h2"} style=" text-3xl mb-2 font-medium capitalize ">
					Image Gallery
				</Text>
				<Text tagName={"p"} style="">
					The{" "}
					<Text tagName={"span"} style="code  ">
						ImageGallery
					</Text>{" "}
					component enables you to display multiple images in a gallery format.
				</Text>
				<Block style="my-10">
					<Text
						tagName={"h3"}
						id="default-gallery"
						style="text-2xl mt-6 mb-2 !font-medium group flex items-center capitalize ">
						default gallery
						<Icon
							icon="fa-link"
							iconLibrary="font-awesome"
							isLink={true}
							linkTo="#default-gallery"
							iconStyle="mx-3 hidden dark:bg-gray-800 group-hover:inline-block p-1 rounded-md shadow-md text-sm bg-gray-200"
						/>
					</Text>
					<Tabs
						active="1"
						orientation="horizontal"
						navWrapStyle="text-sm"
						panelWrapStyle=" mt-2 shadow-md rounded-md  "
						style="w-full">
						<TabsNav
							showButton="false"
							style=" flex justify-between font-semibold text-gray-800/50 dark:text-gray-200/50  py-1 px-1"
							tabAreaStyle="flex gap-3"
							activeTabStyle="bg-gray-800 !text-gray-200 dark:bg-gray-200 dark:!text-gray-200 shadow-md">
							<Tab
								value="1"
								style=" px-4 py-1 bg-gray-200 rounded-sm dark:bg-gray-800 ">
								Preview
							</Tab>
							<Tab
								value="2"
								style=" px-4 py-1 bg-gray-200 rounded-sm dark:bg-gray-800">
								Code
							</Tab>
						</TabsNav>
						<TabsPanel
							value="1"
							style="px-4 py-2 bg-gray-200 dark:bg-gray-800 border-[1px] border-white/50 rounded-lg">
							<Block style="flex gap-4 my-4">
								<ImageGallery style="grid grid-cols-3 gap-2">
									{gallery.map((item, index) => (
										<Image
											key={index}
											src={item.src}
											imageCaption={item.imageCaption}
										/>
									))}
								</ImageGallery>
							</Block>
						</TabsPanel>
						<TabsPanel value="2" style="rounded-lg !overflow-hidden ">
							<CodeSnippet
								lang="jsx"
								headerStyle="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
								bodyStyle=" !font-code max-h-[300px] !my-0 "
								content={defaultGalleryContent}
							/>
						</TabsPanel>
					</Tabs>
				</Block>
				<Block style="my-10">
					<Text
						tagName={"h3"}
						id="gallery-with-caption"
						style="text-2xl mt-6 mb-2 !font-medium group flex items-center capitalize ">
						gallery with caption
						<Icon
							icon="fa-link"
							iconLibrary="font-awesome"
							isLink={true}
							linkTo="#gallery-with-caption"
							iconStyle="mx-3 hidden dark:bg-gray-800 group-hover:inline-block p-1 rounded-md shadow-md text-sm bg-gray-200"
						/>
					</Text>
					<Tabs
						active="1"
						orientation="horizontal"
						navWrapStyle="text-sm"
						panelWrapStyle=" mt-2 shadow-md rounded-md  "
						style="w-full">
						<TabsNav
							showButton="false"
							style=" flex justify-between font-semibold text-gray-800/50 dark:text-gray-200/50  py-1 px-1"
							tabAreaStyle="flex gap-3"
							activeTabStyle="bg-gray-800 !text-gray-200 dark:bg-gray-200 dark:!text-gray-200 shadow-md">
							<Tab
								value="1"
								style=" px-4 py-1 bg-gray-200 rounded-sm dark:bg-gray-800 ">
								Preview
							</Tab>
							<Tab
								value="2"
								style=" px-4 py-1 bg-gray-200 rounded-sm dark:bg-gray-800">
								Code
							</Tab>
						</TabsNav>
						<TabsPanel
							value="1"
							style="px-4 py-2 bg-gray-200 dark:bg-gray-800 border-[1px] border-white/50 rounded-lg">
							<Block style="flex gap-4 my-4">
								<ImageGallery
									captionEnabled={true}
									style="grid grid-cols-3 gap-2">
									{gallery.map((item, index) => (
										<Image
											key={index}
											src={item.src}
											imageCaption={item.imageCaption}
										/>
									))}
								</ImageGallery>
							</Block>
						</TabsPanel>
						<TabsPanel value="2" style="rounded-lg !overflow-hidden ">
							<CodeSnippet
								lang="jsx"
								headerStyle="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
								bodyStyle=" !font-code max-h-[300px] !my-0 "
								content={galleryWithCaptionContent}
							/>
						</TabsPanel>
					</Tabs>
				</Block>
				<Block style="my-10">
					<Text
						tagName={"h3"}
						id="gallery-with-lightbox"
						style="text-2xl mt-6 mb-2 !font-medium group flex items-center capitalize ">
						gallery with lightbox
						<Icon
							icon="fa-link"
							iconLibrary="font-awesome"
							isLink={true}
							linkTo="#gallery-with-lightbox"
							iconStyle="mx-3 hidden dark:bg-gray-800 group-hover:inline-block p-1 rounded-md shadow-md text-sm bg-gray-200"
						/>
					</Text>
					<Tabs
						active="1"
						orientation="horizontal"
						navWrapStyle="text-sm"
						panelWrapStyle=" mt-2 shadow-md rounded-md  "
						style="w-full">
						<TabsNav
							showButton="false"
							style=" flex justify-between font-semibold text-gray-800/50 dark:text-gray-200/50  py-1 px-1"
							tabAreaStyle="flex gap-3"
							activeTabStyle="bg-gray-800 !text-gray-200 dark:bg-gray-200 dark:!text-gray-200 shadow-md">
							<Tab
								value="1"
								style=" px-4 py-1 bg-gray-200 rounded-sm dark:bg-gray-800 ">
								Preview
							</Tab>
							<Tab
								value="2"
								style=" px-4 py-1 bg-gray-200 rounded-sm dark:bg-gray-800">
								Code
							</Tab>
						</TabsNav>
						<TabsPanel
							value="1"
							style="px-4 py-2 bg-gray-200 dark:bg-gray-800 border-[1px] border-white/50 rounded-lg">
							<Block style="flex gap-4 my-4">
								<ImageGallery
									captionEnabled={true}
									lightBox={true}
									style="grid grid-cols-3 gap-2">
									{gallery.map((item, index) => (
										<Image
											key={index}
											src={item.src}
											imageCaption={item.imageCaption}
										/>
									))}
								</ImageGallery>
							</Block>
						</TabsPanel>
						<TabsPanel value="2" style="rounded-lg !overflow-hidden ">
							<CodeSnippet
								lang="jsx"
								headerStyle="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
								bodyStyle=" !font-code max-h-[300px] !my-0 "
								content={galleryWithLightboxContent}
							/>
						</TabsPanel>
					</Tabs>
				</Block>
				<Block style="my-10">
					<Text
						tagName={"h3"}
						id="props"
						style="text-2xl mt-6 !font-medium group flex items-center ">
						Props
						<Icon
							icon="fa-link"
							iconLibrary="font-awesome"
							isLink={true}
							linkTo="#props"
							iconStyle="mx-3 hidden dark:bg-gray-800 group-hover:inline-block p-1 rounded-md shadow-md text-sm bg-gray-200"
						/>
					</Text>
					<Block style="my-6">
						<Text tagName="p" style="my-5">
							Explore the available props for the{" "}
							<span className="code">ImageGallery</span> component
						</Text>
						<Block style="overflow-x-auto">
							<Table variant={"1"}>
								<TableHead variant={"1"}>
									<TableRow style="bg-gray-800" variant={false}>
										<TableCell
											header={true}
											variant={"1"}
											style="dark:text-gray-200">
											Prop
										</TableCell>
										<TableCell
											header={true}
											variant={"1"}
											style="dark:text-gray-200">
											Type
										</TableCell>
										<TableCell
											header={true}
											variant={"1"}
											style="dark:text-gray-200">
											Default
										</TableCell>
										<TableCell
											header={true}
											variant={"1"}
											style="dark:text-gray-200">
											Description
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody variant={"1"}>
									{imageGalleryProps.map((props, index) => {
										return (
											<TableRow
												key={index}
												variant={"1"}
												style="odd:dark:bg-gray-700 even:dark:bg-gray-800">
												<TableCell
													variant={"1"}
													header={true}
													style="dark:!text-gray-200">
													{props.name}
												</TableCell>
												<TableCell variant={"1"} style="dark:text-gray-200">
													{props.type}
												</TableCell>
												<TableCell variant={"1"} style="dark:text-gray-200">
													{/* {props.defaultValue} */}
													<span
														dangerouslySetInnerHTML={{
															__html: props.defaultValue,
														}}
													/>
												</TableCell>
												<TableCell variant={"1"} style="dark:text-gray-200">
													{props.description}
												</TableCell>
											</TableRow>
										);
									})}
								</TableBody>
							</Table>
						</Block>
					</Block>
				</Block>
			</Block>
			<RightSideBar>
				<Text style="text-lg !font-bold pt-3 pl-3 pb-4 ">ON THIS PAGE</Text>
				<Block style="">
					<Text
						style="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 capitalize "
						isLink={true}
						linkTo="#default-gallery">
						default gallery
					</Text>
					<Text
						style="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 capitalize "
						isLink={true}
						linkTo="#gallery-with-caption">
						gallery with caption
					</Text>
					<Text
						style="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 capitalize "
						isLink={true}
						linkTo="#gallery-with-lightbox">
						gallery with lightbox
					</Text>
					<Text
						style="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 capitalize "
						isLink={true}
						linkTo="#props">
						Props
					</Text>
				</Block>
			</RightSideBar>
		</Block>
	);
};

export default ImageGalleryPage;
