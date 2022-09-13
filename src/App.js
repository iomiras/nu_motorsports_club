import './App.scss';
import logo from './content/logo.png';
import star from './content/star.png';
import cooperation from './content/cooperation.png';
import experience from './content/experience.png';
import goal1 from './content/goal1.png';
import goal2 from './content/goal2.png';
import goal3 from './content/goal3.png';
import activeLine from './content/activeLine.svg'

function App() {
  return (
    <div className="App">
      {/* part of teh website with the photo in the background */}
      <div className='motto-holder'>
        {/* logo + contact us btn */}
        <header>
          <img alt='logo' className='logo' src={logo}></img>
          <button className='contact-us-1'>Contact us</button>
        </header>

        {/* Motto, contact us btn */}
        <div className='motto'>
          <h1 className='motto-text'>Start, Accelerate <br /> and <span className='emphasis'>Never Stop</span></h1>
          <p className='sub-motto'>First Formula SAE team in KZ</p>
          <button className='contact-us-2'>Contact us</button>
        </div>

      </div>

      {/* Vision and mission */}
      <div className='vision-and-mission-holder'>
        <h2 className='title'>Vision and Mission</h2>
        <div className='missions-holder'>

          <div className='mission-item'>
            <img className='mission-logo-holder' alt='star' src={star}></img>
            <h3 className='mission-title'>First FSAE in kz</h3>
            <p className='mission-description'>Develop engineering community in KZ via motor racing.</p>
          </div>

          <div className='mission-item'>
            <img className='mission-logo-holder' alt='experience' src={experience}></img>
            <h3 className='mission-title'>Experience exchange</h3>
            <p className='mission-description'>Exchange experience with Kazakh universities and raise industry-ready engineers.</p>
          </div>

          <div className='mission-item'>
            <img className='mission-logo-holder' alt='cooperation' src={cooperation}></img>
            <h3 className='mission-title'>Cooperation</h3>
            <p className='mission-description'>Become a bridge between Kazakh and foreign competitive engineers.</p>
          </div>
        </div>
      </div>

      {/* Goals */}
      <div className='goals-holder'>
        <h2 className='title'>Goals</h2>

        <div className='goal-holder'>
          <div className='goal-text'>
            <p className='goal-tag tag-global'>GLOBAL</p>
            <h2 className='goal-title'>Participate in FSAE</h2>
            <p className='goal-description'>Enter the top 30 in the Formula Student <br /> Competition competition in 5 years</p>
          </div>
          <img className='goal-image' alt='formula sae logo' src={goal1}></img>
        </div>

        <div className='goal-holder' style={{ 'flex-direction': 'row-reverse' }}>
          <div className='goal-text'>
            <p className='goal-tag tag-local'>LOCAL</p>
            <h2 className='goal-title'>Formula car</h2>
            <p className='goal-description'>Build the first formula car in Central Asia</p>
          </div>
          <img className='goal-image' alt='formula 1 car' src={goal2}></img>
        </div>

        <div className='goal-holder'>
          <div className='goal-text'>
            <p className='goal-tag tag-local'>LOCAL</p>
            <h2 className='goal-title'>Heritage</h2>
            <p className='goal-description'>Leave long lasting sustainable heritage</p>
          </div>
          <img className='goal-image' alt='our team' src={goal3}></img>
        </div>
      </div>

      {/* Roadmap */}
      <div className='roadmap-holder'>
        <h2 className='title'>Roadmap</h2>

        <div className='steps-holder'>
          <div className='step-holder'>
            <div className='step-visual'>
              <p className='step-order active'>1</p>
              <img alt='line' src={activeLine}></img>
            </div>

            <div className='step-text'>
              <h3 className='step-name'>Step 1</h3>
              <p className='step-description'>Initial car design <br /> and seek investors</p>
            </div>
          </div>

        </div>

      </div>

    </div >
  );
}

export default App;
