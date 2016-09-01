import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { TypographyStyle, GoogleFont } from 'react-typography'

import Paper from 'material-ui/Paper'
import theme, { typography } from '../utils/theme'

injectTapEventPlugin()

const Main = (props) => (
  <MuiThemeProvider muiTheme={theme} style={{ minHeight: '100%' }}>
    <Paper zDepth={0} rounded={false}>
    <GoogleFont typography={typography} />
      {props.children}
    </Paper>
  </MuiThemeProvider>
)


export default Main
