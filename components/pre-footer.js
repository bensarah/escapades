import PropTypes from 'prop-types'
import Link from 'next/link'
import Emoji from './emoji'
import posts from '../posts'
import palette from '../styles/palette'

const PreFooter = ({except}) => {
  var post = randomPost(posts, except)

  return (
    <div className='px18 py30 bg-gray-faint color-gray align-center'>
        <Link prefetch href={post.url}>
            <a className='cursor-pointer'>
              <Emoji name='smiley'/> Avide d’autres aventures&nbsp;? Lisez notre récit de {post.title}
            </a>
        </Link>
        <p className='quote pt6 txt-l'>
          « La dernière lignée d’arbres laisse apparaître un gigantesque pierrier et un névé. Le sommet est en haut... »
        </p>
      <style jsx>{`
        .quote {
          color: ${palette.brique};
          font-family: 'Bad Script';
        }

        a {
          color: ${palette.lavande};
        }

        a:hover {
          color: ${palette.lightenLavande};
        }
      `}</style>
    </div>
  )
}

function randomPost (posts, except) {
  var filtered = posts.filter(p => p.id !== except)
  if (filtered.length > 0) return filtered[Math.floor(Math.random() * filtered.length)]
  else return null
}

PreFooter.propTypes = {
  except: PropTypes.string
}

export default PreFooter
