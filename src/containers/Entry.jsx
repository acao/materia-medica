import React from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import { Card, CardTitle, CardText } from 'material-ui/Card'

import { Flex, Box } from 'reflexbox'

import TopNav from '../components/TopNav'
import ActionButton from '../components/ActionButton'

class Entry extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { entry } = this.props
    return (
      <div>
        <TopNav prevRoute={"/"} title={entry.title} />
        <Flex p={2} >
          <Box px={2} col={8}>
            {Object.keys(entry.sections).map((key) => {
              const section = entry.sections[key]
              return (
                <Card>
                  <CardTitle>{key}</CardTitle>
                  <CardText>
                      <p>{section.items.map(item => <span>{item}</span>)}</p>
                      <p>{section.description}</p>
                  </CardText>
                </Card>
              )
            })}
          </Box>
          <Box px={2} col={4} auto>
            <img style={{height: 400}} src={entry.img} />
          </Box>
        </Flex>
      </div>

    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    entry: state.entries.data[props.params.entryID]
  }
}

export default connect(mapStateToProps)(Entry)
