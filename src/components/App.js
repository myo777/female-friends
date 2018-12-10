import React from "react";
import Home from "./Home";
import Register from "./Register";
import RegisterPayment from "./RegisterPayment";
import Login from "./Login";
import Main from "./Main";
// import Chat from "./Chat";
import Events from "./Events";
import Friends from "./Friends";
import ShowFriend from "./ShowFriend";
import MyProfile from "./Profile/Show";
import EditProfile from "./Profile/Edit";
import challengeForm from "./challengeForm";
import challengeOne from "./challengeOne";
import suggestionForm from "./suggestionForm";
import suggestionOne from "./suggestionOne";
// import Challenges from "./Challenges";
// import ShowChallenge from "./ShowChallenge";
import Resources from "./Resources";
import Booklist from "./Booklist";
// import Suggestions from "./Suggestions";
// import ShowSuggestion from "./ShowSuggestion";
// import NotFound from "./NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Axios from "axios";
Axios.defaults.withCredentials = true;

const App = () => (
  <BrowserRouter>
    <div className="app-container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/register-payment" component={RegisterPayment} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/main" component={Main} />
        {/* <Route exact path="/chat" component={Chat} />*/}
        <Route exact path="/events" component={Events} />
        <Route exact path="/friends" component={Friends} />
        <Route exact path="/show-friend" component={ShowFriend} />
        <Route exact path="/challenges" component={challengeForm} />
        <Route exact path="/show-challenge/:id" component={challengeOne} />
        <Route exact path="/suggestions" component={suggestionForm} />
        <Route exact path="/show-suggestion" component={suggestionOne} />
        <Route exact path="/my-profile" component={MyProfile} />
        <Route exact path="/edit-profile" component={EditProfile} />
        {/* <Route exact path="/challenges" component={Challenges} />
        <Route exact path="/show-challenge" component={ShowChallenge} /> */}
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/booklist" component={Booklist} />
        {/*<Route exact path="/suggestions" component={Suggestions} />
        <Route exact path="/show-suggestion" component={ShowSuggestion} /> 
        <Route component={NotFound} />*/}
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;