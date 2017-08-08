import { Component } from 'react'
import Head from 'next/head'
import Page from '../layouts/main'
import PostInfo from '../components/post-info.js'
import MapHeader from '../components/map-header.js'
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
          <title>hike.climb.camp</title>
        </Head>
        <MapHeader
          highlight={this.state.highlight}
          dots={posts.map(post => post.coords)}
        />
        <div className='home'>
          <div className='main'>
            <h1 className='py30 align-center animation-fade-in animation--speed-1'>hike.climb.camp</h1>
            <div className='flex-parent flex-parent--row flex-parent--center-main flex-parent--wrap'>
              {
                posts.map(({ id, date, title, coords, header }) => (
                  <PostInfo
                    id={id}
                    key={id}
                    date={date}
                    title={title}
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
            color: ${palette.tournesol}
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
