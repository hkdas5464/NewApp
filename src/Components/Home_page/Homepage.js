import React from "react";
import HomepageBanner from "./HomepageBanner.js";
import FeaturedPost from "./Featurepost";

import Grid from "@mui/material/Grid";

const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imageText: "main image description",
  linkText: "Continue reading…"
};

function Homepage() {
  return (
    <div>
      <main>
        <HomepageBanner post={mainFeaturedPost} />

        <Grid container spacing={0.5}>
          <FeaturedPost />
        </Grid>
        <Grid container spacing={5} sx={{ mt: 3 }}></Grid>
      </main>
    </div>
  );
}

export default Homepage;
