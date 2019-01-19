import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Cafe from "@material-ui/icons/LocalCafe";
import Stay from "@material-ui/icons/StayCurrentPortrait";
import Diner from "@material-ui/icons/LocalDining";
import Game from "@material-ui/icons/VideogameAsset";
import Cocktail from "@material-ui/icons/LocalBar";
import Walk from "@material-ui/icons/DirectionsWalk"

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";

import pillsStyle from "assets/jss/material-kit-react/views/accueilSections/pillsStyle.jsx";

class SectionPills extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="navigation-pills">
            <div className={classes.title}>
              <h2>Les jeux Raitro</h2>
            </div>
            <GridContainer>
              
                <NavPills
                  color="danger"
                  tabs={[
                    {
                      tabButton: "L'application",
                      tabIcon: Stay,
                      tabContent: (
                        <GridContainer> 
                          <GridItem xs={6} sm={6} md={6}>
                            <span>
                              <b>Raitro se base sur une application disponible sur tous les magasins d'applications gratuitement ! 
                                  Prenez-en main votre téléphone, votre carte de transport et partez à l'aventure avec d'autre passager. </b>
                               
                            </span>
                          </GridItem>
                         
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Les jeux",
                      tabIcon: Game,
                      tabContent: (
                        <GridContainer> 
                          <GridItem xs={6}>
                            <span>
                              
                                
                              <b>Raitro propose un catalogue de plusieurs styles de jeux en multijoueurs à consommer sans modération. Affrontez vos amis ou de simples inconnus et inscrivez-vous dans le high score.</b>
                                
                              
                            </span>
                          </GridItem>
                          <GridItem xs={6}>
                            
                          </GridItem>
                        </GridContainer>
                      )
                    }
                    
                  ]}
                />
            
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(pillsStyle)(SectionPills);
