import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Data } from "./Data";

import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper"
};

function FeaturedPost(props) {
  const { post } = props;

  const theme = createTheme();
  theme.typography.body1 = {
    fontSize: ".2rem",
    color: "black",
    "@media (max-width:600px)": {
      fontSize: ".4rem",
      color: "green"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1rem",
      color: "green"
    }
  };

  theme.typography.h5 = {
    fontSize: ".7rem",
    color: "black",
    "@media (min-width:400px)": {
      fontSize: "1.2rem",
      color: "black"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.6rem",
      color: "black"
    }
  };

  return (
    <Container maxWidth="lg" component="main">
      <Grid
        item
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 1, md: 1 }}
      >
        <Grid item xs={4}>
          <Card>
            <ThemeProvider theme={theme}>
              <Typography
                titleTypographyProps={{ align: "center" }}
                sx={{
                  backgroundColor: theme.palette.primary.main
                }}
                variant="h5"
                style={{ padding: "16px" }}
              >
                Result
              </Typography>
            </ThemeProvider>
            <CardContent>
              {Data.map((e) => (
                <>
                  <ThemeProvider theme={theme}>
                    <Typography
                      variant="body1"
                      align="left"
                      color="text.secondary"
                      style={{ cursor: "pointer" }}
                    >
                      {e.title}
                    </Typography>
                  </ThemeProvider>
                  <Divider />
                </>
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <ThemeProvider theme={theme}>
              <Typography
                title="Admit Card"
                titleTypographyProps={{ align: "center" }}
                sx={{
                  backgroundColor: theme.palette.primary.main
                }}
                variant="h5"
                style={{ padding: "16px" }}
              >
                Admit card
              </Typography>
            </ThemeProvider>
            <CardContent>
              {Data.map((e) => (
                <>
                  <ThemeProvider theme={theme}>
                    <Typography
                      variant="body1"
                      align="left"
                      color="text.secondary"
                      style={{ cursor: "pointer" }}
                    >
                      {e.title}
                    </Typography>
                  </ThemeProvider>
                  <Divider />
                </>
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <ThemeProvider theme={theme}>
              <Typography
                title="Admit Card"
                titleTypographyProps={{ align: "center" }}
                sx={{
                  backgroundColor: theme.palette.primary.main
                }}
                variant="h5"
                style={{ padding: "16px" }}
              >
                Latest Job
              </Typography>
            </ThemeProvider>

            <CardContent>
              {Data.map((e) => (
                <>
                  <ThemeProvider theme={theme}>
                    <Typography
                      variant="body1"
                      align="left"
                      color="text.secondary"
                      style={{ cursor: "pointer" }}
                    >
                      {e.title}
                    </Typography>
                  </ThemeProvider>
                  <Divider />
                </>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default FeaturedPost;
