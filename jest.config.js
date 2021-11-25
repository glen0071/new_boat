module.exports = {
  verbose: true,
  moduleFileExtensions: [
    "js",
    "json",
    "vue"
  ],
  transform: {
    "^.+\\.js$": "babel-jest",
    ".*\\.(vue)$": "@vue/vue3-jest"
  },
  testEnvironment: "jsdom"
};

