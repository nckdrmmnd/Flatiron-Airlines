import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchData } from '../utils/fetchData';

function AllFlights() {
  const [itineraries, setItineraries] = useState([]);

  useEffect(() => {
    const getItineraries = async () => {
      try {
        const data = await fetchData('/itineraries');
        setItineraries(data);
      } catch (error) {
        console.error('Failed to fetch itineraries:', error);
      }
    };

    getItineraries();
  }, []);

  return (
    <div className="itinerary-list">
      <h2>Itineraries</h2>
      {itineraries.length > 0 ? (
        <ul>
          {itineraries.map((itinerary) => (
            <li key={itinerary.id}>
              <Link to={`/itineraries/${itinerary.id}`}>
                {itinerary.name} - {itinerary.destination}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No itineraries found. Start by creating a new one!</p>
      )}
      <Link to="/itineraries/new">Create New Itinerary</Link>
    </div>
  );
}

export default ItineraryList;
