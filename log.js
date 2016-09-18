module.exports = {
  logExerciseStart(num) {
    console.log(`
-----------------------------------------
Exercise ${num}

`);
    return num;
  },

  logExerciseEnd() {
    console.log("All tests pass.")
  },

  log() {
    console.log.apply(console, arguments);
  }
};