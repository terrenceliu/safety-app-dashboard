import React from "react";
import PropTypes from "prop-types";

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

import dashboardPageStyle from "../Assets/jss/Pages/dashboardPageStyle";

class DashboardPage extends React.Component {
    state = {
        index: 0
    }
    
    handleChange = (event, value) => {
        this.setState({
            index
        });
    }

    hanldeChangeIndex = val => {
        this.setState({
            index: val
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <h1>
                    This is dashboard page.
                </h1>
                <Grid container>
                    <Grid item xs={12} sm={6} md={3}>
                        Sample Grid One
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    Sample Grid Two
                </Grid>
            </div>
        )
    }
}

export default withStyles(dashboardPageStyle)(DashboardPage);