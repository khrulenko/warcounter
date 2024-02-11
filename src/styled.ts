import { Stack, Typography, styled } from '@mui/material';

export const Wrapper = styled(Stack)(() => ({
  alignItems: 'center',
  justifyContent: 'center',
  gap: '24px',

  height: '100vh',
  maxWidth: '500px',
}));

export const Header = styled(Typography)(({ theme: { palette } }) => ({
  fontSize: '24px',
  letterSpacing: '2px',
  textAlign: 'center',
  color: palette.common.white,
}));

export const WarDay = styled(Typography)(({ theme: { palette } }) => ({
  fontSize: '200px',
  borderTop: '1px solid',
  borderBottom: '1px solid',
  borderColor: palette.text.primary,
}));
