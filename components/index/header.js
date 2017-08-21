import PropTypes from 'prop-types'
import Logo from '../logo'
import LogoText from '../logo-text'
import {hexToRGB} from '../../helpers/colors'
import palette from '../../styles/palette'

const IndexHeader = ({background}) => (
  <div
    className='header w-full display-block relative'
    style={{background: `url(${background}) no-repeat center center`, backgroundSize: 'cover'}}
  >
      <div className='logo-container align-center absolute bottom pl60 z2 animation-fade-in animation--speed-1 wmin120 wmin180-ml' title='Retour à la page d&#39;accueil'>
      <Logo style={{fill: 'white', filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))'}} className='w-full pb18 px30'/>
      <LogoText style={{fill: 'white', filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))'}} className='w-full'/>
      <p className='bad-script txt-shadow color-gray-light txt-xl-ml txt-l'>Notre blog de rando</p>
    </div>
    <style jsx>{`
      .logo-container {
        padding-bottom: 25vh;
      }

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
    `}</style>
  </div>
)

IndexHeader.propTypes = {
  background: PropTypes.string
}

export default IndexHeader
