import {
	Block,
	CodeSnippet,
	Icon,
	// Input,
	Label,
	Tab,
	Tabs,
	TabsNav,
	TabsPanel,
	// Table,
	// TableBody,
	// TableCell,
	// TableHead,
	// TableRow,
	Text,
	TextArea,
} from "landing-page-ui";
import React, { useState } from "react";
import RightSideBar from "../Layout/RightSideBar";

import { Table, TableBody, TableCell, TableHead, TableRow } from "../test/Test";

const TablePage = () => {
	const defaultTextareaContent = `
import { TextArea, Label } from "landing-page-ui"

const App = () => {
  return (
    <Label style=" my-2 text-base  block font-medium text-gray-500 ">
      Default Textarea
    </Label>
    <TextArea />
  );
}

export default App;
	`;

	const disabledTextareaContent = `
import { TextArea, Label } from "landing-page-ui"

const App = () => {
  return (
    <Label style=" my-2 text-base  block font-medium text-gray-500 ">
      Default Textarea
    </Label>
    <TextArea disabled={true} />
  );
}

export default App;
	`;
	const defaultInputWithErrorContent = `
import { Block, Input } from "landing-page-ui"

const App = () => {
	const [value, setValue] = useState("");
	const validateField = (content) => {
		console.log(content.length);
		if (content.length < 30) {
			return false;
		} else {
			return true;
		}
	};
	const isValid = validateField(value);
	return (
      <TextArea
        placeholder="Minimum 30 characters."
        error={isValid}
        helperText="Minimum 30 characters."
        value={value}
        onChange={(ev) => {
          console.log(ev);
          setValue(ev);
        }}
      />
  );
}

export default App;
	`;

	const textareaProps = [
		{
			name: "value",
			type: "string",
			description: "The value of TextArea component.",
			defaultValue: "-",
		},
		{
			name: "placeholder",
			type: "string",
			description: "Placeholder text.",
			defaultValue: "-",
		},
		{
			name: "error",
			type: "boolean",
			description: "Is the error message enable.",
			defaultValue: "true",
		},
		{
			name: "helperText",
			type: "string",
			description: "Error text.",
			defaultValue: "Incorrect Value",
		},
		{
			name: "disabled",
			type: "boolean",
			description: "Is the input field disabled.",
			defaultValue: "-",
		},
		{
			name: "required",
			type: "boolean",
			description: "Is the input field required.",
			defaultValue: "-",
		},
		{
			name: "autoComplete",
			type: "string",
			description: "autoComplete value.",
			defaultValue: "on",
		},
		{
			name: "style",
			type: "string",
			description: "Any CSS className to style the TextArea component.",
			defaultValue: "-",
		},
		{
			name: "inputStyle",
			type: "string",
			description: "Any CSS className to style the textarea field.",
			defaultValue: "-",
		},
		{
			name: "errorStyle",
			type: "string",
			description: "Any CSS className to style the error message.",
			defaultValue: "-",
		},
		{
			name: "disabledStyle",
			type: "string",
			description: "Any CSS className to style the disabled field.",
			defaultValue: "-",
		},
		{
			name: "requiredStyle",
			type: "string",
			description: "Any CSS className to style the required field.",
			defaultValue: "-",
		},
		// {
		// 	name: "children",
		// 	type: "node",
		// 	description: "Child components and content to be placed within it.",
		// 	defaultValue: "-",
		// },
		// {
		// 	name: "variant",
		// 	type: "number",
		// 	description: "Variant of the accordion",
		// 	defaultValue: '"1"',
		// },
	];
	const tableData = [
		{
			name: "Alice",
			age: "30",
			Gender: "Female",
			Occupation: "Programmer",
		},
		{
			name: "Bob",
			age: "35",
			Gender: "Male",
			Occupation: "Engineer",
		},
		{
			name: "Charlie",
			age: "25",
			Gender: "Male",
			Occupation: "Designer",
		},
		{
			name: "Diana",
			age: "28",
			Gender: "Female",
			Occupation: "Doctor",
		},
	];
	return (
		<Block tagName={"div"} style="scroll-smooth md:w[65%] lg:w-[73%]">
			<Block>
				<Text tagName={"h2"} style=" text-3xl mb-2 font-medium ">
					Table
				</Text>
				<Text tagName={"p"} style="">
					The{" "}
					<Text tagName={"span"} style="code  ">
						Table
					</Text>{" "}
					organizes and presents data in a structured table format.
				</Text>
				<Block style="my-10">
					<Text
						tagName={"h3"}
						id="default-textarea"
						style="text-2xl mt-6 mb-2 !font-medium group flex items-center capitalize ">
						default textArea
						<Icon
							icon="fa-link"
							iconLibrary="font-awesome"
							isLink={true}
							linkTo="#default-textarea"
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
							<Block style="w-full my-4">
								<Table variant="2">
									<TableHead >
										<TableRow >
											<TableCell
												header={true}
												>
												Name
											</TableCell>
											<TableCell
												header={true}
												>
												Age
											</TableCell>
											<TableCell
												header={true}
												>
												Gender
											</TableCell>
											<TableCell
												header={true}
												>
												Occupation
											</TableCell>
										</TableRow>
									</TableHead>
									<TableBody style="border-0 border-b border-b-gray-500">
										{tableData.map((row) => (
											<TableRow key={row.name}>
												<TableCell >{row.name}</TableCell>
												<TableCell >{row.age}</TableCell>
												<TableCell >{row.Gender}</TableCell>
												<TableCell >{row.Occupation}</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</Block>
						</TabsPanel>
						<TabsPanel value="2" style="rounded-lg !overflow-hidden ">
							<CodeSnippet
								lang="jsx"
								headerStyle="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
								bodyStyle=" !font-code max-h-[300px] !my-0 "
								content={defaultTextareaContent}
							/>
						</TabsPanel>
					</Tabs>
				</Block>
				<Block style="my-10">
					<Text
						tagName={"h3"}
						id="disabled-textarea"
						style="text-2xl mt-6 mb-2 !font-medium group flex items-center capitalize ">
						Disabled TextArea
						<Icon
							icon="fa-link"
							iconLibrary="font-awesome"
							isLink={true}
							linkTo="#disabled-textarea"
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
							<Block style="w-full my-4">
								<Label style=" my-2 text-base  block font-medium text-gray-500 ">
									Default Textarea
								</Label>
								<TextArea disabled={true} />
							</Block>
						</TabsPanel>
						<TabsPanel value="2" style="rounded-lg !overflow-hidden ">
							<CodeSnippet
								lang="jsx"
								headerStyle="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
								bodyStyle=" !font-code max-h-[300px] !my-0 "
								content={disabledTextareaContent}
							/>
						</TabsPanel>
					</Tabs>
				</Block>
				<Block style="my-10">
					<Text
						tagName={"h3"}
						id="error-handle-with-textarea-field"
						style="text-2xl mt-6 mb-2 !font-medium group flex items-center capitalize ">
						error handle with TextArea field
						<Icon
							icon="fa-link"
							iconLibrary="font-awesome"
							isLink={true}
							linkTo="#error-handle-with-textarea-field"
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
							<Block style="w-full my-4">
								<TextArea />
							</Block>
						</TabsPanel>
						<TabsPanel value="2" style="rounded-lg !overflow-hidden ">
							<CodeSnippet
								lang="jsx"
								headerStyle="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
								bodyStyle=" !font-code max-h-[300px] !my-0 "
								content={defaultInputWithErrorContent}
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
							<span className="code">Input</span> component
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
									{textareaProps.map((props, index) => {
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
													<span
														dangerouslySetInnerHTML={{
															__html: props.defaultValue,
														}}
													/>
												</TableCell>
												<TableCell variant={"1"} style="dark:text-gray-200">
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
						style="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 capitalize "
						isLink={true}
						linkTo="#default-textarea">
						default textarea
					</Text>
					<Text
						style="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 capitalize "
						isLink={true}
						linkTo="#disabled-textarea">
						Disabled TextArea
					</Text>
					<Text
						style="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 capitalize "
						isLink={true}
						linkTo="#error-handle-with-textarea-field">
						error handle with TextArea field
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

export default TablePage;
