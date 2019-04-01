import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'; 
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
  });
  
const style =  ({
    main: {
      minHeight: '90vh',
      padding: '1rem',
    },
    topTitle:{
        lineheight: '5rem',
        paddingTop: '3rem',
    },
    title:{
        lineheight: '5rem',
        paddingTop: '1rem',
    },
    icon:{
        width: '10rem',
        height: '10rem',
        margin: '1rem',
    },
})

class about extends Component {
    
    render() {
      const { classes } = this.props;
      let Language = [
          { name: 'PHP', image: "http://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/github-bartzaalberg-php-tester-icon.png"},
          { name: 'JS', image: "http://dimitridessus.fr/assets/img/skills/frameworks/node-js.svg"},
          { name: 'HTML5', image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png?1553847833189"}
      ]
      let html = Language.map((arr, index) => 
            <Grid item xs={4}  key={index}>
                <Paper className={classes.paper}>
                    <Grid container justify="center" >
                        <Avatar alt="codeimg" src={arr.image} style={style.icon} />
                    </Grid>
                    <Typography variant="headline" align="center">
                            {arr.name}         
                        </Typography>
                </Paper>
            </Grid>
      )
      return (
          
        <Grid container className={classes.root} style={style.main} spacing={16}  id="tool"
        direction="row"
        justify="center"
        alignItems="flex-start">
            <Grid item xs={12} >
                <Typography variant="display2" align="center" style={ style.topTitle}>
                        一隻羊       
                    </Typography>
            </Grid>
            <Grid item xs={12} >
                <Typography variant="display1" align="center" style={ style.title}>
                        主要啃的東西        
                    </Typography>
            </Grid>
            {html}
       </Grid>
      );
    }
  }
  
  export default withStyles(styles)(about);