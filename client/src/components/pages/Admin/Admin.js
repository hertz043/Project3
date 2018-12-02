import React, { Component } from "react";
import SideBar from "../../AdminSideBar";
import AdminMain from "../../AdminMain";
import "./index.css";
import MenuList from "../../AdminMenu/MenuList";
import Header from "../../Header";
import Grid from "@material-ui/core/Grid";

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maincontent: "Main Content",
      linkValue: ""
    };
    this.showContent = this.showContent.bind(this);
  }

  // switch case to set main content
  renderMainContent() {
    switch (this.state.linkValue) {
      case "dashboard":
        return <Dashboard />;
      case "settings":
        return <Settings />;
      case "test":
        return <Test />;
      default: 
      return <Dashboard />;
    }
  }
  // On sidebar link click... set the maincontent = button name attribute.getAttribute("name")
  showContent = event => {
    const linkName = event.target.getAttribute("value");
    console.log(linkName);
    this.setState({ linkValue: linkName });
  };

  render() {
    return (
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="stretch"
        className="admin-page"
      >
        {/* <MenuList /> */}
        <Grid item sm={3} className="sidebar">
          <SideBar>
            <MenuList showContent={this.showContent} />
          </SideBar>
        </Grid>
        
        {/* Main Content */}
        <Grid item sm={9} className="main-content">
          <AdminMain content={this.state.maincontent}>
            <h3>{this.state.linkValue}</h3>
            {this.renderMainContent()}
          </AdminMain>
        </Grid>
      </Grid>
    );
  }
}
// Components for main content section
class Dashboard extends React.Component {
  render() {
    return <div>from dashboard</div>;
  }
}
class Settings extends Component {
  render() {
    return <div>from settings</div>;
  }
}
class Test extends Component {
  render() {
    return <div>this is a test</div>;
  }
}

export default AdminPage;
