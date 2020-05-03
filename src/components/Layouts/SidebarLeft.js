import React from "react";

export default () => {
	return <>
		<div className="mb-4">
			<ul className="list-none">
				<li>
					<a href="/#"
						 className="block w-4/5 text-white text-lg hover:bg-blue-hover-nav hover:text-blue-hover-nav-item text-sm  font-semibold border-b-2 border-solid border-transparent no-underline hover:no-underline py-3 my-1 px-5 rounded-full">
						<i className="fa fa-home fa-lg"/> Home
					</a>
				</li>
				<li>
					<a href="/#"
						 className="block w-4/5 text-white text-lg hover:bg-blue-hover-nav hover:text-blue-hover-nav-item text-sm font-semibold border-b-2 border-solid border-transparent no-underline hover:no-underline py-3 my-1 px-5 rounded-full">
						<i className="fa fa-bell fa-lg"/> Notifications
					</a>
				</li>
				<li>
					<a href="/#"
						 className="block w-4/5 text-white text-lg hover:bg-blue-hover-nav hover:text-blue-hover-nav-item text-sm font-semibold border-b-2 border-solid border-transparent no-underline hover:no-underline py-3 my-1 px-5 rounded-full">
						<i className="fa fa-envelope fa-lg"/> Messages
					</a>
				</li>
				<li>
					<a href="/#"
						 className="block w-4/5 text-white text-lg hover:bg-blue-hover-nav hover:text-blue-hover-nav-item text-sm font-semibold border-b-2 border-solid border-transparent no-underline hover:no-underline py-3 my-1 px-5 rounded-full">
						<i className="fa fa-bookmark fa-lg"/> Bookmarks
					</a>
				</li>
				<li>
					<a href="/#"
						 className="block w-4/5 text-white text-lg hover:bg-blue-hover-nav hover:text-blue-hover-nav-item text-sm font-semibold border-b-2 border-solid border-transparent no-underline hover:no-underline py-3 my-1 px-5 rounded-full">
						<i className="fa fa-list fa-lg"/> List
					</a>
				</li>
				<li>
					<a href="/#"
						 className="block w-4/5 text-white text-lg hover:bg-blue-hover-nav hover:text-blue-hover-nav-item text-sm font-semibold border-b-2 border-solid border-transparent no-underline hover:no-underline py-3 my-1 px-5 rounded-full">
						<i className="fa fa-user fa-lg"/> Profile
					</a>
				</li>
				<li>
					<a href="/#"
						 className="block w-4/5 text-white text-lg hover:bg-blue-hover-nav hover:text-blue-hover-nav-item text-sm font-semibold border-b-2 border-solid border-transparent no-underline hover:no-underline py-3 my-1 px-5 rounded-full">
						<i className="fa fa-ellipsis-h fa-lg"/> More
					</a>
				</li>
				
				<li>
					<button
						className="bg-blue-500 block text-base hover:bg-blue-hover text-white font-medium border-transparent no-underline focus:outline-none focus:shadow-outline py-2 px-4 ml-2 text-center w-48 h-12 mt-1 rounded-full">Twittear
					</button>
				</li>
			</ul>
		</div>
	</>
}