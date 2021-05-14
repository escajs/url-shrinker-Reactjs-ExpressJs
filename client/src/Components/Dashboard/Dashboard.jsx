import React, { useState, useEffect } from 'react';
import "./Dashboard.css"
import { getUserData,deleteLink } from "./../../actions/links";
import { useSelector,useDispatch } from "react-redux";
import Preloader from '../../Preloader';
const Dashboard = () => {
    const data = useSelector(state=>state.links)
    const [currentPage,setCurrentPage] = useState(1)
    const user = JSON.parse(window.localStorage.getItem('u_'))
    const dispatch = useDispatch()
    //if(!user || user.token.length >= 90 || user.token.split('.').length != 3) window.location.assign('/')
   //get total pages
   let pageArr=[]
   let totalPages = 0
   if(data){
      totalPages = Math.ceil(data.totalLinks / 5)
       for(let i =0 ;i<totalPages;i++){
        pageArr.push(i)
       }
   }
   
    useEffect(()=>{
        dispatch(getUserData(currentPage))
    },[currentPage])
    console.log('dashboard->>',data)
    /*
     * Default Behavior : 
     * links = [] , after dispatching => [...].length != 0 (push elements to links)
     */
    const breakLongUrl = ($longurl) =>{
        let first = $longurl.substr(0,18)
        let second = $longurl.substr($longurl.length-18)
        return `${first}....${second}`
    }
    const removeHandler = (id) =>{
        dispatch(deleteLink(id))
    }
    return (
        <div className="container section">
            <div className="divider"></div>
            {!data.links ? <Preloader/> : 
          <>
          <h5>Hey, {`${data?.userName?.split(' ')[0][0]?.toUpperCase()}${data?.userName?.split(' ')[0]?.substr(1)}`} , <br/> Your Dashboard</h5>
           <table className="striped responsive-table">
               <thead>
                   <tr>
                       <th>Short Url</th>
                       <th>Long Url</th>
                       <th className="center-align">Visiting Time</th>
                       <th className="center-align">Remove Url</th>
                   </tr>
               </thead>
               <tbody>
               {data && data.links.reverse().map(link=>(
               <tr>
                   <td>{`http://localhost:2000/${link.shortURL}`}</td>
                   <td><a href={link.longURL}>{(`${link.longURL}}`).length >= 40 ? breakLongUrl(link.longURL) : (`${link.longURL}`)}</a> </td>
                   <td className="center-align">{link.visitingCount}</td>
                   <td className="center-align"> <i className="material-icons delete-icon" onClick={_=>removeHandler(link._id)}>delete</i> </td>
               </tr>
            ))}
               </tbody>
           </table>
              <ul class="pagination center section">
    <li className={currentPage == 1 ? "hide" : "waves-effect"}><a onClick={e=>{e.preventDefault();setCurrentPage(currentPage-1)}}><i class="material-icons">chevron_left</i></a></li>
               {pageArr && pageArr?.map(pageNum=>(
                   <li className={currentPage == pageNum+1 ? "pagination-btn active waves-effect":"pagination-btn waves-effect"}><a onClick={e=>{e.preventDefault();setCurrentPage(pageNum+1)}}>{pageNum+1}</a></li>
               ))} 
    <li className={currentPage == totalPages ? "hide" : "waves-effect"}><a onClick={e=>{e.preventDefault();setCurrentPage(currentPage+1)}}><i class="material-icons">chevron_right</i></a></li>
  </ul>
          </>
            }
            <div className="divider"></div>
        </div>
    );
}
 
export default Dashboard;