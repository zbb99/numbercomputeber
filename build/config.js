const path = require('path')
const packageJson = require('../package.json')
const banner = `
 // -------------------------------------
 // Version : ${packageJson.version} 
 // Author : zbb 
 // NumberComputeBer
 // -------------------------------------
`
module.exports=  {
    version:packageJson.version ,
    input : path.resolve(__dirname , '../index.js') ,
    banner
}
