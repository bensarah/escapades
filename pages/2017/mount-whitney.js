import Head from 'next/head'
import Post from '../../layouts/post'
import Title from '../../components/post/title'

export default () => (
  <Post>
    <Head><title>Mount Whitney</title></Head>
    <Title>Mount Whitney</Title>

    <p>The most amazing hike ever.</p>
    <img src='/static/2017/mount-whitney-1.jpg' />

    <style jsx>{`
      img {
        max-width: 100%;
      }
    `}</style>
  </Post>
)
