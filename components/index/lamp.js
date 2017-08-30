import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Lamp extends Component {
  constructor (props) {
    super(props)

    this.handleScroll = this.handleScroll.bind(this)

    this.state = {
      lit: false
    }
  }

  render () {
    let className = this.props.className
    if (this.state.lit) {
      className += ' lit'
    }

    return (
      <div id='lamp' className={className} onClick={() => this.smoothScrollToLampLit()}>
        <svg
          width="111.85569"
          height="142.60056"
          viewBox="0 0 111.84699 100"
        >
          <defs>
            <linearGradient id='fill-gradient' x1='0' y1='100%' x2='0' y2='0'>
              <stop offset='0%' stopColor='#edc653' stopOpacity={0.2}/>
              <stop offset='110%' stopColor='#f0bd25' stopOpacity={1}/>
            </linearGradient>
          </defs>
          <g
            transform="translate(0.307767,-22.101093)"
          >
            <path
              d="m 70.336,72.154 c 0,-6.0278 -1.6824,-11.476 -4.401,-15.389 -0.92925,-1.3376 -1.9747,-2.4936 -3.1189,-3.4309 h -14.297 c -0.47204,0.38616 -0.9274,0.81124 -1.3624,1.2697 -0.62527,0.65307 -1.2104,1.3753 -1.7559,2.1619 -2.7192,3.9128 -4.401,9.3617 -4.401,15.389 0,1.9889 0.18597,3.9147 0.53073,5.7448 0.22984,1.2209 1.3,2.1026 2.5431,2.1026 h 23.188 c 0.77726,0 1.4859,-0.34538 1.9654,-0.90083 0.28792,-0.33487 0.49305,-0.74451 0.57831,-1.2017 0.34476,-1.8301 0.53073,-3.7553 0.53073,-5.7448 z"
              fill="#063c51"
            />
            <path
              d="m 70.336,72.154 c 0,-6.0278 -1.6824,-11.476 -4.401,-15.389 -0.92925,-1.3376 -1.9747,-2.4936 -3.1189,-3.4309 h -14.297 c -0.47204,0.38616 -0.9274,0.81124 -1.3624,1.2697 17.59,8.5579 18.39,22.893 18.39,22.893 l 3.6799,1.6046 c 0.28792,-0.33487 0.49305,-0.74451 0.57831,-1.2017 0.34476,-1.8301 0.53073,-3.7553 0.53073,-5.7448 z"
              fill="#01374b"
            />
            <path
              d="m 69.875,77.492 c -0.02348,0.13345 -0.04757,0.26691 -0.07229,0.39913 -0.2286,1.2233 -1.3006,2.1069 -2.5449,2.1069 h -23.181 c -1.2444,0 -2.3151,-0.88353 -2.5443,-2.1062 -0.02471,-0.13284 -0.04881,-0.26568 -0.07167,-0.39914 h 28.414 z"
              fill="#19737c"
            />
            <rect
              transform="scale(1,-1)"
              x="47.09"
              y="-54.719002"
              width="17.156"
              height="2.7723"
              fill="#19737c"
            />
            <path
              d="M 47.09,5.498 V 3.8817 c 0,-2.1433 1.7374,-3.8807 3.8807,-3.8807 h 9.3944 c 2.1433,0 3.8807,1.7374 3.8807,3.8807 V 5.498 Z"
              fill="#19737c"
            />
            <rect
              transform="scale(1,-1)"
              x="47.09"
              y="-51.946999"
              width="17.156"
              height="47.056"
              fill="#063c51"
            />
            <path
              d="M 64.246,51.946 V 4.89 H 47.09 v 3.2394 c 1.0911,-1.0664 2.2663,-1.6472 3.4915,-1.6472 5.7417,0 10.395,12.752 10.395,28.482 0,6.3639 -0.76181,12.241 -2.0494,16.982 z"
              fill="#01374b"
            />
            <path
              d="m 55.934,35.407 c -1.0015,0 -1.814,0.81186 -1.814,1.814 v 6.2323 c 0,1.0015 0.81186,1.814 1.814,1.814 1.0015,0 1.814,-0.81186 1.814,-1.814 V 37.221 c 0,-1.0015 -0.81186,-1.814 -1.814,-1.814 z"
              fill="#081926"
            />
            <circle
              id="lamp-button"
              transform="scale(1,-1)"
              cx="55.933998"
              cy="-37"
              r="2.0778"
              fill="#f0bd25"
            />
            <path
              className='lamp-light'
              fill='url(#fill-gradient)'
              d="m 43.668929,80 -43.97235041,53.97577 c 0,0 18.22597941,8.625 56.22139841,8.625 37.995418,0 55.625593,-8.625 55.625593,-8.625 L 67.562531,80 Z"
            />
            <path
              className='lamp-light'
              fill='url(#fill-gradient)'
              d="M 28.845703,100 3.8554688,159.51367 c 8.9967872,1.67604 21.0568912,3.08789 36.3945312,3.08789 14.811934,0 26.48887,-1.31468 35.273438,-2.91406 L 52.261719,100.36719 51.894531,100 Z"
              transform="translate(15.668,-20)"
            />
          </g>
        </svg>
        <style jsx>{`
          #lamp {
            animation: upDown 2s infinite;
            animation-timing-function: cubic-bezier(.40,0,.30,1);
            bottom: 0;
          }

          #lamp.lit {
            animation-play-state: paused;
          }

          #lamp-button {
            animation: buttonOff 0.2 ease forwards;
          }

          .lit #lamp-button {
            animation: buttonOn 0.2s ease forwards;
          }

          .lamp-light {
            opacity: 0;
            transition: opacity 0.2s;
            transition-delay: 0.1s;
          }

          .lit .lamp-light {
            opacity: 0.9;
          }

          @keyframes upDown {
            0% {
              top : -10px;
            }
            30% {
              top: -25px;
            }
            70% {
              top: -25px;
            }
            100% {
              top : -10px;
            }
          }

          @keyframes buttonOn {
            to {
              cy: -45;
            }
          }

          @keyframes bottonOff {
            to {
              cy: -37;
            }
          }
        `}</style>
      </div>
    )
  }

  componentDidMount () {
    require('smoothscroll-polyfill').polyfill()
    const handleScroll = (e) => this.handleScroll(e)
    window.addEventListener('scroll', handleScroll)
    this.setState({scrollListener: handleScroll})
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.state.scrollListener)
  }

  handleScroll (event) {
    let scrollTop = document.body.scrollTop
    if (scrollTop >= (window.innerHeight / 3) && !this.state.lit) {
      this.setState({lit: true})
    } else if (scrollTop < (window.innerHeight / 3) && this.state.lit) {
      this.setState({lit: false})
    }
  }

  smoothScrollToLampLit () {
    if (document.body.scrollTop > window.innerHeight / 3) return
    window.scroll({
      top: window.innerHeight / 3 + 1,
      left: 0,
      behavior: 'smooth'
    })
  }
}

Lamp.propTypes = {
  className: PropTypes.string
}

export default Lamp
