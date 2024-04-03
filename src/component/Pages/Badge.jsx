import { Block, Text } from "landing-page-ui";
import React from "react";

const BadgePage = () => {
	return (
		<Block tagName={"div"} style="scroll-smooth md:w[65%] lg:w-[73%]">
			<Block>
				<Text tagName={"h2"} style=" text-3xl mb-2 font-medium ">
					Badge
				</Text>
				<Text tagName={"p"} style="">
					The{" "}
					<Text
						tagName={"span"}
						style="font-thin font-code px-2 py-1 bg-gray-200 rounded-md dark:bg-gray-800 ">
						Badge
					</Text>{" "}
					component generates a small badge to the top-right of its child(ren).
				</Text>
			</Block>
		</Block>
	);
};

export default BadgePage;
