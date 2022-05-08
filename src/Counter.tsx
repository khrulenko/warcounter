import * as React from 'react';
import { Text, Box, Center, useMultiStyleConfig } from '@chakra-ui/react';
import dayjs from 'dayjs';

const getWarDayNumber = () => {
  const warStartDate = dayjs('2022-02-24');
  const now = dayjs();

  const daysPassed = now.diff(warStartDate, 'day');
  const currentDayNumber = daysPassed + 1

  return currentDayNumber;
};

export const Counter = (props: any) => {
  const mainLayoutStyle = useMultiStyleConfig('mainLayout', props);
  const dayNumberStyle = useMultiStyleConfig('dayNumber', props);
  const titleStyle = useMultiStyleConfig('title', props);

  const warDayNumber = getWarDayNumber();

  return (
    <Box sx={mainLayoutStyle}>
      <Center h="100%">
        <Box>
          <Text sx={titleStyle}>
            the day of the
            <br />
            russian-ukraine war
          </Text>

          <Text sx={dayNumberStyle}>{warDayNumber}</Text>
        </Box>
      </Center>
    </Box>
  );
};
