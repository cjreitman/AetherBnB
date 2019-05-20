import axios from "axios";

export const fetchUserBookings = user_id => {
  return axios.post('/api/bookings/', { user_id });
};

export const fetchSpotBookings = spot_id => {
  return axios.get(`/api/bookings/${spot_id}`);
};

export const createBooking = data => {
  return axios.post(`/api/bookings/create`, data);
};

export const deleteBooking = id => {
  return axios.delete(`/api/bookings/${id}`);
};