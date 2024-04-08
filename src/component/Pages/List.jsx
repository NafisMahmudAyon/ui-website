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
	Text,List
} from "landing-page-ui";
import React from "react";
// import { List } from "../test/Test";
import RightSideBar from "../Layout/RightSideBar";

const ListPage = () => {
	const lists = [
		"First item",
		"Second item",
		"Third item",
		"Fourth item",
		"Fifth item",
	];
	const defaultListContent = `
import { List } from "landing-page-ui"

const App = () => {
	const lists = [
		"First item",
		"Second item",
		"Third item",
		"Fourth item",
		"Fifth item",
	];
  return (
    <List style="list-decimal px-4" list = {lists} />
  );
}

export default App;
	`;
	const listWithIconContent = `
import { List } from "landing-page-ui"

const App = () => {
	const lists = [
		"First item",
		"Second item",
		"Third item",
		"Fourth item",
		"Fifth item",
	];
  return (
    <List list = {lists} icon="fa-diamond" iconLibrary="font-awesome" iconStyle="pr-3 text-sm" />
  );
}

export default App;
	`;
	const avatarProps = [
		{
			name: "list",
			type: "array",
			description: "List array.",
			defaultValue: "-",
		},
		{
			name: "tagName",
			type: "string",
			description: "HTML tag name.",
			defaultValue: "ol",
		},
		{
			name: "icon",
			type: "string",
			description: "Icon name for IconButton.",
			defaultValue: "fa-user",
		},
		{
			name: "iconLibrary",
			type: "string",
			description: `Icon library name.</br> <span class="code my-1">font-awesome</span> <span class="code my-1">bootstrap-icons</span> <span class="code my-1">icon-font</span> `,
			defaultValue: "font-awesome",
		},
		{
			name: "style",
			type: "string",
			description: "Any CSS className to style the list wrapper.",
			defaultValue: "-",
		},
		{
			name: "listStyle",
			type: "string",
			description: "Any CSS className to style the li element.",
			defaultValue: "-",
		},
		{
			name: "iconStyle",
			type: "string",
			description: "Any CSS className to style the icon.",
			defaultValue: "-",
		},
	];
	return (
		<Block tagName={"div"} style="scroll-smooth md:w[65%] lg:w-[73%]">
			<Block>
				<Text tagName={"h2"} style=" text-3xl mb-2 font-medium ">
					List
				</Text>
				<Text tagName={"p"} style="">
					The{" "}
					<Text tagName={"span"} style="code  ">
						List
					</Text>{" "}
					component enables user to present data in an organized and structured
					format.
				</Text>
				<Block style="my-10">
					<Text
						tagName={"h3"}
						id="default-list"
						style="text-2xl mt-6 mb-2 !font-medium group flex items-center ">
						Default List
						<Icon
							icon="fa-link"
							iconLibrary="font-awesome"
							isLink={true}
							linkTo="#default-list"
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
								<List style="list-decimal px-4" list={lists} />
							</Block>
						</TabPanel>
						<TabPanel value="2" style="rounded-lg !overflow-hidden ">
							<CodeSnippet
								lang="jsx"
								headerStyle="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
								bodyStyle=" !font-code max-h-[300px] !my-0 "
								content={defaultListContent}
							/>
						</TabPanel>
					</Tabs>
				</Block>
				<Block style="my-10">
					<Text
						tagName={"h3"}
						id="list-with-icon"
						style="text-2xl mt-6 mb-2 !font-medium group flex items-center ">
						List With Icon
						<Icon
							icon="fa-link"
							iconLibrary="font-awesome"
							isLink={true}
							linkTo="#list-with-icon"
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
								<List
									list={lists}
									icon="fa-diamond"
									iconLibrary="font-awesome"
									iconStyle="pr-3 text-sm"
								/>
							</Block>
						</TabPanel>
						<TabPanel value="2" style="rounded-lg !overflow-hidden ">
							<CodeSnippet
								lang="jsx"
								headerStyle="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
								bodyStyle=" !font-code max-h-[300px] !my-0 "
								content={listWithIconContent}
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
							<span className="code">List</span> component
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
													{/* {props.defaultValue} */}
													<span
														dangerouslySetInnerHTML={{
															__html: props.defaultValue,
														}}
													/>
												</TableCell>
												<TableCell variant={"1"} style="dark:text-gray-200">
													{/* {props.description} */}
													<span
														dangerouslySetInnerHTML={{
															__html: props.description,
														}}
													/>
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
						style="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 "
						isLink={true}
						linkTo="#default-list">
						Default List
					</Text>
					<Text
						style="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 "
						isLink={true}
						linkTo="#list-with-icon">
						List With Icon
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
	);
};

export default ListPage;
