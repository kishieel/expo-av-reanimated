const { getDefaultConfig } = require('expo/metro-config');

module.exports = (() => {
    // eslint-disable-next-line no-undef
    const config = getDefaultConfig(__dirname);

    const { transformer, resolver } = config;

    config.transformer = {
        ...transformer,
    };
    config.resolver = {
        ...resolver,
    };

    config.resolver.assetExts.push('marks');

    return { ...config, resetCache: true };
})();
