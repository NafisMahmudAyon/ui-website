import React from "react";
import { Accordion, AccordionDetails, AccordionHeader } from "landing-page-ui";
import Links from "../../links";

const LeftSideBar = () => {
	const pathName = window.location.pathname;
	console.log(pathName);
	return (
		<div className="pt-2">
			{Object.entries(Links).map(([category, links]) => {
				if (category === "Home") {
					return null; // Skip rendering for category "Name"
				}
				console.log(category);
				let active = false;
				if (
					(pathName.includes("/variations") && category === "Variations") ||
					(pathName.includes("/components") && category === "Components")
				) {
					active = true;
				} else if (
					pathName.includes("/install") &&
					category === "Components"
				) {
					active = true;
				} else if (
					pathName.includes("/install") &&
					category === "Getting Started"
				) {
					active = true;
				}
				return (
					<Accordion
						key={category}
						// active={category == "Variations" ? false : true}
						active={active
							// (pathName.includes("/variations") && category === "Variations") ||
							// (pathName.includes("/components") && category === "Components")
							// 	? true
							// 	: pathName.includes("/install") && category === "Variations" ? false 
							// 	: pathName.includes("/install") 
							// 	? true: false
						}
						styles=" "
						variant="none"
						headerStyles="!bg-transparent !border-0 flex gap-2 items-center "
						detailsStyles="">
						<AccordionHeader
							iconLibrary="bootstrap-icons"
							icon="bi-caret-right-fill"
							iconStyles="text-[#6fb8e6]"
							toggleIconStyles=""
							toggleIcon="bi-caret-down"
							iconPosition="before"
							styles="!bg-transparent"
							activeStyles=""
							variant="none">
							{category}
						</AccordionHeader>
						<AccordionDetails styles="!border-0 !py-2 !pt-0 px-2">
							{links.map((link) => (
								<a
									key={link.path}
									href={link.path}
									className={`pl-[20px] block text-sm py-[2px] rounded-md hover:bg-hoverBgColor ${
										pathName == link.path
											? "bg-hoverBgColor dark:bg-darkHoverBgColor"
											: ""
									}`}>
									{/* <LinkArrow /> */}
									<span
										className={`${
											link.title == "All Components"
												? "border-b pb-[4px] mb-1 w-full inline-block border-slate-400/20 "
												: ""
										} `}>
										{link.title}
									</span>
								</a>
							))}
						</AccordionDetails>
					</Accordion>
				);
			})}
		</div>
	);
};

export default LeftSideBar;
