import React, {Component} from 'react'
import extent from 'geojson-extent'
import Post from '../../layouts/post'
import P from '../../components/post/paragraph'
import Map from '../../components/post/map'
import Section from '../../components/post/section'
//import Img from '../../components/post/img'
import Emoji from '../../components/emoji'
//import Footnote from '../../components/post/footnote'
import {highlightFromTo} from '../../helpers/map-utils'
import trail from '../static/2018/gr20/trail'

class Gr20 extends Component {
  render () {
    return (
      <Post
        title='GR20'
        subtitle='Corse'
        header='/static/2018/gr20/gr20.jpg'
        trail={trail}
        id='gr20'
        jours={'15 jours'}
        tags={['Fréquenté', 'Eau sur le chemin', 'Hardcore']}
        photos={[
          {
            src: '/static/2018/gr20/gr20.jpg',
            width: 2248,
            height: 4000,
            caption: 'La seule photo de tout Escapades qui n‘est pas encore de nous'
          }
        ]}
      >
        <Map
          center={[9.123577, 42.126600]}
          zoom={4}
          trail={trail}
          container='sidebar'
          onMap={(map) => this.setState({map})}
        />
        <Section
          action={() => {
            var bbox = extent(trail)
            this.state.map.fitBounds([bbox.slice(0, 2), bbox.slice(2, 4)], {duration: 3000, padding: {top: 50, bottom: 50, left: 25, right: 25}})
            highlightFromTo(this.state.map, trail, 0, 0)
          }}
        >
          <P>
            Notre projet pour 2018.
          </P>
          <P><Emoji name='smile' size='2x'/></P>
        </Section>

      </Post>
    )
  }
}

export default Gr20
