import {
	Accordion,
	AccordionHeader,
	AccordionDetails,
	Block,
	Text,
	
} from "landing-page-ui";
import { TabsNav, Tabs, Tab, TabPanel } from "ui";
import React, { useState } from "react";
import {
	bootstrapIcons,
	fontawesomeClasses,
	iconfontClasses,
} from "../components/Icons";
import CodeSnippet from "../components/CodeSnippet";

const PlayTabs = () => {
	const tagName = [
		"div",
		"section",
		"span",
		"h1",
		"h2",
		"h3",
		"h4",
		"h5",
		"h6",
		"p",
	];
	const orientation = ["vertical", "horizontal"];
	const activeTab = ["1", "2", "3", "4"];
	const iconLibrarySet = ["bootstrap-icons", "font-awesome", "icon-font"];

	const [tabsOrientationSelect, settabsOrientationSelect] = useState(
		orientation[1]
	);
	const handleTabsOrientation = (event) => {
		settabsOrientationSelect(event.target.value);
	};
	const [tabsActiveTabSelect, settabsActiveTabSelect] = useState(activeTab[1]);
	const handleTabsActiveTab = (event) => {
		settabsActiveTabSelect(event.target.value);
	};
	const [tabsShowButtonSelect, settabsShowButtonSelect] = useState(false);

	const handleTabsShowButton = (event) => {
		settabsShowButtonSelect(event.target.value === "true");
	};

	const [tabsButtonTextEnabledSelect, settabsButtonTextEnabledSelect] =
		useState(false);

	const handleTabsButtonTextEnabled = (event) => {
		settabsButtonTextEnabledSelect(event.target.value === "true");
	};
	const [tabsIconLibrarySelect, settabsIconLibrarySelect] =
		useState("font-awesome");
	const handleTabsIconLibrarySelectChange = (event) => {
		settabsIconLibrarySelect(event.target.value);
	};
	const [tabsPrevIconSelect, settabsPrevIconSelect] = useState("fa-caret-left");
	const handleTabsPrevIconSelectChange = (event) => {
		settabsPrevIconSelect(event.target.value);
	};
	const [tabsNextIconSelect, settabsNextIconSelect] = useState("fa-caret-right");
	const handleTabsNextIconSelectChange = (event) => {
		settabsNextIconSelect(event.target.value);
	};
	const [tabsPrevButtonTextSelect, settabsPrevButtonTextSelect] =
		useState("Prev");
	const handleTabsPrevButtonText = (event) => {
		settabsPrevButtonTextSelect(event.target.value);
	};
	const [tabsNextButtonTextSelect, settabsNextButtonTextSelect] =
		useState("Next");
	const handleTabsNextButtonText = (event) => {
		settabsNextButtonTextSelect(event.target.value);
	};
	const [tabsPrevButtonPositionSelect, settabsPrevButtonPositionSelect] =
		useState("left");
	const handleTabsPrevButtonPosition = (event) => {
		settabsPrevButtonPositionSelect(event.target.value);
	};
	const [tabsNextButtonPositionSelect, settabsNextButtonPositionSelect] =
		useState("right");
	const handleTabsNextButtonPosition = (event) => {
		settabsNextButtonPositionSelect(event.target.value);
	};

	const [tabs1HeaderTextSelect, settabs1HeaderTextSelect] = useState(
		"Tab 1"
	);
	const handleTabs1HeaderTextSelectChange = (event) => {
		settabs1HeaderTextSelect(event.target.value);
	};
	const [tabs2HeaderTextSelect, settabs2HeaderTextSelect] = useState(
		"Tab 2"
	);
	const handleTabs2HeaderTextSelectChange = (event) => {
		settabs2HeaderTextSelect(event.target.value);
	};
	const [tabs3HeaderTextSelect, settabs3HeaderTextSelect] = useState(
		"Tab 3"
	);
	const handleTabs3HeaderTextSelectChange = (event) => {
		settabs3HeaderTextSelect(event.target.value);
	};
	const [tabs4HeaderTextSelect, settabs4HeaderTextSelect] = useState(
		"Tab 4"
	);
	const handleTabs4HeaderTextSelectChange = (event) => {
		settabs4HeaderTextSelect(event.target.value);
	};

	

	const [tabs1PanelContentSelect, settabs1PanelContentSelect] = useState(
		"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, consequuntur, illo animi aliquid itaque culpa recusandae optio porro nobis dolores laudantium dolore perferendis esse eius modi voluptates non quibusdam eos."
	);
	const handleTabs1PanelContentSelectChange = (event) => {
		settabs1PanelContentSelect(event.target.value);
	};
	const [tabs2PanelContentSelect, settabs2PanelContentSelect] = useState(
		"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, consequuntur, illo animi aliquid itaque culpa recusandae optio porro nobis dolores laudantium dolore perferendis esse eius modi voluptates non quibusdam eos."
	);
	const handleTabs2PanelContentSelectChange = (event) => {
		settabs2PanelContentSelect(event.target.value);
	};
	const [tabs3PanelContentSelect, settabs3PanelContentSelect] = useState(
		"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, consequuntur, illo animi aliquid itaque culpa recusandae optio porro nobis dolores laudantium dolore perferendis esse eius modi voluptates non quibusdam eos."
	);
	const handleTabs3PanelContentSelectChange = (event) => {
		settabs3PanelContentSelect(event.target.value);
	};
	const [tabs4PanelContentSelect, settabs4PanelContentSelect] = useState(
		"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, consequuntur, illo animi aliquid itaque culpa recusandae optio porro nobis dolores laudantium dolore perferendis esse eius modi voluptates non quibusdam eos."
	);
	const handleTabs4PanelContentSelectChange = (event) => {
		settabs4PanelContentSelect(event.target.value);
	};

	

	const accordionStyle = {
		accordionStyle: "p-4 rounded-lg border border-gray-300 dark:bg-gray-800 ",
		accordionHeaderStyle:
			"bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-t-lg dark:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer ",
		accordionHeaderDeactivateStyle: "opacity-50 cursor-not-allowed ",
		accordionHeaderLabelStyle: "text-textColor dark:text-darkTextColor ",
		accordionHeaderActiveStyle: "!bg-blue-200 dark:bg-slate-800 ",
		accordionHeaderIconStyle: "text-red-500 dark:text-yellow-500 mr-2 ",
		accordionHeaderTextStyle: "text-textColor dark:text-darkTextColor ",
		accordionDetailsStyle:
			"bg-gray-100 px-4 py-2 rounded-b-lg dark:bg-gray-900 border-x border-b ",
		accordionDetailsTextStyle: "text-textColor dark:text-darkTextColor ",
	};

// 	const AccordionCodeContent = `
// <Accordion
//   tagName="${tabsOrientationSelect}"
//   ${accordionActiveStatus ? "active={true}" : ""}
//   ${!accordionActiveStatus ? "deactivate={false}" : ""}
//   style="${accordionStyle.accordionStyle}"
// >
//   <AccordionHeader
//     tagName="${accordionHeaderSelectTagName}"
//     icon="${accordionHeaderIconSelect}"
//     iconLibrary="${accordionHeaderIconLibrarySelect}"
//     iconPosition="${accordionHeaderIconPositionSelect}"
//     toggleIcon="${accordionHeaderToggleIconSelect}"
//     toggleIconLibrary="${accordionHeaderToggleIconLibrarySelect}"
//     style="${accordionStyle.accordionHeaderStyle}"
//     ${
// 			accordionActiveStatus
// 				? ""
// 				: `deactivateStyle="${accordionStyle.accordionHeaderDeactivateStyle}"`
// 		}
//     labelStyle="${accordionStyle.accordionHeaderLabelStyle}"
//     ${
// 			accordionActiveStatus
// 				? `activeStyle="${accordionStyle.accordionHeaderActiveStyle}"`
// 				: ""
// 		}
//     iconStyle="${accordionStyle.accordionHeaderIconStyle}"
//   >
//     <Text tagName="span" style="${accordionStyle.accordionHeaderTextStyle}">
//       ${accordionHeaderLabelSelect}
//     </Text>
//   </AccordionHeader>
//   <AccordionDetails
//     tagName="${accordionDetailsSelectTagName}"
//     style="${accordionStyle.accordionDetailsStyle}"
//   >
//     <Text style="${accordionStyle.accordionDetailsTextStyle}">
//       ${accordionDetailsLabelSelect}
//     </Text>
//   </AccordionDetails>
// </Accordion>`;


	return (
		<div>
			<Block style="mb-6">
				<Block>
					{/*  Tabs Props  */}
					<Block style="mt-8 p-3 pt-4 text-sm border border-solid border-darkBgColor dark:border-bgColor relative after:absolute after:content-['Tabs_Props'] after:-top-3 after:left-1/2 after:-translate-x-1/2  after:border after:h-6 after:w-max after:flex after:items-center after:bg-bgColor dark:after:bg-darkBgColor after:px-2 rounded-md after:z-10 ">
						<Block style="">
							<label for="">orientation: </label>
							<select
								name=""
								className=" bg-inherit text-inherit border-b"
								onChange={handleTabsOrientation}
								value={tabsOrientationSelect}>
								{orientation.map((component, i) => (
									<option
										value={component}
										key={i}
										className="capitalize bg-bgColor dark:bg-darkBgColor text-textColor dark:text-darkTextColor px-2">
										{component}
									</option>
								))}
							</select>
						</Block>
						<Block style="">
							<label for="">active: </label>
							<select
								name=""
								className=" bg-inherit text-inherit border-b"
								onChange={handleTabsActiveTab}
								value={tabsActiveTabSelect}>
								{activeTab.map((component, i) => (
									<option
										value={component}
										key={i}
										className="capitalize bg-bgColor dark:bg-darkBgColor text-textColor dark:text-darkTextColor px-2">
										{component}
									</option>
								))}
							</select>
						</Block>
					</Block>
					{/* Tabs Nav Props  */}
					<Block style="mt-8 p-3 pt-4 text-sm border border-solid border-darkBgColor dark:border-bgColor relative after:absolute after:content-['Tabs_Nav_Props'] after:-top-3 after:left-1/2 after:-translate-x-1/2 after:border after:h-6 after:w-max after:flex after:items-center after:bg-bgColor dark:after:bg-darkBgColor after:px-2 rounded-md after:z-10 ">
						<Block style="">
							<label for="">showButton: </label>
							<select
								name=""
								className=" bg-inherit text-inherit border-b"
								onChange={handleTabsShowButton}
								value={tabsShowButtonSelect}>
								<option
									value="true"
									className="capitalize bg-bgColor dark:bg-darkBgColor text-textColor dark:text-darkTextColor px-2">
									true
								</option>
								<option
									value="false"
									className="capitalize bg-bgColor dark:bg-darkBgColor text-textColor dark:text-darkTextColor px-2">
									false
								</option>
							</select>
						</Block>
						{tabsShowButtonSelect && (
							<Block style="">
								<label for="">buttonTextEnabled: </label>
								<select
									name=""
									className=" bg-inherit text-inherit border-b"
									onChange={handleTabsButtonTextEnabled}
									value={tabsButtonTextEnabledSelect}>
									<option
										value="true"
										className="capitalize bg-bgColor dark:bg-darkBgColor text-textColor dark:text-darkTextColor px-2">
										true
									</option>
									<option
										value="false"
										className="capitalize bg-bgColor dark:bg-darkBgColor text-textColor dark:text-darkTextColor px-2">
										false
									</option>
								</select>
							</Block>
						)}

						<Block>
							{tabsShowButtonSelect && (
								<>
									<Block style="">
										<label for="">iconLibrary: </label>
										<select
											name=""
											className=" bg-inherit text-inherit border-b"
											onChange={handleTabsIconLibrarySelectChange}
											value={tabsIconLibrarySelect}>
											{iconLibrarySet.map((component, i) => (
												<option
													value={component}
													key={i}
													className="capitalize bg-bgColor dark:bg-darkBgColor text-textColor dark:text-darkTextColor px-2">
													{component}
												</option>
											))}
										</select>
									</Block>
									<Block style="">
										<label for="">prevIcon: </label>
										<select
											name=""
											className=" bg-inherit text-inherit border-b"
											onChange={handleTabsPrevIconSelectChange}
											value={tabsPrevIconSelect}>
											{tabsIconLibrarySelect == "font-awesome" && (
												<>
													{fontawesomeClasses.map((component, i) => {
														const iconHtml = `<i class="fa-solid ${component}"></i>`;
														return (
															<option
																value={component}
																key={i}
																className="capitalize bg-bgColor dark:bg-darkBgColor text-textColor dark:text-darkTextColor px-2">
																{component}
															</option>
														);
													})}
												</>
											)}
											{tabsIconLibrarySelect == "bootstrap-icons" && (
												<>
													{bootstrapIcons.map((component, i) => {
														const iconHtml = `<i class="${component}"></i>`;
														return (
															<option
																value={component}
																key={i}
																className="capitalize bg-bgColor dark:bg-darkBgColor text-textColor dark:text-darkTextColor px-2">
																{component}
															</option>
														);
													})}
												</>
											)}
											{tabsIconLibrarySelect == "icon-font" && (
												<>
													{iconfontClasses.map((component, i) => {
														const iconHtml = `<i class="${component}"></i>`;
														return (
															<option
																value={component}
																key={i}
																className="capitalize bg-bgColor dark:bg-darkBgColor text-textColor dark:text-darkTextColor px-2">
																{component}
															</option>
														);
													})}
												</>
											)}
										</select>
									</Block>
									<Block style="">
										<label for="">nextIcon: </label>
										<select
											name=""
											className=" bg-inherit text-inherit border-b"
											onChange={handleTabsNextIconSelectChange}
											value={tabsNextIconSelect}>
											{tabsIconLibrarySelect == "font-awesome" && (
												<>
													{fontawesomeClasses.map((component, i) => {
														const iconHtml = `<i class="fa-solid ${component}"></i>`;
														return (
															<option
																value={component}
																key={i}
																className="capitalize bg-bgColor dark:bg-darkBgColor text-textColor dark:text-darkTextColor px-2">
																{component}
															</option>
														);
													})}
												</>
											)}
											{tabsIconLibrarySelect == "bootstrap-icons" && (
												<>
													{bootstrapIcons.map((component, i) => {
														const iconHtml = `<i class="${component}"></i>`;
														return (
															<option
																value={component}
																key={i}
																className="capitalize bg-bgColor dark:bg-darkBgColor text-textColor dark:text-darkTextColor px-2">
																{component}
															</option>
														);
													})}
												</>
											)}
											{tabsIconLibrarySelect == "icon-font" && (
												<>
													{iconfontClasses.map((component, i) => {
														const iconHtml = `<i class="${component}"></i>`;
														return (
															<option
																value={component}
																key={i}
																className="capitalize bg-bgColor dark:bg-darkBgColor text-textColor dark:text-darkTextColor px-2">
																{component}
															</option>
														);
													})}
												</>
											)}
										</select>
									</Block>
									{tabsButtonTextEnabledSelect && (
										<>
											<Block style="flex gap-3 w-full">
												<label for="">prevButtonText: </label>
												<input
													type="text"
													name=""
													id=""
													value={tabsPrevButtonTextSelect}
													className=" bg-inherit text-inherit border-b "
													placeholder="Here you can add Accordion Header Label"
													onChange={handleTabsPrevButtonText}
												/>
											</Block>
											<Block style="flex gap-3 w-full">
												<label for="">nextButtonText: </label>
												<input
													type="text"
													name=""
													id=""
													value={tabsNextButtonTextSelect}
													className=" bg-inherit text-inherit border-b "
													placeholder="Here you can add Accordion Header Label"
													onChange={handleTabsNextButtonText}
												/>
											</Block>
											<Block style="">
												<label for="">prevIconPosition: </label>
												<select
													name=""
													className=" bg-inherit text-inherit border-b"
													onChange={handleTabsPrevButtonPosition}
													value={tabsPrevButtonPositionSelect}>
													<option
														value="before"
														className="capitalize bg-bgColor dark:bg-darkBgColor text-textColor dark:text-darkTextColor px-2">
														before
													</option>
													<option
														value="after"
														className="capitalize bg-bgColor dark:bg-darkBgColor text-textColor dark:text-darkTextColor px-2">
														after
													</option>
												</select>
											</Block>
											<Block style="">
												<label for="">nextIconPosition: </label>
												<select
													name=""
													className=" bg-inherit text-inherit border-b"
													onChange={handleTabsNextButtonPosition}
													value={tabsNextButtonPositionSelect}>
													<option
														value="before"
														className="capitalize bg-bgColor dark:bg-darkBgColor text-textColor dark:text-darkTextColor px-2">
														before
													</option>
													<option
														value="after"
														className="capitalize bg-bgColor dark:bg-darkBgColor text-textColor dark:text-darkTextColor px-2">
														after
													</option>
												</select>
											</Block>
										</>
									)}
								</>
							)}
						</Block>
					</Block>
					{/* Tab Props */}
					<Block style="mt-8 p-3 pt-4 text-sm border border-solid border-darkBgColor dark:border-bgColor relative after:absolute after:content-['Tab_Props'] after:-top-3 after:left-1/2 after:-translate-x-1/2 after:border after:h-6 after:w-max after:flex after:items-center after:bg-bgColor dark:after:bg-darkBgColor after:px-2 rounded-md after:z-10 ">
						<Accordion active={true} style="mb-4">
							<AccordionHeader
								tagName="div"
								icon="fa-caret-right"
								iconLibrary="font-awesome"
								iconPosition="before"
								toggleIcon="fa-caret-down"
								toggleIconLibrary="font-awesome"
								style="bg-gray-300 hover:bg-gray-500 text-gray-950 hover:text-gray-950 px-4 py-2 rounded-t-lg rounded-b-lg dark:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer transition-all duration-300 ease "
								activeStyle="!rounded-b-none"
								deactivateStyle="opacity-50 cursor-not-allowed "
								labelStyle="text-textColor dark:text-darkTextColor "
								iconStyle="text-red-500 dark:text-yellow-500 mr-2 ">
								{tabs1HeaderTextSelect}
							</AccordionHeader>
							<AccordionDetails style="bg-gray-100 px-4 py-2 rounded-b-lg dark:bg-gray-900 border-x border-b ">
								<Block style="">
									<Text>value: 1</Text>
									<Block style="flex gap-3 items-center">
										<label for="" className="text-nowrap">
											Tab Header:{" "}
										</label>
										<input
											type="text"
											name=""
											id=""
											value={tabs1HeaderTextSelect}
											className=" bg-inherit text-inherit border-b w-full"
											placeholder="Tab Header Text"
											onChange={handleTabs1HeaderTextSelectChange}
										/>
									</Block>
								</Block>
							</AccordionDetails>
						</Accordion>
						<Accordion style="mb-4">
							<AccordionHeader
								tagName="div"
								icon="fa-caret-right"
								iconLibrary="font-awesome"
								iconPosition="before"
								toggleIcon="fa-caret-down"
								toggleIconLibrary="font-awesome"
								style="bg-gray-300 hover:bg-gray-500 text-gray-950 hover:text-gray-950 px-4 py-2 rounded-t-lg rounded-b-lg dark:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer transition-all duration-300 ease "
								activeStyle="!rounded-b-none"
								deactivateStyle="opacity-50 cursor-not-allowed "
								labelStyle="text-textColor dark:text-darkTextColor "
								iconStyle="text-red-500 dark:text-yellow-500 mr-2 ">
								{tabs2HeaderTextSelect}
							</AccordionHeader>
							<AccordionDetails style="bg-gray-100 px-4 py-2 rounded-b-lg dark:bg-gray-900 border-x border-b ">
								<Block style="">
									<Text>value: 2</Text>
									<Block style="flex gap-3 items-center">
										<label for="" className="text-nowrap">
											Tab Header:{" "}
										</label>
										<input
											type="text"
											name=""
											id=""
											value={tabs2HeaderTextSelect}
											className=" bg-inherit text-inherit border-b w-full"
											placeholder="Tab Header Text"
											onChange={handleTabs2HeaderTextSelectChange}
										/>
									</Block>
								</Block>
							</AccordionDetails>
						</Accordion>
						<Accordion style="mb-4">
							<AccordionHeader
								tagName="div"
								icon="fa-caret-right"
								iconLibrary="font-awesome"
								iconPosition="before"
								toggleIcon="fa-caret-down"
								toggleIconLibrary="font-awesome"
								style="bg-gray-300 hover:bg-gray-500 text-gray-950 hover:text-gray-950 px-4 py-2 rounded-t-lg rounded-b-lg dark:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer transition-all duration-300 ease "
								activeStyle="!rounded-b-none"
								deactivateStyle="opacity-50 cursor-not-allowed "
								labelStyle="text-textColor dark:text-darkTextColor "
								iconStyle="text-red-500 dark:text-yellow-500 mr-2 ">
								{tabs3HeaderTextSelect}
							</AccordionHeader>
							<AccordionDetails style="bg-gray-100 px-4 py-2 rounded-b-lg dark:bg-gray-900 border-x border-b ">
								<Block style="">
									<Text>value: 3</Text>
									<Block style="flex gap-3 items-center">
										<label for="" className="text-nowrap">
											Tab Header:{" "}
										</label>
										<input
											type="text"
											name=""
											id=""
											value={tabs3HeaderTextSelect}
											className=" bg-inherit text-inherit border-b w-full"
											placeholder="Tab Header Text"
											onChange={handleTabs3HeaderTextSelectChange}
										/>
									</Block>
								</Block>
							</AccordionDetails>
						</Accordion>
						<Accordion style="mb-4">
							<AccordionHeader
								tagName="div"
								icon="fa-caret-right"
								iconLibrary="font-awesome"
								iconPosition="before"
								toggleIcon="fa-caret-down"
								toggleIconLibrary="font-awesome"
								style="bg-gray-300 hover:bg-gray-500 text-gray-950 hover:text-gray-950 px-4 py-2 rounded-t-lg rounded-b-lg dark:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer transition-all duration-300 ease "
								activeStyle="!rounded-b-none"
								deactivateStyle="opacity-50 cursor-not-allowed "
								labelStyle="text-textColor dark:text-darkTextColor "
								iconStyle="text-red-500 dark:text-yellow-500 mr-2 ">
								{tabs4HeaderTextSelect}
							</AccordionHeader>
							<AccordionDetails style="bg-gray-100 px-4 py-2 rounded-b-lg dark:bg-gray-900 border-x border-b ">
								<Block style="">
									<Text>value: 1</Text>
									<Block style="flex gap-3 items-center">
										<label for="" className="text-nowrap">
											Tab Header:{" "}
										</label>
										<input
											type="text"
											name=""
											id=""
											value={tabs4HeaderTextSelect}
											className=" bg-inherit text-inherit border-b w-full"
											placeholder="Tab Header Text"
											onChange={handleTabs4HeaderTextSelectChange}
										/>
									</Block>
								</Block>
							</AccordionDetails>
						</Accordion>
					</Block>
					{/*  Tabs Panel Props  */}
					<Block style="mt-8 p-3 pt-4 text-sm border border-solid border-darkBgColor dark:border-bgColor relative after:absolute after:content-['Tabs_Panel_Props'] after:-top-3 after:left-1/2 after:-translate-x-1/2 after:border after:h-6 after:w-max after:flex after:items-center after:bg-bgColor dark:after:bg-darkBgColor after:px-2 rounded-md after:z-10 ">
						<Accordion active={true} style="mb-4">
							<AccordionHeader
								tagName="div"
								icon="fa-caret-right"
								iconLibrary="font-awesome"
								iconPosition="before"
								toggleIcon="fa-caret-down"
								toggleIconLibrary="font-awesome"
								style="bg-gray-300 hover:bg-gray-500 text-gray-950 hover:text-gray-950 px-4 py-2 rounded-t-lg rounded-b-lg dark:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer transition-all duration-300 ease "
								activeStyle="!rounded-b-none"
								deactivateStyle="opacity-50 cursor-not-allowed "
								labelStyle="text-textColor dark:text-darkTextColor "
								iconStyle="text-red-500 dark:text-yellow-500 mr-2 ">
								{tabs1HeaderTextSelect}
							</AccordionHeader>
							<AccordionDetails style="bg-gray-100 px-4 py-2 rounded-b-lg dark:bg-gray-900 border-x border-b ">
								<Block style="">
									<Block style="flex flex-col">
										<label for="" className="text-nowrap mb-3">
											Tabs Content:{" "}
										</label>
										<textarea
											type="text"
											name=""
											id=""
											value={tabs1PanelContentSelect}
											className=" bg-inherit text-inherit border-b w-full"
											placeholder="Tab Header Text"
											onChange={handleTabs1PanelContentSelectChange}
										/>
									</Block>
								</Block>
							</AccordionDetails>
						</Accordion>
						<Accordion style="mb-4">
							<AccordionHeader
								tagName="div"
								icon="fa-caret-right"
								iconLibrary="font-awesome"
								iconPosition="before"
								toggleIcon="fa-caret-down"
								toggleIconLibrary="font-awesome"
								style="bg-gray-300 hover:bg-gray-500 text-gray-950 hover:text-gray-950 px-4 py-2 rounded-t-lg rounded-b-lg dark:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer transition-all duration-300 ease "
								activeStyle="!rounded-b-none"
								deactivateStyle="opacity-50 cursor-not-allowed "
								labelStyle="text-textColor dark:text-darkTextColor "
								iconStyle="text-red-500 dark:text-yellow-500 mr-2 ">
								{tabs2HeaderTextSelect}
							</AccordionHeader>
							<AccordionDetails style="bg-gray-100 px-4 py-2 rounded-b-lg dark:bg-gray-900 border-x border-b ">
								<Block style="">
									<Block style="flex flex-col">
										<label for="" className="text-nowrap mb-3">
											Tabs Content:{" "}
										</label>
										<textarea
											type="text"
											name=""
											id=""
											value={tabs2PanelContentSelect}
											className=" bg-inherit text-inherit border-b w-full"
											placeholder="Tab Header Text"
											onChange={handleTabs2PanelContentSelectChange}
										/>
									</Block>
								</Block>
							</AccordionDetails>
						</Accordion>
						<Accordion style="mb-4">
							<AccordionHeader
								tagName="div"
								icon="fa-caret-right"
								iconLibrary="font-awesome"
								iconPosition="before"
								toggleIcon="fa-caret-down"
								toggleIconLibrary="font-awesome"
								style="bg-gray-300 hover:bg-gray-500 text-gray-950 hover:text-gray-950 px-4 py-2 rounded-t-lg rounded-b-lg dark:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer transition-all duration-300 ease "
								activeStyle="!rounded-b-none"
								deactivateStyle="opacity-50 cursor-not-allowed "
								labelStyle="text-textColor dark:text-darkTextColor "
								iconStyle="text-red-500 dark:text-yellow-500 mr-2 ">
								{tabs3HeaderTextSelect}
							</AccordionHeader>
							<AccordionDetails style="bg-gray-100 px-4 py-2 rounded-b-lg dark:bg-gray-900 border-x border-b ">
								<Block style="">
									<Block style="flex flex-col">
										<label for="" className="text-nowrap mb-3">
											Tabs Content:{" "}
										</label>
										<textarea
											type="text"
											name=""
											id=""
											value={tabs3PanelContentSelect}
											className=" bg-inherit text-inherit border-b w-full"
											placeholder="Tab Header Text"
											onChange={handleTabs3PanelContentSelectChange}
										/>
									</Block>
								</Block>
							</AccordionDetails>
						</Accordion>
						<Accordion style="mb-4">
							<AccordionHeader
								tagName="div"
								icon="fa-caret-right"
								iconLibrary="font-awesome"
								iconPosition="before"
								toggleIcon="fa-caret-down"
								toggleIconLibrary="font-awesome"
								style="bg-gray-300 hover:bg-gray-500 text-gray-950 hover:text-gray-950 px-4 py-2 rounded-t-lg rounded-b-lg dark:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer transition-all duration-300 ease "
								activeStyle="!rounded-b-none"
								deactivateStyle="opacity-50 cursor-not-allowed "
								labelStyle="text-textColor dark:text-darkTextColor "
								iconStyle="text-red-500 dark:text-yellow-500 mr-2 ">
								{tabs4HeaderTextSelect}
							</AccordionHeader>
							<AccordionDetails style="bg-gray-100 px-4 py-2 rounded-b-lg dark:bg-gray-900 border-x border-b ">
								<Block style="">
									<Block style="flex flex-col">
										<label for="" className="text-nowrap mb-3">
											Tabs Content:{" "}
										</label>
										<textarea
											type="text"
											name=""
											id=""
											value={tabs4PanelContentSelect}
											className=" bg-inherit text-inherit border-b w-full"
											placeholder="Tab Header Text"
											onChange={handleTabs4PanelContentSelectChange}
										/>
									</Block>
								</Block>
							</AccordionDetails>
						</Accordion>
					</Block>
				</Block>

				<Tabs
					active={tabsActiveTabSelect}
					orientation={tabsOrientationSelect}
					style="w-full"
					navWrapStyle="bg-blue-200 text-lg"
					panelWrapStyle="bg-blue-200 text-lg px-4 py-2">
					<TabsNav
						style="bg-gray-400 w-full justify-between"
						showButton={tabsShowButtonSelect}
						prevButtonText={tabsPrevButtonTextSelect}
						nextButtonText={tabsNextButtonTextSelect}
						iconButtonStyle="px-4 bg-red-500 border py-1"
						iconLibrary={tabsIconLibrarySelect}
						prevIcon={tabsPrevIconSelect}
						nextIcon={tabsNextIconSelect}
						prevIconPosition={tabsPrevButtonPositionSelect}
						nextIconPosition={tabsNextButtonPositionSelect}
						buttonTextEnabled={tabsButtonTextEnabledSelect}
						buttonStyle="px-4 border py-1"
						prevButtonStyle="text-red-900 whitespace-nowrap"
						nextButtonStyle="text-blue-900 whitespace-nowrap"
						activeTabStyle="!border-b-red-900 !border-b "
						disabledStyle="!text-white">
						<Tab
							value="1"
							style="bg-blue-500 transition-all px-4 py-1 duration-500 ease-in-out">
							{tabs1HeaderTextSelect}
						</Tab>
						<Tab
							value="2"
							style="bg-blue-600 transition-all px-4 py-1 border-b-red-900 duration-500 ease-in-out">
							{tabs2HeaderTextSelect}
						</Tab>
						<Tab
							value="3"
							style="bg-blue-700 transition-all px-4 py-1 border-b-red-900 duration-500 ease-in-out">
							{tabs3HeaderTextSelect}
						</Tab>
						<Tab
							value="4"
							style="bg-blue-700 transition-all px-4 py-1 border-b-red-900 duration-500 ease-in-out">
							{tabs4HeaderTextSelect}
						</Tab>
					</TabsNav>
					<TabPanel value="1" style="">
						{tabs1PanelContentSelect}
					</TabPanel>
					<TabPanel value="2" style="text-blue-600">
						{tabs2PanelContentSelect}
					</TabPanel>
					<TabPanel value="3" style="text-blue-700">
						{tabs3PanelContentSelect}
					</TabPanel>
					<TabPanel value="4" style="text-blue-700">
						{tabs4PanelContentSelect}
					</TabPanel>
				</Tabs>
			</Block>
		</div>
	);
};

export default PlayTabs;
