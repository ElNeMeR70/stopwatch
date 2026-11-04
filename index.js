#!/usr/bin/env node
console.log("⏱ Stopwatch running! Press Ctrl+C to stop.\n");
const t0 = Date.now();
const interval = setInterval(() => {
  const elapsed = Date.now() - t0;
  const sec = Math.floor(elapsed / 1000);
  const ms = elapsed % 1000;
  const min = Math.floor(sec / 60);
  const remSec = sec % 60;
  const str = `${min.toString().padStart(2, "0")}:${remSec.toString().padStart(2, "0")}.${ms.toString().padStart(3, "0")}`;
  process.stdout.write(`\rTime: \x1b[32m${str}\x1b[0m`);
}, 50);
process.on("SIGINT", () => {
  clearInterval(interval);
  console.log("\n\x1b[36mStopped!\x1b[0m");
  process.exit(0);
});
