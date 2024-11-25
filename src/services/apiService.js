import axios from "axios";

// Base URL for the API
const API_URL = "http://localhost:5000/api";

// Fetch all listings
export const getListings = async () => {
  try {
    const response = await axios.get(`${API_URL}/listings`);
    return response.data;
  } catch (error) {
    console.error("Error fetching listings:", error);
    throw error;
  }
};

// Fetch a specific listing by ID
export const getListingById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/listings/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching listing details:", error);
    throw error;
  }
};
