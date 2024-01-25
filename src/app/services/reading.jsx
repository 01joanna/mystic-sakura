import axios from "axios";


export const saveReading = async(data) => {
    const response = await axios.post(`${process.env.API_URL}/plays`, data);
    return response;
}


Ñ