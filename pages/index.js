import { Component } from 'react'
import Head from 'next/head'
import Page from '../layouts/main'
import PostInfo from '../components/post-info'
import MapHeader from '../components/map-header'
import Logo from '../components/logo'
import posts from '../posts'
import palette from '../styles/palette'

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
          <title>escapades.io</title>
        </Head>
        <MapHeader
          highlight={this.state.highlight}
          dots={posts.map(post => post.coords)}
          logo={true}
        />
        <div className='home'>
          <div className='main pb60 pt30'>
            <Logo style={{fill: palette.tournesol, width: '60px'}} className='mx-auto w60 animation-fade-in animation--speed-1'/>
            <h1 className='align-center animation-fade-in animation--speed-1'>escapades.io</h1>
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

        <style jsx>{`
          h1 {
            font-size: 36px;
            font-family: 'Bad Script';
            color: ${palette.tournesol}
          }

          object * {
            fill: ${palette.tournesol}
          }

          .home {
            margin: auto;
            font-size: 14px;
            background-color: ${palette.bleuNuit};
          }
        `}</style>
      </Page>
    )
  }
}

export default Index
