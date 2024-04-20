import {
	Block,
	CodeSnippet,
	Icon,
	// ProgressBar,
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
import { ProgressBar } from "../test/Test";

const ProgressBarPage = () => {
	const defaultProgressBarContent = `
import { ProgressBar } from "landing-page-ui"

const App = () => {
  return (
    <ProgressBar value="60" duration="10" />
  );
}

export default App;
	`;
	const progressBarOnVisibleContent = `
import { ProgressBar } from "landing-page-ui"

const App = () => {
  return (
    <ProgressBar
      value="85"
      animateOnVisible
      duration="10"
    />
  );
}

export default App;
	`;

	const progressBarProps = [
		{
			name: "value",
			type: "number",
			description: "ProgressBar value.",
			defaultValue: "-",
		},
		{
			name: "altText",
			type: "string",
			description: "Alternative text for Avatar.",
			defaultValue: "-",
		},
		{
			name: "name",
			type: "string",
			description: "Name of the profile or avatar.",
			defaultValue: "-",
		},
		{
			name: "style",
			type: "string",
			description: "Any CSS className to style the Avatar.",
			defaultValue: "-",
		},
		{
			name: "imageStyle",
			type: "string",
			description: "Any CSS className to style the image.",
			defaultValue: "-",
		},
		{
			name: "variant",
			type: "number",
			description: "Variant of the accordion",
			defaultValue: '"1"',
		},
		{
			name: "onClick",
			type: "javascript Event",
			description: "onClick event for the Avatar",
			defaultValue: "-",
		},
	];
	return (
		<Block tagName={"div"} style="scroll-smooth md:w[65%] lg:w-[73%]">
			<Block>
				<Text tagName={"h2"} style=" text-3xl mb-2 font-medium ">
					Progress Bar
				</Text>
				<Text tagName={"p"} style="">
					The{" "}
					<Text tagName={"span"} style="code  ">
						ProgressBar
					</Text>{" "}
					visually indicates the completion status of a task or process.
				</Text>
				<Block style="my-10">
					<Text
						tagName={"h3"}
						id="default-progress-bar"
						style="text-2xl mt-6 mb-2 !font-medium group flex items-center capitalize ">
						default progressBar
						<Icon
							icon="fa-link"
							iconLibrary="font-awesome"
							isLink={true}
							linkTo="#default-progress-bar"
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
							<Block style="flex w-full gap-4 my-4">
								<ProgressBar value="60" duration="10" />
							</Block>
						</TabsPanel>
						<TabsPanel value="2" style="rounded-lg !overflow-hidden ">
							<CodeSnippet
								lang="jsx"
								headerStyle="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
								bodyStyle=" !font-code max-h-[300px] !my-0 "
								content={defaultProgressBarContent}
							/>
						</TabsPanel>
					</Tabs>
				</Block>
				<Block style="my-10">
					<Text
						tagName={"h3"}
						id="default-progress-bar"
						style="text-2xl mt-6 mb-2 !font-medium group flex items-center capitalize ">
						progressBar on visible
						<Icon
							icon="fa-link"
							iconLibrary="font-awesome"
							isLink={true}
							linkTo="#default-progress-bar"
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
							<Block style="flex w-full gap-4 my-4">
								<ProgressBar value="85" animateOnVisible duration="10" />
							</Block>
						</TabsPanel>
						<TabsPanel value="2" style="rounded-lg !overflow-hidden ">
							<CodeSnippet
								lang="jsx"
								headerStyle="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
								bodyStyle=" !font-code max-h-[300px] !my-0 "
								content={progressBarOnVisibleContent}
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
						<Text tagName="p" style="mb-5">
							Explore the available props for the{" "}
							<span className="code">ProgressBar</span> component
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
									{progressBarProps.map((props, index) => {
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
			</Block>
		</Block>
	);
};

export default ProgressBarPage;
