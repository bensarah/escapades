var path = require('path')

module.exports = () => {
  return {
    siteOrigin: 'https://www.escapades.voyage',
    publicAssetsPath: 'static',
    pagesDirectory: path.join(__dirname, 'pages'),
    babelPlugins: [
      require('styled-jsx/babel').default
    ],
    stylesheets: [
      path.join(__dirname, 'pages/static/vendor/twemoji-awesome.css'),
      path.join(__dirname, 'pages/static/main.css'),
      'https://api.mapbox.com/mapbox-assembly/v0.14.0/assembly.min.css',
      'https://api.mapbox.com/mapbox-gl-js/v0.39.1/mapbox-gl.css'
    ],
    postcssPlugins: (a) => a.concat([
      require('postcss-color-function'),
      require('postcss-css-variables')
    ])
  }
}
