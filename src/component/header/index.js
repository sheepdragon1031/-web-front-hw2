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
             <div className='headerBG'>
              <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure" >
                <Grid container spacing={16} 
                      direction="row"
                      justify="space-between"
                      alignItems="center"
                      className="headerGD">
                      <Grid item xs={12}>
                        <Typography className="headerTitle" variant="display2"
                        component="h2" align="center" color="inherit" style={styles.headerTitle}>
                          <span className="fluctlight">又壞掉了！幹ＡＡＡ</span>
                        </Typography>
                      </Grid>
                  </Grid>
              </Parallax>
            </div>
      );
    }
  }
  
  export default withStyles(styles)(header);