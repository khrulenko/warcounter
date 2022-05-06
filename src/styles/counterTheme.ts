import { extendTheme } from '@chakra-ui/react';
import dayNumberStyle from './dayNumberStyle';
import globalStyles from './globalStyles';
import mainLayoutStyle from './mainLayoutStyle';
import titleStyle from './titleStyle';

const componentsList = {
  mainLayout: mainLayoutStyle,
  dayNumber: dayNumberStyle,
  title: titleStyle,
};

const theme = {
  styles: globalStyles,
  components: componentsList,
  colors: {
    red: {
      main: '#DB1F48',
    },
  },
  fontSizes: {
    dayNumber: '200px',
  },
};

const counterTheme = extendTheme(theme);

export default counterTheme;
