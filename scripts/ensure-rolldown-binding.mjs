import { createRequire } from "node:module";
import { spawnSync } from "node:child_process";
import { mkdtempSync, mkdirSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const require = createRequire(import.meta.url);
const version = "1.0.1";

function detectBinding() {
  const { platform, arch } = process;
  if (platform === "linux") {
    const report = process.report?.getReport();
    const isGlibc = Boolean(report?.header?.glibcVersionRuntime);
    const libc = isGlibc ? "gnu" : "musl";
    if (arch === "x64" || arch === "arm64") return `@rolldown/binding-linux-${arch}-${libc}`;
  }
  if (platform === "darwin" && (arch === "x64" || arch === "arm64")) return `@rolldown/binding-darwin-${arch}`;
  if (platform === "win32" && (arch === "x64" || arch === "arm64")) return `@rolldown/binding-win32-${arch}-msvc`;
  return null;
}

const binding = detectBinding();
if (!binding) {
  console.warn(`[prebuild] No explicit Rolldown binding mapping for ${process.platform}/${process.arch}; using Rolldown fallback resolution.`);
  process.exit(0);
}

try {
  require.resolve(binding);
  console.log(`[prebuild] Found ${binding}.`);
  process.exit(0);
} catch {
  console.log(`[prebuild] ${binding} is missing; installing it explicitly.`);
}

const npmCli = process.env.npm_execpath;
const command = npmCli ? process.execPath : "npm";
const args = npmCli
  ? [npmCli, "install", "--no-save", "--include=dev", "--include=optional", `${binding}@${version}`]
  : ["install", "--no-save", "--include=dev", "--include=optional", `${binding}@${version}`];
const env = { ...process.env, NPM_CONFIG_PRODUCTION: "false", NPM_CONFIG_OPTIONAL: "true", NPM_CONFIG_OMIT: "" };
const result = spawnSync(command, args, { stdio: "inherit", env });
if (result.status !== 0) console.warn(`[prebuild] npm install did not complete; falling back to direct package extraction.`);

try {
  require.resolve(binding);
  console.log(`[prebuild] Installed and verified ${binding}.`);
} catch {
  console.warn(`[prebuild] npm did not materialize ${binding}; downloading its tarball directly.`);
  const staging = mkdtempSync(join(tmpdir(), "rolldown-binding-"));
  const packArgs = npmCli
    ? [npmCli, "pack", `${binding}@${version}`, "--pack-destination", staging, "--json"]
    : ["pack", `${binding}@${version}`, "--pack-destination", staging, "--json"];
  const packed = spawnSync(command, packArgs, { encoding: "utf8", env });
  if (packed.status !== 0) {
    process.stderr.write(packed.stderr || "");
    rmSync(staging, { recursive: true, force: true });
    process.exit(packed.status ?? 1);
  }
  let filename;
  try {
    filename = JSON.parse(packed.stdout)[0].filename;
  } catch {
    console.error("[prebuild] Could not determine the downloaded binding tarball name.");
    rmSync(staging, { recursive: true, force: true });
    process.exit(1);
  }
  const target = join(process.cwd(), "node_modules", ...binding.split("/"));
  mkdirSync(target, { recursive: true });
  const extracted = spawnSync("tar", ["-xzf", join(staging, filename), "-C", target, "--strip-components=1"], { stdio: "inherit" });
  rmSync(staging, { recursive: true, force: true });
  if (extracted.status !== 0) process.exit(extracted.status ?? 1);
  try {
    require.resolve(binding);
    console.log(`[prebuild] Extracted and verified ${binding}.`);
  } catch {
    console.error(`[prebuild] ${binding} is still unavailable after direct extraction.`);
    process.exit(1);
  }
}
