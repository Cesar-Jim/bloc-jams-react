import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './stylesheets/App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="top-bar-container">
            <nav>
               <Link className="landing-link" to='/'>Home</Link>
               <p id="separator">|</p>
               <Link className="library-link" to='/library'>Library</Link>
            </nav>
          </div>
          <div className="main-title-container">
            <div className="bloc-jams-title">Bloc Jams</div> 
          </div>
        </header>

        <main>
            <Route exact path="/" component={Landing} />
            <Route path="/library" component={Library} />
            <Route path="/album/:slug" component={Album} />
        </main>
        <footer className="footer">
          <img className="hero-image" height="75px" width="100px" src="/assets/images/landing_images/logo.png" alt="Boy singing" />
        </footer>
      </div>
    );
  }
}

export default App;
