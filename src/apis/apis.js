import axios from "axios";

const baseURL = "server.templ.es";

export const productURL = async() => {
    const response = await axios.get(`https://${baseURL}//products/`);
    return response.data;
}
