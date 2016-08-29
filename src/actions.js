import { autocompletePlants } from './utils/sparql'

const debug = require('debug')('actions')

export function getEntries(entries) {
  return {
    type: 'GET_ENTRIES',
    entries
  }
}

export function setTaxoResults(results) {
  return {
    type: 'AUTOCOMPLETE_TAXO',
    results
  }
}

export function autocompleteTaxo(searchText) {
  return (dispatch) => {
    const request = autocompletePlants(searchText)
    request
      .then((res)=>{
        console.log(res)
        dispatch(setTaxoResults(res))
      })
      .catch((err)=>{
        console.log(err)
        debug(err)
      })
  }
}

export function setUIOptions(options) {
  return {
    type: 'SET_UI_OPTIONS',
    options
  }
}
