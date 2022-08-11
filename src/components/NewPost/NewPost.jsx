import React from "react";
import '../NewPost/NewPost.css'
import Logo from "../../components/Logo/Logo";
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'

export default function NewPost(props){
  const [newPost,setNewPost] = useState({
    title: "",
    body: "",
    user:props.user._id
  })
  console.log(newPost)
  console.log(props.user._id)
  const navigate = useNavigate()

  // const handleID = (id)=>{
  //   setNewPost()
  // }

  const handlePost = async(evt)=>{
    evt.preventDefault()
    try {
      // 1. POST our post user info to the server
      const postResponse = await fetch('/api/posts/createpost', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({title: newPost.title, body: newPost.body,user:newPost.user})
      })
      // 2. Check "fetchResponse.ok". False means status code was 4xx from the server/controller action
      if (!postResponse.ok) throw new Error('Fetch failed - Bad request')   
      let fetchResponse = await postResponse.json()
      console.log('Success',fetchResponse)
      navigate('../main')

    } catch (err) {
      console.log("SignupForm error", err)
      setNewPost({ error: 'Sign Up Failed - Try Again' });
    }
  }
  
  
  return(
    <div className="CreatePost">
      <div className="d-flex justify-content-between">
      <Logo/>
      <Link to='/'><button className="btn btn-light" onClick={props.handleLogOut}>Logout</button></Link>
      </div> 
      <br/>
      <h1>NEW POST</h1>
        <div className="container mt-5">
          <form className="row g-3" onSubmit={handlePost}>
          <div className="col-md-12">
              <label for="avatar"></label>
              <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"/>
              <br/>
              <label for="title" className="form-label"></label>
              <textarea onChange={(e) =>
                setNewPost({
               ...newPost,
               title: e.target.value,
             })} name="title" value={newPost.title} className="form-control title-place" id="comments" rows="2" required placeholder="New post title here"></textarea>
              <label for="body" className="form-label"></label>
              <textarea onChange={(e) =>
                setNewPost({
               ...newPost,
               body: e.target.value,
             })} name="body" value={newPost.body} className="form-control body-place"  rows="10" cols="40" id="comments" required placeholder="New post"></textarea>
              <button type="submit" className="btn btn-dark text-light col-2 mt-2">Publish</button>
          </div>
          </form>
      </div>
    </div>
  )
}