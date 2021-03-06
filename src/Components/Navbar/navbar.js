import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: 'secondary'
  
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}  >
      <AppBar position="static" color= 'secondary' >
        <Toolbar >
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <AddCircleSharpIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
           TODO APP
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}