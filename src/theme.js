
import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#52872a',
    },
    secondary: {
      main: '#62914b',
    },
    error: {
      main: '#B14427',
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;