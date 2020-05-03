import React from 'react';
import Navbar from "./components/Layouts/Navbar";
import SidebarLeft from "./components/Layouts/SidebarLeft";
import Publication from "./components/Layouts/shared/Publication";
import Profile from "./components/Layouts/Profile";
import SidebarRight from "./components/Layouts/SidebarRight";

function App() {
	return (
		<div>
			<div className="bg-twitter font-sans">
				<div className="bg-twitter">
					<Navbar/>
				</div>
			</div>
			
			<div className="container mx-auto flex flex-col lg:flex-row  text-sm leading-normal">
				
				<div className="w-full lg:w-1/4 pl-4 lg:pl-0 border-r border-blue-100 border-opacity-25">
					<SidebarLeft/>
				</div>
				
				<div className="w-full lg:w-1/2 bg-twitter">
					<div>
						<Profile/>
					</div>
					<div>
						{[1, 2].map((item, index) => {
							return (<Publication data={item} key={index}/>);
						})}
					</div>
				</div>
				
				<div className="w-full lg:w-1/4 pl-4 border-l border-blue-100 border-opacity-25">
					<SidebarRight/>
				</div>
				
			</div>
		</div>
	);
}

export default App;
