import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const Meta = () => (
  <div>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet"/>
      <script src='https://api.mapbox.com/mapbox-gl-js/v0.38.0/mapbox-gl.js'></script>
      <link href='https://api.mapbox.com/mapbox-gl-js/v0.38.0/mapbox-gl.css' rel='stylesheet' />
      <link href="https://api.mapbox.com/mapbox-assembly/v0.14.0/assembly.min.css" rel="stylesheet"/>
      <script async defer src="https://api.mapbox.com/mapbox-assembly/v0.14.0/assembly.js"></script>
    </Head>

    <style jsx global>{`
      * {
        margin: 0;
        box-sizing: border-box;
        font-family: 'Cabin', sans-serif
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
