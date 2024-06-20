import "@/core/frontend/styles/globals.css";
import {SessionProvider} from "next-auth/react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {EventDetailsPageContext, EventAndVenueProvider} from "@/core/frontend/contexts/EventDetailsPageContext";

const theme = createTheme({
    typography: {
        fontFamily: [
            'M PLUS Rounded 1c',
        ].join(','),
    },
});

export default function App({ Component, pageProps }) {
  return (
      <ThemeProvider theme={theme}>
          <SessionProvider session={pageProps.session}>
          <CssBaseline />
              <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
  );
};
