import axios from 'axios';

// curl "https://api.discogs.com/database/search?q=Nirvana" - H "Authorization: Discogs token=abcxyz123456"

const AxiosDiscogs = axios.create({
    baseURL: "https://api.discogs.com/database/search?q=Nirvana",
    timeout: 50000,
    headers: {
        "Authorization": "Discogs token=dydVTdBJSzDGPxxTUuwApFMffRnYRsTgEGLkQFtT",
        "User-Agent": "crate-digger/0.1"
    }
});

export default AxiosBackend