import { Accordion, AccordionDetails, AccordionHeader, Block, Text } from 'landing-page-ui';
import React from 'react'

const Test = () => {
  const accordions= [
			{
				title: "What is web hosting, and why do I need it?",
				content:
					"Web hosting is a service that provides the infrastructure to make your website accessible on the internet. It stores your website’s files on a server, allowing users to access your site at any time.",
			},
			{
				title: "How do I know which hosting plan is right for me?",
				content:
					"Choosing the ideal hosting plan depends on factors like your website’s size, anticipated traffic, and specific needs. Our team can assist in assessing your requirements.",
			},
			{
				title: "What security measures are in place to protect my website?",
				content:
					"We prioritize your website’s security. Our hosting services include robust security protocols, such as firewalls, malware detection, regular backups, and SSL certificates.",
			},
			{
				title: "Can I transfer an existing domain to your hosting service?",
				content:
					"Absolutely! You can transfer your existing domain to our hosting platform seamlessly. Our team can guide you through the process, ensuring a smooth transition while consolidating your domain and hosting management in one place.",
			},]
  return (
		<Block
			styles="py-20 px-4 md:px-0 pb-24 grid place-items-center"
			// style={{ backgroundColor: data.background[index] }}
			>
			<Text
				tagName="h4"
				styles="text-center text-lg font-semibold mb-12"
				// style={{ color: data.color[index] }}
				>
				Variation - 
			</Text>
			{/* Include loopContent directly inside loopContentX */}
			{Array.from({ length: 4 }, (_, loopIndex) => (
				<Block styles="md:w-[65%] lg:w-[73%]" key={loopIndex}>
					<Accordion
						active={loopIndex === 0}
						deactivate={loopIndex === 3}
						variant={1}>
						<AccordionHeader>
							{accordions[loopIndex]?.title}
						</AccordionHeader>
						<AccordionDetails>
							<Text styles="">{accordions[loopIndex]?.content}</Text>
						</AccordionDetails>
					</Accordion>
				</Block>
			))}
		</Block>
	);
}

export default Test