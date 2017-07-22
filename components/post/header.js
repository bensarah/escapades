import PropTypes from 'prop-types'
import Head from 'next/head'
import Link from 'next/link'

const Header = ({ img, title, home }) => {
  return (
    <div
      className='header hmin300 w-full display-block relative'
      style={{background: `url(${img}) no-repeat center center`, backgroundSize: 'cover'}}
    >
      <Head><title>{title}</title></Head>
      <h1 className='absolute bottom left right align-center py24'>{title.toUpperCase()}</h1>
      {
        home
        ? <Link href='/'><a className='link'>hike.climb.camp</a></Link>
        : null
      }
      <style jsx>{`
        h1 {
          font-size: 36px;
          color: white;
          font-family: 'Anton', sans-serif;
          text-shadow: 1px 1px 3px #303240;
        }
      `}</style>
    </div>
  )
}

Header.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  home: PropTypes.bool
}

export default Header
