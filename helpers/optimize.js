// using common js since this will be executed straight by node

var sharp = require('sharp')
var path = require('path')
var fs = require('fs')

function sharpen (file) {
  if (file.indexOf('.optim.') > -1) return
  if (!(file.endsWith('jpg') || file.endsWith('JPG'))) return

  sharp(file)
    .metadata()
    .then(info => {
      if (info.width <= 2000) return Promise.reject(new Error('should not resize smaller photo'))
      else return Promise.resolve(sharp(file))
    })
    .then((s) => s.resize(2000).sharpen().toFile(file + '.optim.jpg'))
    .then(() => fs.rename(file + '.optim.jpg', file))
    .then(() => console.log(file), 'optimized')
    .catch(console.log)
}

var imgPath = path.resolve(process.cwd(), process.argv[2])
sharpen(imgPath)
