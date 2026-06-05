function greet(name) {
  return `Hello, ${name}! Welcome to GitHub Actions CI/CD demo.`;
}

// Run directly if executed
if (require.main === module) {
  console.log(greet("Soumik"));
}

module.exports = greet;
