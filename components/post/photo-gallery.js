import React from 'react'
import PropTypes from 'prop-types'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'
import palette from '../../styles/palette'

class PhotoGallery extends React.Component {
  constructor (props) {
    super(props)

    this.closeLightbox = this.closeLightbox.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0
    }
  }

  render () {
    if (!this.props.photos || this.props.photos.length === 0) return null
    return (
      <div style={{backgroundColor: palette.bleuNuit}} className='py6'>
        <Gallery
          photos={this.props.photos}
          onClickPhoto={this.openLightbox}
          margin={6}
        />
        <Lightbox
          images={this.props.photos}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
        />
      </div>
    )
  }

  openLightbox (index, event) {
    console.log(index, event)
    event.preventDefault()
    this.setState({
      currentImage: index,
      lightboxIsOpen: true
    })
  }

  closeLightbox () {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    })
  }

  gotoPrevious () {
    this.setState({
      currentImage: this.state.currentImage - 1
    })
  }

  gotoNext () {
    this.setState({
      currentImage: this.state.currentImage + 1
    })
  }
}

PhotoGallery.propTypes = {
  photos: PropTypes.array
}

export default PhotoGallery
