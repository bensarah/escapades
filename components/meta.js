import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const Meta = () => (
  <div>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no' />
      <link rel='icon' href='/static/favicon.png/'/>
      <link href='https://fonts.googleapis.com/css?family=Open+Sans|Anton|Bad+Script|Belgrano' rel='stylesheet' />
      <script src='https://api.mapbox.com/mapbox-gl-js/v0.39.1/mapbox-gl.js' />
      <link href='https://api.mapbox.com/mapbox-gl-js/v0.39.1/mapbox-gl.css' rel='stylesheet' />
      <link href='https://api.mapbox.com/mapbox-assembly/v0.14.0/assembly.min.css' rel='stylesheet' />
      <link href='/static/vendor/twemoji-awesome.css' rel='stylesheet' />
      <script async defer src='https://api.mapbox.com/mapbox-assembly/v0.14.0/assembly.js' />
    </Head>

    <style jsx global>{`
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
        background: #22BAD9;
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
        box-shadow: 0 0 10px #22BAD9, 0 0 5px #22BAD9;
        opacity: 1.0;
        transform: rotate(3deg) translate(0px, -4px);
      }
    `}</style>
  </div>
)

export default Meta
