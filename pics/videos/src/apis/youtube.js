import axios from 'axios';

const KEY = "AIzaSyAyueP5t0uMhF2BK-90Ll4FFlNXOK9Y2nU";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});