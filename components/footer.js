import PropTypes from 'prop-types'
import Emoji from './emoji'
import palette from '../styles/palette'
import Link from 'next/link'
import posts from '../posts.js'

const Footer = ({ randomRando, except }) => (
  <div className='footer relative hmin120 py30 px30 color-gray-light'>
    <div className='w-full display-block'/>
      <div className='flex-parent flex-parent--column flex-parent--row-ml flew-parent--wrap'>
        <div className='clickable cursor-pointer color-white-on-hover pr18 pb6' onClick={() => window.scrollTo(window.pageYOffset, 0)}>
          <Emoji name='arrow-up'/><span className='pl6'>Haut de page</span>
        </div>

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

        {
          randomRando
          ? randomPostLink(posts, except)
          : null
        }
      </div>

      <div className='bottom pt30 color-lighten25'>
        <span>Copyright © {new Date().getFullYear()} Sarah & Benjamin</span><br/>
        <span>Made with <Emoji name='heart'/> in San Francisco and Paris</span>
      </div>

      <img className='none block-ml absolute bottom right pr36 pt30 h120' src={`/static/deco/footer-vector.svg`} draggable={false}></img>
    <style jsx global>{`
      .footer {
        background-color: ${palette.bleuNuit};
      }

      .footer .clickable:hover, .footer a:hover {
        color: white;
      }
    `}</style>
  </div>
)

function randomPost (posts, except) {
  var filtered = posts.filter(p => p.id !== except)
  if (filtered.length > 0) return filtered[Math.floor(Math.random() * filtered.length)]
  else return null
}

function randomPostLink (posts, except) {
  var post = randomPost(posts, except)
  if (post) {
    return (
      <div className='pr18 pb6'>
        <Link prefetch href={post.url}>
            <a className='cursor-pointer'>
              <Emoji name='smiley'/>
              <span className='pl6'>
                Avide d’autres aventures&nbsp;? Lisez notre récit de {post.title}
              </span>
            </a>
        </Link>
      </div>
    )
  } else return null
}

Footer.propTypes = {
  randomRando: PropTypes.bool,
  except: PropTypes.string
}

export default Footer
