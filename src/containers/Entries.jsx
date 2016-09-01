import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { GridList, GridTile } from 'material-ui/GridList'

import TopNav from '../components/TopNav'
import ActionButton from '../components/ActionButton'
import { getEntries } from "../actions"

class Entries extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    //this.props.dispatch(getEntries([]))
  }
  render() {
    const { entries } = this.props
    return(
      <div style={{ paddingTop: 60 }}>
        <TopNav prevRoute={"/"} title="Entries" />
          <GridList
            cols={3}
            cellHeight={300}
          >
          {entries.map((entry) => (
            <Link key={entry.entryID} to={`/entries/${entry.entryID}`}>
              <GridTile
                key={entry.entryID}
                title={entry.title}
              >
                <img src={entry.img} />
              </GridTile>
            </Link>
          ))}
        </GridList>
      </div>
    )
  }

}

const mapStateToProps = (state)=> {
  return {
    entries: state.entries.data
  }
}

export default connect(mapStateToProps)(Entries)
