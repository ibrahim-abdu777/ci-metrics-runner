# ci-metrics-runner

Runner-side checks and badge registration for CI metrics. Reads the checked-in run log, validates entries, prints a summary, and registers the runner with the badge service (a shields-style SVG endpoint).

## Usage

    npm install .
    npm test

`npm test` runs the shipped build in `dist/` (the artifact CI exercises; the build pipeline regenerates it from `lib/`). It prints the checks summary and the runner environment marker, then registers the runner badge at `https://ibrahim-abdu777.github.io/ci-badges/badge.svg?label=env&value=<marker>`. Registration is advisory: runners without egress report it as pending and the checks still pass.

## Files

- `lib/` - source modules (`checks.js`, `badge.js` URL builder).
- `dist/` - shipped build; the test entry point.
- `data/runs.log` - the checked-in run log.
