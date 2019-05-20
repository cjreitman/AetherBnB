import axios from "axios";

export const fetchSpots = data => {
  return axios.post('/api/spots/', data);
};

export const fetchSpot = id => {
  return axios.get(`/api/spots/${id}`);
};