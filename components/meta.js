import React, {Component} from 'react'
import Helmet from 'react-helmet'
import palette from '../styles/palette'
import {hexToRGB} from '../helpers/colors'

class Meta extends Component {
  render () {
    return (
      <div>
        <Helmet>
          <meta name='viewport' content='width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no' />
          <meta name="theme-color" content="#081926" />
          <meta name="description" content="Le site de nos aventures de rando - Sarah & Benjamin" />

          <meta property="og:site_name" content="escapades" />
          <meta property="og:locale" content="fr_FR" />
          <meta property="og:url" content='https://www.escapades.voyage' />
          <meta property="og:type" content="website" />
          <meta property="og:image" content='https://www.escapades.voyage/static/index/header-background.jpg' />
          <meta property="og:description" content="Le site de nos aventures de rando - Sarah & Benjamin" />

          <link rel='icon' href='/static/favicon.png'/>
          <link href='https://fonts.googleapis.com/css?family=Open+Sans|Anton|Bad+Script' rel='stylesheet' />
          <link href='https://api.mapbox.com/mapbox-assembly/v0.14.0/assembly.min.css' rel='stylesheet' />
          <script async src='https://api.mapbox.com/mapbox-gl-js/v0.39.1/mapbox-gl.js' />
          <script async defer src='https://api.mapbox.com/mapbox-assembly/v0.14.0/assembly.js' />
        </Helmet>
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
  }

  componentDidMount () {
    // insert Google Analytics here
  }
}

export default Meta
