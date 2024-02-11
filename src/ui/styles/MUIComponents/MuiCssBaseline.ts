import { Theme } from '@mui/material';

const MuiCssBaseline = {
  styleOverrides: ({ palette }: Theme) => ({
    body: {
      minHeight: '100vh',
      height: '100%',
      backgroundColor: palette.common.black,
    },
    '#root': {
      minHeight: '100vh',
      height: '100%',
      padding: '0',

      '& ::selection': {
        backgroundColor: palette.text.primary,
        color: palette.common.black,
      },
    },
  }),
};

export default MuiCssBaseline;
