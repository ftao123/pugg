const path = require('path')
const srcPath = path.resolve(__dirname, '../src')

/* config-overrides.js */
module.exports = function override(config, env) {
    //do stuff with the webpack config...
    // alias
    config.resolve.alias = {
        ...config.resolve.alias,
        config: `${srcPath}/config`,
        components: `${srcPath}/components`,
        containers: `${srcPath}/containers`,
        images: `${srcPath}/images`,
        '@components': `${srcPath}/components`,
    };
    config.resolve.extensions = ['.js', '.jsx', '.ts', '.tsx']
    return config;
}
