import React from 'react'
import { connect } from 'react-redux'
import AutoComplete from 'material-ui/AutoComplete'

import { autocompleteTaxo } from '../../actions'

class TaxoName extends React.Component {
  constructor(props) {
    super(props)
    this.updateInput = this.updateInput.bind(this)
  }
  updateInput(searchText) {
    this.props.dispatch(autocompleteTaxo(searchText))
  }
  render() {
    return(
      <AutoComplete onUpdateInput={this.updateInput} dataSource={this.props.options} />
    )
  }
}
const mapStateToProps = (state) => {
  return {
    options: state.ui.autocomplete.taxo
  }
}
export default connect(mapStateToProps)(TaxoName)
