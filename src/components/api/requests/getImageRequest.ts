import axios from 'axios';
import {photoApiKey} from '../config';

const getImageRequest = async (query: String) => {
    try {
        const resp = await axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${photoApiKey}&tags=${query}&per_page=1&format=json&nojsoncallback=1`);
        return resp.data.photos.photo;
    } catch (err) {
        console.log(err);
    }
}

export default getImageRequest;