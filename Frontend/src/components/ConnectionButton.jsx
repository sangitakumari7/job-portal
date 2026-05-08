import React, { useContext, useEffect, useRef, useState } from 'react'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'
import { io } from "socket.io-client"
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

function ConnectionButton({ userId }) {
  let { serverUrl } = useContext(authDataContext)
  let { userData } = useContext(UserDataContext)
  let [status, setStatus] = useState("")
  let navigate = useNavigate()

  // ✅ Create socket once per userId, store in ref
  const socketRef = useRef(null)

  const handleSendConnection = async () => {
    try {
      await axios.post(`${serverUrl}/api/connection/send/${userId}`, {}, { withCredentials: true })
    } catch (error) {
      console.log(error)
    }
  }

  const handleRemoveConnection = async () => {
    try {
      await axios.delete(`${serverUrl}/api/connection/remove/${userId}`, { withCredentials: true })
    } catch (error) {
      console.log(error)
    }
  }

  const handleGetStatus = async () => {
    try {
      let result = await axios.get(`${serverUrl}/api/connection/getStatus/${userId}`, { withCredentials: true })
      setStatus(result.data.status)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    socketRef.current = io(serverUrl)
    socketRef.current.emit("register", userData._id)
    handleGetStatus()

    socketRef.current.on("statusUpdate", ({ updatedUserId, newStatus }) => {
      if (updatedUserId == userId) setStatus(newStatus)
    })

    return () => {
      socketRef.current.off("statusUpdate")
      socketRef.current.disconnect() // ✅ close connection on unmount
    }
  }, [userId]) // ✅ only re-runs if the target user changes

  const handleClick = async () => {
    if (status == "disconnect") {
      await handleRemoveConnection()
    } else if (status == "received") {
      navigate("/network")
    } else {
      await handleSendConnection()
    }
  }

  return (
    <button
      className='min-w-[100px] h-[40px] rounded-full border-2 border-[#2dc0ff] text-[#2dc0ff]'
      onClick={handleClick}
      disabled={status == "pending"}
    >
      {status}
    </button>
  )
}

export default ConnectionButton