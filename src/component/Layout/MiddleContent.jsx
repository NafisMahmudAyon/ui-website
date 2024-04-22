import React from "react";
import { useLocation } from "react-router-dom";

const MiddleContent = ({ children }) => {
	const location = useLocation();
	const isVariationPage = location.pathname.includes("/variations");
	return (
		<div className={`${isVariationPage ? " ":"pl-5 pr-5"} pt-2 pb-8 max-h-[100%] overflow-scroll`}>
			{children}
		</div>
	);
};

export default MiddleContent;
