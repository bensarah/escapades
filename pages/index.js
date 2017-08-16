import { Component } from 'react'
import Head from 'next/head'
import Page from '../layouts/main'
import PostInfo from '../components/post-info'
import MapHighlights from '../components/map-highlights'
import Footer from '../components/post/footer'
import Emoji from '../components/post/emoji'
import Logo from '../components/logo'
import LogoText from '../components/logo-text'
import posts from '../posts'
import palette from '../styles/palette'
import {hexToRGB} from '../helpers/colors'

class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      highlight: null
    }
  }

  render () {
    return (
      <Page>
        <Head>
          <title>escapades</title>
        </Head>
        <div
          className='header w-full display-block relative'
          style={{background: `url(/static/header-background.jpg) no-repeat center center`, backgroundSize: 'cover'}}
        >
          <div className='align-l absolute bottom pb120-ml pb60 pl60 z2'>
            <Logo style={{fill: 'white', width: '150px', filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))'}} className='pb18 align-center animation-fade-in animation--speed-1'/>
            <LogoText style={{fill: 'white', height: '80px', filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))'}} className='align-center animation-fade-in animation--speed-1'/>
            <p className='subtext align-center'>Notre blog de rando</p>
          </div>
        </div>

        <div className='main'>
          <div>
            <p className='intro py30 align-center'>
              Nous avons décidé de vous faire partager nos escapades en randonnée sur ce site.
              <br />
              Vous pouvez retrouver l’index des différentes randos <a href='#geographical-section'>géographiquement</a> et <a href='#chronological-section'>chronologiquement</a>.
            </p>
          </div>

          <hr className='txt-hr'/>

          <div id='geographical-section'>
            <div className='py24'>
              <div className='pl36 pb18'>
                <h2 className='pt12'>Des deux côtés de l’Atlantique</h2>
                <p className='pt12'>
                  Voilà un aperçu de nos randos dans les différentes régions du globe.
                  <br />
                  Cliquez sur l’une d’entre elles pour en savoir plus.
                </p>
              </div>
            </div>
            <div className='px36 pb24'>
              <div className='px12 py12 border border--lighten75 round display-block flex-parent flex-parent--row'> {/* US - California Rectangle */}
                <div className='flex-child--grow'>
                  <h3><Emoji name='us'/> Aux US, en Californie</h3>
                  <br />
                  <span className='pr12'>🌄 <a href='/2017/kings-canyon'>Mitchell Peak</a></span>
                  <span className='pr12'>🌄 <a href='/2017/kings-canyon'>Mount Dana</a></span>
                </div>
                <div className='flex-child'>
                  <MapHighlights
                    highlight={this.state.highlight}
                    dots={posts.map(post => post.coords)}
                    logo={true}
                  />
                </div>
              </div>
              <div className='h120 px12 py12 mt24 border round'> {/* France Rectangle */}
                C’est ça La France
              </div>
            </div>
          </div>

          <hr className='txt-hr'/>

          <div id='chronological-section'>
            <div className='py24'>
              <div className='pl36 pb18'>
                <h2 className='pt12'>Tant de sentiers parcourus depuis 2012</h2>
                <p className='pt12'>
                  Vous pouvez retrouver ci-dessous les mêmes randonnées que dans la précédente section, cette fois-ci ordonnées chronologiquement.
                  <br />
                  Cliquez sur une randonnées pour en lire l’histoire.
                </p>
              </div>
              <div className='pt30 flex-parent flex-parent--row flex-parent--center-main flex-parent--wrap'>
                {
                  posts.map(({ id, date, title, subtitle, coords, header }) => (
                    <PostInfo
                      id={id}
                      key={id}
                      date={date}
                      title={title}
                      subtitle={subtitle}
                      header={header}
                      highlight={() => this.setState({highlight: coords})}
                    />
                  ))
                }
              </div>
            </div>
          </div>

          <div className='bg-gray-faint color-gray'>
            <p className='pt30 align-center'>
              Vous hésitez entre plusieurs randos ?
              <br />
              Commencez par l’ascension de <a href='/2017/kings-canyon'>Mitchell Peak</a>.
            </p>
            <p className='quote pt6 pb30 align-center'>
              « La dernière lignée d’arbres laisse apparaître un gigantesque pierrier et un névé. Le sommet est en haut... »
            </p>
          </div>
        </div>
      <Footer/>

        <style jsx>{`
          .main {
            background-color: ${palette.bleuNuit};
            color: white;
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

          hr {
            background: ${palette.lavande}
            margin-left: 30px;
            margin-right: 30px;
          }

          svg {
            height: 100%;
            width: 100%;
          }

          .subtext {
            font-size: 18px;
            color: ${palette.grisClair};
            font-family: 'Bad Script';
            text-shadow: 1px 1px 3px ${palette.bleuNuit};
          }

          @media screen and (min-width: 800px) {
            .subtext {
              font-size: 32px;
            }
          }

          h2, h3 {
            font-family: 'Open Sans';
            font-weight: bold;
            color: ${palette.tournesol};
          }

          h2 {
            font-size: 30px;
          }

          h3, .quote, .intro {
            font-size: 20px;
          }

          p {
            font-size: 14px;
          }

          .quote {
            color: ${palette.brique};
            font-family: 'Bad Script';
          }

          a {
            color: ${palette.lavande}
          }

          a:hover {
            color: ${palette.lightenLavande}
          }
        `}</style>
      </Page>
    )
  }
}

export default Index
