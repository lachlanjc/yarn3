const { send } = require('micro')
const { router, get } = require('microrouter')
const fs = require('fs')
const fetch = require('isomorphic-unfetch')
const { format } = require('prettier')
const formatOptions = { semi: false, singleQuote: true, parser: 'babel' }
const printer = require('node-native-printer')
const printerName = printer.defaultPrinterName()
console.log(printerName)

const printPackages = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')

  let fullText = ''
  const getPackageCode = url =>
    fetch(url)
      .then(res => res.text())
      .then(text => format(text, formatOptions))
      .then(text => {
        fullText += text
      })

  const packageNames =
    typeof req.params.packages !== 'undefined'
      ? req.params.packages.split(',')
      : ['9', '10']

  const packageUrls = packageNames
    .map(n =>
      n
        .replace('react', 'react@16.12.0/cjs/react.production.min.js')
        .replace('lodash', 'lodash@4.17.15/lodash.min.js')
    )
    .map(n => `https://unpkg.com/${n}`)

  return Promise.all(packageUrls.map(getPackageCode))
    .then(() => {
      printer.printText(fullText, {}, printerName)
      const lines = fullText.split('\n').length
      const msg = `PRINTING ${lines} lines from ${packageNames.join(', ')}`
      console.log(msg)
      return send(res, 200, msg)
    })
    .catch(err => {
      console.error(err)
      return send(res, 500, 'Error!')
    })
}

const notFound = (req, res) =>
  send(
    res,
    404,
    '404 – GET /packages/ with your package names, like /packages/lodash,react'
  )

const homepage = (req, res) =>
  send(res, 200, fs.readFileSync('index.html', 'utf8'))

module.exports = router(
  get('/', homepage),
  get('/packages/:packages', printPackages),
  get('*', notFound)
)
