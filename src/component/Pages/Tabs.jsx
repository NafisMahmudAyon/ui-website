import React from "react";
import { Block, Text, List, Tabs, TabsNav, Tab, TabPanel, Icon, CodeSnippet } from "landing-page-ui";

// import CodeSnippet from "../components/CodeSnippet";
import RightSideBar from "../Layout/RightSideBar";

const TabsPage = () => {
	const tabsContent = `
import { Tabs, TabsNav, Tab, TabPanel, Text } from "landing-page-ui"

const App = () => {
  return (
	<Tabs
		active="1"
		style="relative"
		navWrapStyle="flex items-end text-sm"
		panelWrapStyle="border border-gray-500 p-2 h-24 overflow-y-auto rounded-b-xl rounded-tr-xl">
		<TabsNav activeTabStyle="!font-semibold">
			<Tab
				value="1"
				style=" border border-gray-500 border-b-0 px-3 py-1 font-thin focus:outline-none rounded-tl-md ">
				Description
			</Tab>
			<Tab
				value="2"
				style=" border border-gray-500 border-b-0 px-3 py-1 font-thin focus:outline-none">
				Terms
			</Tab>
			<Tab
				value="3"
				style=" border border-gray-500 border-b-0 px-3 py-1 font-thin focus:outline-none rounded-tr-md">
				Contact
			</Tab>
		</TabsNav>
		<TabPanel value="1">
			<Text style="text-xs text-gray-500 line-clamp-3">
				This is the text for Tab1. Lorem ipsum dolor sit amet,
				consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Ut enim ad
				minim veniam, quis nostrud exercitation ullamco laboris
				nisi ut aliquip ex ea commodo consequat. Duis aute irure
				dolor in reprehenderit in voluptate velit esse cillum
				dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.
			</Text>
		</TabPanel>
		<TabPanel value="2">
			<Text style="text-xs text-gray-500 line-clamp-3">
				This is the text for Tab2. Lorem ipsum dolor sit amet,
				consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Ut enim ad
				minim veniam, quis nostrud exercitation ullamco laboris
				nisi ut aliquip ex ea commodo consequat. Duis aute irure
				dolor in reprehenderit in voluptate velit esse cillum
				dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.
			</Text>
		</TabPanel>
		<TabPanel value="3">
			<Text style="text-xs text-gray-500 line-clamp-3">
				This is the text for Tab3. Lorem ipsum dolor sit amet,
				consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Ut enim ad
				minim veniam, quis nostrud exercitation ullamco laboris
				nisi ut aliquip ex ea commodo consequat. Duis aute irure
				dolor in reprehenderit in voluptate velit esse cillum
				dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.
			</Text>
		</TabPanel>
	</Tabs>
	);
}

export default App;
	`;
	return (
		<Block tagName={"div"} style="scroll-smooth md:w[65%] lg:w-[73%]">
			<Block>
				<Text tagName={"h2"} style=" text-3xl mb-2 font-medium ">
					Tabs
				</Text>
				<Text tagName={"p"} style="">
					The{" "}
					<Text tagName={"span"} style="code  ">
						Tabs
					</Text>{" "}
					simplify content organization and navigation by presenting multiple
					sections or categories in a user-friendly interface.
				</Text>
				<Block style="my-10">
					<Text
						tagName={"h3"}
						id="image-avatar"
						style="text-2xl mt-6 mb-2 !font-medium group flex items-center ">
						Tabs Example
						<Icon
							icon="fa-link"
							iconLibrary="font-awesome"
							isLink={true}
							linkTo="#image-avatar"
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
								<Tabs
								active="1"
									style="relative"
									navWrapStyle="flex items-end text-sm"
									panelWrapStyle="border border-gray-500 p-2 h-24 overflow-y-auto rounded-b-xl rounded-tr-xl">
									<TabsNav activeTabStyle="!font-semibold">
										<Tab
											value="1"
											style=" border border-gray-500 border-b-0 px-3 py-1 font-thin focus:outline-none rounded-tl-md ">
											Description
										</Tab>
										<Tab
											value="2"
											style=" border border-gray-500 border-b-0 px-3 py-1 font-thin focus:outline-none">
											Terms
										</Tab>
										<Tab
											value="3"
											style=" border border-gray-500 border-b-0 px-3 py-1 font-thin focus:outline-none rounded-tr-md">
											Contact
										</Tab>
									</TabsNav>
									<TabPanel value="1">
										<Text style="text-xs text-gray-500 line-clamp-3">
											This is the text for Tab1. Lorem ipsum dolor sit amet,
											consectetur adipiscing elit, sed do eiusmod tempor
											incididunt ut labore et dolore magna aliqua. Ut enim ad
											minim veniam, quis nostrud exercitation ullamco laboris
											nisi ut aliquip ex ea commodo consequat. Duis aute irure
											dolor in reprehenderit in voluptate velit esse cillum
											dolore eu fugiat nulla pariatur. Excepteur sint occaecat
											cupidatat non proident, sunt in culpa qui officia deserunt
											mollit anim id est laborum.
										</Text>
									</TabPanel>
									<TabPanel value="2">
										<Text style="text-xs text-gray-500 line-clamp-3">
											This is the text for Tab2. Lorem ipsum dolor sit amet,
											consectetur adipiscing elit, sed do eiusmod tempor
											incididunt ut labore et dolore magna aliqua. Ut enim ad
											minim veniam, quis nostrud exercitation ullamco laboris
											nisi ut aliquip ex ea commodo consequat. Duis aute irure
											dolor in reprehenderit in voluptate velit esse cillum
											dolore eu fugiat nulla pariatur. Excepteur sint occaecat
											cupidatat non proident, sunt in culpa qui officia deserunt
											mollit anim id est laborum.
										</Text>
									</TabPanel>
									<TabPanel value="3">
										<Text style="text-xs text-gray-500 line-clamp-3">
											This is the text for Tab3. Lorem ipsum dolor sit amet,
											consectetur adipiscing elit, sed do eiusmod tempor
											incididunt ut labore et dolore magna aliqua. Ut enim ad
											minim veniam, quis nostrud exercitation ullamco laboris
											nisi ut aliquip ex ea commodo consequat. Duis aute irure
											dolor in reprehenderit in voluptate velit esse cillum
											dolore eu fugiat nulla pariatur. Excepteur sint occaecat
											cupidatat non proident, sunt in culpa qui officia deserunt
											mollit anim id est laborum.
										</Text>
									</TabPanel>
								</Tabs>
							</Block>
						</TabPanel>
						<TabPanel value="2" style="rounded-lg !overflow-hidden ">
							<CodeSnippet
								lang="jsx"
								headerStyle="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
								bodyStyle=" !font-code max-h-[300px] !my-0 "
								content={tabsContent}
							/>
						</TabPanel>
					</Tabs>
				</Block>
			</Block>
			<RightSideBar>
				<Text style="text-lg !font-bold pt-3 pl-3 pb-4 ">ON THIS PAGE</Text>
				<Block style="">
					<Text
						style="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 "
						isLink={true}
						linkTo="#image-avatar">
						Image Avatar
					</Text>
					<Text
						style="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 "
						isLink={true}
						linkTo="#name-avatar">
						Name Avatar
					</Text>
					<Text
						style="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 "
						isLink={true}
						linkTo="#group-avatar">
						Group Avatar
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

export default TabsPage;
