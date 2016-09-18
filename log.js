module.exports = {
  logExerciseStart(num) {
    console.log(`
-----------------------------------------
Exercise ${num}
`);
    return num;
  },

  logExerciseEnd() {
    console.log("Test passed.")
  },

  log() {
    console.log.apply(console, arguments);
  }
};