import PropTypes from 'prop-types'
import {Component} from 'react'
import Waypoint from './waypoint'
import palette from '../../styles/palette'

class Section extends Component {
  render () {
    return (
      <div className='section-container'>
        <div className='section align-middle flex-parent flex-parent--column flex-parent--center-main py30'>
          <Waypoint
            action={this.props.action}
            setContent={this.props.setContent}
          >
            {this.props.sidebarContent}
          </Waypoint>
          {this.props.children}
        </div>
        <hr className='txt-hr' style={{background: palette.lavande}}/>
        <style jsx>{`
          .section {
            min-height: 100vh;
          }
          hr {
            margin: 0;
          }
        `}</style>
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
