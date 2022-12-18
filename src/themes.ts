import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: { paper: '#161616' },
    primary: {
      main: '#cd1818',
    },
    secondary: {
      main: '#e7e7e7',
    },
    info:{
      main:'#313131',
    }
  },
  typography: {
    fontFamily: [
      'Jost',
      'Roboto',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
    },
  },
});
