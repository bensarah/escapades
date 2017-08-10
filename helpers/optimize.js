var sharp = require('sharp')
var path = require('path')
var fs = require('fs')

function sharpen (file) {
  if (file.indexOf('.optim.') > -1) return
  if (!(file.endsWith('jpg') || file.endsWith('JPG'))) return

  return sharp(file)
    .resize(2000)
    .sharpen()
    .toFile(file + '.optim.jpg')
    .then(() => fs.rename(file + '.optim.jpg', file))
    .then(() => console.log(file), 'optimized')
}

var imgPath = path.resolve(process.cwd(), process.argv[2])
sharpen(imgPath)
