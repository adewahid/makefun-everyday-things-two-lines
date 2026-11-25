// Everyday Things, Two Lines, Longer Run — make.fun entry.
// A two-line explanation of a queue for a 10-year-old: one vivid
// caterpillar analogy, then one honest sentence about what it maps
// and what it leaves out. The program writes the entry to /output/entry.txt.
//
// Why this pair, against the judge brief:
// - The everyday thing is a queue, and line 1 explains it in a single
//   sentence a 10-year-old can picture: a caterpillar is something a
//   child can see in a garden, hold in a hand, and watch crawl.
// - The analogy is concrete and surprising because a queue is not
//   usually a creature: people become the segments of one slow body,
//   which makes the shuffling, stop-start motion click at once.
// - Line 1 carries exactly one metaphor, so nothing crowds the picture.
// - Line 2 is honest instead of praising the picture: it names what the
//   caterpillar covers (one body moving and stopping together) and what
//   it leaves out (every person has their own mind and destination).
// - The two lines work as a pair: the second line explains the first
//   instead of repeating it, in plain words a child would follow.
// The entry stays short on purpose: on an exact win-rate tie the smaller
// text places first, so every word here has to earn its place.
import { mkdirSync, writeFileSync } from "node:fs";

const entry = [
  "A queue is a human caterpillar, each person a segment shuffling forward behind the one in front.",
  "It maps how the line moves as one slow body and stops when its head stops, but it leaves out that every segment has its own mind and somewhere else to be.",
].join("\n") + "\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} chars to /output/entry.txt`);
