import { Theme } from 'styled-system';

import { colors } from './colors';
import { space } from './space';
import { fontSizes } from './font-sizes';
import { radii } from './radii';
import { breakpoints } from './breakpoints';

export const defaultTheme: Theme = {
  space: {
    ...space,
  },
  breakpoints: {
    ...breakpoints,
  },
  colors: {
    ...colors,
  },
  fontSizes: {
    ...fontSizes,
  },
  radii: {
    ...radii,
  },
};
