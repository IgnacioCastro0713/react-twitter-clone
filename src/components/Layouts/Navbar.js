import React from "react";
import Twitter from '../../Twitter.svg'

export default () => {
	return (
		<div className="container mx-auto flex flex-col lg:flex-row items-center">
			<div className="lg:w-1/4 text-left h-16 pt-3 pl-3">
				<a href="/#">
					<img src={Twitter} alt="Inicio" width={28} height={23}/>
				</a>
			</div>
			<div className="lg:w-1/2 h-16 p-3 text-left border-b border-r border-l border-blue-100 border-opacity-25">
				<h1 className="text-white font-semibold text-xl">Home</h1>
			</div>
			<div className="lg:w-1/4 h-16 py-3 pl-3">
				<div className="mr-4">
					<input type="text"
								 className="bg-grey-lighter rounded-full mt-1 rounded-full py-3 pl-4 text-xs w-full h-10 text-white bg-blue-search rounded-full focus:outline-none focus:shadow-outline "
								 placeholder="Search Twitter"/>
				</div>
			</div>
		</div>
	);
}

