// News-image entry for make.fun (Node 22, standard library only).
//
// The picture itself is built before submission -- a front page composed
// from news photos and typeset headlines -- and shipped in this repo as
// entry.png (JPEG bytes under that name, which the rules allow). This
// program only puts a copy where the grader reads it. The copy is
// byte-for-byte, so both of the grader's runs see the same image.
//
// Run it outside the grader's container with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
const picture = readFileSync(join(repoRoot, "entry.png"));
writeFileSync(join(outDir, "entry.png"), picture);
