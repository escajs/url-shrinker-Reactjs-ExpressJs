import * as api from './../api'

export const signup = formData => async (dispatch) =>{
    try {
        const {data} = await api.signup(formData)
        // data is the new  user info
        const action = {
            type : "AUTH",
            data
        }
        dispatch(action)
    } catch (error) {
        console.log("form sign up",error)
    }
}

export const signin = formData => async (dispatch) =>{
    try {
        // import line : get token from back-end // a promise : make sure to add await
        const {data} = await api.signin(formData)
        // data is user id
        const action = {
            type : "AUTH",
            data
        }
        dispatch(action)
        window.location.assign('/')
    } catch (error) {
        console.log("form sign in",error)
    }
}