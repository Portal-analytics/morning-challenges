/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import { lightBlack } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  container: {
    textAlign: 'center',
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: lightBlack,
  },
});

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleButtonRequestClose = this.handleButtonRequestClose.bind(this);
    this.handleButtonTouchTap = this.handleButtonTouchTap.bind(this);
    this.handleDrawerTouchTap = this.handleDrawerTouchTap.bind(this);
    this.handleDrawerRequestClose = this.handleDrawerRequestClose.bind(this);


    this.state = {
      openButton: false,
      openDrawer: false,
    };
  }

  handleButtonRequestClose() {
    this.setState({
      openButton: false,
    });
  }

  handleButtonTouchTap() {
    this.setState({
      openButton: true,
    });
  }

  handleDrawerRequestClose() {
    this.setState({
      openDrawer: false,
    });
  }

  handleDrawerTouchTap() {
    this.setState({
      openDrawer: true,
    });
  }



  render() {
    const standardActions = (
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleButtonRequestClose}
      />
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
        <AppBar
          title="Zach Galifianakis"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onTouchTap={this.handleDrawerTouchTap}
        />
        <Drawer open={this.state.openDrawer}>
          <MenuItem onTouchTap={this.handleButtonTouchTap}>About</MenuItem>
          <MenuItem>More Info</MenuItem>
          <MenuItem onTouchTap={this.handleDrawerRequestClose}>Close</MenuItem>
        </Drawer>
          <Dialog
            open={this.state.openButton}
            title="Zacharius Knight Galifianakis"
            actions={standardActions}
            onRequestClose={this.handleButtonRequestClose}
          >
            <p>Born: October 1, 1969</p>
            <p>Birth Place: Wikesboro, N.C.</p>
            <p>Famous Movies: The Hangover, The Hangover Part 2, The Hangover Part 3, The Lego Batman Movie</p>
          </Dialog>
          <RaisedButton
            label="ClickMe!"
            secondary={true}
            onTouchTap={this.handleButtonTouchTap}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
