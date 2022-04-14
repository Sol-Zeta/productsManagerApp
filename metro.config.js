/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  resolver: {
    assetExts: [
      'db',
      'ojb',
      'ttf',
      'fbx',
      'gif',
      'png',
      'jpg',
      'mp3',
      'mov',
      'jpeg',
      'mp4',
      'svg',
    ],
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
