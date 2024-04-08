import {
	Block,
	CodeSnippet,
	Icon,
	Tab,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	TabPanel,
	Tabs,
	TabsNav,
	Text,
} from "landing-page-ui";
import React from "react";
import { Badge } from "../test/Test";
import RightSideBar from "../Layout/RightSideBar";

const BadgePage = () => {
	const defaultBadgeContent = `
import { Badge, Block } from "landing-page-ui"

const App = () => {
  return (
    <Badge />
  );
}

export default App;
	`;
	const badgeWithMaxContent = `
import { Badge, Block } from "landing-page-ui"

const App = () => {
  return (
    <Badge content="30" maxCount="20" >
		<Icon
			icon="fa-cart-shopping"
			iconLibrary="font-awesome"
			iconStyle="text-2xl"
		/>
	</Badge>
  );
}

export default App;
	`;
	const badgeInDifferentPosition = `
import { Badge, Block } from "landing-page-ui"

const App = () => {
  return (
    <Block style="flex gap-8">
		<Badge content="5" position="top right">
			<Icon
				icon="fa-cart-shopping"
				iconLibrary="font-awesome"
				iconStyle="text-2xl"
			/>
		</Badge>
		<Badge content="5" position="top left">
			<Icon
				icon="fa-cart-shopping"
				iconLibrary="font-awesome"
				iconStyle="text-2xl"
			/>
		</Badge>
		<Badge content="5" position="bottom right">
			<Icon
				icon="fa-cart-shopping"
				iconLibrary="font-awesome"
				iconStyle="text-2xl"
			/>
		</Badge>
		<Badge content="5" position="bottom left">
			<Icon
				icon="fa-cart-shopping"
				iconLibrary="font-awesome"
				iconStyle="text-2xl"
			/>
		</Badge>
	</Block>
  );
}

export default App;
	`;

	const avatarProps = [
		{
			name: "content",
			type: "number",
			description: "The content rendered within the badge.",
			defaultValue: "0",
		},
		{
			name: "maxCount",
			type: "number",
			description: "Max count to show.",
			defaultValue: "-",
		},
		{
			name: "position",
			type: "string",
			description: "Where to show the Badge.",
			defaultValue: "top right",
		},
		{
			name: "children",
			type: "node",
			description:
				"Child components and content to be placed within the table.",
			defaultValue: "-",
		},
		{
			name: "style",
			type: "string",
			description: "Any CSS className to style the Badge.",
			defaultValue: "-",
		},
		{
			name: "badgeStyle",
			type: "string",
			description: "Any CSS className to style the Badge content.",
			defaultValue: "-",
		},
	];
	return (
		<Block tagName={"div"} style="scroll-smooth md:w[65%] lg:w-[73%]">
			<Block>
				<Text tagName={"h2"} style=" text-3xl mb-2 font-medium ">
					Badge
				</Text>
				<Text tagName={"p"} style="">
					The{" "}
					<Text tagName={"span"} style="code  ">
						Badge
					</Text>{" "}
					component shows a small badge on its child.
				</Text>
				<Block style="my-10">
					<Text
						tagName={"h3"}
						id="default-badge"
						style="text-2xl mt-6 mb-2 !font-medium group flex items-center ">
						Default Badge
						<Icon
							icon="fa-link"
							iconLibrary="font-awesome"
							isLink={true}
							linkTo="#default-badge"
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
						<TabPanel
							value="1"
							style="px-4 py-2 bg-gray-200 dark:bg-gray-800 border-[1px] border-white/50 rounded-lg">
							<Block style="flex gap-4 my-4">
								<Badge />
							</Block>
						</TabPanel>
						<TabPanel value="2" style="rounded-lg !overflow-hidden ">
							<CodeSnippet
								lang="jsx"
								headerStyle="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
								bodyStyle=" !font-code max-h-[300px] !my-0 "
								content={defaultBadgeContent}
							/>
						</TabPanel>
					</Tabs>
				</Block>
				<Block style="my-10">
					<Text
						tagName={"h3"}
						id="badge-with-max-count"
						style="text-2xl mt-6 mb-2 !font-medium group flex items-center ">
						Badge with Max Count
						<Icon
							icon="fa-link"
							iconLibrary="font-awesome"
							isLink={true}
							linkTo="#badge-with-max-count"
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
						<TabPanel
							value="1"
							style="px-4 py-2 bg-gray-200 dark:bg-gray-800 border-[1px] border-white/50 rounded-lg">
							<Block style="flex gap-4 my-4">
								<Badge content="30" maxCount="20">
									<Icon
										icon="fa-cart-shopping"
										iconLibrary="font-awesome"
										iconStyle="text-2xl"
									/>
								</Badge>
							</Block>
						</TabPanel>
						<TabPanel value="2" style="rounded-lg !overflow-hidden ">
							<CodeSnippet
								lang="jsx"
								headerStyle="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
								bodyStyle=" !font-code max-h-[300px] !my-0 "
								content={badgeWithMaxContent}
							/>
						</TabPanel>
					</Tabs>
				</Block>
				<Block style="my-10">
					<Text
						tagName={"h3"}
						id="badge-in-different-position"
						style="text-2xl mt-6 mb-2 !font-medium group flex items-center ">
						Badge in Different Position
						<Icon
							icon="fa-link"
							iconLibrary="font-awesome"
							isLink={true}
							linkTo="#badge-in-different-position"
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
						<TabPanel
							value="1"
							style="px-4 py-2 bg-gray-200 dark:bg-gray-800 border-[1px] border-white/50 rounded-lg">
							<Block style="flex gap-4 my-4">
								<Block style="flex gap-8">
									<Badge content="5" position="top right">
										<Icon
											icon="fa-cart-shopping"
											iconLibrary="font-awesome"
											iconStyle="text-2xl"
										/>
									</Badge>
									<Badge content="5" position="top left">
										<Icon
											icon="fa-cart-shopping"
											iconLibrary="font-awesome"
											iconStyle="text-2xl"
										/>
									</Badge>
									<Badge content="5" position="bottom right">
										<Icon
											icon="fa-cart-shopping"
											iconLibrary="font-awesome"
											iconStyle="text-2xl"
										/>
									</Badge>
									<Badge content="5" position="bottom left">
										<Icon
											icon="fa-cart-shopping"
											iconLibrary="font-awesome"
											iconStyle="text-2xl"
										/>
									</Badge>
								</Block>
							</Block>
						</TabPanel>
						<TabPanel value="2" style="rounded-lg !overflow-hidden ">
							<CodeSnippet
								lang="jsx"
								headerStyle="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
								bodyStyle=" !font-code max-h-[300px] !my-0 "
								content={badgeInDifferentPosition}
							/>
						</TabPanel>
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
						<Text tagName="p" style="mb-5">
							Explore the available props for the{" "}
							<span className="code">Badge</span> component
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
									{avatarProps.map((props, index) => {
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
													{props.defaultValue}
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
				<RightSideBar>
					<Text style="text-lg !font-bold pt-3 pl-3 pb-4 ">ON THIS PAGE</Text>
					<Block style="">
						<Text
							style="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 "
							isLink={true}
							linkTo="#default-badge">
							Default Badge
						</Text>
						<Text
							style="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 "
							isLink={true}
							linkTo="#badge-with-max-count">
							Badge with Max Count
						</Text>
						<Text
							style="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 "
							isLink={true}
							linkTo="#badge-in-different-position">
							Badge in Different Position
						</Text>
						<Text
							style="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 "
							isLink={true}
							linkTo="#props">
							Props
						</Text>
					</Block>
				</RightSideBar>
			</Block>
		</Block>
	);
};

export default BadgePage;
