import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { StickyContainer, Sticky } from 'react-sticky';


const styles =  ({
    bg:{
        background: 'aqua',
        display: 'block',
        height: '3rem',
    },
})

class header extends Component {
    
    render() {
      return (
        <div>
                    <Sticky>
                    {({
                        style,

                        // the following are also available but unused in this example
                        isSticky = true,
                        wasSticky = false,
                        distanceFromTop = 900,
                        calculatedHeight = 800,
                    }) => (
                        <header style={styles.bg}>
                        {/* ... */}
                        </header>
                    )}
                    </Sticky>
                    {/* <AppBar position='relative'>
                        <Toolbar variant="dense">
                            
                        </Toolbar>
                    </AppBar> */}        
        </div>
       
      );
    }
  }
  
  export default withStyles(styles)(header);