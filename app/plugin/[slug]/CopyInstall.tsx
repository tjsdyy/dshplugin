"use client";

import { useState } from "react";

export default function CopyInstall({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);
  async function handleCopy() {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }
  return <button className={copied ? "detail-copy copied" : "detail-copy"} onClick={handleCopy}>{copied ? "已复制安装命令 ✓" : "复制安装命令"}</button>;
}
