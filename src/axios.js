import axios from 'axios'
// the baseUrl to make a request to the movie 
const instance = axios.create({
    baseURL:'https://api.themoviedb.org/3',
})
export default instance 