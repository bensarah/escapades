import { Component } from 'react'
import Head from 'next/head'
import Page from '../layouts/main'
import PostInfo from '../components/post-info.js'
import MapHeader from '../components/map-header.js'
import posts from '../posts'

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
        />
        <div className='home'>
          <div className='main'>
            <h1 className='my30 align-center animation-fade-in animation--speed-1'>hike.climb.camp</h1>
            <div className='posts flex-parent flex-parent--row'>
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
          }

          .posts {
            flex-wrap: wrap;
            justify-content: center;
          }

          .home {
            max-width: 650px;
            margin: auto;
            font-size: 14px;
            background-color: #fff;
          }
        `}</style>
      </Page>
    )
  }
}

export default Index
