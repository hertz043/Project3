import React, { Component } from "react";
import axios from "axios";
import AdminMain from "../../AdminMain";
import "./index.css";
import MenuList from "../../AdminMenu/MenuList";
import ImageAvatars from "../../AdminMenu/Avatar";
import Hidden from "@material-ui/core/Hidden";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import StatBoxes from "../../AdminDashboard/StatBoxes";
import UserSetting from "../../AdminSettings/AdminSettings";
import CurrentRaffle from "../../AdminDashboard/CurrentRaffle";
import RaffleForm from "../../AdminRaffle/RaffleForm";
import RaffleTable from "../../AdminRaffle/RaffleTable";
import moment from 'moment';

import image from "../AdminPage/jss/sidebar-2.jpg";

// sidebar style
const drawerWidth = 170;
const styles = theme => ({
  root: {
    display: "flex"
  },
  welcome: {
    textAlign: "center",
    padding: "40px 10px",
    
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    top: "80px"
  },
  drawerPaper: {
    width: drawerWidth,
    top: "80px"
  },
  content: {
    minHeight: "-webkit-fill-available",
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  toolbar: theme.mixins.toolbar
});

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maincontent: "Main Content",
      linkValue: "",
      userinfo: [],
      userid: "",
      username: "",
      image: "",
      website: "",
      description: "",
      followers: 0,
      raffleTime: ""
    };
    this.showContent = this.showContent.bind(this);
  }

  //get nonprofit info when admin page loads
  componentDidMount() {
    console.log(this.props.match.params.id);
    axios.get("/api/nonprofit/" + this.props.match.params.id).then(res => {
      this.setState({
        userinfo: res.data,
        userid: res.data._id,
        username: res.data.name,
        image: res.data.imageLink,
        website: res.data.website,
        description: res.data.description,
        followers: res.data.followers
      });
    });
    axios.get("/api/raffle/all/get").then(res => {
      console.log(res.data);
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].nonProfit === this.state.userid) {
          console.log(res.data[i].endTime);
          let raffleTime = moment(res.data[i].endTime).add(6, 'hours');
          this.setState({ raffleTime: raffleTime });
        }
      }
    });
  }

  // switch case to set main content
  renderMainContent() {
    const userInfo = {
      userinfo: this.state.userinfo,
      raffleTime: this.state.raffleTime
    };
    const userId = { userid: this.state.userid };

    switch (this.state.linkValue) {
      case "dashboard":
        return <Dashboard {...userInfo} />;
      case "settings":
        return <Settings {...userInfo} />;
      case "raffles":
        return <Raffles {...userId} />;
      case "view":
        return <AllRaffles />;
      default:
        return <Dashboard {...userInfo} />;
    }
  }
  // On sidebar link click... set the maincontent = button name
  showContent = event => {
    const linkName = event.target.getAttribute("value");
    console.log(linkName);
    this.setState({ linkValue: linkName });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Hidden xsDown>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar} />
          <Drawer
            image={image}
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <div className={classes.toolbar} />
            {/* Sidebar Menu List */}
            <ImageAvatars image={this.state.image} />
            <Divider />
            <MenuList showContent={this.showContent} />
            <Divider />
          </Drawer>
        </Hidden>

        {/* Main Content */}
        <main className={classes.content}>
          <h4 className={classes.welcome}>Welcome Back, {this.state.username}</h4>
          <AdminMain {...this.props}>
            {this.renderMainContent(this.props)}
          </AdminMain>
        </main>
      </div>
    );
  }
}

// Components for main content section
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moneyraised: 0,
      followers: 0,
      totalraffles: 0
    };
  }
  componentDidMount() {
    let followers = this.props.userinfo.followers;
    this.setState({
      moneyraised: 3000,
      totalraffles: 8
    });
  }
  render() {
    return (
      <div className="dashboard">
        <StatBoxes
          {...this.props}
          totalraffles={this.state.totalraffles}
          moneyraised={this.state.moneyraised}
          followers={this.props.userinfo.followers}
        />
        <CurrentRaffle
          raffleTime={this.props.raffleTime}
          user={this.props.userinfo.name}
          about={this.props.userinfo.description}
          image={this.props.userinfo.imageLink}
          followers={this.props.userinfo.followers}
        />
      </div>
    );
  }
}

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: this.props.userinfo
    };
  }
  render() {
    return (
      <div>
        <UserSetting {...this.props} />
      </div>
    );
  }
}

// Raffle Form
class Raffles extends Component {
  render() {
    return (
      <div>
        <RaffleForm {...this.props} />
      </div>
    );
  }
}
// View Raffles
class AllRaffles extends Component {
  render() {
    return (
      <div>
        <h3>View Raffle</h3>
        <RaffleTable />
      </div>
    );
  }
}

export default withStyles(styles)(AdminPage);
