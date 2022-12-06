import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: { paper: '#262626' },
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
