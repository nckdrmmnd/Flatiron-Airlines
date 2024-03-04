import React from "react";
import { Route, Switch } from "react-router-dom";
import ItineraryForm from "./components/ItineraryForm";
import AllFlights from "./components/AllFlights";
import NavBar from "./components/NavBar"; // Assuming you have a NavBar component for navigation

function App() {
    return (
        <div className='App'>
            <NavBar />
            <Switch>
                {/* Route to display the list of itineraries */}
                <Route exact path='/'>
                    <AllFlights />
                </Route>
                {/* Route to add a new itinerary */}
                <Route path='/new-itinerary'>
                    <ItineraryForm />
                </Route>
                {/* Assuming you have an EditItineraryForm component for editing itineraries */}
                {/* Route to edit an existing itinerary */}
                <Route path='/edit-itinerary/:id'>
                    <ItineraryForm editMode={true} />
                </Route>
                {/* You can add more routes as needed for your application */}
            </Switch>
        </div>
    );
}

export default App;
