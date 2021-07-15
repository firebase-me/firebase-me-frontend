import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from 'styles/theme';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/Footer-Clean.css";
import "./assets/css/styles.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@popperjs/core/dist/umd/popper.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fontsource/open-sans"

export const wrapRootElement = ({ element }) => {
 return (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {element}
  </ThemeProvider>
 );
};
