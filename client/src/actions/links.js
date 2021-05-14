import * as api from './../api'
/*export const getLinks = () => async (dispatch) => {
    try {
        const {data} = await api.fetchLinks()
        const action = {
            type : 'FETCH_LINKS',
            payload : data
        }
        dispatch(action)
    } catch (error) {
        console.log(error)
    }
}*/

export const addLink = (newLink) => async (dispatch) => {
    try {
        // get the shrinked url
        const {data} = await api.postLink(newLink)
        console.log(data)
        const action = {
            type : 'ADD',
            payload : data
        }
        dispatch(action)
        window.location.reload()
    } catch (error) {
        console.log(error)
    }
}
// user is authorized
export const getUserData = (page) => async (dispatch) => {
    try {
        const {data} = await api.getuserlinks(page)
        const action = {
            type : 'FETCH_USER_DATA',
            data
        }
        dispatch(action)
    } catch (error) {
        console.log(error)
    }
}

export const deleteLink = (id) => async (dispatch) =>{
    try {
        await api.deleteLink(id)
        const action = {
            type : 'DELETE',
            payload : id
        }
       // console.log(action.payload)
        dispatch(action)
        window.location.reload()
    } catch (error) {
        console.log(error)
    }
}