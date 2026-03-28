'const url = require("url")'

const url = require("url")
let uri = 'https://www.google.com/search?q=node+js&rlz=1C1BNSD_pt-BRBR946BR946'

let partUrl = new url.URL(uri)

console.log("Destino.: ", partUrl.host)
console.log("Caminho ou rota.: ", partUrl.pathname)
console.log("Query string.: ", partUrl.search)
console.log("Parâmetro.: ", partUrl.searchParams)
console.log("Valor do parâmetro q.: ", partUrl.searchParams.get('q'))
console.log("Valor do parâmetro rlz.: ", partUrl.searchParams.get('rlz'))

