import React, { useState } from "react";
import {
	Block,
	Text,
	List,
	// Tabs,
	// TabsNav,
	// Tab,
	// TabsPanel,
	Icon,
	// CodeSnippet,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
} from "landing-page-ui";

import { Tabs, TabsNav, Tab, TabsPanel } from "../test/Test";
// import CodeSnippet from "../components/CodeSnippet";
import RightSideBar from "../Layout/RightSideBar";
import CodeSnippet from "../components/CodeSnippet";

const TabsPage = () => {
	const tabsContent = `
import { Tabs, TabsNav, Tab, TabsPanel, Text } from "landing-page-ui"

const App = () => {
  return (
	<Tabs
		active="1"
		styles="relative"
		navWrapStyles="flex items-end text-sm"
		panelWrapStyles="border border-gray-500 p-2 h-24 overflow-y-auto rounded-b-xl rounded-tr-xl">
		<TabsNav activeTabStyles="!font-semibold">
			<Tab
				value="1"
				styles=" border border-gray-500 border-b-0 px-3 py-1 font-thin focus:outline-none rounded-tl-md ">
				Description
			</Tab>
			<Tab
				value="2"
				styles=" border border-gray-500 border-b-0 px-3 py-1 font-thin focus:outline-none">
				Terms
			</Tab>
			<Tab
				value="3"
				styles=" border border-gray-500 border-b-0 px-3 py-1 font-thin focus:outline-none rounded-tr-md">
				Contact
			</Tab>
		</TabsNav>
		<TabsPanel value="1">
			<Text styles="text-xs text-gray-500 line-clamp-3">
				This is the text for Tab3. Lorem ipsum dolor sit amet,	consectetur adipiscing elit, sed do eiusmod tempor	incididunt ut labore et dolore magna aliqua. Ut enim ad	minim veniam, quis nostrud exercitation ullamco laboris	nisi ut aliquip ex ea commodo consequat. Duis aute irure	dolor in reprehenderit in voluptate velit esse cillum	dolore eu fugiat nulla pariatur. Excepteur sint occaecat	cupidatat non proident, sunt in culpa qui officia deserunt	mollit anim id est laborum.
			</Text>
		</TabsPanel>
		<TabsPanel value="2">
			<Text styles="text-xs text-gray-500 line-clamp-3">
				This is the text for Tab3. Lorem ipsum dolor sit amet,	consectetur adipiscing elit, sed do eiusmod tempor	incididunt ut labore et dolore magna aliqua. Ut enim ad	minim veniam, quis nostrud exercitation ullamco laboris	nisi ut aliquip ex ea commodo consequat. Duis aute irure	dolor in reprehenderit in voluptate velit esse cillum	dolore eu fugiat nulla pariatur. Excepteur sint occaecat	cupidatat non proident, sunt in culpa qui officia deserunt	mollit anim id est laborum.
			</Text>
		</TabsPanel>
		<TabsPanel value="3">
			<Text styles="text-xs text-gray-500 line-clamp-3">
				This is the text for Tab3. Lorem ipsum dolor sit amet,	consectetur adipiscing elit, sed do eiusmod tempor	incididunt ut labore et dolore magna aliqua. Ut enim ad	minim veniam, quis nostrud exercitation ullamco laboris	nisi ut aliquip ex ea commodo consequat. Duis aute irure	dolor in reprehenderit in voluptate velit esse cillum	dolore eu fugiat nulla pariatur. Excepteur sint occaecat	cupidatat non proident, sunt in culpa qui officia deserunt	mollit anim id est laborum.
			</Text>
		</TabsPanel>
	</Tabs>
	);
}

export default App;
	`;

	const tabsOrientationVerticleContent = `
import { Tabs, TabsNav, Tab, TabsPanel, Text } from "landing-page-ui"

const App = () => {
  return (
	<Tabs
		active="1"
		orientation={orientations}
		navWrapStyles="text-sm w-1/4"
		panelWrapStyles="px-4 py-2 bg-gray-100 text-gray-800 shadow-md rounded-r-md w-3/4"
		styles="w-full rounded-l-md overflow-hidden">
		<TabsNav
			showButton={false}
			styles="bg-gray-300 flex gap-2 h-full justify-center items-center text-gray-800 p-1"
			activeTabStyles="bg-white rounded-sm shadow-md">
			<Tab value="1" styles="px-4 py-1">
				Tab 1
			</Tab>
			<Tab value="2" styles="px-4 py-1">
				Tab 2
			</Tab>
			<Tab value="3" styles="px-4 py-1">
				Tab 3
			</Tab>
			<Tab value="4" styles="px-4 py-1">
				Tab 4
			</Tab>
		</TabsNav>
		<TabsPanel value="1" styles="">
			<Text styles="text-lg">Tab 1</Text>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit.	Corrupti, consequuntur, illo animi aliquid itaque culpa	recusandae optio porro nobis dolores laudantium dolore perferendis esse eius modi voluptates non quibusdam eos.
		</TabsPanel>
		<TabsPanel value="2" styles="">
			<Text styles="text-lg">Tab 2</Text>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit.	Corrupti, consequuntur, illo animi aliquid itaque culpa	recusandae optio porro nobis dolores laudantium dolore perferendis esse eius modi voluptates non quibusdam eos.
		</TabsPanel>
		<TabsPanel value="3" styles="">
			<Text styles="text-lg">Tab 3</Text>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit.	Corrupti, consequuntur, illo animi aliquid itaque culpa	recusandae optio porro nobis dolores laudantium dolore perferendis esse eius modi voluptates non quibusdam eos.
		</TabsPanel>
		<TabsPanel value="4" styles="">
			<Text styles="text-lg">Tab 4</Text>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit.	Corrupti, consequuntur, illo animi aliquid itaque culpa	recusandae optio porro nobis dolores laudantium dolore perferendis esse eius modi voluptates non quibusdam eos.
		</TabsPanel>
	</Tabs>
	);
}

export default App;
	`;
	const tabsOrientationHorizontalContent = `
import { Tabs, TabsNav, Tab, TabsPanel, Text } from "landing-page-ui"

const App = () => {
  return (
	<Tabs
		active="1"
		orientation="horizontal"
		navWrapStyles="text-sm"
		panelWrapStyles="px-4 py-2 bg-gray-100 text-gray-800 mt-2 shadow-md rounded-md  "
		styles="w-full">
		<TabsNav
			showButton={false}
			styles="bg-gray-300 flex justify-between text-gray-800 py-1 px-1"
			activeTabStyles="bg-white rounded-sm shadow-md">
			<Tab value="1" styles="px-4 py-1">
				Tab 1
			</Tab>
			<Tab value="2" styles="px-4 py-1">
				Tab 2
			</Tab>
			<Tab value="3" styles="px-4 py-1">
				Tab 3
			</Tab>
			<Tab value="4" styles="px-4 py-1">
				Tab 4
			</Tab>
		</TabsNav>
		<TabsPanel value="1" styles="">
			<Text styles="text-lg">Tab 1</Text>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit.	Corrupti, consequuntur, illo animi aliquid itaque culpa	recusandae optio porro nobis dolores laudantium dolore perferendis esse eius modi voluptates non quibusdam eos.
		</TabsPanel>
		<TabsPanel value="2" styles="">
			<Text styles="text-lg">Tab 2</Text>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit.	Corrupti, consequuntur, illo animi aliquid itaque culpa	recusandae optio porro nobis dolores laudantium dolore perferendis esse eius modi voluptates non quibusdam eos.
		</TabsPanel>
		<TabsPanel value="3" styles="">
			<Text styles="text-lg">Tab 3</Text>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit.	Corrupti, consequuntur, illo animi aliquid itaque culpa	recusandae optio porro nobis dolores laudantium dolore perferendis esse eius modi voluptates non quibusdam eos.
		</TabsPanel>
		<TabsPanel value="4" styles="">
			<Text styles="text-lg">Tab 4</Text>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit.	Corrupti, consequuntur, illo animi aliquid itaque culpa	recusandae optio porro nobis dolores laudantium dolore perferendis esse eius modi voluptates non quibusdam eos.
		</TabsPanel>
	</Tabs>
	);
}

export default App;
	`;
	const tabsWithNavButton = `
import { Tabs, TabsNav, Tab, TabsPanel, Text } from "landing-page-ui"

const App = () => {
  return (
	<Tabs
		active="1"
		orientation="horizontal"
		navWrapStyles="text-sm"
		panelWrapStyles="px-4 py-2 bg-gray-100 text-gray-800 mt-2 shadow-md rounded-md  "
		styles="w-full">
		<TabsNav
			showButton={true}
			buttonTextEnabled={true}
			styles="bg-gray-300 flex justify-between text-gray-800 py-1 px-1"
			activeTabStyles="bg-white rounded-sm shadow-md"
			nextButtonText="Next"
			prevButtonText="Prev"
			iconStyles=""
			buttonStyles="px-2 flex gap-2 items-center rounded-sm bg-slate-500 text-white "
			disabledStyles="bg-slate-500/50 text-white/50">
			<Tab value="1" styles="px-4 py-1">
				Tab 1
			</Tab>
			<Tab value="2" styles="px-4 py-1">
				Tab 2
			</Tab>
			<Tab value="3" styles="px-4 py-1">
				Tab 3
			</Tab>
			<Tab value="4" styles="px-4 py-1">
				Tab 4
			</Tab>
		</TabsNav>
		<TabsPanel value="1" styles="">
			<Text styles="text-lg">Tab 1</Text>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit.
			Corrupti, consequuntur, illo animi aliquid itaque culpa
			recusandae optio porro nobis dolores laudantium dolore
			perferendis esse eius modi voluptates non quibusdam eos.
		</TabsPanel>
		<TabsPanel value="2" styles="">
			<Text styles="text-lg">Tab 2</Text>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit.
			Corrupti, consequuntur, illo animi aliquid itaque culpa
			recusandae optio porro nobis dolores laudantium dolore
			perferendis esse eius modi voluptates non quibusdam eos.
		</TabsPanel>
		<TabsPanel value="3" styles="">
			<Text styles="text-lg">Tab 3</Text>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit.
			Corrupti, consequuntur, illo animi aliquid itaque culpa
			recusandae optio porro nobis dolores laudantium dolore
			perferendis esse eius modi voluptates non quibusdam eos.
		</TabsPanel>
		<TabsPanel value="4" styles="">
			<Text styles="text-lg">Tab 4</Text>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit.
			Corrupti, consequuntur, illo animi aliquid itaque culpa
			recusandae optio porro nobis dolores laudantium dolore
			perferendis esse eius modi voluptates non quibusdam eos.
		</TabsPanel>
	</Tabs>
	);
}

export default App;
	`;
	const tabsProps = [
		{
			name: "active",
			type: "boolean",
			description: "Active state of the accordion.",
			defaultValue: "false",
		},
		{
			name: "orientation",
			type: "string",
			description: `Orientation of the tabs.</br> <span class="code my-1">horizontal</span> <span class="code my-1">vertical</span> `,
			defaultValue: `<span class="code my-1">horizontal</span>`,
		},
		{
			name: "children",
			type: "node",
			description: "Child components and content to be placed within it.",
			defaultValue: "-",
		},
		{
			name: "style",
			type: "string",
			description: "Any CSS className to style the Tabs.",
			defaultValue: "-",
		},
		{
			name: "navWrapStyle",
			type: "string",
			description: "Any CSS className to style the TabsNav.",
			defaultValue: "-",
		},
		{
			name: "panelWrapStyle",
			type: "string",
			description: "Any CSS className to style the TabsNav.",
			defaultValue: "-",
		},
	];
	const tabsNavProps = [
		{
			name: "showButton",
			type: "boolean",
			description: "showButton to show the navigation button.",
			defaultValue: "false",
		},
		{
			name: "prevIcon",
			type: "string",
			description: "Icon name for the previous navigation button.",
			defaultValue: "fa-caret-left",
		},
		{
			name: "nextIcon",
			type: "string",
			description: "Icon name for the next navigation button.",
			defaultValue: "fa-caret-right",
		},
		{
			name: "iconLibrary",
			type: "string",
			description: `Icon library name.</br> <span class="code my-1">font-awesome</span> <span class="code my-1">bootstrap-icons</span> <span class="code my-1">icon-font</span> `,
			defaultValue: "font-awesome",
		},
		{
			name: "prevIconPosition",
			type: "string",
			description: `Previous button icon position value.</br> <span class="code my-1">right</span> <span class="code my-1">left</span> `,
			defaultValue: `<span class="code my-1">left</span>`,
		},
		{
			name: "nextIconPosition",
			type: "string",
			description: `Next button icon position value.</br> <span class="code my-1">right</span> <span class="code my-1">left</span> `,
			defaultValue: `<span class="code my-1">right</span>`,
		},
		{
			name: "prevButtonText",
			type: "string",
			description: "Text for the previous button",
			defaultValue: "-",
		},
		{
			name: "nextButtonText",
			type: "string",
			description: "Text for the next button",
			defaultValue: "-",
		},
		{
			name: "iconStyle",
			type: "string",
			description: "Any CSS className to style the icon style.",
			defaultValue: "-",
		},
		{
			name: "buttonStyle",
			type: "string",
			description: "Any CSS className to style the navigation button.",
			defaultValue: "-",
		},
		{
			name: "prevButtonStyle",
			type: "string",
			description: "Any CSS className to style the previous navigation button.",
			defaultValue: "-",
		},
		{
			name: "nextButtonStyle",
			type: "string",
			description: "Any CSS className to style the next navigation button.",
			defaultValue: "-",
		},
		{
			name: "disabledStyle",
			type: "string",
			description: "Any CSS className to style the disabled navigation button.",
			defaultValue: "-",
		},
		{
			name: "tabAreaStyle",
			type: "string",
			description: "Any CSS className to style the Tab area.",
			defaultValue: "-",
		},
		{
			name: "activeTabStyle",
			type: "string",
			description: "Any CSS className to style the active Tab.",
			defaultValue: "-",
		},
		{
			name: "style",
			type: "string",
			description: "Any CSS className to style the TabsNav.",
			defaultValue: "-",
		},
		{
			name: "children",
			type: "node",
			description: "Child components and content to be placed within it.",
			defaultValue: "-",
		},
	];
	const tabProps = [
		{
			name: "value",
			type: "number",
			description: "Value for the tab.",
			defaultValue: "-",
		},
		{
			name: "activeTabStyle",
			type: "string",
			description: "Any CSS className to style the active Tab.",
			defaultValue: "-",
		},
		{
			name: "style",
			type: "string",
			description: "Any CSS className to style the TabsNav.",
			defaultValue: "-",
		},
		{
			name: "children",
			type: "node",
			description: "Child components and content to be placed within it.",
			defaultValue: "-",
		},
	];
	const TabsPanelProps = [
		{
			name: "value",
			type: "number",
			description: "Value for the TabsPanel.",
			defaultValue: "-",
		},
		{
			name: "style",
			type: "string",
			description: "Any CSS className to style the TabsPanel.",
			defaultValue: "-",
		},
		{
			name: "children",
			type: "node",
			description: "Child components and content to be placed within it.",
			defaultValue: "-",
		},
	];
	const [tabsOrientationContent, setTabsOrientationContent] = useState(
		tabsOrientationVerticleContent
	);
	const [orientations, setOrientations] = useState("vertical");
	return (
		<Block tagName={"div"} styles="scroll-smooth md:w-[65%] lg:w-[73%]">
			<Block>
				<Text tagName={"h2"} styles=" text-3xl mb-2 font-medium ">
					Tabs
				</Text>
				<Text tagName={"p"} styles="">
					The{" "}
					<Text tagName={"span"} styles="code  ">
						Tabs
					</Text>{" "}
					simplify content organization and navigation by presenting multiple
					sections or categories in a user-friendly interface.
				</Text>
				<Block styles="my-10">
					<Text
						tagName={"h3"}
						id="image-avatar"
						styles="text-2xl mt-6 mb-2 !font-medium group flex items-center ">
						Tabs Example
						<Icon
							icon="fa-link"
							iconLibrary="font-awesome"
							isLink={true}
							linkTo="#image-avatar"
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
							showButton="false"
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
								<Tabs
									active="1"
									styles="relative"
									navWrapStyles="flex items-end text-sm"
									panelWrapStyles="border border-gray-500 p-2 h-24 overflow-y-auto rounded-b-xl rounded-tr-xl">
									<TabsNav activeTabStyles="!font-semibold">
										<Tab
											value="1"
											styles=" border border-gray-500 border-b-0 px-3 py-1 font-light focus:outline-none rounded-tl-md ">
											Description
										</Tab>
										<Tab
											value="2"
											styles=" border border-gray-500 border-b-0 px-3 py-1 font-light focus:outline-none">
											Terms
										</Tab>
										<Tab
											value="3"
											styles=" border border-gray-500 border-b-0 px-3 py-1 font-light focus:outline-none rounded-tr-md">
											Contact
										</Tab>
									</TabsNav>
									<TabsPanel value="1">
										<Text styles="text-xs text-gray-500 line-clamp-3">
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
									</TabsPanel>
									<TabsPanel value="2">
										<Text styles="text-xs text-gray-500 line-clamp-3">
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
									</TabsPanel>
									<TabsPanel value="3">
										<Text styles="text-xs text-gray-500 line-clamp-3">
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
									</TabsPanel>
								</Tabs>
							</Block>
						</TabsPanel>
						<TabsPanel value="2" styles="rounded-lg !overflow-hidden ">
							<CodeSnippet
								lang="jsx"
								headerStyles="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
								bodyStyles=" !font-code max-h-[300px] !my-0 "
								content={tabsContent}
							/>
						</TabsPanel>
					</Tabs>
				</Block>
				<Block styles="my-10">
					<Text
						tagName={"h3"}
						id="image-avatar"
						styles="text-2xl mt-6 mb-2 !font-medium group flex items-center ">
						Tabs With Orientation
						<Icon
							icon="fa-link"
							iconLibrary="font-awesome"
							isLink={true}
							linkTo="#image-avatar"
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
							showButton="false"
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
							<Block styles="flex flex-col gap-4 my-4">
								<Block styles="flex gap-4 items-center justify-center">
									<Block>
										<input
											type="radio"
											value="vertical"
											name="orientation"
											checked={orientations === "vertical"}
											onClick={() => {
												setTabsOrientationContent(
													tabsOrientationVerticleContent
												);
												setOrientations("vertical");
											}}
										/>
										  <label for="">Vertical</label>
									</Block>
									<Block>
										<input
											type="radio"
											value="horizontal"
											name="orientation"
											checked={orientations === "horizontal"}
											onClick={() => {
												setTabsOrientationContent(
													tabsOrientationHorizontalContent
												);
												setOrientations("horizontal");
											}}
										/>
										  <label for="">Horizontal</label>
									</Block>
								</Block>
								{orientations === "vertical" && (
									<Tabs
										active="1"
										orientation={orientations}
										navWrapStyles="text-sm w-1/4"
										panelWrapStyles="px-4 py-2 bg-gray-100 text-gray-800 shadow-md rounded-r-md w-3/4"
										styles="w-full rounded-l-md overflow-hidden">
										<TabsNav
											showButton={false}
											styles="bg-gray-300 flex gap-2 h-full justify-center items-center text-gray-800 p-1"
											activeTabStyles="bg-white rounded-sm shadow-md">
											<Tab value="1" styles="px-4 py-1">
												Tab 1
											</Tab>
											<Tab value="2" styles="px-4 py-1">
												Tab 2
											</Tab>
											<Tab value="3" styles="px-4 py-1">
												Tab 3
											</Tab>
											<Tab value="4" styles="px-4 py-1">
												Tab 4
											</Tab>
										</TabsNav>
										<TabsPanel value="1" styles="">
											<Text styles="text-lg">Tab 1</Text>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Corrupti, consequuntur, illo animi aliquid itaque culpa
											recusandae optio porro nobis dolores laudantium dolore
											perferendis esse eius modi voluptates non quibusdam eos.
										</TabsPanel>
										<TabsPanel value="2" styles="">
											<Text styles="text-lg">Tab 2</Text>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Corrupti, consequuntur, illo animi aliquid itaque culpa
											recusandae optio porro nobis dolores laudantium dolore
											perferendis esse eius modi voluptates non quibusdam eos.
										</TabsPanel>
										<TabsPanel value="3" styles="">
											<Text styles="text-lg">Tab 3</Text>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Corrupti, consequuntur, illo animi aliquid itaque culpa
											recusandae optio porro nobis dolores laudantium dolore
											perferendis esse eius modi voluptates non quibusdam eos.
										</TabsPanel>
										<TabsPanel value="4" styles="">
											<Text styles="text-lg">Tab 4</Text>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Corrupti, consequuntur, illo animi aliquid itaque culpa
											recusandae optio porro nobis dolores laudantium dolore
											perferendis esse eius modi voluptates non quibusdam eos.
										</TabsPanel>
									</Tabs>
								)}
								{orientations === "horizontal" && (
									<Tabs
										active="1"
										orientation="horizontal"
										navWrapStyles="text-sm"
										panelWrapStyles="px-4 py-2 bg-gray-100 text-gray-800 mt-2 shadow-md rounded-md  "
										styles="w-full">
										<TabsNav
											showButton={false}
											styles="bg-gray-300 flex justify-between text-gray-800 py-1 px-1"
											activeTabStyles="bg-white rounded-sm shadow-md">
											<Tab value="1" styles="px-4 py-1">
												Tab 1
											</Tab>
											<Tab value="2" styles="px-4 py-1">
												Tab 2
											</Tab>
											<Tab value="3" styles="px-4 py-1">
												Tab 3
											</Tab>
											<Tab value="4" styles="px-4 py-1">
												Tab 4
											</Tab>
										</TabsNav>
										<TabsPanel value="1" styles="">
											<Text styles="text-lg">Tab 1</Text>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Corrupti, consequuntur, illo animi aliquid itaque culpa
											recusandae optio porro nobis dolores laudantium dolore
											perferendis esse eius modi voluptates non quibusdam eos.
										</TabsPanel>
										<TabsPanel value="2" styles="">
											<Text styles="text-lg">Tab 2</Text>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Corrupti, consequuntur, illo animi aliquid itaque culpa
											recusandae optio porro nobis dolores laudantium dolore
											perferendis esse eius modi voluptates non quibusdam eos.
										</TabsPanel>
										<TabsPanel value="3" styles="">
											<Text styles="text-lg">Tab 3</Text>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Corrupti, consequuntur, illo animi aliquid itaque culpa
											recusandae optio porro nobis dolores laudantium dolore
											perferendis esse eius modi voluptates non quibusdam eos.
										</TabsPanel>
										<TabsPanel value="4" styles="">
											<Text styles="text-lg">Tab 4</Text>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Corrupti, consequuntur, illo animi aliquid itaque culpa
											recusandae optio porro nobis dolores laudantium dolore
											perferendis esse eius modi voluptates non quibusdam eos.
										</TabsPanel>
									</Tabs>
								)}
							</Block>
						</TabsPanel>
						<TabsPanel value="2" styles="rounded-lg !overflow-hidden ">
							<CodeSnippet
								lang="jsx"
								headerStyles="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
								bodyStyles=" !font-code max-h-[300px] !my-0 "
								content={tabsOrientationContent}
							/>
						</TabsPanel>
					</Tabs>
				</Block>
				<Block styles="my-10">
					<Text
						tagName={"h3"}
						id="group-avatar"
						styles="text-2xl mt-6 mb-2 !font-medium group flex items-center ">
						Tabs With Navigation button
						<Icon
							icon="fa-link"
							iconLibrary="font-awesome"
							isLink={true}
							linkTo="#group-avatar"
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
							showButton="false"
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
							<Tabs
								active="1"
								orientation="horizontal"
								navWrapStyles="text-sm"
								panelWrapStyles="px-4 py-2 bg-gray-100 text-gray-800 mt-2 shadow-md rounded-md  "
								styles="w-full">
								<TabsNav
									showButton={true}
									buttonTextEnabled={true}
									styles="bg-gray-300 flex justify-between text-gray-800 py-1 px-1"
									activeTabStyles="bg-white rounded-sm shadow-md"
									nextButtonText="Next"
									prevButtonText="Prev"
									iconStyles=""
									buttonStyles="px-2 flex gap-2 items-center rounded-sm bg-slate-500 text-white "
									disabledStyles="bg-slate-500/50 text-white/50">
									<Tab value="1" styles="px-4 py-1">
										Tab 1
									</Tab>
									<Tab value="2" styles="px-4 py-1">
										Tab 2
									</Tab>
									<Tab value="3" styles="px-4 py-1">
										Tab 3
									</Tab>
									<Tab value="4" styles="px-4 py-1">
										Tab 4
									</Tab>
								</TabsNav>
								<TabsPanel value="1" styles="">
									<Text styles="text-lg">Tab 1</Text>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Corrupti, consequuntur, illo animi aliquid itaque culpa
									recusandae optio porro nobis dolores laudantium dolore
									perferendis esse eius modi voluptates non quibusdam eos.
								</TabsPanel>
								<TabsPanel value="2" styles="">
									<Text styles="text-lg">Tab 2</Text>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Corrupti, consequuntur, illo animi aliquid itaque culpa
									recusandae optio porro nobis dolores laudantium dolore
									perferendis esse eius modi voluptates non quibusdam eos.
								</TabsPanel>
								<TabsPanel value="3" styles="">
									<Text styles="text-lg">Tab 3</Text>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Corrupti, consequuntur, illo animi aliquid itaque culpa
									recusandae optio porro nobis dolores laudantium dolore
									perferendis esse eius modi voluptates non quibusdam eos.
								</TabsPanel>
								<TabsPanel value="4" styles="">
									<Text styles="text-lg">Tab 4</Text>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Corrupti, consequuntur, illo animi aliquid itaque culpa
									recusandae optio porro nobis dolores laudantium dolore
									perferendis esse eius modi voluptates non quibusdam eos.
								</TabsPanel>
							</Tabs>
						</TabsPanel>
						<TabsPanel value="2" styles="rounded-lg !overflow-hidden ">
							<CodeSnippet
								lang="jsx"
								headerStyles="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
								bodyStyles=" !font-code max-h-[300px] !my-0 "
								content={tabsWithNavButton}
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
							<span className="code">Tabs</span> component
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
									{tabsProps.map((props, index) => {
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
													{/* {props.defaultValue} */}
													<span
														dangerouslySetInnerHTML={{
															__html: props.defaultValue,
														}}
													/>
												</TableCell>
												<TableCell variant={"1"} styles="dark:text-gray-200">
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
					<Block styles="my-6">
						<Text tagName="p" styles="mb-5">
							Explore the available props for the{" "}
							<span className="code">TabsNav</span> component
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
									{tabsNavProps.map((props, index) => {
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
													{/* {props.defaultValue} */}
													<span
														dangerouslySetInnerHTML={{
															__html: props.defaultValue,
														}}
													/>
												</TableCell>
												<TableCell variant={"1"} styles="dark:text-gray-200">
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
					<Block styles="my-6">
						<Text tagName="p" styles="mb-5">
							Explore the available props for the{" "}
							<span className="code">Tab</span> component
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
									{tabProps.map((props, index) => {
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
													{/* {props.defaultValue} */}
													<span
														dangerouslySetInnerHTML={{
															__html: props.defaultValue,
														}}
													/>
												</TableCell>
												<TableCell variant={"1"} styles="dark:text-gray-200">
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
					<Block styles="my-6">
						<Text tagName="p" styles="mb-5">
							Explore the available props for the{" "}
							<span className="code">TabsPanel</span> component
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
									{TabsPanelProps.map((props, index) => {
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
													{/* {props.defaultValue} */}
													<span
														dangerouslySetInnerHTML={{
															__html: props.defaultValue,
														}}
													/>
												</TableCell>
												<TableCell variant={"1"} styles="dark:text-gray-200">
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
				<Text styles="text-lg !font-bold pt-3 pl-3 pb-4 ">ON THIS PAGE</Text>
				<Block styles="">
					<Text
						styles="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 "
						isLink={true}
						linkTo="#image-avatar">
						Image Avatar
					</Text>
					<Text
						styles="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 "
						isLink={true}
						linkTo="#name-avatar">
						Name Avatar
					</Text>
					<Text
						styles="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 "
						isLink={true}
						linkTo="#group-avatar">
						Group Avatar
					</Text>
					<Text
						styles="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 "
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
