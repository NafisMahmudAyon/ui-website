import {
	Accordion,
	AccordionHeader,
	AccordionDetails,
	Block,
	Text,
	Icon,
} from "landing-page-ui";
import { TabsNav, Tabs, Tab, TabsPanel } from "landing-page-ui";
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
	const [tabsNextIconSelect, settabsNextIconSelect] =
		useState("fa-caret-right");
	const handleTabsNextIconSelectChange = (event) => {
		settabsNextIconSelect(event.target.value);
	};
	const [tabsPrevIconVerticalSelect, settabsPrevIconVerticalSelect] =
		useState("fa-sort-up");
	const handleTabsPrevIconVerticalSelectChange = (event) => {
		settabsPrevIconVerticalSelect(event.target.value);
	};
	const [tabsNextIconVerticalSelect, settabsNextIconVerticalSelect] =
		useState("fa-sort-down");
	const handleTabsNextIconVerticalSelectChange = (event) => {
		settabsNextIconVerticalSelect(event.target.value);
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

	const [tabs1HeaderTextSelect, settabs1HeaderTextSelect] = useState("Tab 1");
	const handleTabs1HeaderTextSelectChange = (event) => {
		settabs1HeaderTextSelect(event.target.value);
	};
	const [tabs2HeaderTextSelect, settabs2HeaderTextSelect] = useState("Tab 2");
	const handleTabs2HeaderTextSelectChange = (event) => {
		settabs2HeaderTextSelect(event.target.value);
	};
	const [tabs3HeaderTextSelect, settabs3HeaderTextSelect] = useState("Tab 3");
	const handleTabs3HeaderTextSelectChange = (event) => {
		settabs3HeaderTextSelect(event.target.value);
	};
	const [tabs4HeaderTextSelect, settabs4HeaderTextSelect] = useState("Tab 4");
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

	const tabsStyleHorizontal = {
		tabsStyles: "w-full",
		tabsNavWrapStyles: "text-sm",
		tabsPanelWrapStyles:
			"px-4 py-2 bg-gray-200 text-gray-800 mt-2 shadow-md rounded-md  ",
		tabsNavStyles: "bg-gray-300 flex justify-between text-gray-800 py-1 px-1",
		tabsNavIconButtonStyles: "mx-1",
		tabsNavButtonStyles:
			"px-2 rounded-sm bg-blue-400 shadow-md text-gray-800 py-1",
		tabsNavPrevButtonStyles: "text-blue-900 whitespace-nowrap",
		tabsNavNextButtonStyles: "text-blue-900 whitespace-nowrap",
		tabsNavActiveTabStyles: "bg-white rounded-sm shadow-md",
		tabsNavDisabledStyles: "!text-white !bg-red-500 !shadow-none",
		tabsTabStyles: "px-4 py-1",
		tabsTabsPanelStyles: "",
	};
	const tabsStyleVertical = {
		tabsStyles: "w-full rounded-l-md overflow-hidden",
		tabsNavWrapStyles: "text-sm w-1/4",
		tabsPanelWrapStyles:
			"px-4 py-2 bg-gray-200 text-gray-800 shadow-md rounded-r-md w-3/4",
		tabsNavStyles:
			"bg-gray-300 flex gap-2 h-full justify-center items-center text-gray-800 p-1",
		tabsNavAreaStyles: "flex flex-col gap-2 w-full",
		tabsNavIconButtonStyles: "mx-1",
		tabsNavButtonStyles:
			"w-full rounded-sm bg-blue-400 shadow-md text-gray-800 py-1",
		tabsNavPrevButtonStyles: "text-blue-900 whitespace-nowrap",
		tabsNavNextButtonStyles: "text-blue-900 whitespace-nowrap",
		tabsNavActiveTabStyles: "bg-white rounded-sm shadow-md",
		tabsNavDisabledStyles: "!text-white !bg-red-500 !shadow-none",
		tabsTabStyles: "px-4 py-1",
		tabsTabsPanelStyles: "",
	};

	const TabsCodeContentHorizontal = `
<Tabs
	active="${tabsActiveTabSelect}"
	orientation="${tabsOrientationSelect}"
	navWrapStyles="${tabsStyleHorizontal.tabsNavWrapStyles}"
	panelWrapStyles="${tabsStyleHorizontal.tabsPanelWrapStyles}"
	styles="${tabsStyleHorizontal.tabsStyles}">
	<TabsNav
		showButton=${tabsShowButtonSelect}${
		tabsShowButtonSelect
			? `iconLibrary="${tabsIconLibrarySelect}"
		prevIcon="${tabsPrevIconSelect}"
		nextIcon="${tabsNextIconSelect}"
		buttonTextEnabled=${tabsButtonTextEnabledSelect}`
			: ""
	}${
		tabsButtonTextEnabledSelect
			? `prevButtonText="${tabsPrevButtonTextSelect}"
		nextButtonText="${tabsNextButtonTextSelect}"
		prevIconPosition="${tabsPrevButtonPositionSelect}"
		nextIconPosition="${tabsNextButtonPositionSelect}"`
			: ""
	}
		styles="${tabsStyleHorizontal.tabsNavStyles}"
		${
			tabsShowButtonSelect
				? `iconButtonStyles="${tabsStyleHorizontal.tabsNavIconButtonStyles}"
		buttonStyles="${tabsStyleHorizontal.tabsNavButtonStyles}"
		prevButtonStyles="${tabsStyleHorizontal.tabsNavPrevButtonStyles}"
		nextButtonStyles="${tabsStyleHorizontal.tabsNavNextButtonStyles}"
		disabledStyles="${tabsStyleHorizontal.tabsNavDisabledStyles}"`
				: ""
		}activeTabStyles="${tabsStyleHorizontal.tabsNavActiveTabStyles}">
		<Tab
			value="1"
			styles="${tabsStyleHorizontal.tabsTabStyles}">
			${tabs1HeaderTextSelect}
		</Tab>
		<Tab
			value="2"
			styles="${tabsStyleHorizontal.tabsTabStyles}">
			${tabs2HeaderTextSelect}
		</Tab>
		<Tab
			value="3"
			styles="${tabsStyleHorizontal.tabsTabStyles}">
			${tabs3HeaderTextSelect}
		</Tab>
		<Tab
			value="4"
			styles="${tabsStyleHorizontal.tabsTabStyles}">
			${tabs4HeaderTextSelect}
		</Tab>
	</TabsNav>
	<TabsPanel value="1" styles="${tabsStyleHorizontal.tabsTabsPanelStyles}">
		${tabs1PanelContentSelect}
	</TabsPanel>
	<TabsPanel value="2" styles="${tabsStyleHorizontal.tabsTabsPanelStyles}">
		${tabs2PanelContentSelect}
	</TabsPanel>
	<TabsPanel value="3" styles="${tabsStyleHorizontal.tabsTabsPanelStyles}">
		${tabs3PanelContentSelect}
	</TabsPanel>
	<TabsPanel value="4" styles="${tabsStyleHorizontal.tabsTabsPanelStyles}">
		${tabs4PanelContentSelect}
	</TabsPanel>
</Tabs>`;
	const TabsCodeContentVertical = `
<Tabs
	active="${tabsActiveTabSelect}"
	orientation="${tabsOrientationSelect}"
	navWrapStyles="${tabsStyleVertical.tabsNavWrapStyles}"
	panelWrapStyles="${tabsStyleVertical.tabsPanelWrapStyles}"
	styles="${tabsStyleVertical.tabsStyles}">
	<TabsNav
		showButton=${tabsShowButtonSelect}${
		tabsShowButtonSelect
			? `iconLibrary="${tabsIconLibrarySelect}"
		prevIcon="${tabsPrevIconVerticalSelect}"
		nextIcon="${tabsNextIconVerticalSelect}"
		buttonTextEnabled=${tabsButtonTextEnabledSelect}`
			: ""
	}${
		tabsButtonTextEnabledSelect
			? `prevButtonText="${tabsPrevButtonTextSelect}"
		nextButtonText="${tabsNextButtonTextSelect}"
		prevIconPosition="${tabsPrevButtonPositionSelect}"
		nextIconPosition="${tabsNextButtonPositionSelect}"`
			: ""
	}
		styles="${tabsStyleVertical.tabsNavStyles}"
		${
			tabsShowButtonSelect
				? `iconButtonStyles="${tabsStyleVertical.tabsNavIconButtonStyles}"
		buttonStyles="${tabsStyleVertical.tabsNavButtonStyles}"
		prevButtonStyles="${tabsStyleVertical.tabsNavPrevButtonStyles}"
		nextButtonStyles="${tabsStyleVertical.tabsNavNextButtonStyles}"
		disabledStyles="${tabsStyleVertical.tabsNavDisabledStyles}"`
				: ""
		}activeTabStyles="${tabsStyleVertical.tabsNavActiveTabStyles}">
		<Tab
			value="1"
			styles="${tabsStyleVertical.tabsTabStyles}">
			${tabs1HeaderTextSelect}
		</Tab>
		<Tab
			value="2"
			styles="${tabsStyleVertical.tabsTabStyles}">
			${tabs2HeaderTextSelect}
		</Tab>
		<Tab
			value="3"
			styles="${tabsStyleVertical.tabsTabStyles}">
			${tabs3HeaderTextSelect}
		</Tab>
		<Tab
			value="4"
			styles="${tabsStyleVertical.tabsTabStyles}">
			${tabs4HeaderTextSelect}
		</Tab>
	</TabsNav>
	<TabsPanel value="1" styles="${tabsStyleVertical.tabsTabsPanelStyles}">
		${tabs1PanelContentSelect}
	</TabsPanel>
	<TabsPanel value="2" styles="${tabsStyleVertical.tabsTabsPanelStyles}">
		${tabs2PanelContentSelect}
	</TabsPanel>
	<TabsPanel value="3" styles="${tabsStyleVertical.tabsTabsPanelStyles}">
		${tabs3PanelContentSelect}
	</TabsPanel>
	<TabsPanel value="4" styles="${tabsStyleVertical.tabsTabsPanelStyles}">
		${tabs4PanelContentSelect}
	</TabsPanel>
</Tabs>`;

	return (
		<div>
			<Block styles="mb-6">
				<Block>
					{/*  Tabs Props  */}
					<Block styles="mt-8 p-3 pt-4 text-sm border border-solid border-darkBgColor dark:border-bgColor relative after:absolute after:content-['Tabs_Props'] after:-top-3 after:left-1/2 after:-translate-x-1/2  after:border after:h-6 after:w-max after:flex after:items-center after:bg-bgColor dark:after:bg-darkBgColor after:px-2 rounded-md after:z-10 ">
						<Block styles="">
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
						<Block styles="">
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
					<Block styles="mt-8 p-3 pt-4 text-sm border border-solid border-darkBgColor dark:border-bgColor relative after:absolute after:content-['Tabs_Nav_Props'] after:-top-3 after:left-1/2 after:-translate-x-1/2 after:border after:h-6 after:w-max after:flex after:items-center after:bg-bgColor dark:after:bg-darkBgColor after:px-2 rounded-md after:z-10 ">
						<Block styles="">
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
							<Block styles="">
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
									<Block styles="">
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
									{tabsOrientationSelect == "horizontal" && (
										<>
											<Block styles="">
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
											<Block styles="">
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
										</>
									)}
									{tabsOrientationSelect == "vertical" && (
										<>
											<Block styles="">
												<label for="">prevIcon: </label>
												<select
													name=""
													className=" bg-inherit text-inherit border-b"
													onChange={handleTabsPrevIconVerticalSelectChange}
													value={tabsPrevIconVerticalSelect}>
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
											<Block styles="">
												<label for="">nextIcon: </label>
												<select
													name=""
													className=" bg-inherit text-inherit border-b"
													onChange={handleTabsNextIconVerticalSelectChange}
													value={tabsNextIconVerticalSelect}>
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
										</>
									)}
									{tabsButtonTextEnabledSelect && (
										<>
											<Block styles="flex gap-3 w-full">
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
											<Block styles="flex gap-3 w-full">
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
											<Block styles="">
												<label for="">prevIconPosition: </label>
												<select
													name=""
													className=" bg-inherit text-inherit border-b"
													onChange={handleTabsPrevButtonPosition}
													value={tabsPrevButtonPositionSelect}>
													<option
														value="left"
														className="capitalize bg-bgColor dark:bg-darkBgColor text-textColor dark:text-darkTextColor px-2">
														left
													</option>
													<option
														value="right"
														className="capitalize bg-bgColor dark:bg-darkBgColor text-textColor dark:text-darkTextColor px-2">
														right
													</option>
												</select>
											</Block>
											<Block styles="">
												<label for="">nextIconPosition: </label>
												<select
													name=""
													className=" bg-inherit text-inherit border-b"
													onChange={handleTabsNextButtonPosition}
													value={tabsNextButtonPositionSelect}>
													<option
														value="left"
														className="capitalize bg-bgColor dark:bg-darkBgColor text-textColor dark:text-darkTextColor px-2">
														left
													</option>
													<option
														value="right"
														className="capitalize bg-bgColor dark:bg-darkBgColor text-textColor dark:text-darkTextColor px-2">
														right
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
					<Block styles="mt-8 p-3 pt-4 text-sm border border-solid border-darkBgColor dark:border-bgColor relative after:absolute after:content-['Tab_Props'] after:-top-3 after:left-1/2 after:-translate-x-1/2 after:border after:h-6 after:w-max after:flex after:items-center after:bg-bgColor dark:after:bg-darkBgColor after:px-2 rounded-md after:z-10 ">
						<Accordion active={true} styles="mb-4">
							<AccordionHeader
								tagName="div"
								icon="fa-caret-right"
								iconLibrary="font-awesome"
								iconPosition="before"
								toggleIcon="fa-caret-down"
								toggleIconLibrary="font-awesome"
								styles="bg-gray-300 hover:bg-gray-500 text-gray-950 hover:text-gray-950 px-4 py-2 rounded-t-lg rounded-b-lg dark:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer transition-all duration-300 ease "
								activeStyles="!rounded-b-none"
								deactivateStyles="opacity-50 cursor-not-allowed "
								labelStyles="text-textColor dark:text-darkTextColor "
								iconStyles="text-red-500 dark:text-yellow-500 mr-2 ">
								{tabs1HeaderTextSelect}
							</AccordionHeader>
							<AccordionDetails styles="bg-gray-100 px-4 py-2 rounded-b-lg dark:bg-gray-900 border-x border-b ">
								<Block styles="">
									<Text>value: 1</Text>
									<Block styles="flex gap-3 items-center">
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
						<Accordion styles="mb-4">
							<AccordionHeader
								tagName="div"
								icon="fa-caret-right"
								iconLibrary="font-awesome"
								iconPosition="before"
								toggleIcon="fa-caret-down"
								toggleIconLibrary="font-awesome"
								styles="bg-gray-300 hover:bg-gray-500 text-gray-950 hover:text-gray-950 px-4 py-2 rounded-t-lg rounded-b-lg dark:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer transition-all duration-300 ease "
								activeStyles="!rounded-b-none"
								deactivateStyles="opacity-50 cursor-not-allowed "
								labelStyles="text-textColor dark:text-darkTextColor "
								iconStyles="text-red-500 dark:text-yellow-500 mr-2 ">
								{tabs2HeaderTextSelect}
							</AccordionHeader>
							<AccordionDetails styles="bg-gray-100 px-4 py-2 rounded-b-lg dark:bg-gray-900 border-x border-b ">
								<Block styles="">
									<Text>value: 2</Text>
									<Block styles="flex gap-3 items-center">
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
						<Accordion styles="mb-4">
							<AccordionHeader
								tagName="div"
								icon="fa-caret-right"
								iconLibrary="font-awesome"
								iconPosition="before"
								toggleIcon="fa-caret-down"
								toggleIconLibrary="font-awesome"
								styles="bg-gray-300 hover:bg-gray-500 text-gray-950 hover:text-gray-950 px-4 py-2 rounded-t-lg rounded-b-lg dark:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer transition-all duration-300 ease "
								activeStyles="!rounded-b-none"
								deactivateStyles="opacity-50 cursor-not-allowed "
								labelStyles="text-textColor dark:text-darkTextColor "
								iconStyles="text-red-500 dark:text-yellow-500 mr-2 ">
								{tabs3HeaderTextSelect}
							</AccordionHeader>
							<AccordionDetails styles="bg-gray-100 px-4 py-2 rounded-b-lg dark:bg-gray-900 border-x border-b ">
								<Block styles="">
									<Text>value: 3</Text>
									<Block styles="flex gap-3 items-center">
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
						<Accordion styles="mb-4">
							<AccordionHeader
								tagName="div"
								icon="fa-caret-right"
								iconLibrary="font-awesome"
								iconPosition="before"
								toggleIcon="fa-caret-down"
								toggleIconLibrary="font-awesome"
								styles="bg-gray-300 hover:bg-gray-500 text-gray-950 hover:text-gray-950 px-4 py-2 rounded-t-lg rounded-b-lg dark:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer transition-all duration-300 ease "
								activeStyles="!rounded-b-none"
								deactivateStyles="opacity-50 cursor-not-allowed "
								labelStyles="text-textColor dark:text-darkTextColor "
								iconStyles="text-red-500 dark:text-yellow-500 mr-2 ">
								{tabs4HeaderTextSelect}
							</AccordionHeader>
							<AccordionDetails styles="bg-gray-100 px-4 py-2 rounded-b-lg dark:bg-gray-900 border-x border-b ">
								<Block styles="">
									<Text>value: 1</Text>
									<Block styles="flex gap-3 items-center">
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
					<Block styles="mt-8 p-3 pt-4 text-sm border border-solid border-darkBgColor dark:border-bgColor relative after:absolute after:content-['Tabs_Panel_Props'] after:-top-3 after:left-1/2 after:-translate-x-1/2 after:border after:h-6 after:w-max after:flex after:items-center after:bg-bgColor dark:after:bg-darkBgColor after:px-2 rounded-md after:z-10 ">
						<Accordion active={true} styles="mb-4">
							<AccordionHeader
								tagName="div"
								icon="fa-caret-right"
								iconLibrary="font-awesome"
								iconPosition="before"
								toggleIcon="fa-caret-down"
								toggleIconLibrary="font-awesome"
								styles="bg-gray-300 hover:bg-gray-500 text-gray-950 hover:text-gray-950 px-4 py-2 rounded-t-lg rounded-b-lg dark:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer transition-all duration-300 ease "
								activeStyles="!rounded-b-none"
								deactivateStyles="opacity-50 cursor-not-allowed "
								labelStyles="text-textColor dark:text-darkTextColor "
								iconStyles="text-red-500 dark:text-yellow-500 mr-2 ">
								{tabs1HeaderTextSelect}
							</AccordionHeader>
							<AccordionDetails styles="bg-gray-100 px-4 py-2 rounded-b-lg dark:bg-gray-900 border-x border-b ">
								<Block styles="">
									<Block styles="flex flex-col">
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
						<Accordion styles="mb-4">
							<AccordionHeader
								tagName="div"
								icon="fa-caret-right"
								iconLibrary="font-awesome"
								iconPosition="before"
								toggleIcon="fa-caret-down"
								toggleIconLibrary="font-awesome"
								styles="bg-gray-300 hover:bg-gray-500 text-gray-950 hover:text-gray-950 px-4 py-2 rounded-t-lg rounded-b-lg dark:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer transition-all duration-300 ease "
								activeStyles="!rounded-b-none"
								deactivateStyles="opacity-50 cursor-not-allowed "
								labelStyles="text-textColor dark:text-darkTextColor "
								iconStyles="text-red-500 dark:text-yellow-500 mr-2 ">
								{tabs2HeaderTextSelect}
							</AccordionHeader>
							<AccordionDetails styles="bg-gray-100 px-4 py-2 rounded-b-lg dark:bg-gray-900 border-x border-b ">
								<Block styles="">
									<Block styles="flex flex-col">
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
						<Accordion styles="mb-4">
							<AccordionHeader
								tagName="div"
								icon="fa-caret-right"
								iconLibrary="font-awesome"
								iconPosition="before"
								toggleIcon="fa-caret-down"
								toggleIconLibrary="font-awesome"
								styles="bg-gray-300 hover:bg-gray-500 text-gray-950 hover:text-gray-950 px-4 py-2 rounded-t-lg rounded-b-lg dark:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer transition-all duration-300 ease "
								activeStyles="!rounded-b-none"
								deactivateStyles="opacity-50 cursor-not-allowed "
								labelStyles="text-textColor dark:text-darkTextColor "
								iconStyles="text-red-500 dark:text-yellow-500 mr-2 ">
								{tabs3HeaderTextSelect}
							</AccordionHeader>
							<AccordionDetails styles="bg-gray-100 px-4 py-2 rounded-b-lg dark:bg-gray-900 border-x border-b ">
								<Block styles="">
									<Block styles="flex flex-col">
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
						<Accordion styles="mb-4">
							<AccordionHeader
								tagName="div"
								icon="fa-caret-right"
								iconLibrary="font-awesome"
								iconPosition="before"
								toggleIcon="fa-caret-down"
								toggleIconLibrary="font-awesome"
								styles="bg-gray-300 hover:bg-gray-500 text-gray-950 hover:text-gray-950 px-4 py-2 rounded-t-lg rounded-b-lg dark:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer transition-all duration-300 ease "
								activeStyles="!rounded-b-none"
								deactivateStyles="opacity-50 cursor-not-allowed "
								labelStyles="text-textColor dark:text-darkTextColor "
								iconStyles="text-red-500 dark:text-yellow-500 mr-2 ">
								{tabs4HeaderTextSelect}
							</AccordionHeader>
							<AccordionDetails styles="bg-gray-100 px-4 py-2 rounded-b-lg dark:bg-gray-900 border-x border-b ">
								<Block styles="">
									<Block styles="flex flex-col">
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

				<Block styles="mt-8 p-3 pt-6 text-sm border border-solid border-darkBgColor dark:border-bgColor relative after:absolute after:content-['Output'] after:-top-3 after:left-1/2 after:-translate-x-1/2 after:border after:h-6 after:w-max after:flex after:items-center after:bg-bgColor dark:after:bg-darkBgColor after:px-2 rounded-md after:z-10 ">
					{tabsOrientationSelect == "vertical" && (
						<Tabs
							active={tabsActiveTabSelect}
							orientation={tabsOrientationSelect}
							styles="w-full rounded-l-md overflow-hidden"
							navWrapStyles="text-sm w-1/4 "
							panelWrapStyles="px-4 py-2 bg-gray-200 text-gray-800 shadow-md rounded-r-md w-3/4 ">
							<TabsNav
								showButton={tabsShowButtonSelect}
								prevButtonText={tabsPrevButtonTextSelect}
								nextButtonText={tabsNextButtonTextSelect}
								iconLibrary={tabsIconLibrarySelect}
								prevIcon={tabsPrevIconVerticalSelect}
								nextIcon={tabsNextIconVerticalSelect}
								prevIconPosition={tabsPrevButtonPositionSelect}
								nextIconPosition={tabsNextButtonPositionSelect}
								buttonTextEnabled={tabsButtonTextEnabledSelect}
								styles="bg-gray-300 flex gap-2 h-full justify-center items-center text-gray-800 p-1 "
								tabAreaStyles="flex flex-col gap-2 w-full"
								iconButtonStyles="mx-1"
								buttonStyles="w-full rounded-sm bg-blue-400 shadow-md text-gray-800 py-1"
								prevButtonStyles="text-blue-900 whitespace-nowrap"
								nextButtonStyles="text-blue-900 whitespace-nowrap"
								activeTabStyles="bg-white rounded-sm shadow-md "
								disabledStyles="!text-white !bg-blue-300 !shadow-none ">
								<Tab value="1" styles=" px-4 py-1 ">
									{tabs1HeaderTextSelect}
								</Tab>
								<Tab value="2" styles=" px-4 py-1 ">
									{tabs2HeaderTextSelect}
								</Tab>
								<Tab value="3" styles=" px-4 py-1 ">
									{tabs3HeaderTextSelect}
								</Tab>
								<Tab value="4" styles=" px-4 py-1  ">
									{tabs4HeaderTextSelect}
								</Tab>
							</TabsNav>
							<TabsPanel value="1" styles="">
								{tabs1PanelContentSelect}
							</TabsPanel>
							<TabsPanel value="2" styles="">
								{tabs2PanelContentSelect}
							</TabsPanel>
							<TabsPanel value="3" styles="">
								{tabs3PanelContentSelect}
							</TabsPanel>
							<TabsPanel value="4" styles="">
								{tabs4PanelContentSelect}
							</TabsPanel>
						</Tabs>
					)}
					{tabsOrientationSelect == "horizontal" && (
						<Tabs
							active={tabsActiveTabSelect}
							orientation={tabsOrientationSelect}
							styles="w-full "
							navWrapStyles="text-sm"
							panelWrapStyles="px-4 py-2 bg-gray-200 text-gray-800 mt-2 shadow-md rounded-md ">
							<TabsNav
								showButton={tabsShowButtonSelect}
								prevButtonText={tabsPrevButtonTextSelect}
								nextButtonText={tabsNextButtonTextSelect}
								iconLibrary={tabsIconLibrarySelect}
								prevIcon={tabsPrevIconSelect}
								nextIcon={tabsNextIconSelect}
								prevIconPosition={tabsPrevButtonPositionSelect}
								nextIconPosition={tabsNextButtonPositionSelect}
								buttonTextEnabled={tabsButtonTextEnabledSelect}
								styles="bg-gray-300 flex justify-between text-gray-800 py-1 px-1"
								iconButtonStyles="mx-1"
								buttonStyles="px-2 rounded-sm bg-blue-400 shadow-md text-gray-800 py-1"
								prevButtonStyles="text-blue-900 whitespace-nowrap"
								nextButtonStyles="text-blue-900 whitespace-nowrap"
								activeTabStyles="bg-white rounded-sm shadow-md "
								disabledStyles="!text-white !bg-blue-300 !shadow-none ">
								<Tab value="1" styles=" px-4 py-1 ">
									{tabs1HeaderTextSelect}
								</Tab>
								<Tab value="2" styles=" px-4 py-1 ">
									{tabs2HeaderTextSelect}
								</Tab>
								<Tab value="3" styles=" px-4 py-1 ">
									{tabs3HeaderTextSelect}
								</Tab>
								<Tab value="4" styles=" px-4 py-1  ">
									{tabs4HeaderTextSelect}
								</Tab>
							</TabsNav>
							<TabsPanel value="1" styles="">
								{tabs1PanelContentSelect}
							</TabsPanel>
							<TabsPanel value="2" styles="">
								{tabs2PanelContentSelect}
							</TabsPanel>
							<TabsPanel value="3" styles="">
								{tabs3PanelContentSelect}
							</TabsPanel>
							<TabsPanel value="4" styles="">
								{tabs4PanelContentSelect}
							</TabsPanel>
						</Tabs>
					)}
				</Block>
			</Block>
			<Block styles="mt-6">
				{tabsOrientationSelect == "vertical" && (
					<CodeSnippet
						lang="jsx"
						content={TabsCodeContentVertical}
						onClick={() => {
							handleCopyClick(TabsCodeContentVertical);
						}}
					/>
				)}
				{tabsOrientationSelect == "horizontal" && (
					<CodeSnippet
						lang="jsx"
						content={TabsCodeContentHorizontal}
						onClick={() => {
							handleCopyClick(TabsCodeContentHorizontal);
						}}
					/>
				)}
			</Block>
		</div>
	);
};

export default PlayTabs;
