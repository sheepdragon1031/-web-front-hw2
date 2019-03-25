import React, { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';
import Header from './component/header/index';
import AppBar from './component/appbar/index';
import { StickyContainer } from 'react-sticky';

class App extends Component {
  render() {
    return (
      <div>
        <StickyContainer>

        
        <ParallaxProvider>
            <Header />
        </ParallaxProvider>
            <AppBar />
            <div>
              <br/><br/><br/><br/><br/><br/><br/><br/>
              <br/><br/><br/><br/><br/><br/><br/><br/>
              <br/><br/><br/><br/><br/><br/><br/><br/>
              <br/><br/><br/><br/><br/><br/><br/><br/>
              <br/><br/><br/><br/><br/><br/><br/><br/>
              <br/><br/><br/><br/><br/><br/><br/><br/>
              <br/><br/><br/><br/><br/><br/><br/><br/>
              <br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
          </StickyContainer>
      </div>
    );
  }
}

export default App;
