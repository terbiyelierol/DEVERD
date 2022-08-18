import React from "react";
import '../PostCard/PostCard.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function PostCard (props){
  const navigate = useNavigate()
  async function bookMark(id,userId) { 
    try{
      let fetchBookMark = await fetch(`/api/users/bookMark`,{
        method: 'PATCH',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({postId:id,user:userId})
      })
      let bookMarkResponse =  await fetchBookMark.json()
      console.log(bookMarkResponse)
      props.getAllPost()
      navigate('../main')  
    }  
    catch (err){
      console.log(err)
    }
      
  }
  return(
    <div className="PostCard col-6 mt-5">
      <div className="card text-center">
          <div className="card-header">
          <Link to={`${props.post._id}`}><h1 className="card-title">{props.post.title}</h1></Link>
          </div>
          <div className="card-body">
            <p className="card-text">{props.post.body}</p>
          </div>
          <div className="card-footer d-flex flex-row justify-content-center text-muted gap-2">
            <div className="d-flex flex-column align-items-center col-2">
              <button type="submit" className="btn btn-dark text-light like">Like</button>
              <small>number</small>
            </div>
            {/* <div className="d-flex flex-column align-items-center justify-content-center col-2">
              <button type="submit" className="btn btn-dark text-light">Comment</button>
              <small>number</small>
            </div> */}
            <div className="d-flex flex-column align-items-center col-2">
              <button onClick={()=>bookMark(props.post._id, props.user._id)} className="btn btn-dark text-light">BookMark</button>
            </div>
          </div>
      </div>
    </div>
  )
}