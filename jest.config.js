module.exports = {
  "setupFiles": ["./__tests__/setupTest.js"],
  setupFilesAfterEnv: ['<rootDir>/__tests__/setupTest.js'],
  "moduleNameMapper": {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "identity-obj-proxy"
  },
  "snapshotSerializers": ["enzyme-to-json/serializer"]
};