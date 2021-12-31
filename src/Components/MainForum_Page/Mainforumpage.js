import * as React from "react";
import Banner from "./Banner";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Table from "./Table";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Question from "./QuestionApi";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Date from "./ImportantDate";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imageText: "main image description",
  linkText: "Continue reading…"
};

function MainForumpage() {
  const MyTypography = styled(Typography)({
    background: "green",
    border: 0,
    alignItems: "center",
    borderRadius: 20,
    boxShadow: "0 3px 5px 2px rgba(25, 118, 210, .6)",

    height: 48
  });

  const OTypography = styled(MyTypography)({
    background: "#fff"
  });

  return (
    <>
      <Container maxWidth="lg" component="main">
        {/* <Banner post={mainFeaturedPost} /> */}

        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Typography>Union Public Service Commission (UPSC)</Typography>
            <Typography>
              UPSC Engineering Services 2021 DAF Online Form 2022
            </Typography>
            <Typography>
              UPSC IAS 2021 DAF Short Details of Notification
            </Typography>
          </Grid>

          <Grid item xs={6} md={6}>
            <Card>
              <Typography style={{ color: "green" }}>
                Important Dates
              </Typography>
              <Divider />
              {Date.map((e) => (
                <>
                  <Typography>Application Begin : {e.Begin}</Typography>
                  <Typography>
                    Last Date for Apply Online :
                    <Typography style={{ color: "red" }}>{e.Last}</Typography>
                  </Typography>

                  <Typography>Complete Form Last Date :{e.Date}</Typography>

                  <Typography
                    style={{ color: "#00AB55", background: "#00AB55" }}
                  >
                    {e.message}
                  </Typography>
                </>
              ))}
            </Card>
          </Grid>
          <Grid item xs={6} md={6}>
            <Card>
              <Typography style={{ color: "green" }}>
                {" "}
                Application Fee{" "}
              </Typography>
              <Divider />
              {Date.map((e) => (
                <>
                  <Typography>General: {e.General}/-</Typography>
                  <Typography>OBC: {e.General}/-</Typography>
                  <Typography>ST: {e.General}/-</Typography>

                  <Typography>SC: {e.General}/-</Typography>
                  <Divider />
                  <Typography style={{ background: "#00AB55" }}>
                    {" "}
                    {e.message}/-
                  </Typography>
                </>
              ))}
            </Card>
          </Grid>
          <Grid item xs={12} md={12}>
            <Card>UPSC Engineering Services IAS 2021 Vacancy Details</Card>
          </Grid>
          <Grid item xs={12} md={12}>
            <Table />
          </Grid>
          <Grid item xs={6}>
            <Typography>Apply Online</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Click Here</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography>Download DAF Notification</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Click Here</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography>For Vacancy Details</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Click Here</Typography>
          </Grid>
          <Divider />
          <Grid item xs={6}>
            <Typography>Join Our Telegram Page</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Click Here</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography>UPSC Official Website</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Click Here</Typography>
          </Grid>
          <Grid item xs={12}>
            <Card>
              {Question &&
                Question.map((e) => (
                  <>
                    <Stack sx={{ width: "100%" }} spacing={2}>
                      <Alert severity="error">{e.title}</Alert>
                      <Alert severity="success" noWrap>
                        {e.answer}
                      </Alert>
                      <br />
                    </Stack>
                  </>
                ))}
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default MainForumpage;
