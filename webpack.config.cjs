const path = require('path');
const resolve = require('enhanced-resolve');

module.exports = {
  entry: {
    control : {
      import: './src/control_entry.ts',
      filename: 'control_worker.js',
    },
    overlay : {  
      import: './src/overlay_entry.ts',
      filename: 'overlay_controller.js',
    },
  }, 
  output: {
    path: path.resolve(__dirname, 'public/assets/js'),
  },
  devtool: "inline-source-map"
};

// module.exports.stats = { errorDetails: true };

module.exports.module = {
  rules: [
    {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }, 
  ]
};

module.exports.resolve = {
    modules: ['src', 'node_modules'],
    importsFields: ['imports'],
    extensions: ['.ts', '.js'],
    // exclude : ['*.test.ts'],
    fallback: {
      // "stream": require.resolve("stream-browserify"),
      // "crypto": require.resolve("crypto-browserify"),
      // "http": require.resolve("stream-http"),
      // "https": require.resolve("https-browserify"),
      // "zlib": require.resolve("browserify-zlib"),
      "assert": require.resolve("assert/"),
      // "net" : require.resolve("net-browserify"),
      // "path": require.resolve("path-browserify"),
      // "tls": require.resolve("tls-browserify"),
      // "os": require.resolve("os-browserify/browser")
    }
};

module.exports.optimization = {
  usedExports: true
};
