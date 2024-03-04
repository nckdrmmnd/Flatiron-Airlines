// Utility functions to fetch data from the backend API

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

// Fetch all itineraries
export const fetchItineraries = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/itineraries`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching itineraries:", error);
    throw error;
  }
};

// Fetch a single itinerary by ID
export const fetchItineraryById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/itineraries/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching itinerary with ID ${id}:`, error);
    throw error;
  }
};

// Create a new itinerary
export const createItinerary = async (itineraryData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/itineraries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(itineraryData),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error("Error creating itinerary:", error);
    throw error;
  }
};

// Update an existing itinerary
export const updateItinerary = async (id, itineraryData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/itineraries/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(itineraryData),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error(`Error updating itinerary with ID ${id}:`, error);
    throw error;
  }
};

// Delete an itinerary
export const deleteItinerary = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/itineraries/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error(`Error deleting itinerary with ID ${id}:`, error);
    throw error;
  }
};

// Fetch all flights (assuming there's an endpoint for this based on the project description)
export const fetchFlights = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/flights`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching flights:", error);
    throw error;
  }
};
