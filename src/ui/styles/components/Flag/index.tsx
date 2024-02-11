import { Stack, Box } from '@mui/material';
import Trident from '../../../../assets/trident.svg';

const flagWidth: number = 64;
const flagHeight: number = Math.ceil((flagWidth / 3) * 2);

const Flag = () => {
  return (
    <Stack
      sx={{
        position: 'relative',
        width: `${flagWidth}px`,
        minHeight: `${flagHeight}px`,
        borderRadius: `${flagWidth * 0.1}px`,
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          width: '100%',
          flex: '1',
          backgroundColor: '#0057b8',
        }}
      />

      <img
        src={Trident}
        width={22}
        height={24}
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <Box
        sx={{
          width: '100%',
          flex: '1',
          backgroundColor: '#ffd700',
        }}
      />
    </Stack>
  );
};

export default Flag;
