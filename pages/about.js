import {Component} from 'react'
import Head from 'next/head'
import Page from '../layouts/main'
import palette from '../styles/palette'
import Footer from '../components/footer'
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
            <div className='inline w360 h360' style={{
              background: `url(/static/about/nous.jpg) no-repeat center center`,
              backgroundSize: 'cover'
            }}></div>
            <div className='px36-ml py0-ml py36 w360 w-auto-ml txt-l-ml'>
              <p>
                On aime être perdus dans la nature, sans téléphone ni wifi.
              </p>
              <p>
                Parfois on aime le aussi partager nos histoires sur internet, donc on a construit ce blog avec nos petits mains.
              </p>
              <p>
                Amis développeurs, ce site est écrit en <a href='https://facebook.github.io/react/'>React</a> + <a href='https://github.com/zeit/next.js/'>next.js</a>,
                et déployé avec <a href='https://zeit.co/now'>now.sh</a>.
              </p>
              <p>
                Amis designers, nous sommes autodidactes donc vos conseils sont les bienvenus.
              </p>
              <p>
                Amis randonneurs, où nous conseillez-vous d'aller&nbsp;?
              </p>
              <br/>
              <p className='monospace'>
                S:
                <a href='https://github.com/sarahmamy'><Isvg className={this.styles.icon} src={`/static/icons/github.svg`}></Isvg></a>
                <a href='https://instagram.com/sarah_mamy'><Isvg className={this.styles.icon} src={`/static/icons/instagram.svg`}></Isvg></a>
                <a href='mailto:mamysrh@gmail.com'><Isvg className={this.styles.icon} src={`/static/icons/email.svg`}></Isvg></a>
                <br className='py12'/>
              </p>
              <p className='monospace'>
                B:
                <a href='https://github.com/benjamintd'><Isvg className={this.styles.icon} src={`/static/icons/github.svg`}></Isvg></a>
                <a href='https://instagram.com/_benjamintd'><Isvg className={this.styles.icon} src={`/static/icons/instagram.svg`}></Isvg></a>
                <a href='mailto:benjamin.tdm@gmail.com'><Isvg className={this.styles.icon} src={`/static/icons/email.svg`}></Isvg></a>
              </p>
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
            color: white;
            height: 100%;
          }
        `}</style>
      </Page>
    )
  }

  get styles () {
    return {
      icon: 'icon w24 h24 inline-block mx6 pb-neg12'
    }
  }
}

export default About
