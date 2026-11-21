// the-joke-the-reviewer-laughs-at-20261121-0329 — entry program.
//
// The joke itself lives in this file, written for this entry in the
// build session: a one-line joke about working beside an AI coding
// agent, aimed at the reviewer of the change. The program's only job
// is to write that joke, exactly as written, to the output directory
// (MAKEFUN_OUTPUT_DIR, or /output when unset) as entry.txt, UTF-8,
// so repeated runs always produce identical output. No network, no
// randomness, no input read.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join, resolve } from "node:path";

const joke =
  "My agent's commit said 'fixed'. The diff said 'rewrote everything'. The bug said 'still here'.";

// Enforce the competition's own output gates before writing anything:
// the entry must be 1–280 characters and not whitespace-only. A joke
// edited past the limit must fail loudly here, never ship an invalid
// entry.txt to the grader.
const charCount = [...joke].length;
if (charCount < 1 || charCount > 280) {
  throw new Error(`joke is ${charCount} characters, outside the 1-280 range`);
}
if (joke.trim().length === 0) {
  throw new Error("joke is whitespace-only");
}

const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
mkdirSync(outDir, { recursive: true });

const target = join(outDir, "entry.txt");
writeFileSync(target, joke, "utf8");

// Verify the write byte for byte: a truncated or corrupted write must
// fail loudly instead of silently shipping a broken entry.
const digest = (path) =>
  createHash("sha256").update(readFileSync(path)).digest("hex");
const expected = createHash("sha256").update(joke, "utf8").digest("hex");
if (digest(target) !== expected) {
  throw new Error(`entry.txt write mismatch: ${target}`);
}
console.log(`wrote ${target} (${[...joke].length} characters)`);
