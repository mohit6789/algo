const assert = require('assert').strict;
const fs = require('fs')

const runner = (fn) => {
  if(process.argv.length !== 3) {
    throw new Error("Please pass JSON filename");
  }
  const fileName = process.argv[2];
  try {
    const fileData = fs.readFileSync(`./inputs/${fileName}.json`, 'utf8');
    let data = JSON.parse(fileData);
    data.forEach(({inputs, output}) => {
      const result = fn(...inputs);
      assert.deepEqual(result, output, `Fail for "${inputs}" => expected "${result}" actual "${output}"`);
    });
    console.log("Executed successfully.");
  } catch (e) {
    console.error("Error when reading inputs", e);
  }
}

module.exports = {
  runner
}