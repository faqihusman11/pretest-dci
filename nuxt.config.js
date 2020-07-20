const webpack = require("webpack");
require("dotenv").config();

export default {
  server: {
    host: process.env.APP_URL,
    port: process.env.PORT
  },
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "Vue Contact List",
    title: "Vue Contact List",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        href:
          "https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css",
        rel: "stylesheet"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#C62828" },
  /*
   ** Global CSS
   */
  css: ["@/assets/main.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "@/plugins/axios.js",
    "@/plugins/globalMixin.js",
    "@/plugins/mobile-device-detect.js",
    "@/plugins/vuetify.js"
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv",
    "@nuxtjs/toast",
    "@nuxtjs/proxy"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.API_BASE_URL,
    https: false,
    proxy: true,
    credentials: true
  },
  proxy: {
    "/public-api/": {
      target: process.env.API_BASE_URL || "https://gorest.co.in/public-api/",
      changeOrigin: true
    }
  },
  toast: {
    position: "top-center",
    duration: 2000
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    treeShake: true,
    customVariables: ["~/assets/variables.scss"],
    options: {
      customProperties: true
    },
    defaultAssets: {
      font: {
        family: "Lato",
        size: "16px"
      },
      icons: "mdi"
    },
    optionsPath: "./vuetify.options.js"
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    plugins: [
      new webpack.ProvidePlugin({
        moment: "moment"
      })
    ],
    extend(config, ctx) {}
  },
  render: {
    dist: {
      maxAge: 0
    },
    static: {
      etag: false
    }
  }
};
