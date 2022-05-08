import React from 'react'
import styled from 'styled-components'
import { db } from '../firebase';
import { useDispatch } from 'react-redux';
import { enterRoom } from '../appSlice';

const SidebarOption = ({Icon,title,addChannelOption,id}) => {

    const dispatch = useDispatch();

    const addChannel = () => {
        const channelName = prompt('Enter channel name');

        if(channelName){
            db.collection('rooms').add({
                name: channelName
            })
        }
    };

    const selectChannel = () => {
        if(id){
            dispatch(enterRoom({
                roomId: id
            }))
        }
    };
  return (
    <SidebarOptionContainer
    onClick={addChannelOption? addChannel: selectChannel}>
        {Icon && <Icon fontSize="small" style={{padding: 10}} />}
        {Icon ? (
            <h3>{title}</h3>
        ): (
            <SidebarOptionChannel>
                <span>#</span> {title}
            </SidebarOptionChannel>
        )}
    </SidebarOptionContainer>
  )
}

export default SidebarOption

const SidebarOptionContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 13px;
    &:hover {
        opacity: 0.9;
        background-color: #340c36;
    }

    > h3 {
        font-weight: 500;
    }

`

const SidebarOptionChannel = styled.h3`
    font-weight: 300;
    padding: 0 10px;
`