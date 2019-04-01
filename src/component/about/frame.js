import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'; 
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';


const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    root: {
        flexGrow: 1,
      },
  });
  
const style =  ({
    main: {
      minHeight: '90vh',
      background: blue[700],
      padding: '1rem',
    },
    topTitle:{
        lineheight: '5rem',
        paddingTop: '3rem',
        color: grey[50]
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

class frame extends Component {
    
    render() {
      const { classes } = this.props;
      let Language = [
        { name: 'Laravel', image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/LaravelLogo.png"},
        { name: 'React', image: "https://cdn.worldvectorlogo.com/logos/react-native-firebase-1.svg"},
        { name: 'Material', image: "https://material.io/tools/icons/static/ic_material_192px_light.svg"}
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
        <div className={classes.root} id="frame">
            <Grid container className={classes.root} style={style.main} spacing={16} 
                direction="row"
                justify="center"
                alignItems="flex-start">
                    <Grid item xs={12} >
                        <Typography variant="display1" align="center" style={ style.topTitle}>
                                已知用火後
                            </Typography>
                    </Grid>
                    {html}
            </Grid>
       </div>
      );
    }
  }
  
  export default withStyles(styles)(frame);