import React from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./home";
import Channels from "./channelsComp";
import SingleChannel from "./singleChannel";
import Subscriptions from "./subscriptions";
import Upload from "./upload";
import VideoPage from "./videoPage";
import Login from "./login";
import SignUp from "./signup";
import Settings from "./settings";
import Recover from "./forgottenPassword";
import Categories from "./categories";
import NotFoundPage from "./404page";
import Contact from "./contact";
import Account from "./account"
import WatchHistory from "./watchHistory";

function MainAppBody() {
    return (
		<React.Fragment>
			<Router>
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/account" component={Account} />
					<Route path="/channels" component={Channels} />
					<Route path="/single-channel" component={SingleChannel} />
					<Route path="/subscriptions" component={Subscriptions} />
					<Route path="/upload" component={Upload} />
					<Route path="/video" component={VideoPage} />
					<Route path="/login" component={Login} />
					<Route path="/signup" component={SignUp} />
					<Route path="/recover-password" component={Recover} />
					<Route path="/settings" component={Settings} />
					<Route path="/categories" component={Categories} />
					<Route path="/contact" component={Contact} />
					<Route path="/watch-history" component={WatchHistory} />
					<Route component={NotFoundPage} />
				</Switch>
			</Router>
		</React.Fragment>
    );
}

export default MainAppBody;
