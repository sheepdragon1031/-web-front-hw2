import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';

const styles =  ({
    bg:{
        background: 'aqua',
        display: 'block',
        height: '3rem',
    },
    nav:{
        textAlign: 'center',
        color: grey[50],
        display: 'block',
        width: '100%'
    }
})

class header extends Component {
    render() {
    let nav = [
        {text: '首頁', href: '#index'},
        {text: '介紹', href: '#about'},
        {text: '語言', href: '#tool'},
        {text: '框架', href: '#frame'}
    ]
    let html = nav.map((arr, index) => 
        <Grid item xs={3} key={index} align="center">
            
                <ListItem button component="a" href={arr.href}>
                    <Typography style={styles.nav} align="center">
                        {arr.text} 
                    </Typography>
                </ListItem>
            
        </Grid>
    )
    return (   
            <AppBar position='sticky'>
                <Toolbar variant="dense">
                <Grid container direction="row" justify="center" alignItems="center">
                    {html}
                </Grid>
                </Toolbar>
            </AppBar> 
      );
    }
  }
  
  export default withStyles(styles)(header);