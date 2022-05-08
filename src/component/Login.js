import { Button } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase'

const Login = () => {
    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithPopup(provider).catch((error) => 
            alert(error.message))
    }
  return (
    <LoginContainer>
        <LoginInner>
            <img src="https://is4-ssl.mzstatic.com/image/thumb/Purple122/v4/8c/f2/b5/8cf2b59a-2571-fdb2-a75c-499f6849b423/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/1200x630wa.png" alt="" />
            <h1>Sign In to the codefiction</h1>
            <p>codefiction.slack.com</p>

            <Button onClick={signIn}>
                Sign In with Google
            </Button>
        </LoginInner>
    </LoginContainer>
  )
}

export default Login

const LoginContainer = styled.div`
    background-color: #f0f0f0;
    height: 100vh;
    display: grid;
    place-items: center;
`

const LoginInner = styled.div`
    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }

    > button {
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: #0a8d48!important;
        color: white;
    }
`