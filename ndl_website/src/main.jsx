import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import logo from './assets/ndl_logo.png';

//**TO DO */

//lit element media query set specific breakpoints for screen width inside media query if less than 700 px hide the tab bar and have the three lines visible

import { useLocation, BrowserRouter, useNavigate} from "react-router-dom";
function Body(){
  if(location.pathname=="/home" || location.pathname=="/"){
    return (
      <App activeTab_new="home"/>
    );
  }
  else if(location.pathname=="/dashboard"){
    return (
      <App activeTab_new="dashboard"/>
    );
  }
  else if(location.pathname=="/settings"){
    return <App activeTab_new="settings"/>
  }
  else if(location.pathname=="/contacts"){
    return <App activeTab_new="contacts"/>
  }
  else{
    return <p>invalid url</p>
  }
}
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <div id="screen"className='flex flex-col h-screen'>
    <Body />
    </div>
  </StrictMode>
  </BrowserRouter>,
)
