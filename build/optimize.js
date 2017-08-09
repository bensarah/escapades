var sharp = require('sharp')
var path = require('path')

function sharpen (file) {
  if (file.indexOf('.optim.') > -1) return
  if (!(file.endsWith('jpg') || file.endsWith('JPG'))) return

  return sharp(file)
    .resize(2000)
    .sharpen()
    .toFile(file + '.optim.jpg', console.log)
}

var imgPath = path.resolve(process.cwd(), process.argv[2])
sharpen(imgPath)
