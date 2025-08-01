const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Ensure expo-image-picker is properly resolved
config.resolver.platforms = ['ios', 'android', 'native', 'web'];

module.exports = config;
