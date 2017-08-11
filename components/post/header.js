import PropTypes from 'prop-types'
import Head from 'next/head'
import Link from 'next/link'
import TrailElevation from './trail-elevation'
import Logo from '../logo'
import {findTrail} from '../../helpers/trail-extractor'
import palette from '../../styles/palette'

const Header = ({ img, title, subtitle, trail, home }) => {
  // Define the trail linestring - trail might be a feature collection.
  var trailLineString = findTrail(trail)

  return (
    <div
      className='header w-full display-block relative'
      style={{background: `url(${img}) no-repeat center center`, backgroundSize: 'cover'}}
    >
      <Head><title>{title}</title></Head>
      <div className='header absolute w-full'>
        <Link href='/'>
          <a className='home cursor-pointer absolute z5 px12 py12'>
            <Logo style={{fill: '#ffffff', height: '30px'}} className='inline pr12'/>
            escapades.io
          </a>
        </Link>
        <svg className='z1'>
          <defs>
            <linearGradient id='gradient' x1='50%' y1='0%' x2='50%' y2='100%'>
              <stop offset='0%' style={{stopColor: palette.lavande, stopOpacity: 1}} />
              <stop offset='100%' style={{stopColor: palette.bleuNuit, stopOpacity: 1}}/>
            </linearGradient>

          </defs>
          <rect fill='url(#gradient)' width='100%' height='100%' style={{opacity: 0.75}}/>

        </svg>
      </div>
      <div className='align-l absolute bottom pb240 pl60'>
        <h1>{title.toUpperCase()}</h1>
        <h2>{subtitle}</h2>
      </div>
      <TrailElevation trail={trailLineString}/>
      <style jsx>{`
        .home {
          color: #fff;
          font-family: 'Bad Script';
          font-weight: bold;
          font-size: 16px;
        }

        .header {
          height: 100vh;
        }

        svg {
          height: 100%;
          width: 100%;
        }

        h1 {
          font-size: 30px;
          color: white;
          font-family: 'Anton', sans-serif;
          text-shadow: 1px 1px 3px #303240;
        }

        h2 {
          font-size: 18px;
          color: ${palette.grisClair};
          font-family: 'Bad Script';
          text-shadow: 1px 1px 3px #303240;
        }

        @media screen and (min-width: 800px) {
          h1 {
            font-size: 54px;
          }

          h2 {
            font-size: 32px;
          }
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
