import React, { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { withStyles } from '@material-ui/core/styles';
import './App.css';
import Header from './component/header/index';
import AppBar from './component/appbar/index';
import About from './component/about/index';
import Tool from './component/about/tool';
import Frame from './component/about/frame';
import { StickyContainer, Sticky } from 'react-sticky';

const styles = ({
  boxs: {
      height: '100rem',
    },
    test: {
      position: 'relative'
    },
    root:{
      width: 'calc(100% + 8px)',
    }
})
class App extends Component {
  render() {
    return (
      <div style={styles.root}>
        
          <ParallaxProvider>
            <Header />
          </ParallaxProvider>

                          <AppBar />
                          <About />
                          <Tool />
                          <Frame />
                     
             {/* <div className="boxs" style={styles.boxs}></div> */}
          
      </div>
    );
  }
}

export default withStyles(styles)(App);
