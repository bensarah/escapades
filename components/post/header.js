import PropTypes from 'prop-types'
import Head from 'next/head'
import Link from 'next/link'
import TrailElevation from './trail-elevation'
import Logo from '../logo'
import LogoText from '../logo-text'
import {findTrail} from '../../helpers/trail-extractor'
import palette from '../../styles/palette'
import {hexToRGB} from '../../helpers/colors'

const Header = ({ img, title, subtitle, trail, home }) => {
  // Define the trail linestring - trail might be a feature collection.
  var trailLineString = findTrail(trail)

  return (
    <div
      className='header w-full display-block relative'
      style={{background: `url(${img}) no-repeat center center`, backgroundSize: 'cover'}}
    >
      <Head><title>{title}</title></Head>
      <div className='header absolute w-full z1'>
        <Link prefetch href='/'>
          <a className='cursor-pointer absolute z5 px18 py18 txt-m txt-bold' title='Retour à la page d’accueil'>
            <Logo style={{fill: '#ffffff', height: '36px'}} className='inline'/>
            <LogoText style={{fill: '#ffffff', height: '36px', marginBottom: '-7px'}} className='inline'/>
          </a>
        </Link>
      </div>
      <div className='align-l absolute bottom pb240-ml pb180 pl36 pl60-ml z2'>
        <h1 className='anton txt-shadow txt-xl color-white pb12'>{title.toUpperCase()}</h1>
        <h2 className='bad-script txt-shadow txt-l txt-xl-ml color-gray-light'>{subtitle}</h2>
      </div>
      <TrailElevation trail={trailLineString}/>
      <style jsx>{`
        .header {
          height: 100vh;
          z-index: 1;
        }

        .header:before {
          content:'';
          display:block;
          height:100%;
          width:100%;
          top:0;
          left:0;
          position:absolute;
          pointer-events:none;
          z-index: -1;
        }

        .header::before {
          background: linear-gradient(to top,${hexToRGB(palette.bleuNuit, 0.5)},${hexToRGB(palette.lavande, 0.1)});
        }

        svg {
          height: 100%;
          width: 100%;
        }

        @media screen and (min-width: 800px) {
          h1 {
            font-size: 54px;
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
