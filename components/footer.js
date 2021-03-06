import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Emoji from './emoji'
import PreFooter from './pre-footer'

class Footer extends Component {
  render () {
    return (
      <div className='footer bottom w-full bg-bleu-nuit'>
        {
          this.props.prefooter
          ? <PreFooter cta={this.props.cta} quote={this.props.quote} url={this.props.url}/>
          : null
        }
        <div className='relative py30 px30 hmin120 lavande'>
          <div className='flex-parent flex-parent--column flex-parent--row-ml flew-parent--wrap'>
            <a className='cursor-pointer pr18 pb6' onClick={() => window.scroll({
              top: 0,
              left: 0,
              behavior: 'smooth'
            })}>
              <Emoji name='arrow-up'/><span className='pl6'>Haut de page</span>
            </a>

            <div className='pr18 pb6'>
              <a href='/' className='cursor-pointer'><Emoji name='house'/><span className='pl6'>Page d’accueil</span></a>
            </div>
            <div className='pr18 pb6'>
              <a href='/about' className='cursor-pointer'><Emoji name='couple'/><span className='pl6'>À propos</span></a>
            </div>
          </div>

          <div className='bottom pt30 color-lighten25'>
            <span>Copyright © {new Date().getFullYear()} Sarah & Benjamin</span><br/>
            <span>Made with <Emoji name='heart'/> in San Francisco and Paris</span>
          </div>
          <img className='none block-ml absolute bottom right pr36 pt30 h120' src={`/static/deco/footer-vector.svg`} draggable={false}/>
        </div>
      </div>
    )
  }

  componentDidMount () {
    require('smoothscroll-polyfill').polyfill()
  }
}

Footer.propTypes = {
  prefooter: PropTypes.bool,
  cta: PropTypes.string,
  quote: PropTypes.string,
  url: PropTypes.string
}

export default Footer
