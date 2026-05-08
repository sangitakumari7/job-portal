import React, { createContext } from 'react'

export const authDataContext = createContext()

function AuthContext({ children }) {
  const serverUrl = "https://job-portal-backend-mg9x.onrender.com"

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