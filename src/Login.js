import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'
import Message from './Message'

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((err) => alert(err.Message))
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
