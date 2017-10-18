import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Waypoint from 'react-waypoint'

class WP extends Component {
  render () {
    return <div>
      <Waypoint
        onEnter={() => {
          this.props.setContent(this.props.children)
          if (this.props.action) this.props.action()
        }}
        onLeave={() => { if (this.props.leaveAction) this.props.leaveAction() }}
        bottomOffset={this.props.bottomOffset || '40%'}
        topOffset={this.props.topOffset || '-10%'}
      />
    </div>
  }
}

WP.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  action: PropTypes.func,
  leaveAction: PropTypes.func,
  setContent: PropTypes.func,
  bottomOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  topOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default WP
