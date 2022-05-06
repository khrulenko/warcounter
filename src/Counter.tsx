import * as React from 'react';
import { Text, Box, Center, useMultiStyleConfig } from '@chakra-ui/react';

const warStartDate = '2022, 02, 24';

const msToDays = (miliseconds: number) =>
  Math.ceil(miliseconds / (1000 * 3600 * 24));

const getWarDayNumber = () => {
  const warDate = new Date(warStartDate);
  const today = new Date();
  const diff = today.getTime() - warDate.getTime();

  return msToDays(diff);
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
