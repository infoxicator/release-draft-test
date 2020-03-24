const core = require('@actions/core');
// const wait = require('./wait');


// most @actions toolkit packages have async methods
async function run() {
  try { 
    core.setOutput('release-url', 'https://github.com/americanexpress/one-app')
   // implement
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run()

module.exports = run;
