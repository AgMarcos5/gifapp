module.exports = {
    testEnvironment: "jest-environment-jsdom",
    setupFiles: ["./jest.setup.js"],
    moduleNameMapper: {
        "\\.(css|scss)$": "identity-obj-proxy",
        '^.+\\.(jpg|jpeg|png|gif|webp|mp4|svg)$': '<rootDir>/__mocks__/fileMock.js',
    }
  };