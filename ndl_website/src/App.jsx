import { useState } from "react";
import "./App.css";
import Base from './Base.jsx';
import { useEffect } from "react";
import Base1 from './Base1.jsx';
import Home from './Home.jsx';
import Calendar from './Calendar.jsx';
import { useLocation, useNavigate } from "react-router-dom";
import logo from './assets/ndl_logo_white.png';

function App(props) {
  const navigate = useNavigate(); // Hook to programmatically navigate
  const [activeTab, setActiveTab] = useState(() => props.activeTab_new || 'dashboard'); // State to track the active tab
  useEffect(() => { // Update activeTab if props.activeTab_new changes
  if (props.activeTab_new && props.activeTab_new !== activeTab) {
    setActiveTab(props.activeTab_new);
  }
}, [props.activeTab_new]);
  const tabs = [ // Tab configuration
    { id: 'home', label: 'Home', href: 'home', content: <Base />, disabled: false },
    { id: 'dashboard', label: 'Projects', href: 'dashboard', content: <Base />, disabled: false },
    { id: 'settings', label: 'Events', href: 'settings', content: <Calendar />, disabled: false },
    { id: 'contacts', label: 'Contact', href: 'contacts', content: <Base />, disabled: false },
  ];
  const handleTabClick = (tabId, disabled) => { // Function to handle tab click
    if (!disabled) {
      setActiveTab(tabId);
    }
    switch(tabId){ //goes to correct directory on clicking each of the tabs
      case 'home':
        navigate('/home')
        break;
      case 'dashboard':
        navigate('/dashboard')
        break;
      case 'settings':
        navigate('/settings')
        break;
      case 'contacts':
        navigate('/contacts')
        break;
      default:
        navigate('/');
    }
  };
  function handleLogoClick() { // Function to handle logo click 
    navigate('/home')
    setActiveTab('home');
  }
  return ( //div with all content inside, logo at top center, tabs at top right, body content below. logic syntax explained in readme.
    <>
   <div id="total_div"className="w-full mx-auto">
      <div id="banner" className="flex border-b border-gray-200 text-sm text-blue-300 dark:white">
        <img onClick={handleLogoClick} id="ndl_logo_top" src={logo} alt="Logo" className="flex mx-auto"/>
        <ul className="flex ms-auto flex flex-wrap">
          {tabs.map((tab, index) => (
            <li key={tab.id} className={index === tabs.length - 1 ? '' : 'me-2'}>
              {tab.disabled ? (
                <span className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
                  {tab.label}
                </span>
              ) : (
                <button
                  onClick={() => handleTabClick(tab.id, tab.disabled)}
                  className={`inline-block p-4 border-b-2 rounded-t-lg transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'text-white border-blue-600 active dark:text-white dark:border-blue-500'
                      : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                  }`}
                  aria-current={activeTab === tab.id ? 'page' : undefined}
                >
                  {tab.label}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    <div id="parallax"></div>
    </div>
      <div id="body_div" className="flex-grow w-full">
        {/* Render only the active tab's content in a single container */}
        {(() => {
          const active = tabs.find((t) => t.id === activeTab);
          if (!active) return null;
          return (
            <div id="base_body" key={active.id}>
              {active.content}
            </div>
          );
        })()}
      </div>
    </>
  );
}

export default App;
