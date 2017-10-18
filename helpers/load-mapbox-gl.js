const SCRIPT_ID = 'gl-js-script'

export default loadMapboxgl

function loadMapboxgl () {
  return new Promise((resolve, reject) => {
    const doc = window.document
    if (doc.getElementById(SCRIPT_ID)) return resolve()
    const script = doc.createElement('script')
    script.src = `https://api.mapbox.com/mapbox-gl-js/v0.39.1/mapbox-gl.js`
    script.addEventListener('load', () => {
      script.id = SCRIPT_ID
      resolve()
    })
    script.addEventListener('error', reject)
    doc.body.appendChild(script)
  })
}
