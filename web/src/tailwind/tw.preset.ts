import { appTheme } from './theme';

const theme = {
  theme: {
    backgroundOpacity: {
      'level-100': '1',
      'level-90': '0.9',
      'level-80': '0.8',
      'level-70': '0.7',
      'level-60': '0.6',
      'level-50': '0.5',
      'level-40': '0.4',
      'level-30': '0.3',
      'level-20': '0.2',
      'level-10': '0.1',
      'level-0': '0',
    },
    extend: {
      colors: {
        ...appTheme,
      },
    },
  },
};

export default theme;
