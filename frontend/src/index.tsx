import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import AppContainer from "./components/AppConatiner";
import { ApolloProvider } from "react-apollo";
import client from './apolloClient'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './common/theme'

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <AppContainer />
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById("root")
);

