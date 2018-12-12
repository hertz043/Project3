import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

function shutter(i, els) {
  if (els.length === 0) return els;
  const wrapIndex = i => i % els.length;
  return [
    els[wrapIndex(i)],
    els[wrapIndex(i + 1)],
    els[wrapIndex(i + 2)],
    els[wrapIndex(i + 3)],
    els[wrapIndex(i + 4)],
    els[wrapIndex(i + 5)]
  ];
}
var styles = {
  margin: "20px",
  width: "340px",
  height: "400px",
  display: "inline-block"
};

const cards = [1, 2, 3];

class RaffleCard extends Component {
  state = { index: 0 };

  render() {
    return (
      <React.Fragment>
        <CssBaseline />

        <main>
          {this.props.raffle
            ? shutter(this.state.index, this.props.raffle).map(raffle => (
                <Card className="card" style={styles}>
                  <CardMedia
                    component="img"
                    className="media"
                    image={raffle.prize.image}
                    height="228"
                    width="400"
                    overflow="hidden"
                    minWidth="100%"
                  />
                  <CardContent className="cardContent">
                  <Typography 
                     style={{
                      backgroundColor: "",
                      fontWeight: "bold",
                      fontSize: "1em",
                      width: "258",
                      height: "36"
                    }}
                    >{raffle.nonprofit.name}</Typography>
                    <Typography 
                     style={{
                      backgroundColor: "",
                      fontWeight: "bold",
                      fontSize: "1em",
                      width: "258",
                      height: "36"
                    }}
                    >{raffle.prize.name}</Typography>
                  </CardContent>
                  <CardActions>
                    <Link to={`/raffle/${raffle._id}`}>
                      <Button size="small" color="primary">
                        Link
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              ))
            : null}
        </main>
      </React.Fragment>
    );
  }
}

export default RaffleCard;
