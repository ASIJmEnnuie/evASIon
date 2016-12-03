import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {fade} from 'material-ui/utils/colorManipulator';
import {grey100, grey300, grey400, grey500, white, darkBlack, fullBlack } from 'material-ui/styles/colors';

var parameters = require('../data/parameters.json');

import FRIP_Global from './FRIP_Global';

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: parameters.primaryColor,
    primary2Color: parameters.primaryColor,
    primary3Color: grey400,
    accent1Color: parameters.primaryColor,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    secondaryTextColor: fade(darkBlack, 0.54),
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: parameters.primaryColor,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  }
});

injectTapEventPlugin();

var racine =  document.getElementById('app');

ReactDOM.render(<MuiThemeProvider muiTheme={muiTheme}><FRIP_Global/></MuiThemeProvider>, racine);
