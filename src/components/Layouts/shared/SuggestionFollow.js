import React from "react";

export default () => {
	return (<div className="bg-blue-who-to-follow p-3 mb-3 rounded-lg border border-blue-100 border-opacity-25">
			<div>
				<span className="text-lg font-bold text-white">Who to follow</span>
				<span>&middot; </span>
				<span><a href="/#" className="text-gray-500 text-xs hover:text-blue-600">Refresh</a></span>
				<span>&middot;</span>
				<span><a href="/#" className="text-gray-500 text-xs hover:text-blue-600">View All</a></span>
			</div>
			
			<div className="flex border-b border-solid border-gray-100 border-opacity-25">
				<div className="py-2">
					<a href="/#">
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_follow1.jpg" alt="follow1"
								 className="rounded-full h-12 w-16"/>
					</a>
				</div>
				<div className="pl-2 py-2 w-full">
					<div className="flex justify-between mb-1">
						<div>
							<a href="/#" className="block font-bold text-white">Nuxt.js </a>
							<a href="/#" className="block text-gray-600">@nuxt_js</a>
						</div>
						<button
							className="bg-transparent text-xs hover:bg-blue-500 text-blue-600 font-semibold hover:text-white py-0 px-4 border border-blue-600 hover:border-transparent rounded-full">
							Follow
						</button>
					</div>
				</div>
			</div>
			<div className="flex border-b border-solid border-gray-100 border-opacity-25">
				<div className="py-2">
					<a href="/#">
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_follow2.jpg" alt="follow1"
								 className="rounded-full h-12 w-16"/>
					</a>
				</div>
				<div className="pl-2 py-2 w-full">
					<div className="flex justify-between mb-1">
						<div>
							<a href="/#" className="block font-bold text-white">Laracon EU </a>
							<a href="/#" className="block text-gray-600">@LaraconEU</a>
						</div>
						<button
							className="bg-transparent text-xs hover:bg-blue-500 text-blue-600 font-semibold hover:text-white py-0 px-4 border border-blue-600 hover:border-transparent rounded-full">
							Follow
						</button>
					</div>
				</div>
			</div>
			<div className="pt-2">
				<a href="/#" className="text-white text-xs">Connect other address book</a>
			</div>
		</div>
	);
}