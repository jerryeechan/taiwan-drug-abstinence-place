var path = require("path");
var webpack = require("webpack");
var node_modules_dir = path.resolve(__dirname, "node_modules");
var devtool = "eval-source-map"; //["eval-source-map"]
console.log(process.env.arg);
console.log(process.env.NODE_ENV);
if (process.env.arg === "p" || process.env.NODE_ENV === "p") devtool = false;
var PROD = true; // JSON.parse(process.env.NODE_ENV)==="production";
var plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    names: ["vendors"], //"app"
    minChunks: Infinity
  })
];
// if(PROD)
// {
//   plugins.push(new webpack.optimize.UglifyJsPlugin({
//     compress: { warnings: false }
//   }))
// }

var config = {
  entry: {
    app: "./src/components/index.tsx",
    vendors: ["mobx", "mobx-react", "firebase"]
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/public/dist"
  },

  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({
  //     minimize: true,
  //     compress: false
  //   })
  // ],

  // Enable sourcemaps for debugging webpack's output.
  devtool: devtool,
  //--optimize-minimize
  resolve: {
    modules: ["node_modules", "./src"],
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json", ".css"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { test: /\.css?$/, loader: "style-loader!css-loader" }
    ]
  },
  plugins: plugins,
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: [
    {
      react: "React",
      "react-dom": "ReactDOM",
      "semantic-ui-react": "semanticUIReact",
      redux: "Redux",
      "react-router-dom": "ReactRouterDOM",
      firebase: "firebase"
    }
  ]
};
module.exports = config;

//if Can't find webpack do the following
//npm link webpack
