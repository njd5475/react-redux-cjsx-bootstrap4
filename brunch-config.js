exports.config = {
  hot: true,

  files: {
    javascripts: { joinTo: 'app.js' },
    stylesheets: { joinTo: 'app.css' }
  },

  modules: {
    autoRequire: {
      "js/app.js": [
        "bootstrap"
      ]
    }
  },

  plugins: {
    babel: { presets: ['env'] },
    sass: {
      options: {
        includePaths: ["node_modules/bootstrap/scss"],
      },
      precision: 8
    }
  },

  npm: {
    enabled: true,
    globals: {
      $: 'jquery',
      jQuery: 'jquery',
      Tether: 'tether'
    }
  }
};
