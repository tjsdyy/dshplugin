import { createRequire } from "node:module";
import { spawnSync } from "node:child_process";

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
if (result.status !== 0) process.exit(result.status ?? 1);

try {
  require.resolve(binding);
  console.log(`[prebuild] Installed and verified ${binding}.`);
} catch {
  console.error(`[prebuild] ${binding} is still unavailable after installation.`);
  process.exit(1);
}
