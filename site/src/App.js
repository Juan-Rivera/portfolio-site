import developer from './web_developer.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="image-container">
          <img src={developer} alt='web developer sitting down with laptop' className='developer'/>
        </div>

        <div className="content-container">
          {/* header */}
          <div className="title">
            <h1>Juan Rivera</h1>
          </div>
          {/* links */}
          <nav>
            <a href='http://github.com/juan-rivera' target="_blank" rel="noopener noreferrer">
              <div id='github' className='icon'></div>
            </a>
            <a href='http://linkedin.com/in/juan-rivera-dev/' target="_blank" rel="noopener noreferrer">
              <div id='linkedin' className='icon'></div>
            </a>
            <a href='mailto:juanrivera.primary@gmail.com' target="_blank" rel="noopener noreferrer">
              <div id='email' className='icon'></div>
            </a>
            <a href='https://juanrivera-primary.medium.com/' target="_blank" rel="noopener noreferrer">
              <div id='medium' className='icon'></div>
            </a>
          </nav>
          {/* video */}
          <div className="who-link">
            <a href='/who-is-juan'>Who is Juan?</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
