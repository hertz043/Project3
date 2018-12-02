import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "./GridContainer.jsx";
import GridItem from "./GridItem.jsx";
import InfoArea from "./InfoArea.jsx";

import productStyle from "./productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>How does this work?</h2>
            <h5 className={classes.description}>
            We offer the opportunity to donate to a non profit, while also having the 
            chance to win an amazing prize. Our site makes it easy for anyone to setup 
            a raffle linked to the non profit of their choice and or buy raffle tickets. 
            Upon Completion of the timed raffle, our database will randomly choose a 
            winning raffle ticket.

            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Choose your 
                dream prize"
                description="Charities and their celebrity partners work with Wonderfund to create once-in-a-lifetime sweepstakes for experiences that you can win. Whether you are into film, music, or sports, there's something for everyone!"
                icon={Chat}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Support an awesome cause"
                description="You can enter with just a small donation to the celebrity's chosen cause and the more you donate, the more chances you have to win! You can also always enter for free (no donation or purchase necessary). See the sweepstakes official rules for details."
                icon={VerifiedUser}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Earn entries for sharing"
                description="Help charities spread the word by sharing your unique link and earn extra entries. You can do this via Facebook, Twitter or email and make someone's day!"
                icon={Fingerprint}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
