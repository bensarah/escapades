import PropTypes from 'prop-types'
import Emoji from './emoji'
import palette from '../../styles/palette'
import Link from 'next/link'
import Isvg from 'react-inlinesvg'

const Footer = ({ children }) => (
  <div className='footer'>
    <div className='w-full display-block'/>
      <div className='flex-parent'>
        <div className='hmin120 py36 px30 flex-child flex-child--grow'>
          <span className='clickable cursor-pointer' onClick={() => window.scrollTo(window.pageYOffset, 0)}>
            <Emoji name='arrow-up'/><span className='pl6'>Haut de page</span>
          </span>
          <span className='px18'/>
          <Link href='/'>
            <a className='cursor-pointer'><Emoji name='house'/><span className='pl6'>Page d’accueil</span></a>
          </Link>
          <span className='px18'/>
          <Link href='/about'>
            <a className='cursor-pointer'><Emoji name='couple'/><span className='pl6'>À propos</span></a>
          </Link>
          <br/>
          <div className='bottom pt30 color-lighten25'>
            <span>Copyright © {new Date().getFullYear()} Sarah & Benjamin</span><br/>
            <span>Made with <Emoji name='heart'/> in San Francisco and Paris</span>
          </div>
        </div>
        <div className='flex-child flex-child--no-shrink mt36'>
          <Isvg className='pr24' src={`/static/deco/footer-vector.svg`}></Isvg>
        </div>
      </div>

    <style jsx>{`
      .footer {
        background-color: ${palette.bleuNuit};
        color: ${palette.grisClair};
      }

      .clickable:hover, a:hover {
        color: white;
      }
    `}</style>
  </div>
)

Footer.propTypes = {
  children: PropTypes.string
}

export default Footer
