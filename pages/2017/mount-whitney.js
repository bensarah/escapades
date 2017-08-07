import {Component} from 'react'
import Post from '../../layouts/post'
import Quote from '../../components/post/quote'
import P from '../../components/post/paragraph'
import Map from '../../components/post/map'
import Waypoint from '../../components/post/waypoint'

import trail from '../../static/2017/mount-whitney/trail'

class MountWhitney extends Component {
  render () {
    return (
      <Post
        title='Mount Whitney'
        subtitle='Inyo National Forest, California'
        header='/static/2017/mount-whitney/2.jpg'
        trail={trail}
      >
        <Map
          container='sidebar'
          trail={trail}
          onMap={(map) => this.setState({map})}
        />
        <Waypoint action={() => this.state.map.easeTo({center: [-118.24022, 36.5872], zoom: 14, duration: 1500})} />
        <P>The most amazing hike ever.</P>
        <P>Woow so much elevation.</P>
        <P>
          Here’s another, longer paragraph.
          I can write about how fantastic the mountains are, because they are!
          For real, I have never seen such beautiful mountains.
          Each sentence is written
          on a new line but it’s a put in form automatically,
          magic!
        </P>
        <Waypoint action={() => this.state.map.easeTo({center: [-118.29227, 36.578497], zoom: 12, duration: 1500})} />
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
        <Waypoint action={() => console.log('coucou')}>
          <div style={{background: 'url(/static/2017/mount-whitney/2.jpg) no-repeat center center', width: '100%', height: '100%'}}></div>
        </Waypoint>
        <P>
          Here’s another, longer paragraph.
          I can write about how fantastic the mountains are, because they are!
          For real, I have never seen such beautiful mountains.
          Each sentence is written
          on a new line but it’s a put in form automatically,
          magic!
        </P>
        <Quote>
          Here’s another, longer paragraph.
          I can write about how fantastic the mountains are, because they are!
          For real, I have never seen such beautiful mountains.
          Each sentence is written
          on a new line but it’s a put in form automatically,
          magic!
        </Quote>
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
  }
}

export default MountWhitney
