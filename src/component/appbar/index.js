import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { StickyContainer, Sticky } from 'react-sticky';



const styles = theme => ({
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginLeft: -18,
        marginRight: 10,
      },
})

class header extends Component {
    
    render() {
      return (
        <div className={styles.root}>
        
        <Sticky isSticky>
          {({
            style,

            // the following are also available but unused in this example
            isSticky,
            wasSticky,
            distanceFromTop,
            distanceFromBottom,
            calculatedHeight
          }) => (
            <AppBar position="sticky">
                <Toolbar variant="dense">
                    
                </Toolbar>
            </AppBar>
          )}
          </Sticky>
            
      </div>
      );
    }
  }
  
  export default withStyles(styles)(header);