// Define the Cucumber options where the path to the feature and step are defined
// Declare the options and export them as a module with the name ‘test_runner.’

let options = [
    '--require-module ts-node/register', // Load TypeScript module  
    '--require ./steps/*.steps.ts', // Load step definitions
    '--format progress', // Load custom formatter
    '--format json:./Reports/myApp_test_report.json',
].join(' ');

let run_features = [
    './features/', // Specify our feature files
    options,
].join(' ');

module.exports = {
    test_runner: run_features
}