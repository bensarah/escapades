import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Waypoint from './waypoint'

class Section extends Component {
  render () {
    return (
      <div className='section-container'>
        <div className='full-height align-middle flex-parent flex-parent--column flex-parent--center-main py30'>
          <Waypoint
            action={this.props.action}
            leaveAction={this.props.leaveAction}
            setContent={this.props.setContent}
          >
            {this.props.sidebarContent}
          </Waypoint>
          {this.props.children}
        </div>
        {
          this.props.last
          ? null
          : <hr/>
        }
      </div>
    )
  }

  componentDidMount () {
    if (this.props.sidebarContent && this.props.sidebarContent.props && this.props.sidebarContent.props.src) {
      window.addEventListener('load', () => {
        var i = new Image()
        i.src = this.props.sidebarContent.props.src // preload image
      })
    }
  }
}

Section.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  action: PropTypes.func,
  leaveAction: PropTypes.func,
  sidebarContent: PropTypes.object,
  setContent: PropTypes.func,
  last: PropTypes.bool
}

export default Section
