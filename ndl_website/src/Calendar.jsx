import logo from './assets/ndl_logo.png';
import Base from './Base.jsx';
import './Home.css'
function Calendar(){
    return (
    <div id="base_body">
        <iframe src="https://calendar.google.com/calendar/embed?src=poweredbydata%40gmail.com&ctz=America%2FNew_York" 
        style={{border: 0}}
        width="1500" 
        height="700" 
        frameborder="0"
        class="flex-grow w-full"></iframe>
    </div>
    );
}

export default Calendar;