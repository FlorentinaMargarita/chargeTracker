module.exports = function(api) {
  api.cache(true);
  return {
    // presets: ['babel-preset-expo'],
    "presets": [
     ["@babel/env", { "loose": true } ], "babel-preset-expo" 
    //  ["@babel/plugin-proposal-private-methods", { "loose": true }]
    ],
  };
  

};
