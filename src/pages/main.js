import React, {useEffect} from 'react';
import {Route, Switch} from "react-router-dom";
import Page from "./page/page";
import Navbar from "./Navbar/Navbar"
import HomePage from "./homepage";
export default function Main() {
	useEffect(() => {
		let inTop = true;
		let $header = document.querySelector(".header-container");
		document.addEventListener("scroll", () => {
			if(document.documentElement.scrollTop === 0) {
				inTop = true;
				$header.classList.remove("inScroll");
			} else {
				if(inTop) {
					inTop = false;
					$header.classList.add("inScroll");
				}
			}
		})
	}, [])
	let fragment = <><React.Fragment>
		<header>
			<Navbar/>
		</header>

		<Switch>
			<Route path="/windows" exact render={() => <Page id={0}/>}/>
			<Route path="/programmes" exact render={() => <Page id={1}/>}/>
			<Route path="/antivirus" exact render={() => <Page id={2}/>}/>
			<Route path="/network" exact render={() => <Page id={3}/>}/>
			<Route path="/fixpc" exact render={() => <Page id={4}/>}/>
			<Route path="/fixlaptop" exact render={() => <Page id={5}/>}/>
			<Route path="/" exact component={HomePage}/>
			{/*<Route component={Error404}/>*/}
		</Switch>
	</React.Fragment></>;
	return fragment
}
