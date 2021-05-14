import {useState,useEffect} from 'react'
import { useSelector,useDispatch } from "react-redux";
import { addLink } from "./../../../actions/links";
import M from 'materialize-css'
import './../Home.css'
const Left = () => {
    const dispatch = useDispatch()
    const homelinks = useSelector(state=>state.links)
    // Stored Links
    // access savedLinks
  const [storedLinks,setStoredLinks]= useState(window.localStorage.getItem('v_'))
  const [user,setUser] = useState(JSON.parse(window.localStorage.getItem('u_')))
  const [url,setUrl] = useState("")

  const postLink = e =>{
      e.preventDefault()
    dispatch(addLink({longURL:url}))
 }

 if(homelinks.length != 0 && window.location.pathname == "/"){
    homelinks.map(link=>(
      window.localStorage.setItem('v_',`${window.localStorage.getItem('v_')}-${link.shortURL}`)
    ))
   }

   useEffect(()=>{
    //dispatch(getLinks())
    M.AutoInit()
  },[storedLinks])
    return (
        <div className="core row">

     <form autoComplete="off" className="row" onSubmit={postLink}>
     <h2 className="center-align">Try Now</h2>
        <div className="input-field col s12">
        <input type="url" id="link" onChange={e=>setUrl(e.target.value)}/>
        <label for="link">Enter a valid url</label>
        </div>
        <div className="col s4 offset-s4">
            <button type="submit" className="green btn btn-block">Shrink</button>
        </div>
        <div className="col s12 teal urls-box z-depth-2">
       
        {window.location.pathname != '/dashboard' && storedLinks && (
         <h5>Recently Added</h5>
       )}
        {window.location.pathname != '/dashboard' && storedLinks && storedLinks?.split('-')?.slice(1)?.reverse()?.map(link=>(
         <h5>https://urlshrinker-react-express-jwt.herokuapp.com/{link}</h5>
       ))}
        </div>
        </form>

    </div>


    );
}
 
export default Left;