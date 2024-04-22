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

import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableRow,
} from "../test/Test";

const TablePage = () => {
	const defaultTableContent = `
import { Table, TableBody, TableCell, TableHead, TableRow } from "landing-page-ui"

const App = () => {
  return (
    <Table variant="2">
		<TableHead >
			<TableRow >
				<TableCell 
					header={true}>
					Name
				</TableCell>
				<TableCell 
					header={true}>
					Age
				</TableCell>
				<TableCell 
					header={true}>
					Gender
				</TableCell>
				<TableCell 
					header={true}>
					Occupation
				</TableCell>
			</TableRow>
		</TableHead>
		<TableBody>
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
  );
}

export default App;
	`;
	const tableWithCaptionContent = `
import { Table, TableBody, TableCaption, TableCell, TableHead, TableRow } from "landing-page-ui"

const App = () => {
  return (
    <Table variant="2">
		<TableCaption>Table with caption</TableCaption>
		<TableHead >
			<TableRow >
				<TableCell 
					header={true}>
					Name
				</TableCell>
				<TableCell 
					header={true}>
					Age
				</TableCell>
				<TableCell 
					header={true}>
					Gender
				</TableCell>
				<TableCell 
					header={true}>
					Occupation
				</TableCell>
			</TableRow>
		</TableHead>
		<TableBody>
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
  );
}

export default App;
	`;

	const tableProps = [
		{
			name: "children",
			type: "node",
			description: "Child components and content to be placed within it.",
			defaultValue: "-",
		},
		{
			name: "style",
			type: "string",
			description: "Any CSS className to style the Table component.",
			defaultValue: "-",
		},
		{
			name: "variant",
			type: "number",
			description: "Variant of the table",
			defaultValue: "-",
		},
	];
	const tableHeadProps = [
		{
			name: "children",
			type: "node",
			description: "Child components and content to be placed within it.",
			defaultValue: "-",
		},
		{
			name: "style",
			type: "string",
			description: "Any CSS className to style the TableHead component.",
			defaultValue: "-",
		},
		{
			name: "variant",
			type: "number",
			description: "Variant of the table",
			defaultValue: "-",
		},
	];
	const tableBodyProps = [
		{
			name: "children",
			type: "node",
			description: "Child components and content to be placed within it.",
			defaultValue: "-",
		},
		{
			name: "style",
			type: "string",
			description: "Any CSS className to style the TableBody component.",
			defaultValue: "-",
		},
		{
			name: "variant",
			type: "number",
			description: "Variant of the table",
			defaultValue: "-",
		},
	];
	const tableFooterProps = [
		{
			name: "children",
			type: "node",
			description: "Child components and content to be placed within it.",
			defaultValue: "-",
		},
		{
			name: "style",
			type: "string",
			description: "Any CSS className to style the TableFooter component.",
			defaultValue: "-",
		},
		{
			name: "variant",
			type: "number",
			description: "Variant of the table",
			defaultValue: "-",
		},
	];
	const tableCaptionProps = [
		{
			name: "position",
			type: "string",
			description: 'Where to place the TableCaption - "top" or "bottom".',
			defaultValue: "top",
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
			description: "Any CSS className to style the TableCaption component.",
			defaultValue: "-",
		},
		{
			name: "variant",
			type: "number",
			description: "Variant of the table",
			defaultValue: "-",
		},
	];
	const tableRowProps = [
		{
			name: "children",
			type: "node",
			description: "Child components and content to be placed within it.",
			defaultValue: "-",
		},
		{
			name: "style",
			type: "string",
			description: "Any CSS className to style the TableRow component.",
			defaultValue: "-",
		},
		{
			name: "variant",
			type: "number",
			description: "Variant of the table",
			defaultValue: "-",
		},
	];
	const tableCellProps = [
		{
			name: "header",
			type: "boolean",
			description: "Is this heading?",
			defaultValue: "-",
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
			description: "Any CSS className to style the TableCell component.",
			defaultValue: "-",
		},
		{
			name: "thStyle",
			type: "string",
			description:
				"Any CSS className to style the TableCell component if the header is true.",
			defaultValue: "-",
		},
		{
			name: "tdStyle",
			type: "string",
			description:
				"Any CSS className to style the TableCell component if the header is false.",
			defaultValue: "-",
		},
		{
			name: "variant",
			type: "number",
			description: "Variant of the TableCell",
			defaultValue: "-",
		},
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
						id="default-table"
						style="text-2xl mt-6 mb-2 !font-medium group flex items-center capitalize ">
						default table
						<Icon
							icon="fa-link"
							iconLibrary="font-awesome"
							isLink={true}
							linkTo="#default-table"
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
									<TableHead>
										<TableRow>
											<TableCell header={true}>Name</TableCell>
											<TableCell header={true}>Age</TableCell>
											<TableCell header={true}>Gender</TableCell>
											<TableCell header={true}>Occupation</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{tableData.map((row) => (
											<TableRow key={row.name}>
												<TableCell>{row.name}</TableCell>
												<TableCell>{row.age}</TableCell>
												<TableCell>{row.Gender}</TableCell>
												<TableCell>{row.Occupation}</TableCell>
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
								content={defaultTableContent}
							/>
						</TabsPanel>
					</Tabs>
				</Block>
				<Block style="my-10">
					<Text
						tagName={"h3"}
						id="table-with-caption"
						style="text-2xl mt-6 mb-2 !font-medium group flex items-center capitalize ">
						Table with caption
						<Icon
							icon="fa-link"
							iconLibrary="font-awesome"
							isLink={true}
							linkTo="#table-with-caption"
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
									<TableCaption>Table with caption</TableCaption>
									<TableHead>
										<TableRow>
											<TableCell header={true}>Name</TableCell>
											<TableCell header={true}>Age</TableCell>
											<TableCell header={true}>Gender</TableCell>
											<TableCell header={true}>Occupation</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{tableData.map((row) => (
											<TableRow key={row.name}>
												<TableCell>{row.name}</TableCell>
												<TableCell>{row.age}</TableCell>
												<TableCell>{row.Gender}</TableCell>
												<TableCell>{row.Occupation}</TableCell>
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
								content={tableWithCaptionContent}
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
							<span className="code">Table</span> component
						</Text>
						<Block style="overflow-x-auto">
							<Table variant={"1"}>
								<TableHead variant={"1"}>
									<TableRow style="!bg-gray-800">
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
									{tableProps.map((props, index) => {
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
					<Text tagName="p" style="my-5">
						Explore the available props for the{" "}
						<span className="code">TableHead</span> component
					</Text>
					<Block style="overflow-x-auto">
						<Table variant={"1"}>
							<TableHead variant={"1"}>
								<TableRow style="!bg-gray-800" variant={false}>
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
								{tableHeadProps.map((props, index) => {
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
					<Text tagName="p" style="my-5">
						Explore the available props for the{" "}
						<span className="code">TableBody</span> component
					</Text>
					<Block style="overflow-x-auto">
						<Table variant={"1"}>
							<TableHead variant={"1"}>
								<TableRow style="!bg-gray-800" variant={false}>
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
								{tableBodyProps.map((props, index) => {
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
					<Text tagName="p" style="my-5">
						Explore the available props for the{" "}
						<span className="code">TableFooter</span> component
					</Text>
					<Block style="overflow-x-auto">
						<Table variant={"1"}>
							<TableHead variant={"1"}>
								<TableRow style="!bg-gray-800" variant={false}>
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
								{tableFooterProps.map((props, index) => {
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
					<Text tagName="p" style="my-5">
						Explore the available props for the{" "}
						<span className="code">TableCaption</span> component
					</Text>
					<Block style="overflow-x-auto">
						<Table variant={"1"}>
							<TableHead variant={"1"}>
								<TableRow style="!bg-gray-800" variant={false}>
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
								{tableCaptionProps.map((props, index) => {
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
					<Text tagName="p" style="my-5">
						Explore the available props for the{" "}
						<span className="code">TableRow</span> component
					</Text>
					<Block style="overflow-x-auto">
						<Table variant={"1"}>
							<TableHead variant={"1"}>
								<TableRow style="!bg-gray-800" variant={false}>
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
								{tableRowProps.map((props, index) => {
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
					<Text tagName="p" style="my-5">
						Explore the available props for the{" "}
						<span className="code">TableCell</span> component
					</Text>
					<Block style="overflow-x-auto">
						<Table variant={"1"}>
							<TableHead variant={"1"}>
								<TableRow style="!bg-gray-800" variant={false}>
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
								{tableCellProps.map((props, index) => {
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
						style="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 capitalize "
						isLink={true}
						linkTo="#default-table">
						default table
					</Text>
					<Text
						style="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 capitalize "
						isLink={true}
						linkTo="#table-with-caption">
						Table with caption
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
