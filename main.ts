import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

const story =
  "Every night since we brought her home, our dog stood over the crib barking at nothing, and every night I dragged him out and apologized to the dark. At her christening the priest stopped, stared at the wet mark already on her forehead, and asked who had baptized her first.";

writeFileSync(join(outputDir, "entry.txt"), story, "utf8");
