const ignorePatterns = [
  "/.cache/",
  "/.next/",
  "/build/",
  "/coverage/",
  "/node_modules/",
  "/out/",
  "/public/",
  "/src/styles/",
]

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  coveragePathIgnorePatterns: ignorePatterns,
  modulePathIgnorePatterns: ignorePatterns,
  testPathIgnorePatterns: ignorePatterns,
  watchPathIgnorePatterns: ignorePatterns,
  moduleDirectories: ["node_modules", "src"],
}
