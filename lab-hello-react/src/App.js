// src/App.js
import './App.css';
import logo from './images/ironhack-logo-xs.png';
import logo2 from './images/menu-top-xs.png';
import image1 from './images/icon1.png';
import image2 from './images/icon2.png';
import image3 from './images/icon3.png';
import image4 from './images/icon4.png';


function App() {
  return (
    <div className="App">
      <header className= "App-header section">
        <nav>
          <img id="logo" className="navImg" src={logo}  alt=""></img>
          <img id="logo2" className="navImg" src={logo2} alt=""></img>
        </nav>
        <div className="content">
          <h1>Say Hello to ReactJs</h1>
          <p>You'll learn how to use the most popular frontend library, and become a super ninhja dev.</p>
          <a className="button">Awesome !</a>
        </div>
      </header>
      <footer className="section">
        <div className="product">
          <img className="image" src={image1} alt=""></img>
          <h2>Declarative</h2>
          <p>React makes it <br />painless to create <br />interactive UIs</p>
        </div>
        <div className="product">
          <img className="image" src={image2} alt=""></img>
          <h2>Components</h2>
          <p>Build encapsuled <br />components that <br />manage their state</p>
        </div>
        <div className="product">
          <img className="image" src={image3} alt=""></img>
          <h2>Single Way</h2>
          <p>A set of immutable <br />values are passed <br />to the component's</p>
        </div>
        <div className="product">
          <img className="image" src={image4} alt=""></img>
          <h2>JSX</h2>
          <p>Statically-typed <br />designed to run <br />on modern browsers</p>
        </div>
      </footer>
    </div>

  );
}

export default App;
