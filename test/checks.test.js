const assert = require('assert');
const { checkRuns } = require('../lib/checks');

const r = checkRuns();
assert.ok(r.runs.length > 0);
assert.strictEqual(r.unknown, 0);
console.log('checks: ok (' + r.runs.length + ' entries)');
