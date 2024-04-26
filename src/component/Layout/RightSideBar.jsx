const RightSideBar = ({ children }) => {
	return (
		<div className="hidden md:block fixed right-0 top-[73px] md:w-[30%] lg:w-[22%] pt-2  lg:overflow-y-scroll border-slate-950 dark:border-slate-300/60  pr-5 ">
			{children}
		</div>
	);
};

export default RightSideBar;
