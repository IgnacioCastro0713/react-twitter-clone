import React from "react";

export default () => {
	return (
		<div>
			<div className="w-full mb-2">
				<img src="https://pbs.twimg.com/profile_banners/895273477711769600/1502285115/1080x360"
						 alt="tweet image" className="lg:h-48 w-full" height={48} width={60}/>
			</div>
			<div className="flex">
				<div className="w-9/12 mt-12">
					<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_tailwind_logo.jpg" alt="logo"
							 className="rounded-full h-32 w-32 lg:absolute border-4 border-solid border-black lg:pin-l lg:pin-t lg:-mt-32 ml-2"/>
				</div>
				<button
					className="rounded-full h-10 w-10 flex bg-transparent right-0 text-xs justify-center mr-2 hover:bg-blue-500 text-blue-600 hover:text-white border border-blue-600 hover:border-transparent font-medium">
					<i className="fa fa-ellipsis-h fa-lg"/>
				</button>
				<button
					className="w-1/6 bg-transparent inset-y-0.right-0 text-xs hover:bg-blue-500 text-blue-600 hover:text-white border border-blue-600 hover:border-transparent font-medium py-2 px-4 rounded-full h-10">
					follow
				</button>
			</div>
			<div className="container flex flex-col border-b border-blue-100 border-opacity-25 mt-3">
				<div className="w-full pl-4">
					<h1><a href="/#" className="text-white font-bold text-lg no-underline hover:underline">Tailwind CSS</a></h1>
					<div className="mb-2">
						<a href="/#" className="text-gray-600 no-underline hover:underline">@tailwindcss</a>
					</div>
				</div>
				<div className="w-full mb-2 pl-4 text-white">
					A utility-first CSS framework for rapid UI development. By
					<a href="/#" className="text-blue-600 no-underline hover:underline"> @adamwathan</a>,
					<a href="/#" className="text-blue-600 no-underline hover:underline"> @reinink</a>,
					<a href="/#" className="text-blue-600 no-underline hover:underline"> @davidhemphill</a>, and
					<a href="/#" className="text-blue-600 no-underline hover:underline"> @steveschoger</a>.
				</div>
				
				<div className="flex mb-2">
					<div className="w-1/4 pl-4">
						<i className="fa fa-link fa-lg text-gray-600 mr-1"/>
						<a href="/#" className="text-gray-600 no-underline hover:underline">tailwindcss.com</a>
					</div>
					<div className="w-1/4 pl-4">
						<i className="fa fa-birthday-cake fa-lg text-gray-600 mr-1"/>
						<a href="/#" className="text-gray-600 no-underline hover:underline">Born October 31</a>
					</div>
					<div className="w-1/4 pl-4">
						<i className="fa fa-calendar fa-lg text-gray-600 mr-1"/>
						<a href="/#" className="text-gray-600 no-underline hover:underline">Joined August 2017</a>
					</div>
				</div>
				<div className="flex mb-2">
					<div className="w-1/6 pl-4">
						<a href="/#" className="text-gray-600 no-underline hover:underline">
							<span className="text-white font-bold">4 </span>
							Following</a>
					</div>
					<div className="w-2/6 pl-4">
						<a href="/#" className="text-gray-600 no-underline hover:underline">
							<span className="text-white font-bold">34.7K </span>
							Followers</a>
					</div>
				</div>
			</div>
			
			
			<div className="flex text-md font-bold border-b border-blue-100 border-opacity-25 text-center">
				<div className="w-1/4 bg-twitter h-12 pt-3 hover:bg-blue-hover-nav">
					<a href="/#" className="text-gray-500 no-underline hover:no-underline hover:text-blue-600">Tweets</a>
				</div>
				<div className="w-1/4 bg-twitter h-12 pt-3 hover:bg-blue-hover-nav">
					<a href="/#"
						 className="text-gray-500 no-underline hover:no-underline hover:text-blue-600">Tweets &amp; Replies</a>
				</div>
				<div className="w-1/4 bg-twitter h-12 pt-3 hover:bg-blue-hover-nav">
					<a href="/#" className="text-gray-500 no-underline hover:no-underline hover:text-blue-600">Media</a>
				</div>
				<div className="w-1/4 bg-twitter h-12 pt-3 hover:bg-blue-hover-nav">
					<a href="/#" className="text-gray-500 no-underline hover:no-underline hover:text-blue-600">Likes</a>
				</div>
			</div>
		</div>
	);
}