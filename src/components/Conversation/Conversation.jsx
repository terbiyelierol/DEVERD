import React from "react";
import { useState,useEffect  } from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios";

export default function Conversation(props){

  const [newMessage,setNewMessage] = useState({
    conversationId: props.converId,
    sender: props.userId._id,
    text:"",
  })

  const navigate = useNavigate()

  const handleMessage = async(evt)=>{
    evt.preventDefault()
    try {
     
      const messageResponse = await fetch('/api/messages', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({conversationId: newMessage.conversationId,sender:newMessage.sender,text:newMessage.text})
      })
      // 2. Check "fetchResponse.ok". False means status code was 4xx from the server/controller action
      if (!messageResponse.ok) throw new Error('Fetch failed - Bad request')   
      let fetchMessageResponse = await messageResponse.json()
      console.log('Success',fetchMessageResponse)
      setNewMessage({
        conversationId: props.converId,
        sender: props.userId._id,
        text:"",
      })
      // navigate(`../conversations/${props.converId}`)
    } catch (err) {
      console.log("SignupForm error", err)
      setNewMessage({ error: 'Sign Up Failed - Try Again' });
    }
  }

  const [messagesAll,SetMessagesAll] = useState([])
  console.log(messagesAll)
  useEffect(()=>{
    const getMessagesAll = async ()=>{
      try{
        const response = await axios.get(`/api/messages/${props.converId}`)
        console.log(response)
         SetMessagesAll(response.data)
      }catch(err){
        console.log(err)
      }
    }
    getMessagesAll()
  },[newMessage])
  // <small>{message.sender.username}</small>
  return(
    <main className="Conversation">
        {messagesAll.map((message)=><p>{message.text}<br/><small>{message.sender.username}</small><hr/></p>)}
      <form className="row g-3" onSubmit={handleMessage} >
          <div className="col-md-6 " >
              <label for="text" className="form-label"></label>
              <textarea onChange={(evt) =>
                setNewMessage({
               ...newMessage,
               text: evt.target.value,
             })} name="text" value={newMessage.text} className="form-control title-place" id="comments" rows="2" required placeholder="new message"></textarea>
              <button type="submit" className="btn btn-dark text-light col-2 mt-2">Send</button>
          </div>
      </form>
    </main>
  )
}