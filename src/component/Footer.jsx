import { Block, Icon } from "landing-page-ui";
import React from "react";
import { FacebookIcon, GithubIcon, Logo } from "./Icons";

const Footer = () => {
	return (
		<Block styles="flex justify-between items-center py-4 ">
			<Block styles="">
				<Logo className=" h-[40px]  " />
			</Block>
			<Block styles="flex items-center gap-3 ">
				<Icon
					icon={'<i class="fa-brands fa-square-facebook"></i>'}
					iconLibrary="font-awesome"
					iconStyles={
						"text-[24px] hover:text-textHoverColor dark:text-darkTextHoverColor  hover:bg-hoverBgColor flex items-center justify-center w-[34px] h-[34px] rounded-full dark:hover:bg-darkHoverBgColor "
					}
				/>
				<Icon
					icon={'<i class="fa-brands fa-square-github"></i>'}
					iconLibrary="font-awesome"
					iconStyles={
						"text-[24px] hover:text-textHoverColor dark:text-darkTextHoverColor  hover:bg-hoverBgColor flex items-center justify-center w-[34px] h-[34px] rounded-full dark:hover:bg-darkHoverBgColor "
					}
				/>
				<Icon
					icon={'<i class="fa-brands fa-square-whatsapp"></i>'}
					iconLibrary="font-awesome"
					iconStyles={
						"text-[24px] hover:text-textHoverColor dark:text-darkTextHoverColor hover:bg-hoverBgColor flex items-center justify-center w-[34px] h-[34px] rounded-full dark:hover:bg-darkHoverBgColor "
					}
				/>
			</Block>
		</Block>
	);
};

export default Footer;
