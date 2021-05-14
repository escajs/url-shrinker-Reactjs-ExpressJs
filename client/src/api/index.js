import Axios from 'axios'
const API = Axios.create({baseURL:'https://urlshrinker-react-express-jwt.herokuapp.com'})
// Create Bearer Authorization
API.interceptors.request.use(req=>{
    if(window.localStorage.getItem('u_')){
        req.headers.authorization = `Bearer ${JSON.parse(window.localStorage.getItem('u_')).token}`
    }
    return req
})
// URLS
export const fetchLinks = () => API.get('/urls')
export const postLink = (newLink) => API.post('/urls/newLink',newLink)
export const deleteLink = (id) =>API.delete(`/urls/${id}`)
// USERS
export const getuserlinks = (page) => API.get(`/userlinks?page=${page}&limit=5`)
export const signup = (formData) => API.post('/users/signup',formData)
export const signin = (formData) => API.post('/users/signin',formData)