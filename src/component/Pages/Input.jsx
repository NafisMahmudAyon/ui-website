import {
	Block,
	// CodeSnippet,
	Icon,
	// Input,
	// Label,
	Tab,
	Tabs,
	TabsNav,
	TabsPanel,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Text,
} from "landing-page-ui";
import React, { useState } from "react";
import RightSideBar from "../Layout/RightSideBar";

import CodeSnippet from "../components/CodeSnippet";

import { Input, Label } from "../test/Test";
import ScrollToTop from "../components/ScrollToTop";

const InputPage = () => {
	const defaultInputContent = `
import { Block, Input } from "landing-page-ui"

const App = () => {
  return (
    <Block styles="flex gap-4">
		<Input />
	</Block>
  );
}

export default App;
	`;

	const defaultInputWithIconContent = `
import { Block, Input } from "landing-page-ui"

const App = () => {
  return (
    <Block styles="flex gap-4">
		<Input placeholder="Full Name" iconEnable={true} icon="fa-user" />
		<Input type="password" placeholder="Password" iconEnable={true} icon="fa-lock" />
	</Block>
  );
}

export default App;
	`;
	const disabledInputFieldContent = `
import { Block, Input } from "landing-page-ui"

const App = () => {
  return (
    <Block styles="flex gap-4">
		<Input
			placeholder="Full Name"
			iconEnable={true}
			icon="fa-user"
			disabled={true}
		/>
		<Input
			type="password"
			placeholder="Password"
			iconEnable={true}
			iconPosition="right"
			icon="fa-lock"
		/>
	</Block>
  );
}

export default App;
	`;
	const defaultInputWithErrorContent = `
import { Block, Input } from "landing-page-ui"

const App = () => {
	const [value, setValue] = useState("");
	const validateEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};
	const isValid = validateEmail(value);
	return (
	<Block>
		<Input
			placeholder="User Email"
			type="email"
			iconEnable={true}
			icon="fa-envelope"
			error={isValid}
			helperText="give a valid email address"
			value={value}
			onChange={(ev) => {
				setValue(ev);
			}}
		/>
	</Block>
  );
}

export default App;
	`;

	const inputProps = [
		{
			name: "type",
			type: "string",
			description:
				'The "type" props specifies the type of Input component to display.',
			defaultValue: "text",
		},
		{
			name: "value",
			type: "string",
			description: "The value of Input component.",
			defaultValue: "-",
		},
		{
			name: "placeholder",
			type: "string",
			description: "Placeholder text.",
			defaultValue: "-",
		},
		{
			name: "iconEnable",
			type: "boolean",
			description: "Is icon enable.",
			defaultValue: "-",
		},
		{
			name: "icon",
			type: "string",
			description: "Icon name for input",
			defaultValue: "fa-envelope",
		},
		{
			name: "iconLibrary",
			type: "string",
			description: `Icon library name.</br> <span class="code my-1">font-awesome</span> <span class="code my-1">bootstrap-icons</span> <span class="code my-1">icon-font</span> `,
			defaultValue: "font-awesome",
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
			description: "Any CSS className to style the Input component.",
			defaultValue: "-",
		},
		{
			name: "inputStyle",
			type: "string",
			description: "Any CSS className to style the Input field.",
			defaultValue: "-",
		},
		{
			name: "iconStyle",
			type: "string",
			description: "Any CSS className to style the Input Icon.",
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
	const [value, setValue] = useState("");
	const validateEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};
	const isValid = validateEmail(value);
	return (
		<Block tagName={"div"} styles="scroll-smooth md:w-[65%] lg:w-[73%]">
			<Block>
				<Text tagName={"h2"} styles=" text-3xl mb-2 font-medium ">
					Input
				</Text>
				<Text tagName={"p"} styles="">
					The{" "}
					<Text tagName={"span"} styles="code  ">
						Input
					</Text>{" "}
					component enables user data entry and interaction within forms or
					interfaces.
				</Text>
				<Block styles="my-10">
					<Text
						tagName={"h3"}
						id="default-input"
						styles="text-2xl mt-6 mb-2 !font-medium group flex items-center capitalize ">
						default Input
						<Icon
							icon="fa-link"
							iconLibrary="font-awesome"
							isLink={true}
							linkTo="#default-input"
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
							<Block styles="flex w-full gap-4 my-4">
								<Block styles="flex flex-col gap-4">
									{/* <Label>Name</Label> */}
									<Input />
								</Block>
							</Block>
						</TabsPanel>
						<TabsPanel value="2" styles="rounded-lg !overflow-hidden ">
							<CodeSnippet
								lang="jsx"
								headerStyles="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
								bodyStyles=" !font-code max-h-[300px] !my-0 "
								content={defaultInputContent}
							/>
						</TabsPanel>
					</Tabs>
				</Block>
				<Block styles="my-10">
					<Text
						tagName={"h3"}
						id="input-field-with-icon"
						styles="text-2xl mt-6 mb-2 !font-medium group flex items-center capitalize ">
						Input field with icon
						<Icon
							icon="fa-link"
							iconLibrary="font-awesome"
							isLink={true}
							linkTo="#input-field-with-icon"
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
							<Block styles="flex w-full gap-4 my-4">
								<Block styles="flex gap-4">
									<Input
										placeholder="Full Name"
										iconEnable={true}
										icon="fa-user"
									/>
									<Input
										type="password"
										placeholder="Password"
										iconEnable={true}
										iconPosition="right"
										icon="fa-lock"
									/>
								</Block>
							</Block>
						</TabsPanel>
						<TabsPanel value="2" styles="rounded-lg !overflow-hidden ">
							<CodeSnippet
								lang="jsx"
								headerStyles="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
								bodyStyles=" !font-code max-h-[300px] !my-0 "
								content={defaultInputWithIconContent}
							/>
						</TabsPanel>
					</Tabs>
				</Block>
				<Block styles="my-10">
					<Text
						tagName={"h3"}
						id="disabled-input-field"
						styles="text-2xl mt-6 mb-2 !font-medium group flex items-center capitalize ">
						Disabled Input field
						<Icon
							icon="fa-link"
							iconLibrary="font-awesome"
							isLink={true}
							linkTo="#disabled-input-field"
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
							<Block styles="flex w-full gap-4 my-4">
								<Block styles="flex gap-4">
									<Input
										placeholder="Full Name"
										iconEnable={true}
										icon="fa-user"
										disabled={true}
									/>
									<Input
										type="password"
										placeholder="Password"
										iconEnable={true}
										iconPosition="right"
										icon="fa-lock"
									/>
								</Block>
							</Block>
						</TabsPanel>
						<TabsPanel value="2" styles="rounded-lg !overflow-hidden ">
							<CodeSnippet
								lang="jsx"
								headerStyles="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
								bodyStyles=" !font-code max-h-[300px] !my-0 "
								content={disabledInputFieldContent}
							/>
						</TabsPanel>
					</Tabs>
				</Block>
				<Block styles="my-10">
					<Text
						tagName={"h3"}
						id="error-handle-for-input-field"
						styles="text-2xl mt-6 mb-2 !font-medium group flex items-center capitalize ">
						error handle for input field
						<Icon
							icon="fa-link"
							iconLibrary="font-awesome"
							isLink={true}
							linkTo="#error-handle-for-input-field"
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
							<Block styles="flex w-full gap-4 my-4">
								<Block>
									<Input
										placeholder="User Email"
										type="email"
										iconEnable={true}
										icon="fa-envelope"
										error={isValid}
										helperText="give a valid email address"
										value={value}
										onChange={(ev) => {
											setValue(ev);
										}}
									/>
								</Block>
							</Block>
						</TabsPanel>
						<TabsPanel value="2" styles="rounded-lg !overflow-hidden ">
							<CodeSnippet
								lang="jsx"
								headerStyles="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
								bodyStyles=" !font-code max-h-[300px] !my-0 "
								content={defaultInputWithErrorContent}
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
							<span className="code">Input</span> component
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
									{inputProps.map((props, index) => {
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
													<span
														dangerouslySetInnerHTML={{
															__html: props.defaultValue,
														}}
													/>
												</TableCell>
												<TableCell variant={"1"} styles="dark:text-gray-200">
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
						styles="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 capitalize "
						isLink={true}
						linkTo="#default-input">
						default input
					</Text>
					<Text
						styles="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 capitalize "
						isLink={true}
						linkTo="#input-field-with-icon">
						Input Field With Icon
					</Text>
					<Text
						styles="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 capitalize "
						isLink={true}
						linkTo="#disabled-input-field">
						Disabled Input Field
					</Text>
					<Text
						styles="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 capitalize "
						isLink={true}
						linkTo="#error-handle-for-input-field">
						error handle for input field
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

export default InputPage;
