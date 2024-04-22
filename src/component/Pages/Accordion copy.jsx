import {
	Block,
	Icon,
	List,
	Text,
	Code,
	CodeBody,
	CodeHeader,
	IconButton,
} from "landing-page-ui";
import React, { useState } from "react";
import CodeSnippet from "../components/CodeSnippet";

const AccordionPage = () => {
	const accordionCodeDemo = `<Accordion tagName="div" styles="accordion-style">
  <AccordionHeader tagName="div" styles="header-style" icon="chevron-down">
Section 1
  </AccordionHeader>
  <AccordionDetails tagName="div" styles="details-style">
Content for Section 1
  </AccordionDetails>
  <AccordionHeader tagName="div" styles="header-style" icon="chevron-down">
Section 2
  </AccordionHeader>
  <AccordionDetails tagName="div" styles="details-style">
Content for Section 2
  </AccordionDetails>
</Accordion>
  `;
	const accordionHeaderCodeDemo = `<AccordionHeader
	tagName="div"
	styles="header-style"
	icon="chevron-down"
	iconPosition="before">
	Section Title
</AccordionHeader>
`;
	const accordionDetailsCodeDemo = `<AccordionDetails tagName="div" styles="details-style">
	Accordion Section Content
</AccordionDetails>
`;
	const accordionFeatures = [
		`<span class=" inline-block font-semibold group-hover:underline group-hover:underline-offset-2 ">Dynamic Expansion:</span> <span>Users can expand or collapse individual accordion sections by clicking on the header. This dynamic behavior improves user interaction and reduces clutter by displaying only the relevant content.</span>`,
		`<span class=" inline-block font-semibold group-hover:underline group-hover:underline-offset-2 ">Customization:</span> <span>The Accordion component supports customization through various props, allowing developers to control the appearance and behavior of each accordion section. Custom CSS classes can be applied to style the accordion as needed.</span>`,
		`<span class=" inline-block font-semibold group-hover:underline group-hover:underline-offset-2 ">Accessibility:</span> <span>Accessibility features are built into the Accordion component, ensuring that it complies with web accessibility standards. Users can navigate and interact with the accordion using keyboard shortcuts or assistive technologies.</span>`,
	];
	const accordionHeaderFeatures = [
		`<span class=" inline-block font-semibold group-hover:underline group-hover:underline-offset-2 ">Icon Support:</span> <span>Icons can be displayed before or after the header text, providing visual cues to users about the accordion section's expansion state.</span>`,
		`<span class=" inline-block font-semibold group-hover:underline group-hover:underline-offset-2 ">Event Handling:</span> <span>Clicking on the header toggles the expansion state of the associated details, allowing users to expand or collapse accordion sections with ease.</span>`,
	];
	const accordionDetailsFeatures = [
		`<span class="inline-block font-semibold group-hover:underline group-hover:underline-offset-2">Conditional Display:</span> <span>The content area is initially hidden and becomes visible when its associated header is clicked, providing a clean and organized user interface.</span>`,
		`<span class="inline-block font-semibold group-hover:underline group-hover:underline-offset-2">Accessibility:</span> <span>The AccordionDetails component ensures accessibility by maintaining a focusable and navigable structure that complies with web accessibility standards.</span>`,
	];
	const accordionProps = [
		`<span class=" inline-block font-semibold group-hover:underline group-hover:underline-offset-2 ">tagName:</span> <span>The HTML tag name to use for rendering the accordion.</span>`,
		`<span class=" inline-block font-semibold group-hover:underline group-hover:underline-offset-2 ">styles:</span> <span>Custom CSS classes to apply to the accordion.</span>`,
		`<span class=" inline-block font-semibold group-hover:underline group-hover:underline-offset-2 ">children:</span> <span>The child components representing accordion headers and details.</span>`,
		`<span class=" inline-block font-semibold group-hover:underline group-hover:underline-offset-2 ">active:</span> <span>The index of the initially active accordion section (optional).</span>`,
		`<span class=" inline-block font-semibold group-hover:underline group-hover:underline-offset-2 ">deactivate:</span> <span>Boolean flag to disable accordion interaction (optional).</span>`,
	];
	const accordionHeaderProps = [
		`<span class="inline-block font-semibold group-hover:underline group-hover:underline-offset-2">tagName:</span> <span>The HTML tag name to use for rendering the accordion.</span>`,
		`<span class="inline-block font-semibold group-hover:underline group-hover:underline-offset-2">styles:</span> <span>Custom CSS classes to apply to the accordion.</span>`,
		`<span class="inline-block font-semibold group-hover:underline group-hover:underline-offset-2">activeStyles:</span> <span>Custom CSS classes to apply when the section is active (optional).</span>`,
		`<span class="inline-block font-semibold group-hover:underline group-hover:underline-offset-2">children:</span> <span>The child components representing accordion headers and details.</span>`,
		`<span class="inline-block font-semibold group-hover:underline group-hover:underline-offset-2">iconLibrary:</span> <span>The library containing the icon (e.g., "font-awesome").</span>`,
		`<span class="inline-block font-semibold group-hover:underline group-hover:underline-offset-2">icon:</span> <span>The name or content of the icon.</span>`,
		`<span class="inline-block font-semibold group-hover:underline group-hover:underline-offset-2">toggleIcon:</span> <span>The icon to display when the section is active (optional).</span>`,
		`<span class="inline-block font-semibold group-hover:underline group-hover:underline-offset-2">toggleIconLibrary:</span> <span>The library containing the toggle icon (optional).</span>`,
		`<span class="inline-block font-semibold group-hover:underline group-hover:underline-offset-2">toggleIconStyles:</span> <span>Custom CSS classes to apply to the toggle icon (optional).</span>`,
		`<span class="inline-block font-semibold group-hover:underline group-hover:underline-offset-2">iconPosition:</span> <span>The position of the icon relative to the header text ("before" or "after").</span>`,
		`<span class="inline-block font-semibold group-hover:underline group-hover:underline-offset-2">iconStyles:</span> <span>Custom CSS classes to apply to the icon.</span>`,
		`<span class="inline-block font-semibold group-hover:underline group-hover:underline-offset-2">id:</span> <span>The unique identifier of the accordion section.</span>`,
	];
	const accordionDetailsProps = [
		`<span class="inline-block font-semibold group-hover:underline group-hover:underline-offset-2">tagName:</span> <span>The HTML tag name to use for rendering the details.</span>`,
		`<span class="inline-block font-semibold group-hover:underline group-hover:underline-offset-2">styles:</span> <span>Custom CSS classes to apply to the details.</span>`,
		`<span class="inline-block font-semibold group-hover:underline group-hover:underline-offset-2">children:</span> <span>The content to be displayed within the details.</span>`,
		`<span class="inline-block font-semibold group-hover:underline group-hover:underline-offset-2">id:</span> <span>The unique identifier of the accordion section.</span>`,
	];

	return (
		<Block tagName={"div"} styles=" ">
			<Text tagName={"h2"} styles=" text-3xl mb-2 font-medium ">
				Accordion
			</Text>
			<Text tagName={"p"} styles="">
				The{" "}
				<Text tagName={"span"} styles="font-thin font-code ">
					Accordion
				</Text>{" "}
				component creates an accordion-style UI element that allows users to
				expand or collapse sections of content. It is composed of{" "}
				<Text tagName={"span"} styles="font-thin font-code ">
					AccordionHeader
				</Text>{" "}
				and{" "}
				<Text tagName={"span"} styles="font-thin font-code ">
					AccordionDetails
				</Text>{" "}
				components, providing a flexible and accessible way to organize and
				present information.
			</Text>
			<Block tagName="div" styles="">
				<Text tagName={"h3"} styles="mt-6 mb-2 text-xl font-semibold ">
					Features{" "}
				</Text>
				<List
					list={accordionFeatures}
					styles=""
					listStyles="mt-2 group hover:bg-hoverBgColor hover:dark:bg-darkHoverBgColor p-2 rounded-md  "
					icon="fa-circle-dot"
					iconLibrary={"font-awesome"}
					iconStyles="mr-2 text-xs group-hover:text-teal-400  "
				/>
			</Block>
			<Text tagName={"h3"} styles="mt-3 mb-2 text-xl font-semibold ">
				Usage{" "}
			</Text>
			<CodeSnippet
				lang="jsx"
				content={accordionCodeDemo}
				onClick={() => {
					handleCopyClick(accordionCodeDemo);
				}}
			/>
			<Text tagName={"h3"} styles="mt-3 mb-2 text-xl font-semibold ">
				Props{" "}
			</Text>
			<List
				list={accordionProps}
				styles=""
				listStyles="mt-2 group hover:bg-hoverBgColor hover:dark:bg-darkHoverBgColor p-2 rounded-md  "
				icon="fa-circle-dot"
				iconLibrary={"font-awesome"}
				iconStyles="mr-2 text-xs group-hover:text-teal-400  "
			/>

			<Text tagName={"h2"} styles="pt-8 text-3xl mb-2 font-medium ">
				AccordionHeader Component
			</Text>
			<Text tagName={"p"} styles="">
				The{" "}
				<Text tagName={"span"} styles="font-thin font-code ">
					AccordionHeader
				</Text>{" "}
				component represents the header of an accordion section within the{" "}
				<Text tagName={"span"} styles="font-thin font-code ">
					Accordion
				</Text>{" "}
				component. It displays a clickable title and an optional icon to
				indicate the expansion state of the associated details.
			</Text>
			<Block tagName="div" styles="">
				<Text tagName={"h3"} styles="mt-6 mb-2 text-xl font-semibold ">
					Features{" "}
				</Text>
				<List
					list={accordionDetailsFeatures}
					styles=""
					listStyles="mt-2 group hover:bg-hoverBgColor hover:dark:bg-darkHoverBgColor p-2 rounded-md  "
					icon="fa-circle-dot"
					iconLibrary={"font-awesome"}
					iconStyles="mr-2 text-xs group-hover:text-teal-400  "
				/>
			</Block>
			<Text tagName={"h3"} styles="mt-3 mb-2 text-xl font-semibold ">
				Usage{" "}
			</Text>
			<CodeSnippet lang="jsx" content={accordionHeaderCodeDemo} />
			<Text tagName={"h3"} styles="mt-3 mb-2 text-xl font-semibold ">
				Props{" "}
			</Text>
			<List
				list={accordionHeaderProps}
				styles=""
				listStyles="mt-2 group hover:bg-hoverBgColor hover:dark:bg-darkHoverBgColor p-2 rounded-md  "
				icon="fa-circle-dot"
				iconLibrary={"font-awesome"}
				iconStyles="mr-2 text-xs group-hover:text-teal-400  "
			/>

			<Text tagName={"h2"} styles="pt-8 text-3xl mb-2 font-medium ">
				AccordionDetails Component
			</Text>
			<Text tagName={"p"} styles="">
				The{" "}
				<Text tagName={"span"} styles="font-thin font-code ">
					AccordionDetails
				</Text>{" "}
				component represents the content area of an accordion section within the{" "}
				<Text tagName={"span"} styles="font-thin font-code ">
					Accordion
				</Text>{" "}
				component. It displays the content associated with a header and can be
				expanded or collapsed based on user interaction.
			</Text>
			<Block tagName="div" styles="">
				<Text tagName={"h3"} styles="mt-6 mb-2 text-xl font-semibold ">
					Features{" "}
				</Text>
				<List
					list={accordionHeaderFeatures}
					styles=""
					listStyles="mt-2 group hover:bg-hoverBgColor hover:dark:bg-darkHoverBgColor p-2 rounded-md  "
					icon="fa-circle-dot"
					iconLibrary={"font-awesome"}
					iconStyles="mr-2 text-xs group-hover:text-teal-400  "
				/>
			</Block>
			<Text tagName={"h3"} styles="mt-3 mb-2 text-xl font-semibold ">
				Usage{" "}
			</Text>
			<CodeSnippet lang="jsx" content={accordionDetailsCodeDemo} />
			<Text tagName={"h3"} styles="mt-3 mb-2 text-xl font-semibold ">
				Props{" "}
			</Text>
			<List
				list={accordionDetailsProps}
				styles=""
				listStyles="mt-2 group hover:bg-hoverBgColor hover:dark:bg-darkHoverBgColor p-2 rounded-md  "
				icon="fa-circle-dot"
				iconLibrary={"font-awesome"}
				iconStyles="mr-2 text-xs group-hover:text-teal-400  "
			/>
			<div className="mb-10"></div>
		</Block>
	);
};

export default AccordionPage;
