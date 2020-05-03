import React from "react";

export default ({data}) => {
	return (
			<div className="flex border-b border-solid border-grey-light">
				<div className="w-1/8 text-right pl-3 pt-3 mr-2">
					<div>
						<a href="/#">
							<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_avatar_tailwind.jpg"
									 alt="avatar" className="rounded-full h-12 w-24 mr-2"/>
						</a>
					</div>
				</div>
				<div className="w-7/8 p-3 pl-0">
					<div className="flex justify-between">
						<div>
							<span className="font-bold"><a href="/#" className="text-white">Tailwind CSS </a></span>
							<span className="text-gray-500">@tailwindcss </span>
							<span className="text-gray-500">&middot; </span>
							<span className="text-gray-500">15 Dec 2017</span>
						</div>
						<div>
							<a href="/#" className="text-gray-600 hover:text-teal">
								<i className="fa fa-chevron-down"/>
							</a>
						</div>
					</div>
					<div>
						<div className="mb-4">
							<p className="mb-6 text-white">🎉 Tailwind CSS v0.4.0 is out!</p>
							<p className="mb-6 text-white">Makes `apply` more useful when using !important utilities, and includes
								an improved
								default color palette:</p>
							<p className="mb-4"><a href="/#" className="text-white">github.com/tailwindcss/ta...</a></p>
							<p>
								<a href="/#">
									<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_tweet1.jpg"
											 alt="tweet image" className="border border-solid border-grey-light rounded-sm"/>
								</a>
							</p>
						</div>
					</div>
					
					<div className="pb-2">
							<span className="mr-8"><a href="/#" className="text-white hover:no-underline hover:text-blue-600">
								<i className="fa fa-comment fa-lg mr-2"/> 9</a>
							</span>
						<span className="mr-8"><a href="/#" className="text-white hover:no-underline hover:text-green-600">
								<i className="fa fa-retweet fa-lg mr-2"/> 29</a>
							</span>
						<span className="mr-8"><a href="/#" className="text-white hover:no-underline hover:text-red-600">
								<i className="fa fa-heart fa-lg mr-2"/> 135</a>
							</span>
						<span className="mr-8"><a href="/#" className="text-white hover:no-underline hover:text-teal-600">
								<i className="fa fa-envelope fa-lg mr-2"/></a>
							</span>
					</div>
				</div>
			</div>
	);
}