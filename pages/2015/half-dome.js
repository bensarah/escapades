import {Component} from 'react'
import extent from 'geojson-extent'
import Post from '../../layouts/post'
import P from '../../components/post/paragraph'
import Map from '../../components/post/map'
import Section from '../../components/post/section'
import trail from '../../static/2015/half-dome/trail'

class HalfDome extends Component {
  render () {
    return (
      <Post
        title='Half Dome'
        subtitle='Yosemite National Park, California'
        header='/static/2015/half-dome/header.jpg'
        trail={trail}
      >
        <Map
          center={[-119.533199, 37.746047]}
          zoom={11.6}
          trail={trail}
          container='sidebar'
          onMap={(map) => this.setState({map})}
        />
        <Section
          action={() => {
            var bbox = extent(trail)
            this.state.map.fitBounds([bbox.slice(0, 2), bbox.slice(2, 4)], {duration: 1500, padding: 20})
          }}
        >
          <P>
            Wooh half dome !
          </P>

        </Section>
      </Post>
    )
  }
}

export default HalfDome
