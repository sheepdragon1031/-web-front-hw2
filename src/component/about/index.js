import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
  });
  
const style =  ({
    myhead:{
        width: '10rem',
        height: '10rem',
        margin: '1rem',
    },
    Hgrid:{
        height: 'auto',
    },
    paper:{
      padding: '2rem'
    },
    title:{
      lineHeight: '3rem',
    },
    main: {
      background: "url('https://i.imgur.com/bTIbBnY.jpg') center center no-repeat ",
      backgroundSize: 'cover',
      height: '90vh',
    }
})

class about extends Component {
    
    render() {
      const { classes } = this.props;
      return (
        <Grid container className={classes.root} style={style.main} spacing={16} 
        direction="row"
        justify="center"
        alignItems="center"  id="about">
          <Paper elevation={0} style={style.paper}>
               <Grid container justify="center" style={style.Hgrid}>
                <Typography variant="subheading" gutterBottom align="left">
                     介紹
                  </Typography>
              </Grid>
              <Grid container justify="center" style={style.Hgrid}>
                  <Avatar alt="大頭貼" src="https://i.imgur.com/1aq1Zij.gif" style={style.myhead} />
              </Grid>
              <Grid container justify="center" style={style.Hgrid}>
                <Typography variant="title" gutterBottom align="center" style={style.title}>
                     綿羊龍
                  </Typography>
              </Grid>
              <Grid container justify="center" style={style.Hgrid}>
                <Typography variant="body1" gutterBottom align="center">
                     就是一隻懶惰的綿羊，怎麼打都不沒有回應
                  </Typography>
              </Grid>
          </Paper> 
       </Grid>
      );
    }
  }
  
  export default withStyles(styles)(about);