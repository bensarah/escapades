import PropTypes from 'prop-types'
import {Component} from 'react'
import Waypoint from 'react-waypoint'

class WP extends Component {
  render () {
    return <Waypoint
      onEnter={() => {
        if (this.props.children) this.props.setContent(this.props.children)
        if (this.props.action) this.props.action()
      }}
      bottomOffset={this.props.bottomOffset || '50%'}
      topOffset={this.props.topOffset || 0}
    />
  }
}

WP.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  action: PropTypes.func,
  setContent: PropTypes.func,
  bottomOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  topOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default WP
