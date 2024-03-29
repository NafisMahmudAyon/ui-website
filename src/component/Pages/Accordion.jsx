import {
	Block,
	Icon,
	List,
	Text,
	Code,
	CodeBody,
	CodeHeader,
	IconButton,
	Accordion,
	AccordionHeader,
	AccordionDetails,
	Tabs,
	TabsNav,
	Tab,
	TabPanel,
	CodeSnippet,
} from "landing-page-ui";
import React, { useState } from "react";
// import CodeSnippet from "../components/CodeSnippet";
import RightSideBar from "../Layout/RightSideBar";
// import { Accordion, AccordionHeader, AccordionDetails } from "../test/Test";

const AccordionPage = () => {
	const defaultAccordionContent = `
import { Accordion, AccordionHeader, AccordionDetails, Text, Block } from "landing-page-ui"

const App = () => {
	return (
		<Block tagName="div">
			<Accordion active={true} variant="1">
				<AccordionHeader>
					<Text
						tagName="h3"
						style=" text-xl font-medium !text-gray-200 ">
						Accordion 1
					</Text>
				</AccordionHeader>
				<AccordionDetails>
					<Text style=" ">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.	Minima deserunt sapiente nostrum iure excepturi vel debitis,	quae quibusdam officiis. Atque nesciunt pariatur praesentium	optio, at vel harum aliquam illo labore?
					</Text>
				</AccordionDetails>
			</Accordion>
			<Accordion variant="1">
				<AccordionHeader>
					<Text
						tagName="h3"
						style=" text-xl font-medium !text-gray-200 ">
						Accordion 2
					</Text>
				</AccordionHeader>
				<AccordionDetails>
					<Text style="">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.	Minima deserunt sapiente nostrum iure excepturi vel debitis,	quae quibusdam officiis. Atque nesciunt pariatur praesentium	optio, at vel harum aliquam illo labore?
					</Text>
				</AccordionDetails>
			</Accordion>
			<Accordion variant="1">
				<AccordionHeader>
					<Text
						tagName="h3"
						style=" text-xl font-medium !text-gray-200 ">
						Accordion 3
					</Text>
				</AccordionHeader>
				<AccordionDetails>
					<Text style="">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.	Minima deserunt sapiente nostrum iure excepturi vel debitis,	quae quibusdam officiis. Atque nesciunt pariatur praesentium	optio, at vel harum aliquam illo labore?
					</Text>
				</AccordionDetails>
			</Accordion>
		</Block>
	);
}

export default App;
	`;
	const accordionWithIconContent = `
import { Accordion, AccordionHeader, AccordionDetails, Text, Block } from "landing-page-ui"

const App = () => {
	return (
		<Block tagName="div">
			<Accordion active={true} variant="1">
				<AccordionHeader
					icon="fa-caret-down"
					iconLibrary="font-awesome"
					iconPosition="before">
					<Text
						tagName="h3"
						style=" text-xl font-medium !text-gray-200 ">
						Accordion 1
					</Text>
				</AccordionHeader>
				<AccordionDetails>
					<Text style=" ">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.	Minima deserunt sapiente nostrum iure excepturi vel debitis,	quae quibusdam officiis. Atque nesciunt pariatur praesentium	optio, at vel harum aliquam illo labore?
					</Text>
				</AccordionDetails>
			</Accordion>
			<Accordion variant="1">
				<AccordionHeader
					icon="fa-caret-down"
					iconLibrary="font-awesome"
					iconPosition="before">
					<Text
						tagName="h3"
						style=" text-xl font-medium !text-gray-200 ">
						Accordion 2
					</Text>
				</AccordionHeader>
				<AccordionDetails>
					<Text style="">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.	Minima deserunt sapiente nostrum iure excepturi vel debitis,	quae quibusdam officiis. Atque nesciunt pariatur praesentium	optio, at vel harum aliquam illo labore?
					</Text>
				</AccordionDetails>
			</Accordion>
			<Accordion variant="1">
				<AccordionHeader
					icon="fa-caret-down"
					iconLibrary="font-awesome"
					iconPosition="before">
					<Text
						tagName="h3"
						style=" text-xl font-medium !text-gray-200 ">
						Accordion 3
					</Text>
				</AccordionHeader>
				<AccordionDetails>
					<Text style="">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.	Minima deserunt sapiente nostrum iure excepturi vel debitis,	quae quibusdam officiis. Atque nesciunt pariatur praesentium	optio, at vel harum aliquam illo labore?
					</Text>
				</AccordionDetails>
			</Accordion>
		</Block>
	);
}

export default App;
	`;
	const accordionWithToggleIconContent = `
import { Accordion, AccordionHeader, AccordionDetails, Text, Block } from "landing-page-ui"

const App = () => {
	return (
		<Block tagName="div">
			<Accordion active={true} variant="1">
				<AccordionHeader
					icon="fa-caret-right"
					iconLibrary="font-awesome"
					iconPosition="before"
					toggleIcon="fa-caret-down">
					<Text
						tagName="h3"
						style=" text-xl font-medium !text-gray-200 ">
						Accordion 1
					</Text>
				</AccordionHeader>
				<AccordionDetails>
					<Text style=" ">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.	Minima deserunt sapiente nostrum iure excepturi vel debitis,	quae quibusdam officiis. Atque nesciunt pariatur praesentium	optio, at vel harum aliquam illo labore?
					</Text>
				</AccordionDetails>
			</Accordion>
			<Accordion variant="1">
				<AccordionHeader
					icon="fa-caret-right"
					iconLibrary="font-awesome"
					iconPosition="before"
					toggleIcon="fa-caret-down">
					<Text
						tagName="h3"
						style=" text-xl font-medium !text-gray-200 ">
						Accordion 2
					</Text>
				</AccordionHeader>
				<AccordionDetails>
					<Text style="">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.	Minima deserunt sapiente nostrum iure excepturi vel debitis,	quae quibusdam officiis. Atque nesciunt pariatur praesentium	optio, at vel harum aliquam illo labore?
					</Text>
				</AccordionDetails>
			</Accordion>
			<Accordion variant="1">
				<AccordionHeader
					icon="fa-caret-right"
					iconLibrary="font-awesome"
					iconPosition="before"
					toggleIcon="fa-caret-down">
					<Text
						tagName="h3"
						style=" text-xl font-medium !text-gray-200 ">
						Accordion 3
					</Text>
				</AccordionHeader>
				<AccordionDetails>
					<Text style="">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.	Minima deserunt sapiente nostrum iure excepturi vel debitis,	quae quibusdam officiis. Atque nesciunt pariatur praesentium	optio, at vel harum aliquam illo labore?
					</Text>
				</AccordionDetails>
			</Accordion>
		</Block>
	);
}

export default App;
	`;
	const accordionWithVariationContent = `
import { Accordion, AccordionHeader, AccordionDetails, Text, Block } from "landing-page-ui"

const App = () => {
	return (
		<Block tagName="div">
			<Accordion active={true} variant="1">
				<AccordionHeader
					icon="fa-caret-right"
					iconLibrary="font-awesome"
					iconPosition="before"
					toggleIcon="fa-caret-down">
					<Text
						tagName="h3"
						style=" text-xl font-medium !text-gray-200 ">
						Accordion 1
					</Text>
				</AccordionHeader>
				<AccordionDetails>
					<Text style=" ">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.	Minima deserunt sapiente nostrum iure excepturi vel debitis,	quae quibusdam officiis. Atque nesciunt pariatur praesentium	optio, at vel harum aliquam illo labore?
					</Text>
				</AccordionDetails>
			</Accordion>
			<Accordion variant="2">
				<AccordionHeader
					icon="fa-caret-right"
					iconLibrary="font-awesome"
					iconPosition="before"
					toggleIcon="fa-caret-down">
					<Text tagName="h3" style="  ">
						Accordion 2
					</Text>
				</AccordionHeader>
				<AccordionDetails>
					<Text style="">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.	Minima deserunt sapiente nostrum iure excepturi vel debitis,	quae quibusdam officiis. Atque nesciunt pariatur praesentium	optio, at vel harum aliquam illo labore?
					</Text>
				</AccordionDetails>
			</Accordion>
			<Accordion variant="3">
				<AccordionHeader
					icon="fa-caret-right"
					iconLibrary="font-awesome"
					iconPosition="before"
					toggleIcon="fa-caret-down">
					<Text tagName="h3" style="  ">
						Accordion 3
					</Text>
				</AccordionHeader>
				<AccordionDetails>
					<Text style="">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.	Minima deserunt sapiente nostrum iure excepturi vel debitis,	quae quibusdam officiis. Atque nesciunt pariatur praesentium	optio, at vel harum aliquam illo labore?
					</Text>
				</AccordionDetails>
			</Accordion>
		</Block>
	);
}

export default App;
	`;
	return (
		<Block tagName={"div"} style="scroll-smooth md:w[65%] lg:w-[73%]">
			<Block>
				<Text tagName={"h2"} style=" text-3xl mb-2 font-medium ">
					Accordion
				</Text>
				<Text tagName={"p"} style="">
					The{" "}
					<Text
						tagName={"span"}
						style="font-thin font-code px-2 py-1 bg-gray-200 rounded-md dark:bg-gray-800 ">
						Accordion
					</Text>{" "}
					component lets users create a collapsible sections of related content
					on a page.
				</Text>
				<Block style="my-10">
					<Text
						tagName={"h3"}
						id="introduction"
						style="text-2xl mt-6 !font-medium group flex items-center ">
						Introduction
						<Icon
							icon="fa-link"
							iconLibrary="font-awesome"
							isLink={true}
							linkTo="#introduction"
							iconStyle="mx-3 hidden dark:bg-gray-800 group-hover:inline-block p-1 rounded-md shadow-md text-sm bg-gray-200"
						/>
					</Text>
					<List
						tagName={"ul"}
						style="mb-4"
						listStyle="text-justify my-1 "
						list={[
							`<span class="font-bold">Accordion:</span> Seamlessly group related content with the Accordion component.`,
							`<span class="font-bold">AccordionHeader:</span> Customize header styles and interactions for intuitive user experience."`,
							`<span class="font-bold">AccordionDetails:</span> Effortlessly reveal or hide detailed content within the Accordion."`,
						]}
					/>
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
							<Accordion active={true} variant="1">
								<AccordionHeader>
									<Text
										tagName="h3"
										style=" text-xl font-medium !text-gray-200 ">
										Accordion 1
									</Text>
								</AccordionHeader>
								<AccordionDetails>
									<Text style=" ">
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Minima deserunt sapiente nostrum iure excepturi vel debitis,
										quae quibusdam officiis. Atque nesciunt pariatur praesentium
										optio, at vel harum aliquam illo labore?
									</Text>
								</AccordionDetails>
							</Accordion>
							<Accordion variant="1">
								<AccordionHeader>
									<Text
										tagName="h3"
										style=" text-xl font-medium !text-gray-200 ">
										Accordion 2
									</Text>
								</AccordionHeader>
								<AccordionDetails>
									<Text style="">
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Minima deserunt sapiente nostrum iure excepturi vel debitis,
										quae quibusdam officiis. Atque nesciunt pariatur praesentium
										optio, at vel harum aliquam illo labore?
									</Text>
								</AccordionDetails>
							</Accordion>
							<Accordion variant="1">
								<AccordionHeader>
									<Text
										tagName="h3"
										style=" text-xl font-medium !text-gray-200 ">
										Accordion 3
									</Text>
								</AccordionHeader>
								<AccordionDetails>
									<Text style="">
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Minima deserunt sapiente nostrum iure excepturi vel debitis,
										quae quibusdam officiis. Atque nesciunt pariatur praesentium
										optio, at vel harum aliquam illo labore?
									</Text>
								</AccordionDetails>
							</Accordion>
						</TabPanel>
						<TabPanel value="2" style="rounded-lg !overflow-hidden ">
							<CodeSnippet
								lang="jsx"
								headerStyle="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
								bodyStyle=" !font-code max-h-[300px] !my-0 "
								content={defaultAccordionContent}
							/>
						</TabPanel>
					</Tabs>
				</Block>
				<Block style="my-10">
					<Text
						tagName={"h3"}
						id="import"
						style="text-2xl mt-6 !font-medium group flex items-center ">
						Import component
						<Icon
							icon="fa-link"
							iconLibrary="font-awesome"
							isLink={true}
							linkTo="#import"
							iconStyle="mx-3 hidden dark:bg-gray-800 group-hover:inline-block p-1 rounded-md shadow-md text-sm bg-gray-200"
						/>
					</Text>
					<CodeSnippet
						lang="jsx"
						headerStyle="mt-2 bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
						bodyStyle=" !font-code max-h-[300px] !my-0 rounded-b-lg "
						content={`import { Accordion, AccordionHeader, AccordionDetails, Text, Block } from "landing-page-ui"`}
					/>
				</Block>
				<Block style="my-10">
					<Text
						tagName={"h3"}
						id="with-icon"
						style="text-2xl mt-6 !font-medium group flex items-center ">
						Accordion With Icon
						<Icon
							icon="fa-link"
							iconLibrary="font-awesome"
							isLink={true}
							linkTo="#with-icon"
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
							<Accordion active={true} variant="1">
								<AccordionHeader
									icon="fa-caret-down"
									iconLibrary="font-awesome"
									iconPosition="before">
									<Text
										tagName="h3"
										style=" text-xl font-medium !text-gray-200 ">
										Accordion 1
									</Text>
								</AccordionHeader>
								<AccordionDetails>
									<Text style=" ">
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Minima deserunt sapiente nostrum iure excepturi vel debitis,
										quae quibusdam officiis. Atque nesciunt pariatur praesentium
										optio, at vel harum aliquam illo labore?
									</Text>
								</AccordionDetails>
							</Accordion>
							<Accordion variant="1">
								<AccordionHeader
									icon="fa-caret-down"
									iconLibrary="font-awesome"
									iconPosition="before">
									<Text
										tagName="h3"
										style=" text-xl font-medium !text-gray-200 ">
										Accordion 2
									</Text>
								</AccordionHeader>
								<AccordionDetails>
									<Text style="">
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Minima deserunt sapiente nostrum iure excepturi vel debitis,
										quae quibusdam officiis. Atque nesciunt pariatur praesentium
										optio, at vel harum aliquam illo labore?
									</Text>
								</AccordionDetails>
							</Accordion>
							<Accordion variant="1">
								<AccordionHeader
									icon="fa-caret-down"
									iconLibrary="font-awesome"
									iconPosition="before">
									<Text
										tagName="h3"
										style=" text-xl font-medium !text-gray-200 ">
										Accordion 3
									</Text>
								</AccordionHeader>
								<AccordionDetails>
									<Text style="">
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Minima deserunt sapiente nostrum iure excepturi vel debitis,
										quae quibusdam officiis. Atque nesciunt pariatur praesentium
										optio, at vel harum aliquam illo labore?
									</Text>
								</AccordionDetails>
							</Accordion>
						</TabPanel>
						<TabPanel value="2" style="rounded-lg !overflow-hidden ">
							<CodeSnippet
								lang="jsx"
								headerStyle="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
								bodyStyle=" !font-code max-h-[300px] !my-0 "
								content={accordionWithIconContent}
							/>
						</TabPanel>
					</Tabs>
				</Block>
				<Block style="my-10">
					<Text
						tagName={"h3"}
						id="with-toggle-icon"
						style="text-2xl mt-6 !font-medium group flex items-center ">
						Accordion With Toggle Icon
						<Icon
							icon="fa-link"
							iconLibrary="font-awesome"
							isLink={true}
							linkTo="#with-toggle-icon"
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
							<Accordion active={true} variant="1">
								<AccordionHeader
									icon="fa-caret-right"
									iconLibrary="font-awesome"
									iconPosition="before"
									toggleIcon="fa-caret-down">
									<Text
										tagName="h3"
										style=" text-xl font-medium !text-gray-200 ">
										Accordion 1
									</Text>
								</AccordionHeader>
								<AccordionDetails>
									<Text style=" ">
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Minima deserunt sapiente nostrum iure excepturi vel debitis,
										quae quibusdam officiis. Atque nesciunt pariatur praesentium
										optio, at vel harum aliquam illo labore?
									</Text>
								</AccordionDetails>
							</Accordion>
							<Accordion variant="1">
								<AccordionHeader
									icon="fa-caret-right"
									iconLibrary="font-awesome"
									iconPosition="before"
									toggleIcon="fa-caret-down">
									<Text
										tagName="h3"
										style=" text-xl font-medium !text-gray-200 ">
										Accordion 2
									</Text>
								</AccordionHeader>
								<AccordionDetails>
									<Text style="">
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Minima deserunt sapiente nostrum iure excepturi vel debitis,
										quae quibusdam officiis. Atque nesciunt pariatur praesentium
										optio, at vel harum aliquam illo labore?
									</Text>
								</AccordionDetails>
							</Accordion>
							<Accordion variant="1">
								<AccordionHeader
									icon="fa-caret-right"
									iconLibrary="font-awesome"
									iconPosition="before"
									toggleIcon="fa-caret-down">
									<Text
										tagName="h3"
										style=" text-xl font-medium !text-gray-200 ">
										Accordion 3
									</Text>
								</AccordionHeader>
								<AccordionDetails>
									<Text style="">
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Minima deserunt sapiente nostrum iure excepturi vel debitis,
										quae quibusdam officiis. Atque nesciunt pariatur praesentium
										optio, at vel harum aliquam illo labore?
									</Text>
								</AccordionDetails>
							</Accordion>
						</TabPanel>
						<TabPanel value="2" style="rounded-lg !overflow-hidden ">
							<CodeSnippet
								lang="jsx"
								headerStyle="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
								bodyStyle=" !font-code max-h-[300px] !my-0 "
								content={accordionWithToggleIconContent}
							/>
						</TabPanel>
					</Tabs>
				</Block>
				<Block style="my-10">
					<Text
						tagName={"h3"}
						id="with-toggle-icon"
						style="text-2xl mt-6 !font-medium group flex items-center ">
						Accordion Style with Predefined Variations
						<Icon
							icon="fa-link"
							iconLibrary="font-awesome"
							isLink={true}
							linkTo="#with-variation"
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
							style="px-4 py-2 bg-gray-200 dark:bg-gray-800  border-[1px] border-white/50 rounded-lg">
							<Accordion active={true} variant="1">
								<AccordionHeader
									icon="fa-caret-right"
									iconLibrary="font-awesome"
									iconPosition="before"
									toggleIcon="fa-caret-down">
									<Text
										tagName="h3"
										style=" text-xl font-medium !text-gray-200 ">
										Accordion 1
									</Text>
								</AccordionHeader>
								<AccordionDetails>
									<Text style=" ">
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Minima deserunt sapiente nostrum iure excepturi vel debitis,
										quae quibusdam officiis. Atque nesciunt pariatur praesentium
										optio, at vel harum aliquam illo labore?
									</Text>
								</AccordionDetails>
							</Accordion>
							<Accordion variant="2">
								<AccordionHeader
									icon="fa-caret-right"
									iconLibrary="font-awesome"
									iconPosition="before"
									toggleIcon="fa-caret-down">
									<Text tagName="h3" style="  ">
										Accordion 2
									</Text>
								</AccordionHeader>
								<AccordionDetails>
									<Text style="">
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Minima deserunt sapiente nostrum iure excepturi vel debitis,
										quae quibusdam officiis. Atque nesciunt pariatur praesentium
										optio, at vel harum aliquam illo labore?
									</Text>
								</AccordionDetails>
							</Accordion>
							<Accordion variant="3">
								<AccordionHeader
									icon="fa-caret-right"
									iconLibrary="font-awesome"
									iconPosition="before"
									toggleIcon="fa-caret-down">
									<Text tagName="h3" style="  ">
										Accordion 3
									</Text>
								</AccordionHeader>
								<AccordionDetails>
									<Text style="">
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Minima deserunt sapiente nostrum iure excepturi vel debitis,
										quae quibusdam officiis. Atque nesciunt pariatur praesentium
										optio, at vel harum aliquam illo labore?
									</Text>
								</AccordionDetails>
							</Accordion>
						</TabPanel>
						<TabPanel value="2" style="rounded-lg !overflow-hidden ">
							<CodeSnippet
								lang="jsx"
								headerStyle="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
								bodyStyle=" !font-code max-h-[300px] !my-0 "
								content={accordionWithVariationContent}
							/>
						</TabPanel>
					</Tabs>
					<Text
						tagName="p"
						style="pl-6 py-2 inline-block my-3  underline underline-offset-4 cursor-pointer group relative after:content-['*'] after:absolute after:px-1 after:left-1 after:text-amber-500 "
						isLink={true}
						linkTo="#">
						Here are the variation list for all components.
						<Icon
							icon="fa-arrow-up-right-from-square"
							iconLibrary="font-awesome"
							isLink={true}
							linkTo="#with-toggle-icon"
							iconStyle="mx-3 hidden group-hover:inline-block text-sm "
						/>
					</Text>
				</Block>
			</Block>
			<RightSideBar>
				<Text style="text-lg !font-bold pt-3 pl-3 pb-4 ">ON THIS PAGE</Text>
				<Block style="">
					<Text
						style="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 "
						isLink={true}
						linkTo="#introduction">
						Introduction
					</Text>
					<Text
						style="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 "
						isLink={true}
						linkTo="#introduction">
						Import Component
					</Text>
					<Text
						style="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 "
						isLink={true}
						linkTo="#with-icon">
						Accordion With Icon
					</Text>
					<Text
						style="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 "
						isLink={true}
						linkTo="#with-toggle-icon">
						Accordion With Toggle Icon
					</Text>
					<Text
						style="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 "
						isLink={true}
						linkTo="#with-variation">
						Accordion Style With Variation
					</Text>
				</Block>
			</RightSideBar>
		</Block>
	);
};

export default AccordionPage;
