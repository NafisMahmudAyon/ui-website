
import React from "react";
import { useLocation } from "react-router-dom";

const MiddleContent = ({ children }) => {
	const location = useLocation();
	const isVariationPage = location.pathname.includes("/variations");
	return (
		<div
			className={`${
				isVariationPage ? " " : "pl-5 pr-5 pb-8 "
			} pt-2 max-h-[100%] scroll-smooth`}>
			{/* <div className={`${isVariationPage ? " ":"pl-5 pr-5 pb-8 "} pt-2 max-h-[100%] overflow-scroll`}> */}
			{children}
		</div>
	);
};

MiddleContent.propTypes = {
	children: React.ReactNode,
};

export default MiddleContent;
