/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import { deepOrange500 } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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

    this.state = {
      open: false,
    };
  }

  handleToggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
        <AppBar
          title="My Web Application"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onTouchTap={this.handleToggle}
        />
        <Drawer open={this.state.open}>
          <MenuItem>About</MenuItem>
          <MenuItem>More Info</MenuItem>
        </Drawer>
          <Dialog
            open={this.state.open}
            title="Display Message!"
            actions={standardActions}
            onRequestClose={this.handleRequestClose}
          >
            This is a display message!
          </Dialog>
          <RaisedButton
            label="ClickMe!"
            secondary={true}
            onTouchTap={this.handleTouchTap}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
