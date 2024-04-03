import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./output.css";

import AppLayout from "./component/AppLayout";
import Home from "./component/Home";
import About from "./component/About";
import Links from "./links";
import React from "react";
import Overview from "./component/Pages/Overview";
import Installation from "./component/Pages/Installation";
import Usage from "./component/Pages/Usage";
import Accordion from "./component/Pages/Accordion";
import Components from "./component/Pages/Components";
import BadgePage from "./component/Pages/Badge";
import IconButton from "./component/Pages/IconButton";
import List from "./component/Pages/List";
import Tabs from "./component/Pages/Tabs";
import Text from "./component/Pages/Text";
import Image from "./component/Pages/Image";
import ImageGallery from "./component/Pages/ImageGallery";
import Grid from "./component/Pages/Grid";
import Flex from "./component/Pages/Flex";
import ComboList from "./component/Pages/ComboList";
import PlayGround from "./component/PlayGround/PlayGround";
import TestPage from "./component/Pages/Test";
import AvatarPage from "./component/Pages/Avatar";
import { Block } from "landing-page-ui";
import BlockPage from "./component/Pages/Block";

function App() {
	return (
		<Block style="bg-slate-100 dark:bg-darkBgColor">
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<AppLayout>
								<Home />
							</AppLayout>
						}
					/>
					<Route
						path="/about"
						element={
							<AppLayout>
								<About />
							</AppLayout>
						}
					/>
					// // routing
					<Route
						path="/overview"
						element={
							<AppLayout>
								<Overview />
							</AppLayout>
						}
					/>
					<Route
						path="/installation"
						element={
							<AppLayout>
								<Installation />
							</AppLayout>
						}
					/>
					<Route
						path="/usage"
						element={
							<AppLayout>
								<Usage />
							</AppLayout>
						}
					/>
					// // routing component
					<Route
						path="/components"
						element={
							<AppLayout>
								<Components />
							</AppLayout>
						}
					/>
					<Route
						path="/components/accordion"
						element={
							<AppLayout>
								<Accordion />
							</AppLayout>
						}
					/>
					<Route
						path="/components/avatar"
						element={
							<AppLayout>
								<AvatarPage />
							</AppLayout>
						}
					/>
					<Route
						path="/components/badge"
						element={
							<AppLayout>
								<BadgePage />
							</AppLayout>
						}
					/>
					<Route
						path="/components/icon-button"
						element={
							<AppLayout>
								<IconButton />
							</AppLayout>
						}
					/>
					<Route
						path="/components/list"
						element={
							<AppLayout>
								<List />
							</AppLayout>
						}
					/>
					<Route
						path="/components/tabs"
						element={
							<AppLayout>
								<Tabs />
							</AppLayout>
						}
					/>
					<Route
						path="/components/text"
						element={
							<AppLayout>
								<Text />
							</AppLayout>
						}
					/>
					<Route
						path="/components/block"
						element={
							<AppLayout>
								<BlockPage />
							</AppLayout>
						}
					/>
					<Route
						path="/components/image"
						element={
							<AppLayout>
								<Image />
							</AppLayout>
						}
					/>
					<Route
						path="/components/image-gallery"
						element={
							<AppLayout>
								<ImageGallery />
							</AppLayout>
						}
					/>
					<Route
						path="/components/grid"
						element={
							<AppLayout>
								<Grid />
							</AppLayout>
						}
					/>
					<Route
						path="/components/flex"
						element={
							<AppLayout>
								<Flex />
							</AppLayout>
						}
					/>
					<Route
						path="/components/combo-list"
						element={
							<AppLayout>
								<ComboList />
							</AppLayout>
						}
					/>
					<Route
						path="/playground"
						element={
							<AppLayout>
								<PlayGround />
							</AppLayout>
						}
					/>
					<Route
						path="/test"
						element={
							<AppLayout RightSideBarContent={<About />}>
								<TestPage />
							</AppLayout>
						}
					/>
				</Routes>
			</BrowserRouter>
		</Block>
	);
}

export default App;




