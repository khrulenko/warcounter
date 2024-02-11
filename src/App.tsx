import { Stack } from '@mui/material';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { Header, WarDay, Wrapper } from './styled';

// needed for timezone plugins
dayjs.extend(utc);
dayjs.extend(timezone);

const getWarDayNumber = () => {
  const warStartDate = dayjs('2022-02-24T00:00:00').tz('Europe/Kyiv');
  const now = dayjs().tz('Europe/Kyiv');

  const daysPassed = now.diff(warStartDate, 'day');
  const currentDayNumber = daysPassed + 1;

  return currentDayNumber;
};

const App = () => {
  const warDayNumber = getWarDayNumber();

  return (
    <Stack sx={{ alignItems: 'center', width: '100%' }}>
      <Wrapper>
        <Header>
          the day of
          <br />
          the full-scale phase of
          <br />
          the russian-ukrainian war
        </Header>

        <WarDay>{warDayNumber}</WarDay>
      </Wrapper>
    </Stack>
  );
};

export default App;
