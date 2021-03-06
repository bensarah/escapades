import React from 'react'
import PropTypes from 'prop-types'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'
import Emoji from '../emoji'

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
      <div className='section pb12 px18 bg-white z5'>
        <div className='py18'>
          <h2 className='align-center pb6 txt-xl txt-bold'>Plus de photos <Emoji name='camera'/></h2>
          <p className='align-center txt-m bleu-nuit'>Vous pouvez cliquer sur les photos pour les agrandir.</p>
        </div>
        <Lightbox
          images={this.props.photos}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          width={1600}
          backdropClosesModal={true}
        />
        <Gallery
          photos={this.props.photos}
          onClick={this.openLightbox}
          margin={3}
        />
      </div>
    )
  }

  openLightbox (event, obj) {
    console.log(event, obj)
    event.preventDefault()
    this.setState({
      currentImage: obj.index,
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
