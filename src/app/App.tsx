import {createMuiTheme, CssBaseline, Link, ThemeProvider, Typography} from "@material-ui/core";
import React from "react";
import {ParallaxProvider} from "react-scroll-parallax";

function App() {
  return (
    <React.Fragment>
      <ThemeProvider
        theme={createMuiTheme({
          palette: {
            type: "dark"
          }
        })}>
        <CssBaseline />

      <ParallaxProvider>
        {/* actual content */}
        {/*<Parallax  y={[-20, 20]} tagOuter="figure">*/}
        {/*    <img src={"/assets/rocket.png"} alt={"rocket"}/>*/}
        {/*</Parallax>*/}

        <Typography variant={"body1"}>
          Site in development.
          <br/>
          Please checkout our <Link href={"https://github.com/TeamGalacticraft"}>Github</Link> in the meantime.
        </Typography>

      </ParallaxProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
