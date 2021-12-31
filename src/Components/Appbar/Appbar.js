import React from "react";
import { StyledHeader } from "./../Styled/Header.styled";
import { styled } from "@material-ui/styles";

import Appbar from "./Appbar2";

import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import { Container } from "../Styled/Container.styled";
const sections = [
  { title: "Home", url: "" },
  { title: "Latest Jobs", url: "1" },
  { title: "Results", url: "result" },
  { title: "AdmitCard", url: "admitcard" },
  { title: "AnswerKey", url: "answerkey" },
  { title: "Syllebus", url: "syllebus" },
  { title: "Admission", url: "admission" },
  { title: "Contact Us", url: "contactus" }
];

const DRAWER_WIDTH = 0;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;
const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up("lg")]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5)
  }
}));

function Header() {
  return (
    <StyledHeader bg="red">
      <Appbar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      />
      <React.Fragment>
        <Card>
          <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}></Toolbar>
          <Toolbar
            component="nav"
            variant="dense"
            sx={{ justifyContent: "space-between", overflowX: "auto" }}
          >
            {sections.map((section) => (
              <RouterLink
                to={section.url}
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <Link
                  color="inherit"
                  noWrap
                  key={section.title}
                  variant="body2"
                  href={section.url}
                  sx={{ p: 1, flexShrink: 0 }}
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    component="div"
                    sx={{
                      display: "inline",
                      color: "green",
                      textDecoration: "none"
                    }}
                  >
                    <Stack direction="row" spacing={1}>
                      <Chip label={section.title} variant="outlined" />
                    </Stack>
                  </Box>
                </Link>
              </RouterLink>
            ))}
          </Toolbar>
          <marquee behavior="alternate">
            Sarkari Result Android Apps || Sarkari Result Youtube Channel ||
            Sarkari Result Apple / IOS Apps|| Follow Instagram
          </marquee>
        </Card>
      </React.Fragment>
    </StyledHeader>
  );
}

export default Header;
