import React from "react";

const MiddleContent = ({ children }) => {
	return (
		<div className="pl-5 pt-2 pb-8 pr-5 max-h-[100%] overflow-scroll">
			{children}
		</div>
	);
};

export default MiddleContent;
