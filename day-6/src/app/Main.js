/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleDrawerTouchTap = this.handleDrawerTouchTap.bind(this);
    this.toggleDialog = this.toggleDialog.bind(this);

    this.state = {
      open: false,
    };
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: false,
    });
  }

  handleDrawerTouchTap() {
    this.setState({
      open: !this.state.open
    });
  }

  toggleDialog() {
    this.setState({
      dialogOpen: !this.state.dialogOpen,
    });
  }

  render() {
    const standardActions = (
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this.toggleDialog}
      />
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
        <AppBar
        title="Mr. Galififianakis"
        onTouchTap = {this.handleDrawerTouchTap}
        />
        <Drawer
        docked={false}
        width={200}
        open={this.state.open}
        >
          <MenuItem> Dont Touch</MenuItem>
          <MenuItem> Nah seriously dont touch it</MenuItem>
          <MenuItem> NO YOU DONT GET IT DONT DO IT </MenuItem>

        </Drawer>
          <Dialog
            open={this.state.dialogOpen}
            title="Why on Earth would you do that"
            actions={standardActions}
            onRequestClose={this.handleRequestClose}
          >
            You monster
          </Dialog>
          <h1>The Ultimate Guide to Zach Galififianakis</h1>
          <h2>Whatta guy</h2>
          <RaisedButton
            label="Click me"
            secondary={true}
            onTouchTap={this.toggleDialog}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}
export default AppBar;
export default Main;
