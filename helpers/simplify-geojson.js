var simplify = require('simplify-geojson')
var path = require('path')
var fs = require('fs')

var geojson = require(path.resolve(process.cwd(), process.argv[2]))
var simplified = simplify(geojson, 0.0001)

fs.writeFile(path.resolve(process.cwd(), process.argv[2]), JSON.stringify(simplified, null, 2))
