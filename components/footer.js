import PropTypes from 'prop-types'
import Emoji from './emoji'
import palette from '../styles/palette'
import Link from 'next/link'
import PreFooter from './pre-footer'

const Footer = ({ cta, quote, url, prefooter }) => (
  <div className='footer bottom w-full'>
    {
      prefooter
      ? <PreFooter cta={cta} quote={quote} url={url}/>
      : null
    }
    <div className='relative py30 px30 hmin120 azure'>
      <div className='flex-parent flex-parent--column flex-parent--row-ml flew-parent--wrap'>
        <a href='#' className='cursor-pointer pr18 pb6' onClick={() => window.scrollTo(window.pageYOffset, 0)}>
          <Emoji name='arrow-up'/><span className='pl6'>Haut de page</span>
        </a>

        <div className='pr18 pb6'>
          <Link prefetch href='/'>
            <a className='cursor-pointer'><Emoji name='house'/><span className='pl6'>Page d’accueil</span></a>
          </Link>
        </div>
        <div className='pr18 pb6'>
          <Link prefetch href='/about'>
            <a className='cursor-pointer'><Emoji name='couple'/><span className='pl6'>À propos</span></a>
          </Link>
        </div>
      </div>

      <div className='bottom pt30 color-lighten25'>
        <span>Copyright © {new Date().getFullYear()} Sarah & Benjamin</span><br/>
        <span>Made with <Emoji name='heart'/> in San Francisco and Paris</span>
      </div>
      <img className='none block-ml absolute bottom right pr36 pt30 h120' src={`/static/deco/footer-vector.svg`} draggable={false}/>
    </div>
    <style jsx>{`
      .footer {
        background-color: ${palette.bleuNuit};
      }

      .azure {
        color: ${palette.azure};
      }

      .footer .clickable:hover, .footer a:hover {
        color: ${palette.brightAzure};
      }
    `}</style>
  </div>
)

Footer.propTypes = {
  prefooter: PropTypes.bool,
  cta: PropTypes.string,
  quote: PropTypes.string,
  url: PropTypes.string
}

export default Footer
