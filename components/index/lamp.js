import React from 'react'

import PropTypes from 'prop-types'

const Lamp = ({className}) => (
  <span id='lamp' className={className}>
    <svg width='80' height='100' version='1.1' viewBox='0 0 80 80' xmlSpace='preserve' xmlns='http://www.w3.org/2000/svg'>
      <g transform='translate(-15.668)'>
        <path d='m70.336 72.154c0-6.0278-1.6824-11.476-4.401-15.389-0.92925-1.3376-1.9747-2.4936-3.1189-3.4309h-14.297c-0.47204 0.38616-0.9274 0.81124-1.3624 1.2697-0.62527 0.65307-1.2104 1.3753-1.7559 2.1619-2.7192 3.9128-4.401 9.3617-4.401 15.389 0 1.9889 0.18597 3.9147 0.53073 5.7448 0.22984 1.2209 1.3 2.1026 2.5431 2.1026h23.188c0.77726 0 1.4859-0.34538 1.9654-0.90083 0.28792-0.33487 0.49305-0.74451 0.57831-1.2017 0.34476-1.8301 0.53073-3.7553 0.53073-5.7448z'
        fill='#063c51' />
        <path d='m70.336 72.154c0-6.0278-1.6824-11.476-4.401-15.389-0.92925-1.3376-1.9747-2.4936-3.1189-3.4309h-14.297c-0.47204 0.38616-0.9274 0.81124-1.3624 1.2697 17.59 8.5579 18.39 22.893 18.39 22.893l3.6799 1.6046c0.28792-0.33487 0.49305-0.74451 0.57831-1.2017 0.34476-1.8301 0.53073-3.7553 0.53073-5.7448z'
        fill='#01374b' />
        <path d='m69.875 77.492c-0.02348 0.13345-0.04757 0.26691-0.07229 0.39913-0.2286 1.2233-1.3006 2.1069-2.5449 2.1069h-23.181c-1.2444 0-2.3151-0.88353-2.5443-2.1062-0.02471-0.13284-0.04881-0.26568-0.07167-0.39914h28.414z' fill='#337b9c' />
        <rect transform='scale(1,-1)' x='47.09' y='-54.719' width='17.156' height='2.7723' fill='#337b9c' />
        <path d='m47.09 5.498v-1.6163c0-2.1433 1.7374-3.8807 3.8807-3.8807h9.3944c2.1433 0 3.8807 1.7374 3.8807 3.8807v1.6163z' fill='#337b9c' />
        <rect transform='scale(1,-1)' x='47.09' y='-51.947' width='17.156' height='47.056' fill='#063c51' />
        <path d='m64.246 51.946v-47.056h-17.156v3.2394c1.0911-1.0664 2.2663-1.6472 3.4915-1.6472 5.7417 0 10.395 12.752 10.395 28.482 0 6.3639-0.76181 12.241-2.0494 16.982z' fill='#01374b' />
        <path d='m55.934 35.407c-1.0015 0-1.814 0.81186-1.814 1.814v6.2323c0 1.0015 0.81186 1.814 1.814 1.814 1.0015 0 1.814-0.81186 1.814-1.814v-6.2323c0-1.0015-0.81186-1.814-1.814-1.814z' fill='#081926' />
        <circle id='lamp-button' transform='scale(1,-1)' cx='55.934' cy='-37.485' r='2.0778' fill='#f0bd25' />
        {/* A remplacer par le vrai chemin */}
        <polygon id='lamp-light' points="42,80 70,80 100,100 10,100" fill="#f0bd25" opacity='0'/>
      </g>
    </svg>
    <style jsx>{`
      #lamp {
        animation: upDown 3s infinite;
        animation-timing-function: cubic-bezier(.40,0,.30,1);
        bottom: 0;
      }

      #lamp:hover #lamp-button {
        animation: buttonOn 0.2s ease forwards;
      }

      #lamp:hover #lamp-light {
        animation: lightOn 0.1s ease forwards;
        animation-delay: 0.1s;
      }

      @keyframes upDown {
        0% {
          bottom: 0;
        }
        40% {
          bottom: 9px;
        }
        60% {
          bottom: 9px;
        }
        100% {
          bottom: 0;
        }
      }

      @keyframes buttonOn {
        to {
          cy: -45;
        }
      }

      @keyframes lightOn {
        to {
          opacity: 0.9;
        }
      }
    `}</style>
  </span>
)

Lamp.propTypes = {
  className: PropTypes.string
}

export default Lamp
