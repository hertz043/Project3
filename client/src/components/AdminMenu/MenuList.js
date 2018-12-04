import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import Settings from "@material-ui/icons/Settings";

const styles = {
  submenu:{
    paddingLeft: '40px'
  }
}
class MenuList extends Component {
  render() {
    return (
      <div>
        <List>
          <ListItem
            button={true}
            name="dashboard"
            value="dashboard"
            onClick={this.props.showContent}
          >
            <ListItemIcon value="dashboard">
              <SendIcon value="dashboard" />
            </ListItemIcon>
            Dashboard
          </ListItem>

          <ListItem
            button={true}
            name="settings"
            value="settings"
            onClick={this.props.showContent}
          >
            <ListItemIcon value="settings">
              <Settings value="settings" />
            </ListItemIcon>
            Settings
          </ListItem>

          <ListItem divider
            button={true}
            name="raffles"
            value="raffles"
            onClick={this.props.showContent}
          >
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            Raffles
          </ListItem>

          <ListItem 
            button={true}
            name="raffles"
            value="raffles"
            onClick={this.props.showContent}
          >
            <div {...this.props} style={styles.submenu}>+ View </div>
          </ListItem>
          <ListItem 
            button={true}
            name="raffles"
            value="raffles"
            onClick={this.props.showContent}
          >
            <div {...this.props} style={styles.submenu}>+ Create </div>
          </ListItem>
        </List>
      </div>
    );
  }
}
export default MenuList;
