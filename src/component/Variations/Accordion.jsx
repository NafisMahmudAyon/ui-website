import {
	Block,
	Text,
	Accordion,
	AccordionHeader,
	AccordionDetails,
} from "landing-page-ui";
import React from "react";

const AccordionVariations = () => {
	const data = {
		background: [
			"#d1e4dd",
			"#1b1f24",
			"#ffffffd9",
			"#1c2c6c",
			"#fafafa",
			"#abd6f573",
			"#2667ff",
			"#f3f3f3",
		],
		variations: "4",
		accordions: [
			{
				"title": "What is web hosting, and why do I need it?",
				"content":
					"Web hosting is a service that provides the infrastructure to make your website accessible on the internet. It stores your website’s files on a server, allowing users to access your site at any time.",
			},
			{
				"title": "How do I know which hosting plan is right for me?",
				"content":
					"Choosing the ideal hosting plan depends on factors like your website’s size, anticipated traffic, and specific needs. Our team can assist in assessing your requirements.",
			},
			{
				"title": "What security measures are in place to protect my website?",
				"content":
					"We prioritize your website’s security. Our hosting services include robust security protocols, such as firewalls, malware detection, regular backups, and SSL certificates.",
			},
			{
				"title": "Can I transfer an existing domain to your hosting service?",
				"content":
					"Absolutely! You can transfer your existing domain to our hosting platform seamlessly. Our team can guide you through the process, ensuring a smooth transition while consolidating your domain and hosting management in one place.",
			},
		],
	};
	const variationsX = parseInt(data.variations); // Convert variations to an integer

	const loopContent = Array.from({ length: variationsX }, (_, index) => {
		console.log(index);
    const dynamicBgColor = `bg-[${data.background[index]}]`;
		return (
      <Block style={`bg-[${data.background[index]}]`}>
			<Accordion active={true} variant="1">
				<AccordionHeader>
					<Text tagName="h3" style=" text-xl font-medium !text-gray-200 ">
						{data.accordions[index]?.title}
					</Text>
				</AccordionHeader>
				<AccordionDetails>
					<Text style=" ">{data.accordions[index]?.content}</Text>
				</AccordionDetails>
			</Accordion>
      </Block>
		);
	});
	return (
		<Block tagName={"div"} style="scroll-smooth md:w[65%] lg:w-[73%]">
			<Block>
				<Text tagName={"h2"} style=" text-3xl mb-2 font-medium ">
					Accordion
				</Text>
				<Block>{loopContent}</Block>
			</Block>
		</Block>
	);
};

export default AccordionVariations;
