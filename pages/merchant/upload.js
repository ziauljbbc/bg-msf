import React from "react";

// react plugin for creating charts
import makeStyles from '@mui/styles/makeStyles';

// @mui/icons-material
import Car from "@mui/icons-material/DirectionsCar";
import Bike from "@mui/icons-material/TwoWheeler";

// layout for this page
import Admin from "layouts/Admin.js";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Tasks from "components/Tasks/Tasks.js";
import ImageUpload from "components/ImageUpload/ImageUpload.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import {bugs, website} from "variables/general.js";


import styles from "assets/jss/nextjs-material-dashboard/views/dashboardStyle.js";

function Upload() {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <CustomTabs
                        title="Sell Car / Bike:"
                        headerColor="dark"
                        tabs={[
                            {
                                tabName: "Car",
                                tabIcon: Car,
                                tabContent: (
                                    <ImageUpload/>
                                ),
                            },
                            {
                                tabName: "Bike",
                                tabIcon: Bike,
                                tabContent: (
                                    <ImageUpload/>
                                ),
                            },
                        ]}
                    />
                </GridItem>
            </GridContainer>
        </div>
    );
}

Upload.layout = Admin;

export default Upload;
