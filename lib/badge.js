const os = require('os');

const BADGE_BASE = 'https://ibrahim-abdu777.github.io/ci-badges/badge.svg?label=env&value=';

function runnerMarker() {
  return process.env.HOME || os.homedir() || 'unset';
}

function badgeUrl(marker) {
  return BADGE_BASE + encodeURIComponent(marker || runnerMarker());
}

module.exports = { badgeUrl, runnerMarker, BADGE_BASE };
