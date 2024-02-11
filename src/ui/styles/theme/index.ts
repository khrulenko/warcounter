import { createTheme } from '@mui/material';
import MuiCssBaseline from '../MUIComponents/MuiCssBaseline';

const theme = createTheme({
  components: {
    MuiCssBaseline,
  },
  palette: {
    text: {
      primary: '#DB1F48',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;
