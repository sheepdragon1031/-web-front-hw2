import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import './index.css';

const styles = ({
  
})

class header extends Component {
    
    render() {
      return (
             <div className='headerBG' id="index">
              <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure" >
                <Grid container spacing={0} 
                      direction="row"
                      justify="space-between"
                      alignItems="center"
                      className="headerGD">
                      <Grid item xs={12}>
                        <Typography className="headerTitle" variant="display2"
                        component="h2" align="center" color="inherit" style={styles.headerTitle}>
                          <span className="fluctlight">以一樣的定義，成為重新定義。</span>
                        </Typography>
                      </Grid>
                  </Grid>
              </Parallax>
            </div>
      );
    }
  }
  
  export default withStyles(styles)(header);