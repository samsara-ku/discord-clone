import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'

function Login() {
  const signIn = () => {
    // Something is done here
  }

  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://upload.wikimedia.org/wikipedia/sco/9/98/Discord_logo.svg" alt="" />
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login
