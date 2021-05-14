export default (links= [],action) => {
    switch(action.type){
        case 'ADD' : 
        return [...links,action.payload]
            break
        case 'FETCH_USER_DATA':
            return action.data
            break
        case 'DELETE':
            console.log(action.payload)
            console.log('links ====>',links)
            return links.links.filter(link=>link._id != action.payload)
            break
        default : 
        return []
    }
}