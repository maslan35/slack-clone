import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './component/Header';
import styled from 'styled-components';
import Sidebar from './component/Sidebar';
import Chat from './component/Chat';
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Login from './component/Login';
import Spinner from 'react-spinkit';

function App() {
  const [user, loading] = useAuthState(auth);

  if(loading) {
    return(
      <AppLoading>
        <AppLoadingContent>
          <img src="https.//cdn.mos.cms.futurecdn.net
          /SDDw7CnuoUGax6x9mTo7dd.jpg" alt=''/>
          <Spinner name="ball-spin-fade-loader" 
          color="purple" 
          fadeIn="none" />
        </AppLoadingContent>
      </AppLoading>
    )
  }
  return (
    <div className="app">
      <Router>
        {!user ?(
          <Login/>
        ):(
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Routes>
                <Route path="/" element={<Chat />} />
              </Routes>
            </AppBody>
          </>
          
        )}
        
        
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`
const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`

const AppLoadingContent = styled.div`
  display: flex;
  text-align: center;
  padding-bottom: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`