import PropTypes from 'prop-types'
import Head from 'next/head'
import Link from 'next/link'
import TrailElevation from './trail-elevation'
import palette from '../../styles/palette'

const Header = ({ img, title, subtitle, trail, home }) => {
  // Define the trail linestring - trail might be a feature collection.
  var trailLineString
  if (trail.type === 'Feature') trailLineString = trail
  else if (trail.type === 'FeatureCollection') {
    trailLineString = trail.features.filter(t => t.properties.type === 'trail')[0]
  }

  return (
    <div
      className='header w-full display-block relative'
      style={{background: `url(${img}) no-repeat center center`, backgroundSize: 'cover'}}
    >
      <Head><title>{title}</title></Head>
      <div className='header absolute w-full'>
        {
          home
          ? <Link href='/'><a className='link absolute'>hike.climb.camp</a></Link>
          : null
        }
        <svg>
          <defs>
            <linearGradient id='gradient' x1='0%' y1='100%' x2='100%' y2='0%'>
              <stop offset='0%' style={{stopColor: palette.brique, stopOpacity: 0.5}} />
              <stop offset='100%' style={{stopColor: palette.tournesol, stopOpacity: 0.1}}/>
            </linearGradient>
          </defs>
          <rect fill='url(#gradient)' width='100%' height='100%'/>
        </svg>
      </div>
      <div className='align-l absolute bottom pb300 pl60'>
        <h1>{title.toUpperCase()}</h1>
        <h2>{subtitle}</h2>
      </div>
      <TrailElevation trail={trailLineString}/>
      <style jsx>{`
        .header {
          height: 100vh;
        }

        svg {
          height: 100%;
          width: 100%;
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
