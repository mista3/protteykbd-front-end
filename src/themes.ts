import { createTheme } from '@mui/material';

const baseOptions = {
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
        square: true,
      }
    }
  }
}

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background:{paper:'#404040'}
  },
},baseOptions);

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
},baseOptions);
