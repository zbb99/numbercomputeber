const rollup = require('rollup')
const config = require('./config')
// plugins
const resolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')
const commonjs = require('rollup-plugin-commonjs')

const inputOption = {
    input : config.input ,
    plugins:[
        resolve(),
        babel({
            exclude: 'node_modules/**'
        }),
        commonjs()
    ],
}

const outputOption = {
    file : 'dist/index.js' ,
    format : 'umd' ,
    name : 'NumberComputeBer' ,
    banner : config.banner
}

const running = async () => {
    const bundle = await rollup.rollup(inputOption)
    console.log(bundle)
    const { code, map } = await bundle.generate(outputOption);
    await bundle.write(outputOption);
}



running();
