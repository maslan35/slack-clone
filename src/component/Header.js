import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const Header = ({userImg}) => {
    const [user] = useAuthState(auth);
  return (
    <HeaderContainer>
        <HeaderLeft>
            
            <AccessTimeIcon />
        </HeaderLeft>

        <HeaderSearch>
            <SearchIcon />
            <input placeholder='Search' />
        </HeaderSearch>

        <HeaderRight>
            <HelpOutlineIcon />
            <HeaderAvatar onClick={() => auth.signOut()}
                alt={user?.displayName} src={user?.photoURL}
            />
        </HeaderRight>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    padding: 17px 0;
    background-color: var(--slack-color);
    color: white;
`

const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;
    }
`

const HeaderAvatar = styled(Avatar)`
    width: 26px !important;
    height: 26px !important;
    cursor: pointer;
    margin-right: 10px;
    &:hover {
        opacity: 0.8;
    }
`

const HeaderSearch = styled.div`
    flex: 0.4;
    opacity: 1;
    border-radius: 5px;
    background-color: #421f44;
    text-align: center;
    display: flex;
    padding: 0 50px;
    color: gray;
    border: 1px solid gray;

    > input {
        background-color: transparent;
        border: none;
        text-align: center;
        min-width: 30vw;
        outline: none;
        color: white;
    }
`

const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: flex-end;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 20px;
    }
`

export default Header