import logo from './assets/ndl_logo.png';
import './Base.css'
function Base(){
    return (
    <>
    <div id ="base_body_about" className="w-full mx-auto">
    <h1 className="font-normal text-3xl text-center">About Us</h1>
    <h2 className="text-2xl text-center">NDL is a student-run club that is passionate about data science and its applications in the real world. We are a team of dedicated individuals with a shared vision to explore the depths of data science and its impact on various industries. Join us in our journey to discover the power of data.</h2>
    </div>
    <div id ="eboard_intro" className="w-full mx-auto">
    <h1 className="font-normal text-3xl text-center">Our Team</h1>
    </div>
    
    <div id="bigdiv">
    <div id="littlediv">
      <img src="./src/assets/surya_maddali.jpg" alt="Team member" className="grid-image" />
      <p className="grid-description">Surya Maddali<br />President</p>
    </div>
    <div id="littlediv">
      <img src="./src/assets/DylanHollidayHeadshot.jpg" alt="Team member" className="grid-image" />
      <p className="grid-description"><h2>Dylan Holliday</h2>Training Director</p>
    </div>
    <div id="littlediv">
      <img src="./src/assets/cole_kvasnak.jpg" alt="Team member" className="grid-image" />
      <p className="grid-description">Cole Kvasnak<br />Training Director</p>
    </div>
    <div id="littlediv">
      <img src="./src/assets/tharun_headshot.jpeg" alt="Team member" className="grid-image" />
      <p className="grid-description">Tharun Dilliraj<br />Webmaster</p>
    </div>
    <div id="littlediv">
      <img src="./src/assets/amanda_keller.jpeg" alt="Team member" className="grid-image" />
      <p className="grid-description">Amanda Keller<br />Treasurer</p>
    </div>
    <div id="littlediv">
      <img src="./src/assets/ahsan_sultan.jpg" alt="Team member" className="grid-image" />
      <p className="grid-description">Ahsan Sultan<br />Training Director</p>
    </div>
    <div id="littlediv">
      <img src="./src/assets/matt_collins.jpeg" alt="Team member" className="grid-image" />
      <p className="grid-description">Matt Collins<br />Director of Training</p>
    </div>
    <div id="littlediv">
      <img src="./src/assets/sanjana_v.jpg" alt="Team member" className="grid-image" />
      <p className="grid-description">Sanjana Vuppunahali<br />Event Planner</p>
    </div>
    <div id="littlediv">
      <img src="./src/assets/gina.jpeg" alt="Team member" className="grid-image" />
      <p className="grid-description">Gina Seo<br />Consulting Director</p>
    </div>
    <div id="littlediv">
      <img src="" alt="Team member" className="grid-image" />
      <p className="grid-description">Shriyans Nettula<br />Corporate Director</p>
    </div>
    <div id="littlediv">
      <img src="" alt="Team member" className="grid-image" />
      <p className="grid-description">Name & Role</p>
    </div>
    <div id="littlediv">
      <img src="" alt="Team member" className="grid-image" />
      <p className="grid-description">Name & Role</p>
    </div>
    </div>
    </>
    );
}

export default Base;