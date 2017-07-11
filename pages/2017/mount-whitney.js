import Head from 'next/head'
import Post from '../../layouts/post'
import Title from '../../components/post/title'
import Img from '../../components/post/img'
import P from '../../components/post/paragraph'
import Map from '../../components/post/map'

import trail from '../../static/2017/mount-whitney/trail'

const MountWhitney = () => (
  <Post>
    <Head><title>Mount Whitney</title></Head>
    <Title>Mount Whitney</Title>

    <P>The most amazing hike ever.</P>
    <Map
      center={[-118.263187, 36.579833]}
      zoom={11.6}
      trail={trail}
    />
    <P>Woow so much elevation.</P>
    <Img src='/static/2017/mount-whitney/1.jpg'/>

  </Post>
)

export default MountWhitney
