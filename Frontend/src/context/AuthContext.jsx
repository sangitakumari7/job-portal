import React, { createContext } from 'react'

export const authDataContext = createContext()

function AuthContext({ children }) {
  const serverUrl = import.meta.env.VITE_SERVER_URL || "http://localhost:8000"

  let value = {
    serverUrl
  }

  return (
    <authDataContext.Provider value={value}>
      {children}
    </authDataContext.Provider>
  )
}

export default AuthContext