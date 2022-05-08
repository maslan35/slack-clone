import React from 'react'
import styled from 'styled-components'

const Message = ({message, timestamp, user,userImg}) => {
  return (
    <MessageContainer>
        <img src={userImg} alt="" />
        <MessageInfo>
            <h4>
                {user} <span>
                    {new Date(timestamp?.toDate()).toUTCString()}
                </span>
            </h4>
            <p>{message}</p>
        </MessageInfo>
    </MessageContainer>
  )
}

export default Message

const MessageContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;

    >img{
        height: 40px;
        border-radius: 10px;
    }
`

const MessageInfo = styled.div`
    padding-left: 10px;

    > h4 > span {
        color: gray;
        font-size: 12px;
        font-weight: 300;
        margin-left: 10px;
    }
`