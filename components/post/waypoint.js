import PropTypes from 'prop-types'
import {Component} from 'react'
import Waypoint from 'react-waypoint'

class WP extends Component {
  render () {
    return <Waypoint
      onEnter={() => this.props.setContent('enter')}
      onLeave={() => this.props.setContent('leave')}
    />
  }
}

WP.propTypes = {
  id: PropTypes.string,
  element: PropTypes.string,
  setContent: PropTypes.func
}

export default WP
