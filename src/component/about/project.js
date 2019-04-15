import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'; 
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';


const styles = theme => ({
    paper: {
        // padding: theme.spacing.unit * 2,
        textAlign: 'center',
        padding: '1rem',
        color: theme.palette.text.secondary,
    },
    root: {
        flexGrow: 1,
      },
  });
  
const style =  ({
    body:{
        maxWidth: '80rem' ,
        margin: 'auto'
    },
    main: {
      minHeight: '90vh',
      background: green[700],
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
        margin: 'auto',
    },
})

class frame extends Component {
    
    render() {
      const { classes } = this.props;
      let Language = [
        { name: '台灣健康促進科技協會', image: "https://i.imgur.com/21xKd1h.png",
        URL: 'https://tahpt.org/',
        text:[
            '使用laravel MVC架構',
            '負責全端開發、前端版型與後端程式',
            '管理員修改、刪除資料'
        ],
        },
        { name: '台灣生物力學學會', image: "https://i.imgur.com/RkcjYHC.png",
        URL:'http://www.1993tsb.org',
        text:[
            '使用CodeIgniter',
            '負責新增網站報名系統',
            '部分後端系統',
        ],},
        { name: '億峯娛樂團隊', image: "https://imgur.com/h84L15J.jpg",
        URL:'http://2018yifeng.com',
        text:[
            '使用laravel MVC架構',
            '負責全端開發、前端版型與後端程式',
            '會員註冊報名等'
        ],
        },
        { name: '康美美容化妝品', image: "https://i.imgur.com/ItNKM83.jpg",
        URL:'網站未上線',
        text:[
            '使用Vue.JS前端',
            '負責前端RWD、素材處理',
            '版面已完成但未上線'
        ],
        }
      ]
      let html = Language.map((arr, index) => 
            <Grid item xs={12} sm={12} key={index}>
                <Paper className={classes.paper}>
                    <Grid container justify="center" >
    
                        <Grid item xs={12} sm={4}>
                            <Avatar alt="codeimg" src={arr.image} style={style.icon} />
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Grid container justify="center" >
                                <Typography variant="headline" align="center">
                                    {arr.name}         
                                </Typography>
                            </Grid>
                            <Grid container spacing={16} >
                            {
                                arr.text.map((arrs, indexs) => 
                                    <Grid item xs={12} key={indexs}>
                                        <Typography variant="body1" align="center">{arrs}</Typography>
                                    </Grid>
                                )
                            }
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
      )
      return (
        <div className={classes.root} style={style.body} id="frame">
            <Grid container className={classes.root} style={style.main} spacing={16} 
                direction="row"
                justify="center"
                alignItems="flex-start">
                    <Grid item xs={12} >
                    <Typography variant="display1" align="center" style={ style.title}>
                              
                        </Typography>
                    </Grid>
                    <Grid item xs={12} >
                    <Typography variant="display2" align="center" style={ style.topTitle}>
                        專案作品   
                        </Typography>
                    </Grid>
                    {html}
            </Grid>
       </div>
      );
    }
  }
  
  export default withStyles(styles)(frame);