import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom'

import rafflePageStyle from "../style/raffleStyle";

class NoWinner extends Component {
  constructor(props){
    super(props);
    this.state = {
    winner: ""
  }
  }
  

render() {
  const { classes, ...rest } = this.props;

  return ( 
    <Paper className={classes.root} elevation={1} style={{
      marginTop: 12,
      boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)"
    }}>
      <Typography variant="h4" component="h4" style={{
        padding: "15px 5px 5px 5px",
        textAlign: "center",
      }}>
        This raffle has ended without any tickets being entered.
      </Typography>
      <div style={{display:"flex", justifyContent: "center", marginTop: 10}}>
        <Link  to={`/raffles`}>
          <Button variant="contained" color="primary" className={classes.margin} style={{
            height: 80,
            width: 400,
            fontSize: 20,
            marginBottom: 10
            }}>
            View Other Raffles
          </Button>
        </Link>
      </div>
    </Paper>
  );
  }
}

export default withStyles(rafflePageStyle)(NoWinner);