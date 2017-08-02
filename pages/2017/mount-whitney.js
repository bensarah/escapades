import Post from '../../layouts/post'
import Img from '../../components/post/img'
import P from '../../components/post/paragraph'
import Map from '../../components/post/map'
import Waypoint from '../../components/post/waypoint'

import trail from '../../static/2017/mount-whitney/trail'

const MountWhitney = () => (
  <Post
    title='Mount Whitney'
    header='/static/2017/mount-whitney/2.jpg'
    trail={trail}
    id='mount-whitney'
  >
    <P>The most amazing hike ever.</P>
    <Map
      center={[-118.263187, 36.579833]}
      zoom={11.6}
      trail={trail}
    />
    <Waypoint
      id='mount-whitney'
      element='coucou'
    />
    <P>Woow so much elevation.</P>
    <P>
      Here’s another, longer paragraph.
      I can write about how fantastic the mountains are, because they are!
      For real, I have never seen such beautiful mountains.
      Each sentence is written
      on a new line but it’s a put in form automatically,
      magic!
    </P>
    <Img src='/static/2017/mount-whitney/1.jpg' />
    <P>
      Here’s another, longer paragraph.
      I can write about how fantastic the mountains are, because they are!
      For real, I have never seen such beautiful mountains.
      Each sentence is written
      on a new line but it’s a put in form automatically,
      magic!
    </P>
    <P>
      Here’s another, longer paragraph.
      I can write about how fantastic the mountains are, because they are!
      For real, I have never seen such beautiful mountains.
      Each sentence is written
      on a new line but it’s a put in form automatically,
      magic!
    </P>
  </Post>
)

export default MountWhitney
