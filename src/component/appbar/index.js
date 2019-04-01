import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';

const styles =  ({
    bg:{
        background: 'aqua',
        display: 'block',
        height: '3rem',
    },
})

class header extends Component {
    render() {
    let nav = [
        {text: '首頁', href: '#index'},
        {text: '介紹', href: '#index'},
        {text: '語言', href: '#index'},
        {text: '框架', href: '#index'}
    ]
    let html = nav.map((arr, index) => 
        <Grid item xs={3} key={index}>
            <List component="nav">
                <ListItem button>
                    {arr.text}              
                </ListItem>
            </List>
        </Grid>
    )
    return (   
            <AppBar position='sticky'>
                <Toolbar variant="dense">
                <Grid container>
                    {html}
                </Grid>
                </Toolbar>
            </AppBar> 
      );
    }
  }
  
  export default withStyles(styles)(header);