import { Component } from 'react'
import Head from 'next/head'
import Page from '../layouts/main'
import PostInfo from '../components/post-info'
import MapHeader from '../components/map-header'
import Footer from '../components/post/footer'
import P from '../components/post/paragraph'
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
          style={{background: `url(/static/DSC01901.jpg) no-repeat center center`, backgroundSize: 'cover'}}
        >
          <div className='align-l absolute bottom pb120-ml pb60 pl60 z2'>
            <Logo style={{fill: 'white', width: '150px'}} className='pl24 pb18 animation-fade-in animation--speed-1'/>
            <LogoText style={{fill: 'white', height: '80px'}} className='animation-fade-in animation--speed-1'/>
            <p className='subtext'>Notre blog de rando</p>
          </div>
        </div>
        <div id='main about-section' style={{backgroundColor: palette.grisClair}}>
          <p className='py30 align-center'>
            Nous avons décidé de vous faire partager nos escapades en randonnée dans ce site.
            <br />
            Vous pouvez retrouver l'index des différentes randos géographiquement et chronologiquement.
          </p>
        </div>
        <div id='geographical-section'>
          <div className='py24'>
            <div className='pl36 pb18'>
              <h2 className='pt12'>Des deux côtés de l'Atlantique</h2>
              <h3 className='pl6'>Nos randos par région</h3>
              <p className='pt12'>
                Voilà un aperçu de nos randos dans les différentes régions du globe.
                <br />
                Cliquez sur l'une d'entre elles pour en savoir plus.
              </p>
            </div>
          </div>
          <div className='px36 pb24'>
            <div className='h120 px12 py12 border round'> {/*US - California Rectangle*/}
              There, we'll talk about California adventures
            </div>
            <div className='h120 px12 py12 mt24 border round'> {/*France Rectangle*/}
              C'est ça La France
            </div>
          </div>
          <MapHeader
            highlight={this.state.highlight}
            dots={posts.map(post => post.coords)}
            logo={true}
          />
        </div>
        <div className='chronological-section'>
          <div className='py24'>
            <div className='pl36 pb18'>
              <h2 className='pt12'>Tant de sentiers parcourus depuis 2012</h2>
              <h3 className='pl6'>Nos randos par date</h3>
              <p className='pt12'>
                Vous pouvez retrouver ci-dessous les mêmes randonnées que dans la précédente section, cette fois-ci ordonnées chronologiquement.
                <br />
                Cliquez sur une randonnées pour en lire l'histoire.
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
      <Footer/>

        <style jsx>{`
          object * {
            fill: ${palette.tournesol}
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

          svg {
            height: 100%;
            width: 100%;
          }

          .subtext {
            font-size: 18px;
            color: ${palette.grisClair};
            font-family: 'Bad Script';
            text-shadow: 1px 1px 3px #303240;
          }

          @media screen and (min-width: 800px) {
            .subtext {
              font-size: 32px;
            }
          }

          #geographical-section {
            margin: auto;
            background-color: ${palette.bleuNuit};
            color: ${palette.grisClair};
          }

          #chronological-section {
            margin: auto;
            background-color: 'white';
            color: ${palette.bleuNuit};
          }

          h2 {
            font-family: 'Open Sans';
            font-size: 30px;
            font-weight: bold;
            color: ${palette.lavande};
          }

          h3 {
            font-size: 16px;
            color: ${palette.lavande};
            font-family: 'Bad Script';
          }

          p {
            font-size: 14px;
          }

        `}</style>
      </Page>
    )
  }
}

export default Index
