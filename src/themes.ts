import { createTheme } from '@mui/material';

const baseOptions = {
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
        square: true,
      },
    },
  },
};

export const darkTheme = createTheme(
  {
    palette: {
      mode: 'dark',
      background: { paper: '#262626' },
      primary: {
        main: '#cd1818',
      },
      secondary: {
        main: '#e7e7e7',
      },
    },
  },
  baseOptions
);

export const lightTheme = createTheme(
  {
    palette: {
      mode: 'light',
      background: { paper: '#e7e7e7' },
      primary: {
        main: '#cd1818',
      },
      secondary: {
        main: '#262626',
      },
    },
  },
  baseOptions
);
