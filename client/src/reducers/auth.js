export default (auth = {authData : null},action)=>{
    switch(action.type){
        case "AUTH":
            window.localStorage.setItem('u_',JSON.stringify(action?.data))
            return {...auth,authData : action?.data}
            break
            case 'LOGOUT':
                window.localStorage.removeItem('u_')
                return {...auth,authData : null}
        default : 
        return auth
        
    }
}