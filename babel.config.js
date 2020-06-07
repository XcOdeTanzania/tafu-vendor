module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
          alias: {
            assets: './src/assets',
            styles:'./src/styles',
            utils:'./src/utils',
            screens: './src/screens',
            tabs: './src/tabs',
            navigation: './src/navigation',
            components: './src/components',
            state: './src/state',
          },
        },
      ],
    ],
  };
};
