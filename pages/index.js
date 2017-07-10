import Page from '../layouts/main'
import Link from 'next/prefetch'
import Head from 'next/head'
import posts from '../posts'

export default () => (
  <Page>
    <Head>
      <title>hike.climb.camp</title>
    </Head>

    <div className='home'>
      <div className='main'>
        <h1>hike.climb.camp</h1>
        <div className='posts'>
          {
            posts.map(({ id, date, title }) => (
              <Post
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

    `}</style>
  </Page>
)

const Post = ({ id, date, title }) => (
  <div className='post'>
    <span className='date'>{ date }</span>
    <Link href={`/${new Date(date).getFullYear()}/${id}`}><a>{ title }</a></Link>

    <style jsx>{`

    `}</style>
  </div>
)
