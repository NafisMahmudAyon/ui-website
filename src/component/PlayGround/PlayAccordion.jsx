import {
	Accordion,
	AccordionHeader,
	AccordionDetails,
	Block,
	Text,
} from "../test/Test";
import React, { useState } from "react";
import {
	bootstrapIcons,
	fontawesomeClasses,
	iconfontClasses,
} from "../components/Icons";
import CodeSnippet from "../components/CodeSnippet";

const PlayAccordion = () => {
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
	const iconLibrarySet = ["bootstrap-icons", "font-awesome", "icon-font"];

	const [accordionSelectTagName, setaccordionSelectTagName] = useState(
		tagName[0]
	);
	const handleAccordionSelectTagNameChange = (event) => {
		setaccordionSelectTagName(event.target.value);
	};
	const [accordionHeaderSelectTagName, setaccordionHeaderSelectTagName] =
		useState(tagName[0]);
	const handleAccordionHeaderSelectTagNameChange = (event) => {
		setaccordionHeaderSelectTagName(event.target.value);
	};
	const [accordionHeaderIconSelect, setaccordionHeaderIconSelect] =
		useState("fa-caret-right");
	const handleAccordionHeaderIconSelectChange = (event) => {
		setaccordionHeaderIconSelect(event.target.value);
	};
	const [
		accordionHeaderIconLibrarySelect,
		setaccordionHeaderIconLibrarySelect,
	] = useState("font-awesome");
	const handleAccordionHeaderIconLibrarySelectChange = (event) => {
		setaccordionHeaderIconLibrarySelect(event.target.value);
	};

	const [accordionHeaderToggleIconSelect, setaccordionHeaderToggleIconSelect] =
		useState("fa-caret-down");
	const handleAccordionHeaderToggleIconSelectChange = (event) => {
		setaccordionHeaderToggleIconSelect(event.target.value);
	};
	const [
		accordionHeaderToggleIconLibrarySelect,
		setaccordionHeaderToggleIconLibrarySelect,
	] = useState("font-awesome");
	const handleAccordionHeaderToggleIconLibrarySelectChange = (event) => {
		setaccordionHeaderToggleIconLibrarySelect(event.target.value);
	};
	const [
		accordionHeaderIconPositionSelect,
		setaccordionHeaderIconPositionSelect,
	] = useState("before");
	const handleAccordionHeaderIconPositionSelectChange = (event) => {
		setaccordionHeaderIconPositionSelect(event.target.value);
	};
	const [accordionHeaderLabelSelect, setaccordionHeaderLabelSelect] = useState(
		"Here you can add Accordion Header Label"
	);
	const handleAccordionHeaderLabelSelectChange = (event) => {
		setaccordionHeaderLabelSelect(event.target.value);
	};

	const [accordionDetailsSelectTagName, setaccordionDetailsSelectTagName] =
		useState(tagName[0]);
	const handleAccordionDetailsSelectTagNameChange = (event) => {
		setaccordionDetailsSelectTagName(event.target.value);
	};
	const [accordionDetailsLabelSelect, setaccordionDetailsLabelSelect] =
		useState(
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque nemo incidunt unde ipsam, labore tenetur sed nobis at, aut natus asperiores fuga rerum, facere fugiat quis id soluta quae veniam."
		);
	const handleAccordionDetailsLabelSelectChange = (event) => {
		setaccordionDetailsLabelSelect(event.target.value);
	};

	// useEffect(() => {
	// 	const link = document.createElement("link");
	// 	link.href = getStylesheetUrl(accordionHeaderIconLibrarySelect);
	// 	link.rel = "stylesheet";
	// 	document.head.appendChild(link);
	// 	return () => {
	// 		document.head.removeChild(link);
	// 	};
	// }, [accordionHeaderIconLibrarySelect]);

	// const getStylesheetUrl = (iconLibrary) => {
	// 	switch (iconLibrary) {
	// 		case "material-icons":
	// 			return "https://fonts.googleapis.com/icon?family=Material+Icons";
	// 		case "material-icons-outlined":
	// 			return "https://fonts.googleapis.com/icon?family=Material+Icons+Outlined";
	// 		case "material-icons-round":
	// 			return "https://fonts.googleapis.com/icon?family=Material+Icons+Round";
	// 		case "material-icons-sharp":
	// 			return "https://fonts.googleapis.com/icon?family=Material+Icons+Sharp";
	// 		case "material-icons-two-tone":
	// 			return "https://fonts.googleapis.com/icon?family=Material+Icons+Two+Tone";
	// 		case "bootstrap-icons":
	// 			return "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css";
	// 		case "font-awesome":
	// 			return "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
	// 		case "icon-font":
	// 			return "https://cdn.jsdelivr.net/npm/@icon/icofont@1.0.1-alpha.1/icofont.min.css";

	// 		default:
	// 			return "";
	// 	}
	// };

	// Define a map of component names to their corresponding component elements
	// const componentMap = {
	// 	accordion: <Accordion />,
	// 	avatar: <Avatar />,
	// 	badge: <Badge />,
	// 	"icon-button": <IconButton />,
	// 	icon: <Icon />,
	// 	list: <List />,
	// 	tabs: <Tabs />,
	// 	text: <Text />,
	// 	block: <Block />,
	// 	image: <Image />,
	// 	"image-gallery": <ImageGallery />,
	// 	grid: <Grid />,
	// 	flex: <Flex />,
	// 	comboList: <ComboList />,
	// };

	const [selectedWrapperTagName, setSelectedWrapperTagName] = useState(
		tagName[0]
	);
	const [accordionActiveStatus, setAccordionActiveStatus] = useState(null);
	console.log(accordionActiveStatus);

	const [activeChecked, setActiveChecked] = useState(false);
	const [deactivateChecked, setDeactivateChecked] = useState(false);

	const handleActiveChange = (event) => {
		setActiveChecked(event.target.checked);
		if (event.target.checked) {
			setDeactivateChecked(false); // Ensure only one checkbox is checked
			setAccordionActiveStatus(true);
		} else if (!event.target.checked && !deactivateChecked) {
			setAccordionActiveStatus(null);
		}
	};

	const handleDeactivateChange = (event) => {
		setDeactivateChecked(event.target.checked);
		if (event.target.checked) {
			setActiveChecked(false); // Ensure only one checkbox is checked
			setAccordionActiveStatus(false);
		} else if (!event.target.checked && !activeChecked) {
			setAccordionActiveStatus(null);
		}
	};

	const accordionStyle = {
		accordionStyles: "p-4 rounded-lg border border-gray-300 dark:bg-gray-800 ",
		accordionHeaderStyles:
			"bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-t-lg dark:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer ",
		accordionHeaderDeactivateStyles: "opacity-50 cursor-not-allowed ",
		accordionHeaderLabelStyles: "text-textColor dark:text-darkTextColor ",
		accordionHeaderActiveStyles: "!bg-blue-200 dark:bg-slate-800 ",
		accordionHeaderIconStyles: "text-red-500 dark:text-yellow-500 mr-2 ",
		accordionHeaderTextStyles: "text-textColor dark:text-darkTextColor ",
		accordionDetailsStyles:
			"bg-gray-100 px-4 py-2 rounded-b-lg dark:bg-gray-900 border-x border-b ",
		accordionDetailsTextStyles: "text-textColor dark:text-darkTextColor ",
	};

	const AccordionCodeContent = `
<Accordion
  tagName="${accordionSelectTagName}"
  ${accordionActiveStatus ? "active={true}" : ""}
  ${!accordionActiveStatus ? "deactivate={false}" : ""}
  styles="${accordionStyle.accordionStyles}"
>
  <AccordionHeader
    tagName="${accordionHeaderSelectTagName}"
    icon="${accordionHeaderIconSelect}"
    iconLibrary="${accordionHeaderIconLibrarySelect}"
    iconPosition="${accordionHeaderIconPositionSelect}"
    toggleIcon="${accordionHeaderToggleIconSelect}"
    toggleIconLibrary="${accordionHeaderToggleIconLibrarySelect}"
    styles="${accordionStyle.accordionHeaderStyles}"
    ${
			accordionActiveStatus
				? ""
				: `deactivateStyles="${accordionStyle.accordionHeaderDeactivateStyles}"`
		}
    labelStyles="${accordionStyle.accordionHeaderLabelStyles}"
    ${
			accordionActiveStatus
				? `activeStyles="${accordionStyle.accordionHeaderActiveStyles}"`
				: ""
		}
    iconStyles="${accordionStyle.accordionHeaderIconStyles}"
  >
    <Text tagName="span" styles="${accordionStyle.accordionHeaderTextStyles}">
      ${accordionHeaderLabelSelect}
    </Text>
  </AccordionHeader>
  <AccordionDetails
    tagName="${accordionDetailsSelectTagName}"
    styles="${accordionStyle.accordionDetailsStyles}"
  >
    <Text styles="${accordionStyle.accordionDetailsTextStyles}">
      ${accordionDetailsLabelSelect}
    </Text>
  </AccordionDetails>
</Accordion>`;

	console.log(AccordionCodeContent);

	return (
		<div>
			<Block styles="mb-6">
				<Block>
					{/*  Accordion Props  */}
					<Block styles="mt-8 p-3 pt-4 text-sm border border-solid border-darkBgColor dark:border-bgColor relative after:absolute after:content-['Accordion_Props'] after:-top-3 after:left-1/2 after:-translate-x-1/2  after:border after:h-6 after:w-max after:flex after:items-center after:bg-bgColor dark:after:bg-darkBgColor after:px-2 rounded-md after:z-10 ">
						<Block styles="">
							<label for="">tagName: </label>
							<select
								name=""
								className=" bg-inherit text-inherit border-b"
								onChange={handleAccordionSelectTagNameChange}
								value={accordionSelectTagName}>
								{tagName.map((component, i) => (
									<option
										value={component}
										key={i}
										className="capitalize bg-bgColor dark:bg-darkBgColor text-textColor dark:text-darkTextColor px-2">
										{component}
									</option>
								))}
							</select>
						</Block>
						<Block styles="flex gap-6 pt-4">
							<Block>
								<input
									type="checkbox"
									id="activeCheckbox"
									checked={accordionActiveStatus}
									onChange={handleActiveChange}
								/>
								<label htmlFor="activeCheckbox" className="pl-2">
									Active
								</label>
							</Block>
							<Block>
								<input
									type="checkbox"
									id="deactivateCheckbox"
									checked={deactivateChecked}
									onChange={handleDeactivateChange}
								/>
								<label htmlFor="deactivateCheckbox" className="pl-2">
									Deactivate
								</label>
							</Block>
						</Block>
					</Block>
					{/* Accordion Header Props  */}
					<Block styles="mt-8 p-3 pt-4 text-sm border border-solid border-darkBgColor dark:border-bgColor relative after:absolute after:content-['Accordion_Header_Props'] after:-top-3 after:left-1/2 after:-translate-x-1/2 after:border after:h-6 after:w-max after:flex after:items-center after:bg-bgColor dark:after:bg-darkBgColor after:px-2 rounded-md after:z-10 ">
						<Block styles="">
							<label for="">tagName: </label>
							<select
								name=""
								className=" bg-inherit text-inherit border-b"
								onChange={handleAccordionHeaderSelectTagNameChange}
								value={accordionHeaderSelectTagName}>
								{tagName.map((component, i) => (
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
							<label for="">iconLibrary: </label>
							<select
								name=""
								className=" bg-inherit text-inherit border-b"
								onChange={handleAccordionHeaderIconLibrarySelectChange}
								value={accordionHeaderIconLibrarySelect}>
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
						<Block styles="">
							<label for="">icon: </label>
							<select
								name=""
								className=" bg-inherit text-inherit border-b"
								onChange={handleAccordionHeaderIconSelectChange}
								value={accordionHeaderIconSelect}>
								{accordionHeaderIconLibrarySelect == "font-awesome" && (
									<>
										{fontawesomeClasses.map((component, i) => {
											const iconHtml = `<i class="fa-solid ${component}"></i>`;
											return (
												<option
													value={component}
													key={i}
													className="capitalize bg-bgColor dark:bg-darkBgColor text-textColor dark:text-darkTextColor px-2">
													{/* <span
															className="bg-red-700 h-4 w-4"
															dangerouslySetInnerHTML={{ __html: iconHtml }}
														/> */}
													{component}
												</option>
											);
										})}
									</>
								)}
								{accordionHeaderIconLibrarySelect == "bootstrap-icons" && (
									<>
										{bootstrapIcons.map((component, i) => {
											const iconHtml = `<i class="${component}"></i>`;
											return (
												<option
													value={component}
													key={i}
													className="capitalize bg-bgColor dark:bg-darkBgColor text-textColor dark:text-darkTextColor px-2">
													{/* <i className={`${component}`}></i> */}
													{component}
													{/* <span
															className="bg-red-700 h-4 w-4"
															dangerouslySetInnerHTML={{ __html: iconHtml }}
														/> */}
												</option>
											);
										})}
									</>
								)}
								{accordionHeaderIconLibrarySelect == "icon-font" && (
									<>
										{iconfontClasses.map((component, i) => {
											const iconHtml = `<i class="${component}"></i>`;
											return (
												<option
													value={component}
													key={i}
													className="capitalize bg-bgColor dark:bg-darkBgColor text-textColor dark:text-darkTextColor px-2">
													{/* <i className={`${component}`}></i> */}
													{component}
													{/* <span
															className="bg-red-700 h-4 w-4"
															dangerouslySetInnerHTML={{ __html: iconHtml }}
														/> */}
												</option>
											);
										})}
									</>
								)}
							</select>
						</Block>
						<Block styles="">
							<label for="">toggleIconLibrary: </label>
							<select
								name=""
								className=" bg-inherit text-inherit border-b"
								onChange={handleAccordionHeaderToggleIconLibrarySelectChange}
								value={accordionHeaderToggleIconLibrarySelect}>
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
						<Block styles="">
							<label for="">toggleIcon: </label>
							<select
								name=""
								className=" bg-inherit text-inherit border-b"
								onChange={handleAccordionHeaderToggleIconSelectChange}
								value={accordionHeaderToggleIconSelect}>
								{accordionHeaderToggleIconLibrarySelect == "font-awesome" && (
									<>
										{fontawesomeClasses.map((component, i) => {
											const iconHtml = `<i class="fa-solid ${component}"></i>`;
											return (
												<option
													value={component}
													key={i}
													className="capitalize bg-bgColor dark:bg-darkBgColor text-textColor dark:text-darkTextColor px-2">
													{/* <span
															className="bg-red-700 h-4 w-4"
															dangerouslySetInnerHTML={{ __html: iconHtml }}
														/> */}
													{component}
												</option>
											);
										})}
									</>
								)}
								{accordionHeaderToggleIconLibrarySelect ==
									"bootstrap-icons" && (
									<>
										{bootstrapIcons.map((component, i) => {
											const iconHtml = `<i class="${component}"></i>`;
											return (
												<option
													value={component}
													key={i}
													className="capitalize bg-bgColor dark:bg-darkBgColor text-textColor dark:text-darkTextColor px-2">
													{/* <i className={`${component}`}></i> */}
													{component}
													{/* <span
															className="bg-red-700 h-4 w-4"
															dangerouslySetInnerHTML={{ __html: iconHtml }}
														/> */}
												</option>
											);
										})}
									</>
								)}
								{accordionHeaderToggleIconLibrarySelect == "icon-font" && (
									<>
										{iconfontClasses.map((component, i) => {
											const iconHtml = `<i class="${component}"></i>`;
											return (
												<option
													value={component}
													key={i}
													className="capitalize bg-bgColor dark:bg-darkBgColor text-textColor dark:text-darkTextColor px-2">
													{/* <i className={`${component}`}></i> */}
													{component}
													{/* <span
															className="bg-red-700 h-4 w-4"
															dangerouslySetInnerHTML={{ __html: iconHtml }}
														/> */}
												</option>
											);
										})}
									</>
								)}
							</select>
						</Block>
						<Block styles="">
							<label for="">iconPosition: </label>
							<select
								name=""
								className=" bg-inherit text-inherit border-b"
								onChange={handleAccordionHeaderIconPositionSelectChange}
								value={accordionHeaderIconPositionSelect}>
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
						<Block>
							<label for="">label: </label>
							<input
								type="text"
								name=""
								id=""
								value={accordionHeaderLabelSelect}
								className=" bg-inherit text-inherit border-b w-full"
								placeholder="Here you can add Accordion Header Label"
								onChange={handleAccordionHeaderLabelSelectChange}
							/>
						</Block>
					</Block>
					{/*  Accordion Details Props  */}
					<Block styles="mt-8 p-3 pt-4 text-sm border border-solid border-darkBgColor dark:border-bgColor relative after:absolute after:content-['Accordion_Details_Props'] after:-top-3 after:left-1/2 after:-translate-x-1/2 after:border after:h-6 after:w-max after:flex after:items-center after:bg-bgColor dark:after:bg-darkBgColor after:px-2 rounded-md after:z-10 ">
						<Block styles="">
							<label for="">tagName: </label>
							<select
								name=""
								className=" bg-inherit text-inherit border-b"
								onChange={handleAccordionDetailsSelectTagNameChange}
								value={accordionDetailsSelectTagName}>
								{tagName.map((component, i) => (
									<option
										value={component}
										key={i}
										className="capitalize bg-bgColor dark:bg-darkBgColor text-textColor dark:text-darkTextColor px-2">
										{component}
									</option>
								))}
							</select>
						</Block>
						<Block>
							<label for="">Details Content: </label>
							<textarea
								name=""
								id=""
								value={accordionDetailsLabelSelect}
								className=" bg-inherit text-inherit border-b w-full"
								placeholder="Here you can add Accordion Header Label"
								onChange={handleAccordionDetailsLabelSelectChange}
							/>
						</Block>
					</Block>
				</Block>

				<Accordion
					tagName={accordionSelectTagName}
					active={accordionActiveStatus === true}
					deactivate={accordionActiveStatus === false}
					styles=""
					HeaderStyles="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg dark:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer border transition-all duration-200 "
					deactivateHeaderStyles="opacity-50 cursor-not-allowed"
					activeHeaderStyles="!bg-blue-200 dark:!bg-gray-600 border border-b-transparent !rounded-b-none "
					DetailsStyles="">
					<AccordionHeader
						tagName={accordionHeaderSelectTagName}
						icon={accordionHeaderIconSelect}
						iconLibrary={accordionHeaderIconLibrarySelect}
						iconPosition={accordionHeaderIconPositionSelect}
						toggleIcon={accordionHeaderToggleIconSelect}
						toggleIconLibrary={accordionHeaderToggleIconLibrarySelect}
						labelStyles="text-textColor dark:text-darkTextColor"
						iconStyles="text-red-500 dark:text-yellow-500 mr-2">
						<Text
							tagName={"span"}
							styles="text-textColor dark:text-darkTextColor">
							{accordionHeaderLabelSelect}
						</Text>
					</AccordionHeader>
					<AccordionDetails
						tagName={accordionDetailsSelectTagName}
						active={accordionActiveStatus === true}
						styles=" bg-gray-100 px-4 py-2 rounded-b-lg dark:bg-gray-900 border-x border-b">
						<Text styles="text-textColor dark:text-darkTextColor">
							{accordionDetailsLabelSelect}
						</Text>
					</AccordionDetails>
				</Accordion>

				<Block styles="mt-6">
					<CodeSnippet
						lang="jsx"
						content={AccordionCodeContent}
						onClick={() => {
							handleCopyClick(AccordionCodeContent);
						}}
					/>
				</Block>
			</Block>
		</div>
	);
};

export default PlayAccordion;
