import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoIcon from '@mui/icons-material/Info';
import { useSelector } from 'react-redux'
import { selectRoomId } from '../appSlice'
import ChatInput from './ChatInput'
import { useCollection, useDocument, } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import Message from './Message';

const Chat = () => {
    const chatRef= useRef(null);
    const roomId= useSelector(selectRoomId)
    const [roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
    )
    const [roomMessage,loading] = useCollection(
        roomId && 
        db
        .collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'desc')
    )

    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behavior: 'smooth'
        });
    }, [roomId,loading])
  return (
    <ChatContainer>
        {roomDetails && roomMessage && (
            <>
            <Header>
                <HeaderLeft>
                    <h4>
                        <strong>#{roomDetails?.data().name}</strong>
                    </h4>
                    <StarBorderIcon />
                </HeaderLeft>

                <HeaderRight>
                    <p>
                        <InfoIcon /> Details
                    </p>
                </HeaderRight>
            </Header>
            <ChatMessages>
                {roomMessage?.docs.map(doc => {
                    const {message, timestamp, user,userImg} = doc.data();

                    return (
                        <Message 
                        key={doc.id}
                        message={message}
                        timestamp={timestamp}
                        user={user}
                        userImg={userImg}
                        />
                    )
                })}
                <ChatButton ref={chatRef} />
            </ChatMessages>

            <ChatInput 
            chatRef={chatRef}
            channelName={roomDetails?.data().name} 
            channelId={roomId} 
            />
        </>
        )}
        
        
    </ChatContainer>
  )
}

export default Chat

const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    > h4 {
        display: flex;
        text-transform: lowercase;
        marign-right: 10px;
    }
    > .MuiSvgIcon-root {
        margin-left: 10px;
        font-size: 10px;
    }
`

const HeaderRight = styled.div`
    > p {
        display: flex;
        align-items: center;
        font-size: 14px;
    }
    >p> .MuiSvgIcon-root {
        margin-right: 5px !important;
        font-size: 14px;
    }
`

const ChatMessages = styled.div`

`

const ChatButton = styled.div`
    padding-bottom: 200px;
`

