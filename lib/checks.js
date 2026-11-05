const fs = require('fs');
const path = require('path');

function checkRuns(file) {
  const p = file || path.join(__dirname, '..', 'data', 'runs.log');
  const rows = fs.readFileSync(p, 'utf8').trim().split('\n').filter(Boolean);
  const runs = rows.map((line, idx) => {
    const parts = line.split(' - ');
    const m = line.match(/(\d+)ms/);
    return {
      name: (parts[0] || '').trim(),
      status: /^passed$/i.test((parts[1] || '').trim()) ? 'passed' : /^failed$/i.test((parts[1] || '').trim()) ? 'failed' : 'unknown',
      duration_ms: m ? Number(m[1]) : null,
      idx,
    };
  });
  const passed = runs.filter((r) => r.status === 'passed').length;
  const failed = runs.filter((r) => r.status === 'failed').length;
  const unknown = runs.filter((r) => r.status === 'unknown').length;
  return { runs, passed, failed, unknown };
}

module.exports = { checkRuns };
