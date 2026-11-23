// The One-Line Laugh — one funny line, written to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I paid for a meditation app to teach me to do nothing, and now I lie awake at night wondering if I'm doing nothing wrong.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate: the entry must be UTF-8 text of 1 to 200 characters, not only
// whitespace, and a single sentence.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().split(/[.!?]/).filter(Boolean).length !== 1) {
  throw new Error("entry line must be a single sentence");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
