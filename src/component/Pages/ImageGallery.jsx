import { Block, CodeSnippet, Icon, Image, ImageGallery, Tab, Tabs, TabsNav, TabsPanel, Text } from 'landing-page-ui'
import React from 'react'

const ImageGalleryPage = () => {
  const gallery = [
		{
			src: "https://source.unsplash.com/random/800x600?nature=1",
			caption: "nature 1",
		},
		{
			src: "https://source.unsplash.com/random/800x600?nature=2",
			caption: "nature 2",
		},
		{
			src: "https://source.unsplash.com/random/800x600?nature=3",
			caption: "nature 3",
		},
		{
			src: "https://source.unsplash.com/random/800x600?nature=4",
			caption: "nature 4",
		},
		{
			src: "https://source.unsplash.com/random/800x600?nature=5",
			caption: "nature 5",
		},
		{
			src: "https://source.unsplash.com/random/800x600?nature=6",
			caption: "nature 6",
		},
		{
			src: "https://source.unsplash.com/random/800x600?nature=7",
			caption: "nature 7",
		},
		{
			src: "https://source.unsplash.com/random/800x600?nature=8",
			caption: "nature 8",
		},
		{
			src: "https://source.unsplash.com/random/800x600?nature=9",
			caption: "nature 9",
		},
	];
  return (
    <Block tagName={"div"} style="scroll-smooth md:w[65%] lg:w-[73%]">
			<Block>
				<Text tagName={"h2"} style=" text-3xl mb-2 font-medium ">
					Image Gallery
				</Text>
				<Text tagName={"p"} style="">
					The{" "}
					<Text tagName={"span"} style="code  ">
						ImageGallery
					</Text>{" "}
					allows you to display user avatars or profile images in a consistent
					and visually appealing manner.
				</Text>
				<Block style="my-10">
					<Text
						tagName={"h3"}
						id="image-avatar"
						style="text-2xl mt-6 mb-2 !font-medium group flex items-center ">
						Image Avatar
						<Icon
							icon="fa-link"
							iconLibrary="font-awesome"
							isLink={true}
							linkTo="#image-avatar"
							iconStyle="mx-3 hidden dark:bg-gray-800 group-hover:inline-block p-1 rounded-md shadow-md text-sm bg-gray-200"
						/>
					</Text>
					<Tabs
						active="1"
						orientation="horizontal"
						navWrapStyle="text-sm"
						panelWrapStyle=" mt-2 shadow-md rounded-md  "
						style="w-full">
						<TabsNav
							showButton="false"
							style=" flex justify-between font-semibold text-gray-800/50 dark:text-gray-200/50  py-1 px-1"
							tabAreaStyle="flex gap-3"
							activeTabStyle="bg-gray-800 !text-gray-200 dark:bg-gray-200 dark:!text-gray-200 shadow-md">
							<Tab
								value="1"
								style=" px-4 py-1 bg-gray-200 rounded-sm dark:bg-gray-800 ">
								Preview
							</Tab>
							<Tab
								value="2"
								style=" px-4 py-1 bg-gray-200 rounded-sm dark:bg-gray-800">
								Code
							</Tab>
						</TabsNav>
						<TabsPanel
							value="1"
							style="px-4 py-2 bg-gray-200 dark:bg-gray-800 border-[1px] border-white/50 rounded-lg">
							<Block style="flex gap-4 my-4">
								{/* <Avatar src="/avatar-1.jpg" altText="Avatar 1" style="border" />
								<Avatar src="/avatar-2.jpg" altText="Avatar 2" style="border" />
								<Avatar src="/avatar-3.jpg" altText="Avatar 3" style="border" /> */}
                <ImageGallery captionEnabled={true} style='grid grid-cols-3 gap-2 '>
                  {gallery.map((item, index) => (
                    <Image
                      key={index}
                      src={`https://source.unsplash.com/random/800x600?nature=${index}`}
                      // thumbnail={item.thumbnail}
                      imageCaption={`Nature ${index+1}`}
                      style=''
                    />
                  ))}
                </ImageGallery>
							</Block>
						</TabsPanel>
						<TabsPanel value="2" style="rounded-lg !overflow-hidden ">
							<CodeSnippet
								lang="jsx"
								headerStyle="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
								bodyStyle=" !font-code max-h-[300px] !my-0 "
								// content={imageAvatarContent}
							/>
						</TabsPanel>
					</Tabs>
				</Block>
        </Block>
        </Block>
  )
}

export default ImageGalleryPage