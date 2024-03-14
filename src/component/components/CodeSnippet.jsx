import { Code, CodeBody, CodeHeader, IconButton, Text } from 'landing-page-ui';
import React, { useState } from 'react'

const CodeSnippet = ({content, lang}) => {
  const [copySuccess, setCopySuccess] = useState(null);
	console.log(copySuccess);

	const handleCopyClick = () => {
		navigator.clipboard
			.writeText(content.trim())
			.then(() => setCopySuccess(true))
			.catch(() => setCopySuccess(false));

		// Reset copy success message after 2 seconds
		setTimeout(() => {
			setCopySuccess(null);
		}, 2000);
	};
  return (
		<Code style=" bg-hoverBgColor !font-code rounded-t-lg rounded-b-lg relative">
			<CodeHeader style="flex items-center justify-between   p-2 w-full bg-[#b4b4b4] text-white rounded-t-lg pl-4 ">
				<Text style="">{lang}</Text>
				<IconButton
					tagName="button"
					textOnClick={handleCopyClick}
					icon='fa-copy'
					iconLibrary="font-awesome"
					iconStyle="mr-2"
					text={
						copySuccess === null
							? "Copy code"
							: copySuccess === true
							? "Code copied"
							: "Failed to copy"
					}
					style="absolute top-0 right-0 p-2 text-white z-10 pr-4 cursor-pointer "
				/>
			</CodeHeader>
			<CodeBody
				content={content}
				style="font-code pt-1 px-4 pb-1 text-sm overflow-y-scroll  max-w-full block  "
			/>
		</Code>
	);
}

export default CodeSnippet