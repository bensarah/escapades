import React, {Component} from 'react'
import Page from './main'
import PropTypes from 'prop-types'
import Header from '../components/post/header'
import Footer from '../components/post/footer'
import {StickyContainer, Sticky} from 'react-sticky'
import {CSSTransitionGroup} from 'react-transition-group'

class Post extends Component {
  constructor (props) {
    super(props)
    this.state = {
      content: '',
      id: 0
    }
  }

  render () {
    return (
      <Page>
        <Header
          img={this.props.header}
          title={this.props.title}
          home={true}
          trail={this.props.trail}
        />
        <div className='flex-parent flex-parent--row flex-parent--stretch-cross'>
          <StickyContainer className='flex-child' style={{minWidth: '50%', minHeight: '100%'}}>
            <Sticky>
              {({ style }) =>
              <div style={{...style, height: '100vh'}} ref={sidebar => { this.sidebar = sidebar }}>
                <CSSTransitionGroup
                  transitionName='smooth'
                  transitionEnterTimeout={1000}
                  transitionLeaveTimeout={1000}>
                  <div key={this.state.id} className='absolute h-full w-full'>{this.state.content}</div>
                </CSSTransitionGroup>
              </div>}
            </Sticky>
          </StickyContainer>
          <article className='flex-child flex-child--grow px60 py30'>
            {
              this.props.children.map((child, i) => React.cloneElement(child, {key: i, setContent: (content) => this.setState({content, id: this.state.id + 1})}))
            }
          </article>
        </div>
        <style jsx>{`
          article {
            font-size: 18px;
          }

          .smooth-enter {
            opacity: 0.01;
          }

          .smooth-enter.smooth-enter-active {
            opacity: 1;
            transition: opacity 1000ms ease-in;
          }

          .smooth-leave {
            opacity: 1;
          }

          .smooth-leave.smooth-leave-active {
            opacity: 0.01;
            transition: opacity 1000ms ease-in;
          }
        `}</style>
        <style jsx global>{`
          body {
            width: 100%;
            overflow-x: hidden;
          }
        `}</style>
        <Footer>
          footer
        </Footer>
      </Page>
    )
  }
}

Post.propTypes = {
  title: PropTypes.string,
  header: PropTypes.string,
  children: PropTypes.array,
  trail: PropTypes.object,
  id: PropTypes.string
}

export default Post
