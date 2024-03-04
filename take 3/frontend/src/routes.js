import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import ItineraryForm from "./components/ItineraryForm";
import ItineraryList from "./components/AllFlights";
// Assuming there might be other components/pages you'd want to route to, such as a detailed view for an itinerary or a login page
// import ItineraryDetail from './components/ItineraryDetail';
// import LoginPage from './components/LoginPage';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={App} />
                <Route path='/create-itinerary' component={ItineraryForm} />
                <Route path='/itineraries' component={ItineraryList} />
                {/* Example of additional routes you might include in your project */}
                {/* <Route path="/itineraries/:id" component={ItineraryDetail} /> */}
                {/* <Route path="/login" component={LoginPage} /> */}
            </Switch>
        </Router>
    );
};

export default Routes;
