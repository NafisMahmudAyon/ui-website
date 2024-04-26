import {
	Accordion,
	AccordionHeader,
	AccordionDetails,
	Text,
	Block,
} from "landing-page-ui";

const App = () => {
	return (
		<Block tagName="div">
			<Accordion active={true} variant="1">
				<AccordionHeader>
					<Text tagName="h3" styles=" text-xl font-medium !text-gray-200 ">
						Accordion 1
					</Text>
				</AccordionHeader>
				<AccordionDetails>
					<Text styles=" ">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
						deserunt sapiente nostrum iure excepturi vel debitis, quae quibusdam
						officiis. Atque nesciunt pariatur praesentium optio, at vel harum
						aliquam illo labore?
					</Text>
				</AccordionDetails>
			</Accordion>
			<Accordion variant="1">
				<AccordionHeader>
					<Text tagName="h3" styles=" text-xl font-medium !text-gray-200 ">
						Accordion 2
					</Text>
				</AccordionHeader>
				<AccordionDetails>
					<Text styles="">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
						deserunt sapiente nostrum iure excepturi vel debitis, quae quibusdam
						officiis. Atque nesciunt pariatur praesentium optio, at vel harum
						aliquam illo labore?
					</Text>
				</AccordionDetails>
			</Accordion>
			<Accordion variant="1">
				<AccordionHeader>
					<Text tagName="h3" styles=" text-xl font-medium !text-gray-200 ">
						Accordion 3
					</Text>
				</AccordionHeader>
				<AccordionDetails>
					<Text styles="">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
						deserunt sapiente nostrum iure excepturi vel debitis, quae quibusdam
						officiis. Atque nesciunt pariatur praesentium optio, at vel harum
						aliquam illo labore?
					</Text>
				</AccordionDetails>
			</Accordion>
		</Block>
	);
};

export default App;
