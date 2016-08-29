import React, { Component } from 'react'
import { connect } from 'react-redux'

import TopNav from '../components/TopNav'
import ActionButton from '../components/ActionButton'

class Components extends Component {
  constructor(props, state) {
    super(props, state)
  }

  handleToggle = () => this.setState({ openLeft: !this.state.open })

  render() {
    return (
      <div style={{ paddingTop: 60 }}>
        <TopNav prevRoute={"/"} title="Components" />
        <ActionButton route="/review-data" />
      </div>
    )
  }
}

const mapStateToProps = (state)=> {
  return {
    ui: state.ui
  }
}

export default connect(mapStateToProps)(Components)
