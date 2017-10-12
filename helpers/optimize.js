// using common js since this will be executed straight by node

var sharp = require('sharp')
var path = require('path')
var fs = require('fs')

function sharpen (file) {
  if (file.indexOf('.optim.') > -1) return
  var extension
  if (file.endsWith('jpg') || file.endsWith('JPG')) extension = 'jpg'
  if (file.endsWith('png') || file.endsWith('PNG')) extension = 'png'
  if (!extension) return

  sharp(file)
    .metadata()
    .then(info => {
      if (info.width <= 1200) return Promise.reject(new Error('should not resize smaller photo'))
      else return Promise.resolve(sharp(file))
    })
    .then((s) => s.resize(1200).sharpen().jpg({progressive: true}).toFile(file + '.optim.' + extension))
    .then(() => fs.rename(file + '.optim.' + extension, file.toLowerCase(), console.log))
    .then(() => console.log(file), 'optimized')
    .catch(console.log)
}

var imgPath = path.resolve(process.cwd(), process.argv[2])
sharpen(imgPath)
