import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

export const getAllUsers = async () => {
  const response = await axios.get(`${process.env.API_URL}/users`);
  return response;
};

export const validIfUserExists = async (userName) => {
  const currentUsers = await getAllUsers();
  const existAnUser = currentUsers.data.filter(
    (user) => user.userName === userName
  );

  if (existAnUser.length > 0) return existAnUser[0];
};

export const postUser = async (data) => {
  const response = await axios.post(`${process.env.API_URL}/users`, data);
  return response;
};

export const getUserById = async (id) => {
  const response = await axios.get(`${process.env.API_URL}/users/${id}`);
  return response;
};

export const updateUser = async (id, data) => {
  const response = await axios.put(`${process.env.API_URL}/users/${id}`, data);
  return response;
};
