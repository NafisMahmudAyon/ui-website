import React from "react";
import { Block, Text, List } from "landing-page-ui";

import CodeSnippet from "../components/CodeSnippet";

const TabsPage = () => {
	const tabsFeatures = [
		`<span class=" inline-block font-semibold group-hover:underline group-hover:underline-offset-2 text-justify ">Dynamic Content Rendering:</span> <span> The <span class="font-thin font-code">Tabs</span> component renders tab navigation and content panels dynamically based on the provided children elements.</span>`,
		`<span class=" inline-block font-semibold group-hover:underline group-hover:underline-offset-2 ">Custom Styling:</span> <span>Custom CSS classes or inline styles can be applied to the <span class="font-thin font-code">Tabs</span> component and its sub-elements using the <span class="font-thin font-code">style</span>, <span class="font-thin font-code">navWrapStyle</span>, and <span class="font-thin font-code">panelWrapStyle</span> props.</span>`,
		`<span class=" inline-block font-semibold group-hover:underline group-hover:underline-offset-2 ">Tab Selection and Activation:</span> <span>Users can click on individual tabs to activate them, causing the corresponding content panel to be displayed. The currently active tab is managed internally using state.</span>`,
	];
	const tabsNavFeatures = [
		`<span class="inline-block font-semibold group-hover:underline group-hover:underline-offset-2">Dynamic Tab Creation:</span> <span>Tab buttons are created dynamically based on the provided children elements. Each tab button corresponds to a <span class="font-thin font-code">Tab</span> component.</span>`,
		`<span class="inline-block font-semibold group-hover:underline group-hover:underline-offset-2">Tab Scrolling:</span> <span>If the number of tabs exceeds the available space, users can scroll horizontally or vertically between tabs using navigation buttons.</span>`,
		`<span class="inline-block font-semibold group-hover:underline group-hover:underline-offset-2">Customization Options:</span> <span>Various customization options are available, such as styling for tab buttons, navigation buttons, and icons.</span>`,
	];
	const tabFeatures = [
		`<span class="inline-block font-semibold group-hover:underline group-hover:underline-offset-2">Activation State:</span> <span>The activation state of the tab is managed internally by the <span class="font-thin font-code">Tab</span> component. When activated, the tab button can apply custom styling to indicate its active state.</span>`,
		`<span class="inline-block font-semibold group-hover:underline group-hover:underline-offset-2">Dynamic Rendering:</span> <span>The <span class="font-thin font-code">Tab</span> component receives its content and other properties dynamically as children of the <span class="font-thin font-code">Tabs</span> component.</span>`,
	];
	const TabsPanelFeatures = [
		`<span class="inline-block font-semibold group-hover:underline group-hover:underline-offset-2">Dynamic Content Rendering:</span> <span>Like other components within the <span class="font-thin font-code">Tabs</span> component, the <span class="font-thin font-code">TabsPanel</span> renders its content dynamically based on the currently active tab.</span>`,
	];
	return (
		<Block tagName={"div"} style="mb-32 ">
			<Text tagName={"h2"} style=" text-3xl mb-2 font-medium ">
				Tabs
			</Text>
			<Text tagName={"p"} style="">
				The{" "}
				<Text tagName={"span"} style="font-thin font-code ">
					Tabs
				</Text>{" "}
				component provides a tabbed interface for organizing content into
				multiple sections, allowing users to switch between different views or
				categories. It consists of tab navigation and corresponding content
				panels.
			</Text>
			<Block tagName="div" style="">
				<Text tagName={"h3"} style="mt-6 mb-2 text-xl font-semibold ">
					Features{" "}
				</Text>
				<List
					list={tabsFeatures}
					style=""
					listStyle="mt-2 group hover:bg-hoverBgColor hover:dark:bg-darkHoverBgColor p-2 rounded-md  "
					icon="fa-circle-dot"
					iconLibrary={"font-awesome"}
					iconStyle="mr-2 text-xs group-hover:text-teal-400  "
				/>
			</Block>
			<Block>
				<Text tagName={"h2"} style="pt-8 text-3xl mb-2 font-medium ">
					TabsNav Component
				</Text>
				<Text tagName={"p"} style="">
					The{" "}
					<Text tagName={"span"} style="font-thin font-code ">
						TabsNav
					</Text>{" "}
					component represents the tab navigation area within the{" "}
					<Text tagName={"span"} style="font-thin font-code ">
						Tabs
					</Text>{" "}
					component. It includes buttons for scrolling between tabs, as well as
					individual tab buttons.
				</Text>
				<Block tagName="div" style="">
					<Text tagName={"h3"} style="mt-6 mb-2 text-xl font-semibold ">
						Features{" "}
					</Text>
					<List
						list={tabsNavFeatures}
						style=""
						listStyle="mt-2 group hover:bg-hoverBgColor hover:dark:bg-darkHoverBgColor p-2 rounded-md  "
						icon="fa-circle-dot"
						iconLibrary={"font-awesome"}
						iconStyle="mr-2 text-xs group-hover:text-teal-400  "
					/>
				</Block>
			</Block>
			<Block>
				<Text tagName={"h2"} style="pt-8 text-3xl mb-2 font-medium ">
					Tab Component
				</Text>
				<Text tagName={"p"} style="">
					The{" "}
					<Text tagName={"span"} style="font-thin font-code ">
						Tab
					</Text>{" "}
					component represents an individual tab within the tab navigation area.
					It is rendered as a clickable button that, when clicked, activates the
					corresponding content panel.
				</Text>
				<Block tagName="div" style="">
					<Text tagName={"h3"} style="mt-6 mb-2 text-xl font-semibold ">
						Features{" "}
					</Text>
					<List
						list={tabFeatures}
						style=""
						listStyle="mt-2 group hover:bg-hoverBgColor hover:dark:bg-darkHoverBgColor p-2 rounded-md  "
						icon="fa-circle-dot"
						iconLibrary={"font-awesome"}
						iconStyle="mr-2 text-xs group-hover:text-teal-400  "
					/>
				</Block>
			</Block>
			<Block>
				<Text tagName={"h2"} style="pt-8 text-3xl mb-2 font-medium ">
					TabsPanel Component
				</Text>
				<Text tagName={"p"} style="">
					The{" "}
					<Text tagName={"span"} style="font-thin font-code ">
						TabsPanel
					</Text>{" "}
					component represents the content panel associated with each tab. It
					displays the content specific to the activated tab.
				</Text>
				<Block tagName="div" style="">
					<Text tagName={"h3"} style="mt-6 mb-2 text-xl font-semibold ">
						Features{" "}
					</Text>
					<List
						list={TabsPanelFeatures}
						style=""
						listStyle="mt-2 group hover:bg-hoverBgColor hover:dark:bg-darkHoverBgColor p-2 rounded-md  "
						icon="fa-circle-dot"
						iconLibrary={"font-awesome"}
						iconStyle="mr-2 text-xs group-hover:text-teal-400  "
					/>
				</Block>
			</Block>
		</Block>
	);
};

export default TabsPage;
