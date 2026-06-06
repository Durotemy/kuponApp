module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
          '@/shared': './src/components/shared',
          '@/screens': './src/screens',
          '@/hooks': './src/hooks',
        },
      },
    ],

    'react-native-reanimated/plugin',
  ],
};
