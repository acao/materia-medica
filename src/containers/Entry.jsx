import React from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import { Card, CardHeader, CardActions, CardText } from 'material-ui/Card'
import Chip from 'material-ui/Chip';
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
        <Flex style={{ marginTop: 80}} p={2} >
          <Box px={2} lg={8} md={6} sm={12} col={12}>
            {Object.keys(entry.sections).map((key) => {
              const section = entry.sections[key]
              return (
                <Card>
                  <CardHeader title={<h2 style={{ padding: 0, margin: 0 }}>{key}</h2>} />
                  <CardActions>
                    <div>{section.items.map((item) => <Chip>{item}</Chip>)}</div>
                  </CardActions>
                  <CardText>
                    {section.description}
                  </CardText>
                </Card>
              )
            })}
          </Box>
          <Box px={2} lg={4} md={6} sm={12} col={12} auto>
            <img
              style={{
                maxWidth: "100%",
                height: "auto",
                width: "auto\9"
              }}
               src={entry.img} />
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
