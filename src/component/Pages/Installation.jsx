import {
	Block,
	Divider,
	Text,
	//  CodeSnippet,
	Icon,
} from "landing-page-ui";
import React from "react";
import RightSideBar from "../Layout/RightSideBar";
import CodeSnippet from "../components/CodeSnippet";
import ScrollToTop from "../components/ScrollToTop";

const Installation = () => {
	return (
		<Block styles="scroll-smooth md:w-[65%] lg:w-[73%]">
			<Block styles="relative">
				<Block styles="my-2">
					<Text tagName="h1" styles="text-2xl !font-medium">
						Introduction - Landing Page UI
					</Text>
					<Text tagName="p" styles="text-base">
						Landing Page UI is a React component library that provides a set of
						React components for building landing pages. Discover our Landing
						Page UI Kit, a seamless blend of React and Tailwind CSS components,
						perfect for effortlessly creating captivating landing pages.
					</Text>
				</Block>
				<Block styles="my-2 mt-6 ">
					<Text
						tagName="h2"
						id="vite-install"
						styles="text-xl  !font-medium group flex items-center ">
						Vite Installation
						<Icon
							icon="fa-link"
							iconLibrary="font-awesome"
							isLink={true}
							linkTo="#vite-install"
							iconStyles="mx-3 hidden dark:bg-gray-800 group-hover:inline-block p-1 rounded-md shadow-md text-sm bg-gray-200"
						/>
					</Text>
					<Divider />
					<Text tagName="p" styles="text-base my-2 mt-6">
						<code className="px-2 bg-gray-200 dark:bg-gray-800 py-1 rounded-md ">
							Step 1:
						</code>{" "}
						Create React Project using Vite
					</Text>
					<CodeSnippet
						lang="bash"
						bodyStyles="shadow-lg border-b border-x border-gray-200/10 rounded-b-lg pb-2 pt-2 "
						content={`npm create vite@latest my-project -- --template react 
cd my-project`}
					/>
					<Text tagName="p" styles="text-base my-2 mt-6">
						<code className="px-2 bg-gray-200 dark:bg-gray-800 py-1 rounded-md ">
							Step 2:
						</code>{" "}
						Install Landing Page UI
					</Text>
					<CodeSnippet
						lang="bash"
						bodyStyles="shadow-lg border-b border-x border-gray-200/10 rounded-b-lg pb-2 pt-2 "
						content={`npm i landing-page-ui `}
					/>
					<Text tagName="p" styles="text-base my-2 mt-6">
						<code className="px-2 bg-gray-200 dark:bg-gray-800 py-1 rounded-md ">
							Step 3:
						</code>{" "}
						Install Tailwind CSS
					</Text>
					<CodeSnippet
						lang="bash"
						bodyStyles="shadow-lg border-b border-x border-gray-200/10 rounded-b-lg pb-2 pt-2 "
						content={`npm i autoprefixer postcss tailwindcss
npx tailwindcss init -p`}
					/>
					<Text tagName="p" styles="text-base my-2 mt-6">
						<code className="px-2 bg-gray-200 dark:bg-gray-800 py-1 rounded-md ">
							Step 4:
						</code>{" "}
						Configure Tailwind CSS
					</Text>
					<CodeSnippet
						lang="js"
						bodyStyles="shadow-lg border-b border-x border-gray-200/10 rounded-b-lg pb-2 pt-2 "
						content={`/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} `}
					/>
					<Text tagName="p" styles="text-base my-2 mt-6">
						<code className="px-2 bg-gray-200 dark:bg-gray-800 py-1 rounded-md ">
							Step 5:
						</code>{" "}
						Add Tailwind CSS
					</Text>
					<CodeSnippet
						lang="css"
						bodyStyles="shadow-lg border-b border-x border-gray-200/10 rounded-b-lg pb-2 pt-2 "
						content={`@tailwind base;
@tailwind components;
@tailwind utilities; `}
					/>
					<Text tagName="p" styles="text-base my-2 mt-6">
						<code className="px-2 bg-gray-200 dark:bg-gray-800 py-1 rounded-md ">
							Step 6:
						</code>{" "}
						Run the React Project
					</Text>
					<CodeSnippet
						lang="bash"
						bodyStyles="shadow-lg border-b border-x border-gray-200/10 rounded-b-lg pb-2 pt-2 "
						content={`npm run dev `}
					/>
					<Text tagName="p" styles="text-base my-2 mt-6">
						<code className="px-2 bg-gray-200 dark:bg-gray-800 py-1 rounded-md ">
							Step 7:
						</code>{" "}
						Start using Landing Page UI in your project
					</Text>
					<CodeSnippet
						lang="jsx"
						bodyStyles="shadow-lg border-b border-x border-gray-200/10 rounded-b-lg pb-2 pt-2 "
						content={`import { Text } from "landing-page-ui";
  const App=()=>{
    return (
      <Text 
      tagName="h2"
      styles="text-3xl !font-bold text-blue-500">
        Hello From Landing Page UI
      </Text>
    )
  }
export default App; `}
					/>
				</Block>
			</Block>
			<RightSideBar>
				<Text styles="text-lg !font-bold pt-3 pl-3 pb-4 ">ON THIS PAGE</Text>
				<Text
					styles="text-sm  px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 "
					// styles="text-sm hover:text-darkTextColor hover:bg-gray-500 dark:hover:bg-darkHoverBgColor dark:hover:text-darkTextHoverColor px-2 pl-4 border-l py-1 rounded-md transition-all duration-300 "
					isLink={true}
					linkTo="#vite-install">
					Vite React Application
				</Text>
			</RightSideBar>
		</Block>
	);
};

export default Installation;
