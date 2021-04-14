import React from "react";
import styled from "styled-components/macro";

import { Helmet } from "react-helmet-async";

import { Grid, Typography as MuiTypography } from "@material-ui/core";

import { spacing } from "@material-ui/system";

const Typography = styled(MuiTypography)(spacing);

function Dashboard() {
  return (
    <React.Fragment>
      <Helmet title="Dashboard" />
      <Grid justify="space-between" container spacing={6}>
        <Grid item>
          <Typography variant="h3" gutterBottom>
            Default Dashboard
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Dashboard;
