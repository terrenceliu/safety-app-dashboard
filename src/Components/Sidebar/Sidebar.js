import React, { Component } from 'react';
import PropTypes from "prop-types";
import { NavLink } from 'react-router-dom';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Drawer from "@material-ui/core/Drawer";

// import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

import sidebarStyle from "../../Assets/jss/Components/sideBarStyle";

class Sidebar extends Component {
    constructor() {
      super();
    }
    
    render() {
        const { classes, brand, color, logo, image, logoText, routes } = this.props;
    
        var links = (
        <List className={classes.list}>
          {routes.map((prop, key) => {
            if (prop.redirect) return null;
            return (
              <NavLink
                to={prop.path}
                className={classes.item}
                activeClassName="active"
                key={key}
              >
                <ListItem button className={classes.itemLink}>
                  <ListItemIcon className={classes.itemIcon}>
                    <prop.icon />
                  </ListItemIcon>
                  <ListItemText
                    primary={prop.sidebarName}
                    className={classes.itemText}
                    disableTypography={true}
                  />
                </ListItem>
              </NavLink>
            );
          })}
        </List>
      );


        
      return (
          <div className={classes.wrapper}>
                <Drawer
                    anchor="left"
                    variant="permanent"
                    open
                    classes={{
                        paper: classes.drawerPaper
                    }}
                >
                <div className={classes.logo}>
                    <Typography variant="title" align="center">
                        Logo Text
                    </Typography>
                </div>
                <div className={classes.sidebarWrapper}>{links}</div>
                {image !== undefined ? (
                    <div
                    className={classes.background}
                    style={{ backgroundImage: "url(" + image + ")" }}
                    />
                ) : null}
                </Drawer>
          </div>
      );
    }
}

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(sidebarStyle)(Sidebar);