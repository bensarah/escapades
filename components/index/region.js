import {Component} from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Emoji from '../emoji'
import MapHighlights from './map-highlights'
import palette from '../../styles/palette'

class Region extends Component {
  constructor (props) {
    super(props)
    this.state = {
      highlight: null
    }
  }

  render () {
    return (
      <div className='px12 py12 mb12 border border--lighten75 round display-block flex-parent flex-parent--column-reverse flex-parent--row-ml flex-parent--space-between-main-ml w-full'>
        <div className='flex-child w-full w600-ml'>
          {this.formatName()}
          <div className='pr12-ml'>{this.parks()}</div>
        </div>
        <div className='flex-child w-full h300 w600-ml hmin360-ml z1'>
          <MapHighlights
            highlight={this.state.highlight}
            dots={this.posts.map(post => post.coords)}
            logo={true}
          />
        </div>
      </div>
    )
  }

  get posts () {
    var posts = []
    Object.keys(this.props.parks).forEach(p => {
      posts = posts.concat(this.props.parks[p])
    })

    return posts
  }

  formatName () {
    switch (this.props.name) {
    case 'California':
      return <h3 className='txt-bold txt-l color-white'><Emoji name='us'/> Californie</h3>
    case 'France':
      return <h3 className='txt-bold txt-l color-white'><Emoji name='fr'/> France</h3>
    default:
      return <h3 className='txt-bold txt-l color-white'>{this.props.name}</h3>
    }
  }

  parks () {
    return Object.keys(this.props.parks).map((park, i) => {
      return (
        <div key={i}>
          <h2 className='park pt18 txt-l txt-bold bad-script'>{park}</h2>
            {
              this.props.parks[park].map((rando, i, randos) => (
                <span key={rando.id}
                  onMouseOver={() => this.setState({highlight: rando.coords})}
                  onClick={() => this.setState({highlight: rando.coords})}
                  onMouseLeave={() => this.setState({highlight: null})}
                >
                <Link prefetch href={rando.url}>
                  <a>{rando.title}</a>
                </Link>
                {i !== (randos.length - 1) ? <span className='px12'>·</span> : null}
                </span>
              ))
            }
          <style jsx>{`
            a {
              color: ${palette.lavande}
            }

            a:hover {
              color: ${palette.lightenLavande}
            }
          `}</style>
        </div>
      )
    })
  }
}

Region.propTypes = {
  parks: PropTypes.object,
  name: PropTypes.string
}

export default Region
