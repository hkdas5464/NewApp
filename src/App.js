import { ThemeProvider } from "styled-components";
import Header from "./Components/Appbar/Appbar";
import Container from "@mui/material/Container";
import React from "react";
import ThemeConfig from "./theme/Index";
import MainForumpage from "./Components/MainForum_Page/Mainforumpage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Admission from "./Components/Admission/Admission";
import AdmitCard from "./Components/AdmitCard/Admitcard";
import AnswerKey from "./Components/AnswerKey/AnswerKey";
import ContactUs from "./Components/Contact_Us/ContactUs";
import Homepage from "./Components/Home_page/Homepage";
import LatestJob from "./Components/Latest_Job/LatestJob";
import Result from "./Components/Results/Result";
import Syllebus from "./Components/Syllebus/Syllebus";
import "./styles.css";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333"
  },
  mobile: "768px"
};

function App() {
  return (
    <ThemeConfig>
      <Router>
        <ThemeProvider theme={theme}>
          <>
            <Header />
            <div className="App">
              <Switch>
                <Route path="/admission">
                  <Admission />
                </Route>
                <Route path="/answerkey">
                  <AnswerKey />
                </Route>
                <Route path="/admitcard">
                  <AdmitCard />
                </Route>
                <Route path="/latestjob">
                  <LatestJob />
                </Route>
                <Route path="/:Id">
                  <MainForumpage />
                </Route>

                <Route path="/result">
                  <Result />
                </Route>

                <Route path="/syllebus">
                  <Syllebus />
                </Route>

                <Route path="/contactus">
                  <ContactUs />
                </Route>
                <Route path="/">
                  <Homepage />
                </Route>
                <Route path="/hhhh">
                  <Homepage />
                </Route>
              </Switch>
            </div>
          </>
          <Container
            maxWidth="md"
            component="footer"
            sx={{
              borderTop: (theme) => `1px solid ${theme.palette.divider}`,
              mt: 8,
              py: [3, 6]
            }}
          ></Container>
        </ThemeProvider>
      </Router>
    </ThemeConfig>
  );
}

export default App;
