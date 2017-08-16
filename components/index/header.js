import Logo from '../logo'
import LogoText from '../logo-text'
import {hexToRGB} from '../../helpers/colors'
import palette from '../../styles/palette'

const IndexHeader = () => (
  <div
    className='header w-full display-block relative'
    style={{background: `url(/static/header-background.jpg) no-repeat center center`, backgroundSize: 'cover'}}
  >
    <div className='align-l absolute bottom pb120-ml pb60 pl60 z2'>
      <Logo style={{fill: 'white', width: '150px', filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))'}} className='pb18 align-center animation-fade-in animation--speed-1'/>
      <LogoText style={{fill: 'white', height: '80px', filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))'}} className='align-center animation-fade-in animation--speed-1'/>
      <p className='subtext txt-xl-ml txt-l align-center'>Notre blog de rando</p>
    </div>
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

      .subtext {
        color: ${palette.grisClair};
        font-family: 'Bad Script';
        text-shadow: 1px 1px 3px ${palette.bleuNuit};
      }
    `}</style>
  </div>
)

export default IndexHeader
