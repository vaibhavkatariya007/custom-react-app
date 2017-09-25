var webpack = require('webpack');
var path = require('path');
var BUILD_DIR = path.resolve(__dirname, './public');
var config = {
   entry: './main.js',
	
   output: {
      path:BUILD_DIR,
      filename: 'bundle.js'
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            // test: /\.css$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;