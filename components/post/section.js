import PropTypes from 'prop-types'
import {Component} from 'react'
import Waypoint from './waypoint'

class Section extends Component {
  render () {
    return (
      <div>
        <div className='section align-middle flex-parent flex-parent--column flex-parent--center-main'>

          <Waypoint
            action={this.props.action}
            setContent={this.props.setContent}
          >
            {this.props.sidebarContent}
          </Waypoint>
          {this.props.children}
          <style jsx>{`
            .section {
              min-height: 100vh;
            }
          `}</style>
        </div>
        <hr className='txt-hr'/>
      </div>
    )
  }
}

Section.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  action: PropTypes.func,
  sidebarContent: PropTypes.obj,
  setContent: PropTypes.func
}

export default Section
