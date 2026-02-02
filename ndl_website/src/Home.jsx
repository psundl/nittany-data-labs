import logo from './assets/ndl_logo.png';
import Base from './Base.jsx';
import './Home.css'
function Home(){
    return (
    <div id="base_body">
        <iframe src="https://calendar.google.com/calendar/embed?src=poweredbydata%40gmail.com&ctz=America%2FNew_York" 
        id="calendar_body"
        width="1500" 
        height="700" 
        frameborder="1"></iframe>
    </div>
    );
}

export default Home;