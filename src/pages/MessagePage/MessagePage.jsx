import React, { useEffect, useState } from "react";
import MessageBox from "../../components/MessageBox/MessageBox";
import axios from "axios";

export default function MessagePage(props){
  const [conversation,SetConversation] = useState([])

  useEffect(()=>{
    const getConversation = async ()=>{
      try{
        const response = await axios.get(`/api/conversations/${props.user._id}`)
        console.log(response)
      }catch(err){
        console.log(err)
      }
    }
    getConversation()
  },[props.user._id])
  return(
    <div className="MessagePage">
      <MessageBox/>
    </div>
  )
}

// try {
//   // 1. POST our post user info to the server
//   const createRoomResponse = await fetch('/api/conversations', {
//     method: 'POST',
//     headers: {"Content-Type": "application/json"},
//     body: JSON.stringify({senderId,receiverId})
//   })
//   // 2. Check "fetchResponse.ok". False means status code was 4xx from the server/controller action
//   if (!createRoomResponse.ok) throw new Error('Fetch failed - Bad request')   
//   let fetchcreateRoomResponseResponse = await createRoomResponse.json()
//   console.log('Success',fetchcreateRoomResponseResponse)
//   setConverId(fetchcreateRoomResponseResponse._id)

// } catch (err) {
//   console.log("SignupForm error", err)
// }
// navigate(`../conversations`)
// }