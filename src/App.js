import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import Hero from "./components/Hero";
import FlagshipCards from "./components/FlagshipCards"
import IllustrationCards from "./components/IllustrationCards"
import Cards from "./components/Cards"
import Footer from "./components/Footer"

export default function Album() {

  return (
    <React.Fragment>
      <CssBaseline />
      <main style={{overflow:"hidden"}}>
        <Hero />
        <FlagshipCards />
        <Cards />
        <IllustrationCards />
      </main>
      <Footer />
    </React.Fragment>
  );
}
