// Make the Judge Smile — program/v1 entry.
// Writes one original line about a small good thing that happened today
// to /output/entry.txt. Deterministic, no network, no secrets.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The stray cat that bolts from me every morning waited on the step today and blinked slowly — like we'd finally agreed on something.";

const trimmed = LINE.trim();

if (trimmed.length === 0) {
  console.error("error: entry line is empty or only whitespace");
  process.exit(1);
}
if (trimmed.includes("\n") || trimmed.includes("\r")) {
  console.error("error: entry must be a single line");
  process.exit(1);
}
if (trimmed.length > 200) {
  console.error(`error: entry is ${trimmed.length} characters, over the 200 limit`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", trimmed + "\n", "utf8");
console.log(`wrote /output/entry.txt (${trimmed.length} chars)`);
