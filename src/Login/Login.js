import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'

const Login = () => {

    const signIn = () => {
        // Logueo con Google
        
    }

    return (
        <div className="login">
           <div className="login-logo">
               <img src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png" alt="" />
           </div>

           <Button onClick={signIn}>Acceder</Button>
        </div>
    )
}

export default Login
