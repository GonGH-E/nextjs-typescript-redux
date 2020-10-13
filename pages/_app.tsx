import React from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { useStore } from "../store";
import { ThemeProvider } from "@material-ui/core/styles";
import { getTheme } from "../theme";

export default function App({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <ThemeProvider theme={getTheme("light")}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
