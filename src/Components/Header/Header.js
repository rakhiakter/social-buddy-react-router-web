import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import GroupIcon from '@material-ui/icons/Group';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));
const Header = () => {
  const classes = useStyles()
    return (
      <Container maxWidth="sm">
         <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <GroupIcon edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </GroupIcon>
          <Typography variant="h6" color="inherit">
            Social-Buddy
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
      </Container>
    );
};

export default Header;