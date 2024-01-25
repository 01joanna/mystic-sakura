import axios from "axios";
// import { create } from "json-server";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

export const getAllUser = async() => {
    const response = await axios.get(`${process.env.API_URL}/users`);
    return response;
}

export const postUser = async(data) => {
    const response = await axios.post(`${process.env.API_URL}/users`, data);
    return response;
}
