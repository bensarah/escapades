import PropTypes from 'prop-types'
import Head from 'next/head'
import Link from 'next/link'
import TrailElevation from './trail-elevation'
import palette from '../../styles/palette'

const Header = ({ img, title, subtitle, trail, home }) => {
  return (
    <div
      className='header w-full display-block relative'
      style={{background: `url(${img}) no-repeat center center`, backgroundSize: 'cover'}}
    >
      <Head><title>{title}</title></Head>
      {
        home
        ? <Link href='/'><a className='link'>hike.climb.camp</a></Link>
        : null
      }
      <div className='align-l absolute bottom pb300 pl60'>
        <h1>{title.toUpperCase()}</h1>
        <h2>{subtitle}</h2>
      </div>
      <TrailElevation trail={trail}/>
      <style jsx>{`
        .header {
          height: 100vh;
          background-color: rgba(1, 1, 1, 0.8);
        }

        h1 {
          font-size: 54px;
          color: white;
          font-family: 'Anton', sans-serif;
          text-shadow: 1px 1px 3px #303240;
        }

        h2 {
          font-size: 32px;
          color: ${palette.grisClair};
          font-family: 'Bad Script', serif;
          text-shadow: 1px 1px 3px #303240;
        }
      `}</style>
    </div>
  )
}

Header.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  home: PropTypes.bool,
  trail: PropTypes.object
}

export default Header
