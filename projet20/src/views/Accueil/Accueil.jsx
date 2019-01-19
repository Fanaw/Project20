import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Header from "components/Header/Header.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import SectionPills from "./Sections/SectionPills.jsx";
import SectionCarousel from "views/Components/Sections/SectionCarousel.jsx";
import accueilStyle from "assets/jss/material-kit-react/views/accueil.jsx";



class Accueil extends React.Component {
  render(){
    const { classes, ...rest } = this.props;
    return(

      <div id="accueil">
        <Header
          brand="Accueil"
          fixed
          
          color="white"
          changeColorOnScroll={{
            height: 300,
            color: "danger"
          }}
          {...rest}
        />
        <Parallax data-parallax="false" image={require("assets/img/main.png")}>
          <div className={classes.container}>

            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                
                 
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <div id="prog">
            {/*<SectionPills />
            <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/-68Y-b8eKB4" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
            </iframe>
            */}
           <GridContainer spacing={24}>
            <GridItem xs={6}>
              <SectionPills />
            </GridItem>
            <GridItem xs={6}>
              <iframe 
              width="900 " 
              height="500" 
              src="https://www.youtube.com/embed/-68Y-b8eKB4" 
              frameborder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
              </iframe>
            </GridItem>
          </GridContainer>  
          </div>
          <div id="sondage">
            <SectionCarousel />
          </div>
        </div>


      </div>
    );
  } 
}

export default withStyles(accueilStyle)(Accueil);

