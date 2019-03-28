import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';

const classs = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
  });
  
const styles =  ({
    myhead:{
        width: '10rem',
        height: '10rem',
    },
    Hgrid:{
        height: '30rem',
    }
})

class about extends Component {
    
    render() {
      return (
        <Paper elevation={1}>
            <Grid container justify="center" alignItems="center" spacing={16} style={styles.Hgrid}>
                <Avatar alt="大頭貼" src="https://i.imgur.com/1aq1Zij.gif" style={styles.myhead} />
            </Grid>
       </Paper>
      );
    }
  }
  
  export default withStyles(styles)(about);