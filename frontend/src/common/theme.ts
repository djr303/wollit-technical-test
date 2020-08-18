import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Nunito"',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  palette: {
    common: {
      black: "#ff00ff",
      white: "#fff",
    },
    type: "light",
    primary: {
      main: "#ededed",
      light: "#ededed",
      dark: "#ededed",
      contrastText: "#ededed",
    },
    /* secondary: {
      main: "#00ff00",
      light: "#00ff00",
      dark: "#00ff00",
      contrastText: "#00ff00",
    },
    error: {
      light: "#00ff00" , //#e57373,
      main: "#00ff00" , //#f44336,
      dark: "#00ff00", //#d32f2f,
      contrastText: "#00ff00", //#fff
    },
    warning: {
      light: "#00ff00", //#ffb74d,
      main: "#00ff00", //#ff9800,
      dark: "#00ff00", //#f57c00,
      contrastText: "#00ff00", //rgba(0, 0, 0, 0.87)
    },
    info: {
      light: "#00ff00", //#64b5f6,
      main: "#00ff00", //#2196f3,
      dark: "#00ff00", //#1976d2,
      contrastText: "#00ff00", //#fff
    },
    success: {
      light: "#00ff00", //#81c784,
      main: "#00ff00", //#4caf50,
      dark: "#00ff00", //#388e3c,
      contrastText: "#00ff00", //rgba(0, 0, 0, 0.87)
    },
    "grey": {
      50: "#00ff00", //#fafafa,
      100: "#00ff00", //#f5f5f5,
      200: "#00ff00", //#eeeeee,
      300: "#00ff00", //#e0e0e0,
      400: "#00ff00", //#bdbdbd,
      500: "#00ff00", //#9e9e9e,
      600: "#00ff00", //#757575,
      700: "#00ff00", //#616161,
      800: "#00ff00", //#424242,
      900: "#00ff00", //#212121,
      A100: "#00ff00", //#d5d5d5,
      A200: "#00ff00", //#aaaaaa,
      A400: "#00ff00", //#303030,
      A700: "#00ff00", //#616161
    }, */
    /* contrastThreshold: 3,
    tonalOffset: 0.2,
    */
    text: {
      primary: "#ededed", //rgba(0, 0, 0, 0.87),
      secondary: "#ededed", //rgba(0, 0, 0, 0.54),
      /* disabled: "#ededed", //rgba(0, 0, 0, 0.38),
      hint: "#ededed", //rgba(0, 0, 0, 0.38) */ 
    },
    /*
    divider: "#00ff00", //rgba(0, 0, 0, 0.12),
    background: {
      paper: "#00ff00", //#fff,
      default: "#00ff00", //#fff,
    },  
    /* action: {
      active: "#ff0000", //rgba(0, 0, 0, 0.54),
      hover: "#ff0000", //rgba(0, 0, 0, 0.04),
      hoverOpacity: 0.04,
      selected: "#ff0000", //rgba(0, 0, 0, 0.08),
      selectedOpacity: 0.08,
      disabled: "#ff0000", //rgba(0, 0, 0, 0.26),
      disabledBackground: "#ff0000", //rgba(0, 0, 0, 0.12),
      disabledOpacity: 0.38,
      focus: "#ff0000", //rgba(0, 0, 0, 0.12),
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    } */
  },
});

export default theme