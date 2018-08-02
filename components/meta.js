import React, {Component} from 'react'
import Helmet from 'react-helmet'

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
          <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.1/mapbox-gl.css' rel='stylesheet' />
          <script async defer src='https://api.mapbox.com/mapbox-assembly/v0.14.0/assembly.js' />

          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-72962798-2"></script>
        </Helmet>
      </div>
    )
  }

  componentDidMount () {
    window.dataLayer = window.dataLayer || []
    function gtag () { window.dataLayer.push(arguments) }
    gtag('js', new Date())

    gtag('config', 'UA-72962798-2')
  }
}

export default Meta
