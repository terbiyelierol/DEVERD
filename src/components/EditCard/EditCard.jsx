import React from "react";
import Logo from "../Logo/Logo";
import { Link,useParams,useNavigate } from "react-router-dom";
import { useState } from "react";

export default function EditCard (props){
  const [newPost,setNewPost] = useState({
    title: props.singlePosts.title,
    body: props.singlePosts.body,
  })
  const navigate = useNavigate()
  const param = useParams()


  const editPost = async(evt)=>{
    evt.preventDefault()
    try {
      // 1. PATCH our post user info to the server
      const postResponse = await fetch(`/api/posts/${param.username}/${param.id}`, {
        method: 'PATCH',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({title: newPost.title, body: newPost.body})
      })
      // 2. Check "fetchResponse.ok". False means status code was 4xx from the server/controller action
      if (!postResponse.ok) throw new Error('Fetch failed - Bad request')   
      let fetchResponse = await postResponse.json()
      console.log('Success',fetchResponse)
      setNewPost({title: props.singlePosts.title,body: props.singlePosts.body})
      navigate(`../${props.user.username}`)   

    } catch (err) {
      console.log("SignupForm error", err)
      setNewPost({ error: 'Edit Failed - Try Again' });
    }
  }

  // setNewPost({title: props.singlePosts.title,
  //   body: props.singlePosts.body,})
  
  return(
  <div className="EditCard">
      <div className="d-flex justify-content-between">
          <Link to="/main">
            <Logo/>
          </Link>
      <Link to='/'><button className="btn btn-light" onClick={props.handleLogOut}>Logout</button></Link>
      </div> 
      <br/>
      <h1>EDIT POST</h1>
        <div className="container mt-5">
          <form className="row g-3" onSubmit={editPost} >
          <div className="col-md-12">
              <label for="avatar"></label>
              <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"/>
              <br/>
              <label for="title" className="form-label"></label>
              <textarea onChange={(evt) =>
                setNewPost({
               ...newPost,
               title: evt.target.value,
             })} name="title" value={newPost.title} className="form-control title-place" id="comments" rows="2"  required placeholder="New post title here"></textarea>
              <label for="body" className="form-label"></label>
              <textarea onChange={(evt) =>
                setNewPost({
               ...newPost,
               body: evt.target.value,
             })} name="body" value={newPost.body} className="form-control body-place"  rows="10" cols="40" id="comments" required placeholder="New post"></textarea>
              <button type="submit" className="btn btn-dark text-light col-2 mt-2">Publish</button>
          </div>
          </form>
      </div>
    </div>
  )
}