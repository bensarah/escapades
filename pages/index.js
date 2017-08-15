import { Component } from 'react'
import Head from 'next/head'
import Page from '../layouts/main'
import PostInfo from '../components/post-info'
import MapHeader from '../components/map-header'
import Footer from '../components/post/footer'
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
            <h2>Notre blog de rando</h2>
          </div>
        </div>
        <MapHeader
          highlight={this.state.highlight}
          dots={posts.map(post => post.coords)}
          logo={true}
        />
        <div className='home'>
          <div className='main pb60 pt30'>
            <Logo style={{fill: palette.tournesol, width: '60px'}} className='mx-auto w60 animation-fade-in animation--speed-1'/>
            <LogoText style={{fill: palette.tournesol, height: '60px'}} className='align-center animation-fade-in animation--speed-1'/>
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

          .home {
            margin: auto;
            font-size: 14px;
            background-color: ${palette.bleuNuit};
            color: #fff;
            font-family: 'Open Sans';
            font-size: 16px;
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

          h2 {
            font-size: 18px;
            color: ${palette.grisClair};
            font-family: 'Bad Script';
            text-shadow: 1px 1px 3px #303240;
          }

          @media screen and (min-width: 800px) {
            h2 {
              font-size: 32px;
            }
          }
        `}</style>
      </Page>
    )
  }
}

export default Index
