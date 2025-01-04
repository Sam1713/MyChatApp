import axios from 'axios'
import React, { useEffect } from 'react'

const ChatPage = () => {

    useEffect(()=>{
        fetchChats()
    },[])
    const fetchChats = async () => {
        try {
          const response = await axios.get('http://localhost:5000/getChats'); // Proxy should forward this
          console.log('res', response.data); // Should log: { message: "success" }
        } catch (error) {
          console.error('Error fetching chats:', error);
        }
      };
  return (
    <div>
      <h1>Chat page</h1>
    </div>
  )
}

export default ChatPage
