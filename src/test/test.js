import axios from 'axios';

const serverURL = 'server.templ.es'; // Replace with your actual server URL

export async function getPopular() {
    try {
        const response = await axios.get(`https://${serverURL}/products/popularity/`);
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching popular products:', error);
    }
}
