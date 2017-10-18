import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Waypoint from './waypoint'
import palette from '../../styles/palette'

class Section extends Component {
  render () {
    return (
      <div className='section-container'>
        <div className='section align-middle flex-parent flex-parent--column flex-parent--center-main py30'>
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
        <style jsx>{`
          .section {
            min-height: 100vh;
          }

          hr {
            background-image: linear-gradient(to right, ${palette.bleuNuit}, ${palette.bleuNuit}, ${palette.lavande}, ${palette.bleuNuit}, ${palette.bleuNuit});
            margin: 0;
          }
        `}</style>
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
