import React, { Component } from 'react'
import Page from './main'
import PropTypes from 'prop-types'
import Header from '../components/post/header'
import InfoSection from '../components/post/info-section'
import PhotoGallery from '../components/post/photo-gallery'
import Footer from '../components/footer'
import {StickyContainer, Sticky} from 'react-sticky'
import {CSSTransitionGroup} from 'react-transition-group'
import {findTrail} from '../helpers/trail-extractor'
import posts from '../posts'
import Head from 'next/head'

class Post extends Component {
  constructor (props) {
    super(props)
    var randomPost
    var filtered = posts.filter(p => p.id !== this.props.id)
    if (filtered.length > 0) {
      randomPost = filtered[Math.floor(Math.random() * filtered.length)]
      this.setState({})
    }
    this.state = {
      content: '',
      id: 0,
      randomPost
    }
  }

  render () {
    return (
      <Page>
        <Head>
          <link rel='preload' href={this.props.header} as='image'/>
        </Head>
        <Header
          img={this.props.header}
          title={this.props.title}
          subtitle={this.props.subtitle}
          home={true}
          trail={this.props.trail}
        />
        <InfoSection
          trail={findTrail(this.props.trail)}
          jours={this.props.jours}
          tags={this.props.tags}
        />
        <div className='flex-parent flex-parent--row flex-parent--stretch-cross'>
          <StickyContainer className='flex-child' style={{minWidth: '50%', minHeight: '100%'}}>
            <Sticky>
              {({ style }) =>
              <div style={Object.assign({}, style, {height: '100vh'})} ref={sidebar => { this.sidebar = sidebar }}>
                <CSSTransitionGroup
                  transitionName='smooth'
                  transitionEnterTimeout={0}
                  transitionLeaveTimeout={0}>
                  <div key='sidebar' id='sidebar' className='absolute h-full w-full'></div>
                  {
                    this.state.content
                    ? <div key={this.state.id} className='absolute h-full w-full z5'>{this.state.content}</div>
                    : null
                  }
                </CSSTransitionGroup>
              </div>}
            </Sticky>
          </StickyContainer>
          <article className='flex-child flex-child--grow py30 px18 px60-ml color-gray-light bg-bleu-nuit'>
            {
              this.props.children.map((child, i) => React.cloneElement(child, {
                key: i,
                setContent: (content) => {
                  if (content !== this.state.content) this.setState({content, id: this.state.id + 1})
                }
              }))
            }
          </article>
        </div>
        <PhotoGallery photos={this.props.photos}/>
        <Footer
          prefooter={true}
          cta={`Avide d’autres aventures ? Lisez notre récit de ${this.state.randomPost.title}`}
          url={this.state.randomPost.url}
          quote={this.state.randomPost.quote}
        />
      </Page>
    )
  }
}

Post.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  header: PropTypes.string,
  children: PropTypes.array,
  trail: PropTypes.object,
  photos: PropTypes.array,
  jours: PropTypes.string,
  tags: PropTypes.array,
  id: PropTypes.string
}

export default Post
