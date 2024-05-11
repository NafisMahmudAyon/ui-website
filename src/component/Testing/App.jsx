import {
	Accordion,
	AccordionHeader,
	AccordionDetails,
	Text,
	Block,
	Checkbox,
	Input,
} from "landing-page-ui";

const App = () => {
	return (
		<Block tagName="div">
			<Checkbox
				icon="fa-times"
				iconLibrary="font-awesome"
				checkedIcon="fa-check"
				label="hello"
				labelPosition="before"
			/>
			<Checkbox label="hhh" id="aae" labelPosition="after"  />
			<Input
				type="password"
				label="fff"
				labelStyless="ui_input_label"
				labelStyles="inline  "
				inputStyles=" peer placeholder:text-transparent ui_input_field "
				required
				requiredStyles="text-red-500"
				icon="fa-bell"
				iconEnable
				styles="w-28"
			/>
			<div className="relative mt-10">
				<label for="">
					<input
						type="text"
						className="peer bg-transparent border placeholder:text-red-400 p-2 focus:placeholder:text-transparent transition-all duration-300 ease-in-out "
					/>
					<span className="absolute top-2 left-1 bg-gray-900 px-1  peer-focus:translate-x-1 peer-focus:-translate-y-[50%] peer-focus:scale-90 peer-focus:opacity-100 peer-focus:top-0 transition-all duration-300 ease-in-out ">
						hello
					</span>
				</label>
			</div>
			
		</Block>
	);
};

export default App;
