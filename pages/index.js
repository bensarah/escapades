import Head from 'next/head'
import Page from '../layouts/main'
import PostInfo from '../components/post-info.js'
import posts from '../posts'

const Index = () => (
  <Page>
    <Head>
      <title>hike.climb.camp</title>
    </Head>

    <div className='home'>
      <div className='main'>
        <h1 className='my30 align-center'>hike.climb.camp</h1>
        <div className='posts'>
          {
            posts.map(({ id, date, title }) => (
              <PostInfo
                id={id}
                key={id}
                date={date}
                title={title}
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

      .home {
        max-width: 650px;
        margin: auto;
        font-size: 14px;
      }
    `}</style>
  </Page>
)

export default Index
