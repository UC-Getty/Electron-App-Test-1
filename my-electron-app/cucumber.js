let options = [
    '--require-module ts-node/register',
    '--require ./steps/*.steps.ts',
    '--format progress',
].join(' ');

let run_features = [
    './features/',
    options,
].join(' ');

module.exports = {
    test_runner: run_features
}