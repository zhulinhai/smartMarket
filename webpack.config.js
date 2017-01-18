/**
 * Created by zhulinhai on 17/1/11.
 */

var bower_dir = __dirname + '/bower_components';

var config = {
    addVender: function(name, path) {
        this.resolve.alias[name] = path;
        this.module.noParse.push(new RegExp(path));
    },
    entry: ['./app/main.js'],
    resolve: {
        alias: {
            'react': bower_dir + 'react/react.min.js'
        }
    },
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    module: {
        noParse: [bower_dir + '/rect/react.min.js'],
        loaders: [
            {test: /\.js$/, loader: 'jsx-loader'}
        ]
    }
};

config.addVender('react', bower_dir + '/react/react.min.js');

module.exports = config;