import React from "react";
import { LinkArrow } from "../Icons";
import { Accordion, AccordionDetails, AccordionHeader } from "landing-page-ui";
import Links from "../../links";

const LeftSideBar = () => {
	return (
		<div className="pt-2">
			{/* <Accordion active={true} style="mb-2">
				<AccordionHeader
					iconLibrary="bootstrap-icons"
					icon='<i class="bi bi-caret-right-fill"></i>'
					iconStyle=""
					toggleIconStyle={``}
					toggleIcon='<i class="bi bi-caret-down"></i>'
					iconPosition="before"
					style="hover:bg-hoverBgColor p-1 rounded-md font-mono"
					activeStyle="">
					Getting started
				</AccordionHeader>
				<AccordionDetails style=" ">
					<p className="pl-[20px] text-sm py-[2px] rounded-md hover:bg-hoverBgColor ">
						Overview
					</p>
					<p className="pl-[20px] text-sm py-[2px] rounded-md hover:bg-hoverBgColor ">
						Installation
					</p>
					<p className="pl-[20px] text-sm py-[2px] rounded-md hover:bg-hoverBgColor ">
						Usage
					</p>
				</AccordionDetails>
			</Accordion>
			<Accordion active={true} style="mb-2">
				<AccordionHeader
					iconLibrary="bootstrap-icons"
					icon='<i class="bi bi-caret-right-fill"></i>'
					iconStyle=""
					toggleIconStyle={``}
					toggleIcon='<i class="bi bi-caret-down"></i>'
					iconPosition="before"
					style="hover:bg-hoverBgColor p-1 rounded-md font-mono"
					activeStyle="">
					Components
				</AccordionHeader>
				<AccordionDetails style=" ">
					<p className="pl-[20px] text-sm py-[2px] pb-0 rounded-md hover:bg-hoverBgColor ">
						<span className="border-b pb-[4px] w-full inline-block border-slate-400/20 ">
							All Components
						</span>
					</p>
					<p className="pl-[20px] text-sm py-[2px] pt-2 rounded-md hover:bg-hoverBgColor ">
						Wrapper
					</p>
					<p className="pl-[20px] text-sm py-[2px] rounded-md hover:bg-hoverBgColor ">
						Text
					</p>
					<p className="pl-[20px] text-sm py-[2px] rounded-md hover:bg-hoverBgColor ">
						Image
					</p>
					<p className="pl-[20px] text-sm py-[2px] rounded-md hover:bg-hoverBgColor ">
						Image Gallery
					</p>
					<p className="pl-[20px] text-sm py-[2px] rounded-md hover:bg-hoverBgColor ">
						Grid
					</p>
					<p className="pl-[20px] text-sm py-[2px] rounded-md hover:bg-hoverBgColor ">
						Flex
					</p>
					<p className="pl-[20px] text-sm py-[2px] rounded-md hover:bg-hoverBgColor ">
						Accordion
					</p>
					<p className="pl-[20px] text-sm py-[2px] rounded-md hover:bg-hoverBgColor ">
						Tabs
					</p>
					<p className="pl-[20px] text-sm py-[2px] rounded-md hover:bg-hoverBgColor ">
						Icon Button
					</p>
					<p className="pl-[20px] text-sm py-[2px] rounded-md hover:bg-hoverBgColor ">
						List
					</p>
					<p className="pl-[20px] text-sm py-[2px] rounded-md hover:bg-hoverBgColor ">
						Avatar
					</p>
					<p className="pl-[20px] text-sm py-[2px] rounded-md hover:bg-hoverBgColor ">
						Badge
					</p>
				</AccordionDetails>
			</Accordion> */}

			{Object.entries(Links).map(([category, links]) => (
				<Accordion key={category} active={true} style="mb-2">
					<AccordionHeader
						iconLibrary="bootstrap-icons"
						icon='<i class="bi bi-caret-right-fill"></i>'
						iconStyle=""
						toggleIconStyle={``}
						toggleIcon='<i class="bi bi-caret-down"></i>'
						iconPosition="before"
						style="hover:bg-hoverBgColor p-1 rounded-md font-mono"
						activeStyle="">
						{category}
					</AccordionHeader>
					<AccordionDetails style="">
						{links.map((link) => (
							<a
								key={link.path}
								href={link.path}
								className="pl-[20px] block text-sm py-[2px] rounded-md hover:bg-hoverBgColor">
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
			))}
		</div>
	);
};

export default LeftSideBar;
