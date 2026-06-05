const greet = require("../src/index");

test("greet returns correct message", () => {
  expect(greet("Soumik")).toBe("Hello, Soumik! Welcome to GitHub Actions CI/CD demo.");
});
