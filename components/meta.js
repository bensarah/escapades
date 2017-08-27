import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'
import palette from '../styles/palette'
import {hexToRGB} from '../helpers/colors'
import Smartlook from './smartlook'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const Meta = () => (
  <div>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no' />
      <link rel='icon' href='/static/favicon.png/'/>
      <link href='https://fonts.googleapis.com/css?family=Open+Sans|Anton|Bad+Script' rel='stylesheet' />
      <link href='https://api.mapbox.com/mapbox-assembly/v0.14.0/assembly.min.css' rel='stylesheet' />
      <script async src='https://api.mapbox.com/mapbox-gl-js/v0.39.1/mapbox-gl.js' />
      <script async defer src='https://api.mapbox.com/mapbox-assembly/v0.14.0/assembly.js' />
      <Smartlook/>
    </Head>
    <link href='https://api.mapbox.com/mapbox-gl-js/v0.39.1/mapbox-gl.css' rel='stylesheet' />
    <link href='/static/vendor/twemoji-awesome.css' rel='stylesheet' />
    <style jsx global>{`
      html {
        overflow-y: scroll;
      }

      * {
        margin: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
        line-height: 1.6em;
      }

      /* loading progress bar styles */
      #nprogress {
        pointer-events: none;
      }

      #nprogress .bar {
        background: ${palette.lightenLavande};
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }

      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px ${palette.lightenLavande}, 0 0 5px ${palette.lightenLavande};
        opacity: 1.0;
        transform: rotate(3deg) translate(0px, -4px);
      }

      /* font families and other helper classes */

      .bad-script, .bad-script * {
        font-family: 'Bad Script', serif;
      }

      .anton, .anton * {
        font-family: 'Anton', sans-serif;
      }

      .txt-shadow {
        text-shadow: 1px 1px 4px ${hexToRGB(palette.bleuNuit, 0.5)};
      }

      .drop-shadow {
        filter: drop-shadow( 1px 1px 3px ${hexToRGB(palette.bleuNuit, 0.3)} );
      }

      hr {
        height: 1px;
        background-image: linear-gradient(to right, ${palette.bleuNuit}, ${palette.bleuNuit}, ${palette.lavande}, ${palette.bleuNuit}, ${palette.bleuNuit});
        margin: 0px 100px 0px 100px;
      }

      a {
        color: ${palette.lavande};
        text-decoration: none;
      }

      a:hover {
        color: ${palette.lightenLavande};
      }
    `}</style>
  </div>
)

export default Meta
