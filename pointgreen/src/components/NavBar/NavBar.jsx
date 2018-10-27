import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collections from '@material-ui/icons/Collections';
import InsertChart from '@material-ui/icons/InsertChart';
import CardGiftcard from '@material-ui/icons/CardGiftcard';
import Gradient from '@material-ui/icons/Gradient';
import Settings from '@material-ui/icons/Settings';
import Divider from '@material-ui/core/Divider';
import { Brand } from '..';
import './NavBar.css';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};


class NavBar extends PureComponent {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render(){
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem>
            <Link to="/" class='no-underline'>
            <Brand />
            </Link>
          </ListItem>
        </List>
        <Divider />
        <List>
          <Link to="/feed" class='no-underline'>
            <ListItem button key='Feed'>
              <ListItemIcon><Collections/></ListItemIcon>
              <ListItemText primary='Feed'/>
            </ListItem>
          </Link>
          <Link to="/wallet" class='no-underline'>
            <ListItem button key='Wallet'>
              <ListItemIcon><CardGiftcard/></ListItemIcon>
              <ListItemText primary='Wallet'/>
            </ListItem>
          </Link>
          <Link to="/impact" class='no-underline'>
            <ListItem button key='Impact'>
              <ListItemIcon><InsertChart/></ListItemIcon>
              <ListItemText primary='Impact'/>
            </ListItem>
          </Link>
          <Link to="/puzzle" class='no-underline'>
            <ListItem button key='More Puzzles'>
              <ListItemIcon><Gradient/></ListItemIcon>
              <ListItemText primary='More Puzzles'/>
            </ListItem>
          </Link>
          <ListItem button key='Settings'>
            <ListItemIcon><Settings/></ListItemIcon>
            <ListItemText primary='Settings'/>
          </ListItem>
        </List>
      </div>
    );

    let divStyle = {
      height: "64px",
    }

    return (
      <div style={divStyle}>
        <AppBar className="NavBar" position="fixed">
          <Toolbar className="container">
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <Link to="/" class='no-underline'>
                <Brand />
              </Link>
            </Typography>
            <Button component={Link} to="/upload" color="inherit">Add Photo</Button>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}
export default withStyles(styles)(NavBar);
