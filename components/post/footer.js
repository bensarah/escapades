import PropTypes from 'prop-types'
import Emoji from './emoji'
import palette from '../../styles/palette'
import Link from 'next/link'

const Footer = ({ children }) => (
  <div className='footer relative hmin120 py30 px30'>
    <div className='w-full display-block'/>
      <div>
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

      <img className='none block-ml absolute bottom right pr36 pt30 h120' src={`/static/deco/footer-vector.svg`} draggable={false}></img>
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
