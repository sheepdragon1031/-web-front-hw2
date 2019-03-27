import React, { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { withStyles } from '@material-ui/core/styles';
import './App.css';
import Header from './component/header/index';
import AppBar from './component/appbar/index';
import { StickyContainer, Sticky } from 'react-sticky';

const styles = ({
  boxs: {
      height: '100rem',
    },
    test: {
      position: 'relative'
    }
})
class App extends Component {
  render() {
    return (
      <div>
        <StickyContainer>
          <ParallaxProvider>
            <Header />
          </ParallaxProvider>
          
            <div style={styles.test}>
              <AppBar />
             
            </div>
            
          <div className="boxs" style={styles.boxs}>
                
                </div>
          </StickyContainer>
      </div>
    );
  }
}

export default withStyles(styles)(App);
