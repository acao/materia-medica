import { combineReducers } from 'redux'
import * as ActionTypes from './constants'
import { routerReducer } from 'react-router-redux'

import { sampleEntries } from "./utils/fixtures"

const initialState = {
  entries: {
    data: [ ...sampleEntries ],
    currentEntry: {},
    count: 0
  },
  ui: {
    leftTrayOpen: false,
    autocomplete: {
      taxo: [],
      selected: ''
    }
  }
}
const entries = createReducer(initialState.entries, {
  [ActionTypes.GET_ENTRIES](state, { entries }) {
    return Object.assign({}, state, { data: entries })
  },
  [ActionTypes.GET_ENTRY](state, { entryID }) {
    return Object.assign({}, state, { entries })
  }
})

const ui = createReducer(initialState.ui, {
  [ActionTypes.SET_UI_OPTIONS](state, { options }) {
    return Object.assign({}, state.ui.options, { options })
  },
  [ActionTypes.AUTOCOMPLETE_TAXO](state, { response }) {
    return Object.assign({}, state.ui.autocomplete.taxo, { response })
  }
})

function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

const rootReducer = combineReducers({
  ui,
  entries,
  routing: routerReducer
})

export default rootReducer
