import {Component} from 'react'
import Head from 'next/head'
import Page from '../layouts/main'
import palette from '../styles/palette'
import Footer from '../components/footer'
import Emoji from '../components/emoji'
import Logo from '../components/logo'
import LogoText from '../components/logo-text'
import Link from 'next/link'
import Isvg from 'react-inlinesvg'

class About extends Component {
  render () {
    return (
      <Page>
        <Head>
          <title>escapades - À propos</title>
        </Head>
        <div className='content'>
          <Link prefetch href='/'>
            <div className='cursor-pointer z5 mx18 my18 txt-m txt-bold'>
              <Logo style={{fill: '#ffffff', height: '36px'}} className='inline'/>
              <LogoText style={{fill: '#ffffff', height: '36px', marginBottom: '-7px'}} className='inline'/>
            </div>
          </Link>
          <div className='px18 py18 flex-parent flex-parent--center-cross flex-parent--column flex-parent--row-ml flex-parent--stretch-cross-ml'>
            <div className='inline w360 ' style={{
              background: `url(/static/about/nous2.jpg) no-repeat center center`,
              backgroundSize: 'cover'
            }}></div>
            <div className='px36-ml py0-ml py36 w360 w-auto-ml txt-l-ml'>
              <h2 className='txt-xl txt-bold'>Hello !</h2>
              <br/>
              <p>
                On adore randonner : être coupés du monde <Emoji name='no-mobile-phones'/> et voir des paysages magnifiques <Emoji name='sunrise-over-mountains'/>.
                <br />
                <Logo style={{fill: '#ffffff', height: '16px'}} className='inline'/> <LogoText style={{fill: '#ffffff', height: '36px', marginBottom: '-14px'}} className='inline'/> est né de la volonté de partager joliment nos aventures et photos.
              </p>
              <br/>
              <p>
                Une question ? <a href='mailto:NotreEmailICI'>create_email@escapades.io</a>
              </p>
              <br/>
              <div>
                <div>
                  <p className='txt-m align-middle'>
                    <Isvg className='icon drop-shadow w24 h24 inline-block' src={`/static/icons/code.svg`} title='Tech & Code'></Isvg> Site écrit en <a href='https://facebook.github.io/react/'>React</a> + <a href='https://github.com/zeit/next.js/'>next.js</a>,
                    et déployé avec <a href='https://zeit.co/now'>now.sh</a>.
                  </p>
                </div>
                <p className='txt-m'>
                  <Isvg className='icon drop-shadow w24 h24 inline-block' src={`/static/icons/palette.svg`} title='Web Design'></Isvg> Nous sommes autodidactes en web design & UX/UI donc <a href='mailto:NotreEmailICI'>avides de vos conseils</a>.
                </p>
                <p className='txt-m'>
                  <Isvg className='icon drop-shadow w24 h24 inline-block' src={`/static/icons/hiker.svg`} title='Chers amis randonneurs'></Isvg> Des <a href='mailto:NotreEmailICI'>recommandations</a> pour notre prochaine rando ?
                </p>
              <br/>
              </div>
              <div className='align-r'>
                <span className='bad pr6'>
                  Sarah
                  <a href='https://github.com/sarahmamy'><Isvg className={this.styles.icon} src={`/static/icons/github.svg`}></Isvg></a>
                  <a href='https://instagram.com/sarah_mamy'><Isvg className={this.styles.icon} src={`/static/icons/instagram.svg`}></Isvg></a>
                </span>
                &
                <span className='bad pl6'>
                   Benjamin
                  <a href='https://github.com/benjamintd'><Isvg className={this.styles.icon} src={`/static/icons/github.svg`}></Isvg></a>
                  <a href='https://instagram.com/_benjamintd'><Isvg className={this.styles.icon} src={`/static/icons/instagram.svg`}></Isvg></a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <Footer randomRando={true}/>
        <style jsx>{`
          .content {
            min-height: 100vh;
          }

          .icon svg {
            stroke: white;
          }

          p {
            padding: 6px 0 6px 0;
          }

          .monospace {
            font-family: monospace;
          }

          .bad {
            font-family: 'Bad Script';
          }

          a {
            color: ${palette.lavande}
          }

          a:hover {
            color: ${palette.lightenLavande}
          }
        `}</style>
        <style jsx global>{`
          html, body {
            background-color: ${palette.bleuNuit};
            color: ${palette.grisClair};
            height: 100%;
          }
        `}</style>
      </Page>
    )
  }

  get styles () {
    return {
      icon: 'icon w18 h18 inline-block ml6 pb-neg12'
    }
  }
}

export default About
