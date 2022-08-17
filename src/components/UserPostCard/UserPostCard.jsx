import React from "react";
import '../UserPostCard/UserPostCard'
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";


export default function UserPostCard(props){
  const param = useParams()
  const navigate  = useNavigate()

  async function deleteSinglePost() {   
    let fetchDelete = await fetch(`/api/posts/${param.username}/${props.data._id}`,{
      method: 'DELETE',
      headers: { 
        "Content-Type": "string",
        body:param.id },
    })
    let deleteResponse =  await fetchDelete.json()
    console.log(deleteResponse)
    props.getAllPost()
    navigate(`../${props.user.username}`)    
  }
  

  return(
    <div className="UserPostCard col-6 mt-5">
      <div className="card text-center">
      <Link to={`${props.data._id}`}><div>
          <div className="card-header">
            <h1 className="card-title">{props.data.title}</h1>
          </div>
          <div className="card-body">
            <p className="card-text">{props.data.body}</p>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
          </div>
        </div></Link>
          <div className="card-footer d-flex flex-row justify-content-center text-muted gap-2">
            <div className="d-flex flex-column align-items-center col-2">
              <button onClick={deleteSinglePost} className="btn btn-dark text-light">Delete</button>
            </div>
            <Link to={`${props.data._id}/edit`}><div className="d-flex flex-column align-items-center justify-content-center col-2">
              <button onClick={()=>props.getSinglePosts(param.username,param.id,props.data._id)} className="btn btn-dark text-light">Edit</button>
            </div></Link>
          </div>
      </div>
    </div>
  )
}
