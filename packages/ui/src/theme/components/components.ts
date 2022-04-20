import type {} from '@mui/lab/themeAugmentation';
import { Components } from '@mui/material';

import type { Theme } from '../baseTheme';

import { MuiButton } from './MuiButton';
import { MuiButtonBase } from './MuiButtonBase';
import { MuiInputBase } from './MuiInputBase';
import { MuiFormHelperText } from './MuiFormHelperText';
import { MuiFormLabel } from './MuiFormLabel';
import { MuiInputLabel } from './MuiInputLabel';
import { MuiOutlinedInput } from './MuiOutlinedInput';
import { MuiPaginationItem } from './MuiPaginationItem';
import { MuiTypography } from './MuiTypography';
import { MuiAutocomplete } from './MuiAutocomplete';
import { MuiDialog } from './MuiDialog';
import { MuiDialogTitle } from './MuiDialogTitle';
import { MuiDialogContent } from './MuiDialogContent';
import { MuiDialogActions } from './MuiDialogActions';
import { MuiLoadingButton } from './MuiLoadingButton';
import { MuiTableCell } from './MuiTableCell';
import { MuiTableHead } from './MuiTableHead';
import { MuiPickersDay } from './MuiPickersDay';
import { MuiCalendarPicker } from './MuiCalendarPicker';
import { MuiYearPicker } from './MuiYearPicker';

export type FontsUrls = {
  bold: {
    woff: string;
    woff2: string;
  };
  light: {
    woff: string;
    woff2: string;
  };
  medium: {
    woff: string;
    woff2: string;
  };
  regular: {
    woff: string;
    woff2: string;
  };
};

const getMuiCssBaseline = (
  fontUrls: FontsUrls
): Components['MuiCssBaseline'] => ({
  styleOverrides: `
    @font-face {
      font-family: 'Ubuntu';
      font-style: 'normal';
      font-weight: 300;
      font-display: swap;
      src: url(${fontUrls.light.woff2}) format('woff2'), url(${fontUrls.light.woff}) format('woff');
    }
    @font-face { 
      font-family: 'Ubuntu';
      font-style: 'normal';
      font-weight: 400;
      font-display: swap;
      src: url(${fontUrls.regular.woff2}) format('woff2'), url(${fontUrls.regular.woff}) format('woff');
    }
    @font-face {
      font-family: 'Ubuntu';
      font-style: 'normal';
      font-weight: 500;
      font-display: swap;
      src: url(${fontUrls.medium.woff2}) format('woff2'), url(${fontUrls.medium.woff}) format('woff');
    }
    @font-face {
      font-family: 'Ubuntu';
      font-style: 'normal';
      font-weight: 700;
      font-display: swap;
      src: url(${fontUrls.bold.woff2}) format('woff2'), url(${fontUrls.bold.woff}) format('woff');
    }
  `,
});

const MuiCheckbox: Components['MuiCheckbox'] = {
  defaultProps: {
    disableRipple: true,
  },
};

const MuiRadio: Components['MuiRadio'] = {
  defaultProps: {
    disableRipple: true,
  },
};

const MuiMenu: Components<Theme>['MuiMenu'] = {
  defaultProps: {
    autoFocus: false,
  },
  styleOverrides: {
    paper({ theme }: { theme: Theme }) {
      return {
        marginTop: theme.spacing(2),
        '&.MuiPaper-root': {
          borderRadius: theme.shape.small,
          boxShadow: theme.elevation[200],
        },
      };
    },
    list({ theme }: { theme: Theme }) {
      return {
        padding: theme.spacing(1, 0),
      };
    },
  },
};

const MuiMenuItem: Components<Theme>['MuiMenuItem'] = {
  styleOverrides: {
    root({ theme }: { theme: Theme }) {
      return {
        '&:hover': {
          backgroundColor: theme.palette.background.elementHover,
        },
      };
    },
  },
};

export const getComponents = (fontUrls: FontsUrls): Components<Theme> => ({
  MuiCssBaseline: getMuiCssBaseline(fontUrls),
  MuiButton,
  MuiLoadingButton,
  MuiButtonBase,
  MuiTypography,
  MuiInputBase,
  MuiInputLabel,
  MuiOutlinedInput,
  MuiFormLabel,
  MuiFormHelperText,
  MuiAutocomplete,
  MuiCheckbox,
  MuiMenu,
  MuiMenuItem,
  MuiRadio,
  MuiDialog,
  MuiDialogTitle,
  MuiDialogContent,
  MuiDialogActions,
  MuiTableCell,
  MuiTableHead,
  MuiPaginationItem,
  MuiPickersDay,
  MuiCalendarPicker,
  MuiYearPicker,
});
