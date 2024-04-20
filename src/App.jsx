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
import IconButtonPage from "./component/Pages/IconButton";
import Tabs from "./component/Pages/Tabs";
import TextPage from "./component/Pages/Text";
import Image from "./component/Pages/Image";
import ImageGalleryPage from "./component/Pages/ImageGallery";
import GridPage from "./component/Pages/Grid";
import Flex from "./component/Pages/Flex";
import ComboList from "./component/Pages/ComboList";
import PlayGround from "./component/PlayGround/PlayGround";
import TestPage from "./component/Pages/Test";
import AvatarPage from "./component/Pages/Avatar";
import { Block } from "landing-page-ui";
import BlockPage from "./component/Pages/Block";
import CarouselPage from "./component/Pages/Carousel";
import CodeSnippetPage from "./component/Pages/CodeSnippet";
import DividerPage from "./component/Pages/Divider";
import CardPage from "./component/Pages/Card";
import LabelPage from "./component/Pages/Label";
import InputPage from "./component/Pages/Input";
import TextAreaPage from "./component/Pages/TextArea";
import ProgressBarPage from "./component/Pages/ProgressBar";
import CircularProgressBarPage from "./component/Pages/CircularProgressBar";
import TablePage from "./component/Pages/Table";
import ListPage from "./component/Pages/List";

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
								<IconButtonPage />
							</AppLayout>
						}
					/>
					<Route
						path="/components/list"
						element={
							<AppLayout>
								<ListPage />
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
								<TextPage />
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
								<ImageGalleryPage />
							</AppLayout>
						}
					/>
					<Route
						path="/components/grid"
						element={
							<AppLayout>
								<GridPage />
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
						path="/components/carousel"
						element={
							<AppLayout>
								<CarouselPage />
							</AppLayout>
						}
					/>
					<Route
						path="/components/code-snippet"
						element={
							<AppLayout>
								<CodeSnippetPage />
							</AppLayout>
						}
					/>
					<Route
						path="/components/divider"
						element={
							<AppLayout>
								<DividerPage />
							</AppLayout>
						}
					/>
					<Route
						path="/components/card"
						element={
							<AppLayout>
								<CardPage />
							</AppLayout>
						}
					/>
					<Route
						path="/components/label"
						element={
							<AppLayout>
								<LabelPage />
							</AppLayout>
						}
					/>
					<Route
						path="/components/input"
						element={
							<AppLayout>
								<InputPage />
							</AppLayout>
						}
					/>
					<Route
						path="/components/textarea"
						element={
							<AppLayout>
								<TextAreaPage />
							</AppLayout>
						}
					/>
					<Route
						path="/components/progress-bar"
						element={
							<AppLayout>
								<ProgressBarPage />
							</AppLayout>
						}
					/>
					<Route
						path="/components/circular-progress-bar"
						element={
							<AppLayout>
								<CircularProgressBarPage />
							</AppLayout>
						}
					/>
					<Route
						path="/components/table"
						element={
							<AppLayout>
								<TablePage />
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






