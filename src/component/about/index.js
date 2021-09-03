import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
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
      background: "url('https://i.imgur.com/LiMgFIa.jpg') center center no-repeat ",
      // https://i.imgur.com/bTIbBnY.jpg
      backgroundSize: 'cover',
      height: '90vh',
      width: '100%',
      margin: 'auto',
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
                  <Avatar alt="大頭貼" src="https://i.imgur.com/IGO2GmU.png" href="https://github.com/sheepdragon1031" style={style.myhead} />
              </Grid>
              <Grid container justify="center" style={style.Hgrid}>
                <Typography variant="title" gutterBottom align="center" style={style.title}>
                     蔡銘陽
                  </Typography>
              </Grid>
              <Grid container justify="center" style={style.Hgrid}>
                <Typography variant="body1" gutterBottom align="center">
                     就是一隻訓練有素的猴子，
                     會寫些程式但卻沒甚特別。
                  </Typography>
                  
              </Grid>
              <Grid container  justify="center" >
                <Button title="前往我的github" color="primary" href="https://github.com/sheepdragon1031" target="_blank">
                  <Avatar alt="github" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/> 
                </Button>
              </Grid>
          </Paper> 
       </Grid>
      );
    }
  }
  
  export default withStyles(styles)(about);