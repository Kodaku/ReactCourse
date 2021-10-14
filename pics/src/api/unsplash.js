import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID s4z0nExOg97q8pKu1uSY6Jl33UuSUs5XzU4-HyQqKvg'
    }
});