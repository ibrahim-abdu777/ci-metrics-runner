#!/usr/bin/env node
const { registerBadge, runnerMarker } = require('../lib/badge');

(async () => {
  const m = runnerMarker();
  const r = await registerBadge(m);
  console.log(r.ok ? 'registered: ' + r.url : 'registration pending (' + (r.status || 'no egress') + '): ' + r.url);
})();
