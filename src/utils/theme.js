import {
  lightGreen500, lightGreen700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack
} from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { fade } from 'material-ui/utils/colorManipulator'
import spacing from 'material-ui/styles/spacing'

import Typography from 'typography'
import stowLake from 'typography-theme-stow-lake'

export const typography = new Typography(stowLake)
export default getMuiTheme({
  spacing: spacing,
  fontFamily: 'Neuton, serif',
  palette: {
    primary1Color: lightGreen500,
    primary2Color: lightGreen700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: lightGreen500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
    paper: white
  }
})
