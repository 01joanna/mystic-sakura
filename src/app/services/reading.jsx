import axios from "axios";
export const saveReading = async (data) => {
  const response = await axios.post(`${process.env.API_URL}/plays`, data);
  return response;
};

export const getAllReadings = async (id) => {
  const response = await fetch(`${process.env.API_URL}/plays`, {
    cache: "no-cache",
  });
  if (response.status == 404) return;
  const result = await response.json();
  const allReadingsById = result.filter((res) => res.user_id === id);
  return allReadingsById;
  // return result;
};

export const deleteReading = async (id) => {
  const response = await axios.delete(`${process.env.API_URL}/plays/${id}`);
  return response;
};
