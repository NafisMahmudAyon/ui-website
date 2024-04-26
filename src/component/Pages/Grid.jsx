import {
	Block,
	// CodeSnippet,
	// Grid,
	// GridItem,
	Icon,
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
import { Grid, GridItem } from "../test/Test";
import RightSideBar from "../Layout/RightSideBar";
import CodeSnippet from "../components/CodeSnippet";
import ScrollToTop from "../components/ScrollToTop";

const GridPage = () => {
	// const getRandomColor = () => {
	// 	const letters = "0123456789ABCDEF";
	// 	let color = "#";
	// 	for (let i = 0; i < 6; i++) {
	// 		color += letters[Math.floor(Math.random() * 16)];
	// 	}
	// 	return color;
	// };
	const gridContent = Array.from({ length: 9 }, (_, index) => ({
		id: `${index + 1}`,
	}));
	const defaultGridContent = `
import { Grid, GridItem } from "landing-page-ui"

const App = () => {
	const gridContent = Array.from({ length: 9 }, (_, index) => ({
		id: \`\${index+1}\`,
	}));
  return (
    <Grid styles="w-full">
      {gridContent.map((item, index) => (
        <GridItem
          key={index}
          styles="min-h-36 flex items-center justify-center border border-gray-600">
          {item.id}
        </GridItem>
      ))}
    </Grid>
  );
}

export default App;
	`;
	const defaultGridWithLinkContent = `
import { Grid, GridItem } from "landing-page-ui"

const App = () => {
	const gridContent = Array.from({ length: 9 }, (_, index) => ({
		id: \`\${index+1}\`,
	}));
  return (
    <Grid styles="w-full">
      {gridContent.map((item, index) => (
        <GridItem
          key={index}
          styles="min-h-36 flex items-center justify-center border border-gray-600"
          isLink={true}
          linkTo="#grid-item-with-link"
          target="_self">
          {item.id}
        </GridItem>
      ))}
    </Grid>
  );
}

export default App;
	`;
	const gridProps = [
		{
			name: "tagName",
			type: "string",
			description: "HTML tag name.",
			defaultValue: "div",
		},
		{
			name: "style",
			type: "string",
			description: "Any CSS className to style the Grid.",
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
	const gridItemProps = [
		{
			name: "tagName",
			type: "string",
			description: "HTML tag name.",
			defaultValue: "div",
		},
		{
			name: "isLink",
			type: "boolean",
			description: "Is the text linkable?",
			defaultValue: "-",
		},
		{
			name: "linkTo",
			type: "string",
			description: "URL or link.",
			defaultValue: "-",
		},
		{
			name: "target",
			type: "string",
			description:
				"Specifies where to open the linked document when the link is clicked.",
			defaultValue: "_self",
		},
		{
			name: "style",
			type: "string",
			description: "Any CSS className to style the Grid.",
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
		<Block tagName={"div"} styles="scroll-smooth md:w-[65%] lg:w-[73%]">
			<Block>
				<Text tagName={"h2"} styles=" text-3xl mb-2 font-medium ">
					Grid
				</Text>
				<Text tagName={"p"} styles="">
					The{" "}
					<Text tagName={"span"} styles="code  ">
						Grid
					</Text>{" "}
					component enables you to display content in a grid format.
				</Text>
				<Block styles="my-10">
					<Text
						tagName={"h3"}
						id="default-grid"
						styles="text-2xl mt-6 mb-2 !font-medium group flex items-center capitalize ">
						Default Grid
						<Icon
							icon="fa-link"
							iconLibrary="font-awesome"
							isLink={true}
							linkTo="#default-grid"
							iconStyles="mx-3 hidden dark:bg-gray-800 group-hover:inline-block p-1 rounded-md shadow-md text-sm bg-gray-200"
						/>
					</Text>
					<Tabs
						active="1"
						orientation="horizontal"
						navWrapStyles="text-sm"
						panelWrapStyles=" mt-2 shadow-md rounded-md  "
						styles="w-full">
						<TabsNav
							showButton={false}
							styles=" flex justify-between font-semibold text-gray-800/50 dark:text-gray-200/50  py-1 px-1"
							tabAreaStyles="flex gap-3"
							activeTabStyles="bg-gray-800 !text-gray-200 dark:bg-gray-200 dark:!text-gray-200 shadow-md">
							<Tab
								value="1"
								styles=" px-4 py-1 bg-gray-200 rounded-sm dark:bg-gray-800 ">
								Preview
							</Tab>
							<Tab
								value="2"
								styles=" px-4 py-1 bg-gray-200 rounded-sm dark:bg-gray-800">
								Code
							</Tab>
						</TabsNav>
						<TabsPanel
							value="1"
							styles="px-4 py-2 bg-gray-200 dark:bg-gray-800 border-[1px] border-white/50 rounded-lg">
							<Block styles="flex gap-4 my-4">
								<Grid styles="w-full">
									{gridContent.map((item, index) => (
										<GridItem
											key={index}
											styles={`min-h-36 flex items-center justify-center border border-gray-600`}>
											{item.id}
										</GridItem>
									))}
								</Grid>
							</Block>
						</TabsPanel>
						<TabsPanel value="2" styles="rounded-lg !overflow-hidden ">
							<CodeSnippet
								lang="jsx"
								headerStyles="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
								bodyStyles=" !font-code max-h-[300px] !my-0 "
								content={defaultGridContent}
							/>
						</TabsPanel>
					</Tabs>
				</Block>
				<Block styles="my-10">
					<Text
						tagName={"h3"}
						id="grid-item-with-link"
						styles="text-2xl mt-6 mb-2 !font-medium group flex items-center ">
						Grid Item With link
						<Icon
							icon="fa-link"
							iconLibrary="font-awesome"
							isLink={true}
							linkTo="#grid-item-with-link"
							iconStyles="mx-3 hidden dark:bg-gray-800 group-hover:inline-block p-1 rounded-md shadow-md text-sm bg-gray-200"
						/>
					</Text>
					<Tabs
						active="1"
						orientation="horizontal"
						navWrapStyles="text-sm"
						panelWrapStyles=" mt-2 shadow-md rounded-md  "
						styles="w-full">
						<TabsNav
							showButton={false}
							styles=" flex justify-between font-semibold text-gray-800/50 dark:text-gray-200/50  py-1 px-1"
							tabAreaStyles="flex gap-3"
							activeTabStyles="bg-gray-800 !text-gray-200 dark:bg-gray-200 dark:!text-gray-200 shadow-md">
							<Tab
								value="1"
								styles=" px-4 py-1 bg-gray-200 rounded-sm dark:bg-gray-800 ">
								Preview
							</Tab>
							<Tab
								value="2"
								styles=" px-4 py-1 bg-gray-200 rounded-sm dark:bg-gray-800">
								Code
							</Tab>
						</TabsNav>
						<TabsPanel
							value="1"
							styles="px-4 py-2 bg-gray-200 dark:bg-gray-800 border-[1px] border-white/50 rounded-lg">
							<Block styles="flex gap-4 my-4">
								<Grid styles="w-full">
									{gridContent.map((item, index) => (
										<GridItem
											key={index}
											styles={`min-h-36 flex items-center justify-center border border-gray-600`}
											isLink={true}
											linkTo="#"
											target="_self">
											{item.id}
										</GridItem>
									))}
								</Grid>
							</Block>
						</TabsPanel>
						<TabsPanel value="2" styles="rounded-lg !overflow-hidden ">
							<CodeSnippet
								lang="jsx"
								headerStyles="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
								bodyStyles=" !font-code max-h-[300px] !my-0 "
								content={defaultGridWithLinkContent}
							/>
						</TabsPanel>
					</Tabs>
				</Block>
				<Block styles="my-10">
					<Text
						tagName={"h3"}
						id="props"
						styles="text-2xl mt-6 !font-medium group flex items-center ">
						Props
						<Icon
							icon="fa-link"
							iconLibrary="font-awesome"
							isLink={true}
							linkTo="#props"
							iconStyles="mx-3 hidden dark:bg-gray-800 group-hover:inline-block p-1 rounded-md shadow-md text-sm bg-gray-200"
						/>
					</Text>
					<Block styles="my-6">
						<Text tagName="p" styles="mb-5">
							Explore the available props for the{" "}
							<span className="code">Grid</span> component
						</Text>
						<Block styles="overflow-x-auto">
							<Table variant={"1"}>
								<TableHead variant={"1"}>
									<TableRow styles="!bg-gray-800" variant={false}>
										<TableCell
											header={true}
											variant={"1"}
											styles="dark:text-gray-200">
											Prop
										</TableCell>
										<TableCell
											header={true}
											variant={"1"}
											styles="dark:text-gray-200">
											Type
										</TableCell>
										<TableCell
											header={true}
											variant={"1"}
											styles="dark:text-gray-200">
											Default
										</TableCell>
										<TableCell
											header={true}
											variant={"1"}
											styles="dark:text-gray-200">
											Description
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody variant={"1"}>
									{gridProps.map((props, index) => {
										return (
											<TableRow
												key={index}
												variant={"1"}
												styles="odd:dark:bg-gray-700 even:dark:bg-gray-800">
												<TableCell
													variant={"1"}
													header={true}
													styles="dark:!text-gray-200">
													{props.name}
												</TableCell>
												<TableCell variant={"1"} styles="dark:text-gray-200">
													{props.type}
												</TableCell>
												<TableCell variant={"1"} styles="dark:text-gray-200">
													{props.defaultValue}
												</TableCell>
												<TableCell variant={"1"} styles="dark:text-gray-200">
													{props.description}
												</TableCell>
											</TableRow>
										);
									})}
								</TableBody>
							</Table>
						</Block>
						<Text tagName="p" styles="my-5">
							Explore the available props for the{" "}
							<span className="code">GridItem</span> component
						</Text>
						<Block styles="overflow-x-auto">
							<Table variant={"1"}>
								<TableHead variant={"1"}>
									<TableRow styles="!bg-gray-800" variant={false}>
										<TableCell
											header={true}
											variant={"1"}
											styles="dark:text-gray-200">
											Prop
										</TableCell>
										<TableCell
											header={true}
											variant={"1"}
											styles="dark:text-gray-200">
											Type
										</TableCell>
										<TableCell
											header={true}
											variant={"1"}
											styles="dark:text-gray-200">
											Default
										</TableCell>
										<TableCell
											header={true}
											variant={"1"}
											styles="dark:text-gray-200">
											Description
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody variant={"1"}>
									{gridItemProps.map((props, index) => {
										return (
											<TableRow
												key={index}
												variant={"1"}
												styles="odd:dark:bg-gray-700 even:dark:bg-gray-800">
												<TableCell
													variant={"1"}
													header={true}
													styles="dark:!text-gray-200">
													{props.name}
												</TableCell>
												<TableCell variant={"1"} styles="dark:text-gray-200">
													{props.type}
												</TableCell>
												<TableCell variant={"1"} styles="dark:text-gray-200">
													{props.defaultValue}
												</TableCell>
												<TableCell variant={"1"} styles="dark:text-gray-200">
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
				<Text styles="text-lg !font-bold pt-3 pl-3 pb-4 ">ON THIS PAGE</Text>
				<Block styles="">
					<Text
						styles="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 capitalize "
						isLink={true}
						linkTo="#default-grid">
						default grid
					</Text>
					<Text
						styles="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 capitalize "
						isLink={true}
						linkTo="#grid-item-with-link">
						grid item with link
					</Text>

					<Text
						styles="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 capitalize "
						isLink={true}
						linkTo="#props">
						Props
					</Text>
				</Block>
			</RightSideBar>
		</Block>
	);
};

export default GridPage;
