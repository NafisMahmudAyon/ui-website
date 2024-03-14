import { Block, Icon } from "landing-page-ui";
import React from "react";
import Footer from "../Footer";

const Overview = () => {
	return (
		<Block tagName="div">
			<Block
				tagName={"h1"}
				style="text-center text-3xl font-medium underline underline-offset-4 ">
				Overview
			</Block>
      <Block tagName={"div"} style=" border-y border-textColor dark:border-darkTextColor py-4 flex justify-between items-center px-4 ">
        <Block tagName={"span"} style=" "></Block>
        <Block isLink={true} linkTo={"/installation"} tagName={"span"} style="inline-flex gap-2 items-center ">Installation <Icon icon="<i class='fa-solid fa-angle-right'></i>" iconLibrary="font-awesome"  /></Block>
      </Block>
      <Footer />
		</Block>
	);
};

export default Overview;
