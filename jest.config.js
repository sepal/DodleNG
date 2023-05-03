const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const config = {};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config);
