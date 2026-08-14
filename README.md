# DeepSeek Harness Plugin Marketplace

[![Plugins](https://img.shields.io/badge/DeepSeek_Harness_Plugins-154-5660dc)](https://github.com/tjsdyy/dshplugin)
[![Live](https://img.shields.io/badge/Live-DSH_Market-3d9f6f)](https://dshplugin.io/)
[![License](https://img.shields.io/badge/license-community_directory-24242b)](#license--disclaimer)

A searchable, bilingual **DeepSeek Harness plugin** marketplace and community directory. Discover tools, UI extensions, memory, automation, integrations, runtime components, and playful add-ons for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness).

**Live directory:** [English](https://dshplugin.io/) · [中文](https://dshplugin.io/zh/) · [Submit a plugin](https://github.com/tjsdyy/dshplugin/issues/new?labels=plugin-submission)

## What is a DeepSeek Harness plugin?

A DeepSeek Harness plugin is an installable bundle that extends or replaces part of the agent harness. Plugins can add model-callable tools, user interfaces, memory, model providers, sandboxes, session storage, integrations, and workflow automation. Each plugin declares its extension points through a `dsh.bundle` manifest.

## Quick start

Install the plugin finder first:

```bash
dsh plugin --profile web add github:awesome-dsh-plugin/dsh-find-plugin
```

Then ask your agent to find a plugin, or browse the marketplace for a copy-ready install command.

## Plugin categories

- [UI](#ui) — 28 plugins · UI 增强
- [Sessions](#sessions) — 16 plugins · 会话与消息
- [Tools](#tools) — 42 plugins · 工具与能力
- [Automation](#automation) — 14 plugins · 工作流与自动化
- [Integrations](#integrations) — 10 plugins · 通知与集成
- [Runtime](#runtime) — 33 plugins · 开发与运行时
- [Fun](#fun) — 11 plugins · 娱乐

## All DeepSeek Harness plugins

### UI

**28 plugins · UI 增强**

- [**dsh-tianshu-tui**](https://github.com/huiliyi37/dsh-tianshu-tui) — A terminal UI (TUI) for DeepSeek Harness. · `dsh plugin --profile web add github:huiliyi37/dsh-tianshu-tui`
- [**deepseek-harness-tui**](https://github.com/openma-ai/deepseek-harness-tui) — A Rust/ratatui terminal client that speaks the DSH SDK JSON-RPC protocol directly and runs standalone or as a profile bundle. · `dsh plugin --profile web add github:openma-ai/deepseek-harness-tui`
- [**dsh-at-file**](https://github.com/omdsh-dev/dsh-at-file) — Codex-style `@file` mentions: search workspace files in the composer and attach their contents to prompts. · `dsh plugin --profile web add github:omdsh-dev/dsh-at-file`
- [**ui-status-label**](https://github.com/alingalingling/ui-status-label) — Customize the "deep diving" thinking status label to anything you like. · `dsh plugin --profile web add github:alingalingling/ui-status-label`
- [**dsh-openpencil**](https://github.com/ZSeven-W/dsh-openpencil) — OpenPencil design preview and editing plugin. · `dsh plugin --profile web add github:ZSeven-W/dsh-openpencil`
- [**dsh-visualize**](https://github.com/Nagi-ovo/dsh-visualize) — In-conversation generative UI: the model renders interactive HTML cards into the chat stream, with streaming preview and sandboxed rendering. · `dsh plugin --profile web add github:Nagi-ovo/dsh-visualize`
- [**dsh-side-panel**](https://github.com/ccq1/dsh-side-panel) — Side panel with file browser, terminal, and Git review for quick file previews. · `dsh plugin --profile web add github:ccq1/dsh-side-panel`
- [**dsh-focus-chat**](https://github.com/dingyi222666/dsh-focus-chat) — A "focus chat" minimal view that shows only final outputs. · `dsh plugin --profile web add github:dingyi222666/dsh-focus-chat`
- [**dsh-genui**](https://github.com/omdsh-dev/dsh-genui) — Interactive UI components rendered inline in replies: layout, charts, forms, quizzes, mermaid, 3D scenes, and an action event loop back to the model. · `dsh plugin --profile web add github:omdsh-dev/dsh-genui`
- [**dsh-annotation**](https://github.com/omdsh-dev/dsh-annotation) — Select text → annotate → send with your message; replies map back to each annotation. · `dsh plugin --profile web add github:omdsh-dev/dsh-annotation`
- [**dsh-navbar**](https://github.com/vlln/dsh-navbar) — Conversation node navigation bar for quick jumps between user messages. · `dsh plugin --profile web add github:vlln/dsh-navbar`
- [**dsh-task-status**](https://github.com/vlln/dsh-task-status) — Background task status bar: progress plus live output tail on the chat page. · `dsh plugin --profile web add github:vlln/dsh-task-status`
- [**dsh-web-archive**](https://github.com/renat3u/dsh-web-archive) — Collapse noisy messages (Think, Bash, etc.) in conversations. · `dsh plugin --profile web add github:renat3u/dsh-web-archive`
- [**dsh-spotlight**](https://github.com/0xsline/dsh-spotlight) — Keyboard-first command palette for the DSH Web UI. · `dsh plugin --profile web add github:0xsline/dsh-spotlight`
- [**dsh-101**](https://github.com/bill9109/dsh-101) — Document reading mode for DSH. · `dsh plugin --profile web add github:bill9109/dsh-101`
- [**dsh-drag-and-drop**](https://github.com/bill9109/dsh-drag-and-drop) — Cross-platform file drag-and-drop with raw path insertion, no file copying. · `dsh plugin --profile web add github:bill9109/dsh-drag-and-drop`
- [**dsh-deeplink**](https://github.com/qyw233/dsh-deeplink) — Deep links: open a specific session or workspace via `?session=` / `?workspace=`. · `dsh plugin --profile web add github:qyw233/dsh-deeplink`
- [**dsh-diff-viewer**](https://github.com/lehhair/dsh-diff-viewer) — PiUI-style diff viewer replacing the stock DiffBlock for write/edit tool calls. · `dsh plugin --profile web add github:lehhair/dsh-diff-viewer`
- [**ex-setting**](https://github.com/omdsh-dev/ex-setting) — Settings extensions for DSH. · `dsh plugin --profile web add github:omdsh-dev/ex-setting`
- [**web-components**](https://github.com/omdsh-dev/web-components) — Web Components support. · `dsh plugin --profile web add github:omdsh-dev/web-components`
- [**dsh-turn-navigator**](https://github.com/vibeinging/dsh-turn-navigator) — Turn navigation for the DSH Web UI. · `dsh plugin --profile web add github:vibeinging/dsh-turn-navigator`
- [**dsh-milestone**](https://github.com/SnowCrescenter-tech/dsh-milestone) — Right-side dot-timeline rail: jump between user messages. · `dsh plugin --profile web add github:SnowCrescenter-tech/dsh-milestone`
- [**dsh-balance-meter**](https://github.com/Ghost011118/dsh-balance-meter) — DeepSeek account balance and session cost in the composer dock, with auto-fetched official pricing and peak/off-peak support. · `dsh plugin --profile web add github:Ghost011118/dsh-balance-meter`
- [**dsh-plugin-deepseek-balance**](https://github.com/fishxcode/dsh-plugin-deepseek-balance) — DeepSeek API balance, balance trend, and daily usage charts in DSH Web settings. · `dsh plugin --profile web add github:fishxcode/dsh-plugin-deepseek-balance`
- [**ds-api-usage**](https://github.com/Sev7een/ds-api-usage) — DeepSeek API balance and 24-hour usage dashboard in Settings, with estimated spend, token counts, request counts, and an hourly timeline. · `dsh plugin --profile web add github:Sev7een/ds-api-usage`
- [**dsh-TUI**](https://github.com/ccch1mneyyy/dsh-TUI) — Claude Code-style full-screen terminal UI: pixel-whale header, live status line, and streaming thought expansion. · `dsh plugin --profile web add github:ccch1mneyyy/dsh-TUI`
- [**DSH-better-sidebar**](https://github.com/omdsh-dev/DSH-better-sidebar) — Full sidebar workbench with file rendering and editing, terminal, Git, and subagents; third-party plugins can register new tabs. · `dsh plugin --profile web add github:omdsh-dev/DSH-better-sidebar`
- [**dsh-sticky-disclosure**](https://github.com/Han-1413141/dsh-sticky-disclosure) — One-click collapse of every expanded section (Think rows, tool cards) with a live-count pill and a customizable hotkey. · `dsh plugin --profile web add github:Han-1413141/dsh-sticky-disclosure`

### Sessions

**16 plugins · 会话与消息**

- [**dsh-turn-rewind**](https://github.com/Anionex/dsh-turn-rewind) — Rewind conversation and workspace state, powered by a persistent Change Ledger. · `dsh plugin --profile web add github:Anionex/dsh-turn-rewind`
- [**dsh-crosstalk**](https://github.com/Jesse-njx/dsh-crosstalk) — Cross-session messaging for DSH: any session on the machine can list and message any other, Claude Code-style, via a local heartbeat registry and inbox. · `dsh plugin --profile web add github:Jesse-njx/dsh-crosstalk`
- [**distill**](https://github.com/LoserFox/distill) — Automatic conversation distillation: background subagent reflection + skill create/update. · `dsh plugin --profile web add github:LoserFox/distill`
- [**dsh-share**](https://github.com/hellodigua/dsh-share) — Share your conversations with one click. · `dsh plugin --profile web add github:hellodigua/dsh-share`
- [**dsh-message-edit**](https://github.com/Moeblack/dsh-message-edit) — Branch-based message editing, reroll, retry, and a version timeline. · `dsh plugin --profile web add github:Moeblack/dsh-message-edit`
- [**dsh-mnemon**](https://github.com/omdsh-dev/dsh-mnemon) — Deep Mnemon integration: local three-tier memory (Runtime Memory, retrievable Documents, supervised Memory Spaces). · `dsh plugin --profile web add github:omdsh-dev/dsh-mnemon`
- [**dsh-mneme**](https://github.com/modusensus/dsh-mneme) — Cross-session memory: SQLite with a human-editable Markdown mirror, background consolidation (dedup, merge, conflict resolution), and six memory tools. · `dsh plugin --profile web add github:modusensus/dsh-mneme`
- [**nowledge-mem-deepseek-harness**](https://github.com/nowledge-co/nowledge-mem-deepseek-harness) — One memory layer for every AI tool and agent: Context Bundle injection, prompt-time recall, MCP tools, and turn-end DSH thread capture. · `dsh plugin --profile web add github:nowledge-co/nowledge-mem-deepseek-harness`
- [**dsh-memory**](https://github.com/Jesse-njx/dsh-memory) — Cited memory over DSH's lossless session log: distilled facts carry `(sessionId, eventRange)` citations that expand back to the exact original log excerpt. · `dsh plugin --profile web add github:Jesse-njx/dsh-memory`
- [**dsh-plugin-asmemory**](https://github.com/Xplore-LAB/dsh-plugin-asmemory) — Action-state time memory: record typed states and actions, then analyze trends, anomalies, and causality. · `dsh plugin --profile web add github:Xplore-LAB/dsh-plugin-asmemory`
- [**dsh-sidechain**](https://github.com/Buyi-wsgzg/dsh-sidechain) — `/side` persistent side sessions and `/btw` one-shot side questions, run in a temporary fork without touching main history. · `dsh plugin --profile web add github:Buyi-wsgzg/dsh-sidechain`
- [**dsh-conversation-share**](https://github.com/bill9109/dsh-conversation-share) — Share any excerpt of a conversation. · `dsh plugin --profile web add github:bill9109/dsh-conversation-share`
- [**dsh-explain**](https://github.com/yuezengwu/dsh-explain) — Local-first learning mode: cross-session learning threads with per-source explanations. · `dsh plugin --profile web add github:yuezengwu/dsh-explain`
- [**dsh-prompt-studio**](https://github.com/Moeblack/dsh-prompt-studio) — Edit user and built-in system-prompt sections with live preview. · `dsh plugin --profile web add github:Moeblack/dsh-prompt-studio`
- [**dsh-chat-import**](https://github.com/Nwflower/dsh-chat-import) — Import Claude Code / Codex / ChatGPT / Cursor / Gemini / Reasonix / opencode chat histories as resumable DeepSeek Harness sessions. · `dsh plugin --profile web add github:Nwflower/dsh-chat-import`
- [**dsh-interconnect**](https://github.com/Chinesezjc/dsh-interconnect) — Cross-instance message and event handoff between DSH instances via an interconnect server. · `dsh plugin --profile web add github:Chinesezjc/dsh-interconnect`

### Tools

**42 plugins · 工具与能力**

- [**dsh-bash-terminal**](https://github.com/MAXeaglet/dsh-bash-terminal) — One shell tool for PowerShell / Git Bash / WSL on Windows plus an interactive PTY terminal; the default terminal is chosen by the user in DSH settings. · `dsh plugin --profile web add github:MAXeaglet/dsh-bash-terminal`
- [**dsh-vision-toolkit**](https://github.com/Anionex/dsh-vision-toolkit) — Vision tasks for text-only models: intent-aware image Q&A, long-screenshot OCR, UI reproduction, grounding, and pixel diff. · `dsh plugin --profile web add github:Anionex/dsh-vision-toolkit`
- [**dsh-custom-tool**](https://github.com/omdsh-dev/dsh-custom-tool) — Create and manage sandboxed JavaScript tools with a Monaco editor and model-driven tool lifecycle. · `dsh plugin --profile web add github:omdsh-dev/dsh-custom-tool`
- [**dsh-computer-use**](https://github.com/Anionex/dsh-computer-use) — Accessibility-first macOS computer use: fresh observations, stale-state rejection, scoped permissions, and safe input. · `dsh plugin --profile web add github:Anionex/dsh-computer-use`
- [**dsh-data-agent**](https://github.com/omdsh-dev/dsh-data-agent) — Let the AI connect to databases and write SQL for you. · `dsh plugin --profile web add github:omdsh-dev/dsh-data-agent`
- [**dsh-toolkit**](https://github.com/omdsh-dev/dsh-toolkit) — Zero-dependency toolkit: time / encoding / json / calculator / csv / regex / markdown / diff / stat / schema — ten deterministic tools in one install. · `dsh plugin --profile web add github:omdsh-dev/dsh-toolkit`
- [**dsh-tool-csv**](https://github.com/omdsh-dev/dsh-tool-csv) — Parse/query/aggregate/convert CSV (RFC 4180) with a zero-dependency state-machine parser. · `dsh plugin --profile web add github:omdsh-dev/dsh-tool-csv`
- [**dsh-tool-calculator**](https://github.com/omdsh-dev/dsh-tool-calculator) — Safe math expression evaluator, zero-dependency recursive-descent parser. · `dsh plugin --profile web add github:omdsh-dev/dsh-tool-calculator`
- [**dsh-tool-diff**](https://github.com/omdsh-dev/dsh-tool-diff) — Structured comparison and unified diffs for text/JSON/CSV/Markdown. · `dsh plugin --profile web add github:omdsh-dev/dsh-tool-diff`
- [**dsh-tool-encoding**](https://github.com/omdsh-dev/dsh-tool-encoding) — base64/url/hex encoding, common hashes, and UUID generation. · `dsh plugin --profile web add github:omdsh-dev/dsh-tool-encoding`
- [**dsh-tool-json**](https://github.com/omdsh-dev/dsh-tool-json) — JSON queries with a JMESPath subset. · `dsh plugin --profile web add github:omdsh-dev/dsh-tool-json`
- [**dsh-tool-markdown**](https://github.com/omdsh-dev/dsh-tool-markdown) — HTML↔Markdown conversion, GFM table normalization, and TOC generation. · `dsh plugin --profile web add github:omdsh-dev/dsh-tool-markdown`
- [**dsh-tool-regex**](https://github.com/omdsh-dev/dsh-tool-regex) — Test/extract/safe-replace/statically explain regexes without executing code. · `dsh plugin --profile web add github:omdsh-dev/dsh-tool-regex`
- [**dsh-tool-schema**](https://github.com/omdsh-dev/dsh-tool-schema) — JSON Schema validation: validate/paths/explain/normalize. · `dsh plugin --profile web add github:omdsh-dev/dsh-tool-schema`
- [**dsh-tool-stat**](https://github.com/omdsh-dev/dsh-tool-stat) — Descriptive statistics, percentiles, frequency distributions, and correlation. · `dsh plugin --profile web add github:omdsh-dev/dsh-tool-stat`
- [**dsh-tool-time**](https://github.com/omdsh-dev/dsh-tool-time) — Strict ISO 8601 parsing, IANA timezone conversion, and UTC calendar arithmetic. · `dsh plugin --profile web add github:omdsh-dev/dsh-tool-time`
- [**dsh-kb-sieve**](https://github.com/omdsh-dev/dsh-kb-sieve) — Build auditable KB packs (SQLite FTS5) from md/txt/docx/pdf with deterministic retrieval and original-text reading. · `dsh plugin --profile web add github:omdsh-dev/dsh-kb-sieve`
- [**dsh-plugin-mineru**](https://github.com/HuanLinOTO/dsh-plugin-mineru) — Expose MineRU document parsing tools to the model. · `dsh plugin --profile web add github:HuanLinOTO/dsh-plugin-mineru`
- [**dsh-cowork**](https://github.com/Jesse-njx/dsh-cowork) — Bounded, cell-addressed `doc_read`/`doc_write` for xlsx / pdf / docx / pptx / ipynb, plus an MCP server and CLI. · `dsh plugin --profile web add github:Jesse-njx/dsh-cowork`
- [**dsh-skillport**](https://github.com/Jesse-njx/dsh-skillport) — Bring your existing Agent Skills (SKILL.md) library to DSH: discover skills across Claude/Codex/Cursor/Gemini paths, inject a progressive-disclosure index, and load bodies on demand. · `dsh plugin --profile web add github:Jesse-njx/dsh-skillport`
- [**dsh-tool-search**](https://github.com/vibeinging/dsh-tool-search) — Per-agent on-demand tool discovery and progressive schema disclosure. · `dsh plugin --profile web add github:vibeinging/dsh-tool-search`
- [**dsh-openmaic**](https://github.com/THU-MAIC/dsh-openmaic) — OpenMAIC: classrooms, slides, interactive widgets, and Socratic teaching. · `dsh plugin --profile web add github:THU-MAIC/dsh-openmaic`
- [**dsh-scholar**](https://github.com/lzszq/dsh-scholar) — Academic assistant plugin. · `dsh plugin --profile web add github:lzszq/dsh-scholar`
- [**dsh-apple-mode**](https://github.com/jihongboo/dsh-apple-mode) — Xcode AI integration for DSH: 26 Xcode MCP tools (mcpbridge) + Apple platform skills + Xcode Intelligence-style persona (agent preset or global bundle). · `dsh plugin --profile web add github:jihongboo/dsh-apple-mode`
- [**dsh-continual-evolve**](https://github.com/ZK-Andy/dsh-continual-evolve) — Continual self-evolution: versioned, auditable, rollback-safe harness state (prompts, memory, skills, subagent specs) refined from session trajectories, with review gates and hot-reloaded skills. · `dsh plugin --profile web add github:ZK-Andy/dsh-continual-evolve`
- [**dsh-recommend**](https://github.com/zp-home/dsh-recommend) — Transparent rankings and recommendations for the DSH plugin ecosystem: daily auto-fetched topic data, an open scoring model, and rank/search/recommend tools with a settings-page leaderboard. · `dsh plugin --profile web add github:zp-home/dsh-recommend`
- [**modlens**](https://github.com/liustack/modlens) — Vision bridge for text-only models: paste an image, get structured JSON evidence (OCR, layout, semantics). · `dsh plugin --profile web add github:liustack/modlens`
- [**dsh-find-plugin**](https://github.com/awesome-dsh-plugin/dsh-find-plugin) — Find plugins without leaving the agent: search this curated registry by keyword or category, with ready-to-run install commands. · `dsh plugin --profile web add github:awesome-dsh-plugin/dsh-find-plugin`
- [**dsh-code-intel**](https://github.com/lonelymoon87/dsh-code-intel) — Indexes workspace symbols with Tree-sitter and provides lexical or optional embedding-assisted code search. · `dsh plugin --profile web add github:lonelymoon87/dsh-code-intel`
- [**dsh-subagent-tools**](https://github.com/lynx-gt/dsh-subagent-tools) — Per-call model, provider, persona, and toolFilter overrides for subagent delegation, with @preset: references and provider/model composite ids. · `dsh plugin --profile web add github:lynx-gt/dsh-subagent-tools`
- [**dsh-subagent-cwd**](https://github.com/lynx-gt/dsh-subagent-cwd) — Extends dsh-subagent-tools with a per-call cwd for subagents, shipped with the two in-process provider patches it requires. · `dsh plugin --profile web add github:lynx-gt/dsh-subagent-cwd`
- [**dsh-voice**](https://github.com/Jesse-njx/dsh-voice) — Voice notes in, spoken answers out: dictate audio that becomes user messages (transcribe), have the agent read replies aloud (speak), local-first under ~/.dsh/voice. · `dsh plugin --profile web add github:Jesse-njx/dsh-voice`
- [**dsh-docker**](https://github.com/Jesse-njx/dsh-docker) — Typed, guarded container control: ps/logs/inspect/exec/start/stop and compose up/down with JSON output, project-aware targeting, and approval-gated destructive ops. · `dsh plugin --profile web add github:Jesse-njx/dsh-docker`
- [**dsh-excel-chat**](https://github.com/hccccc01333/dsh-excel-chat) — Talk to Excel in DeepSeek Harness: create, edit, repair, and verify spreadsheets by conversation, with automatic formula health checks after every edit. · `dsh plugin --profile web add github:hccccc01333/dsh-excel-chat`
- [**dsh-context-proxy**](https://github.com/EvilIrving/dsh-context-proxy) — Thin on-demand context retrieval: context_query / context_slice / context_grep tools that read already-persisted history back with replay-safe citations. · `dsh plugin --profile web add github:EvilIrving/dsh-context-proxy`
- [**@zhaoolee/dsh-notes**](https://github.com/zhaoolee/notes) — Export DSH conversations as Smartisan Notes-style PNGs, or create and update Markdown notes in a configured account-scoped workspace. · `dsh plugin --profile web add github:zhaoolee/notes`
- [**dsh-figma-to-lottie**](https://github.com/zimai233/dsh-figma-to-lottie) — Compile SVG paths and keyframe specs into self-contained Lottie JSON animation files. · `dsh plugin --profile web add github:zimai233/dsh-figma-to-lottie`
- [**dsh-exam-countdown**](https://github.com/zimai233/dsh-exam-countdown) — Query 64 Chinese exams (高考/考研/四六级/CPA/法考…) with rule-aware date math (2nd-Saturday, 1st-Sunday) and countdowns. · `dsh plugin --profile web add github:zimai233/dsh-exam-countdown`
- [**dsh-wash-calendar**](https://github.com/zimai233/dsh-wash-calendar) — Recurring-habit scheduling from pure date math: next occurrence, range schedules, and overdue advice. · `dsh plugin --profile web add github:zimai233/dsh-wash-calendar`
- [**dsh-adhd-copilot**](https://github.com/zimai233/dsh-adhd-copilot) — ADHD behavioral coaching skill: task breakdown, overwhelm management, launch rituals, and failure recovery. · `dsh plugin --profile web add github:zimai233/dsh-adhd-copilot`
- [**dsh-image-search**](https://github.com/zimai233/dsh-image-search) — Multi-engine reverse image search aggregator: Google Lens, Baidu, Yandex, TinEye, SauceNAO, IQDB, Ascii2d. · `dsh plugin --profile web add github:zimai233/dsh-image-search`
- [**dsh-video-downloader**](https://github.com/zimai233/dsh-video-downloader) — Detect and download media from Bilibili/YouTube/Douyin/Xiaohongshu with quality and format analysis. · `dsh plugin --profile web add github:zimai233/dsh-video-downloader`

### Automation

**14 plugins · 工作流与自动化**

- [**dsh_workflow**](https://github.com/icetomoyo/dsh_workflow) — UltraCode-style multi-agent orchestration: a generatable, savable, governable, observable, resumable workflow layer. · `dsh plugin --profile web add github:icetomoyo/dsh_workflow`
- [**dsh-agent-teams**](https://github.com/NanmiCoder/dsh-agent-teams) — AgentTeams multi-agent teams. · `dsh plugin --profile web add github:NanmiCoder/dsh-agent-teams`
- [**dsh-automation**](https://github.com/titanwings/dsh-automation) — Scheduled coding runs in fresh agent sessions with auditable history. · `dsh plugin --profile web add github:titanwings/dsh-automation`
- [**dsh-routines**](https://github.com/Jesse-njx/dsh-routines) — Scheduled agents on a cron: run a prompt on a schedule and get the digest where you already are, with overlap/missed-run/timeout safety defaults. · `dsh plugin --profile web add github:Jesse-njx/dsh-routines`
- [**dsh-plannotator**](https://github.com/titanwings/dsh-plannotator) — Plan review with anchored annotations and structured feedback back to the agent. · `dsh plugin --profile web add github:titanwings/dsh-plannotator`
- [**dsh-loop**](https://github.com/vlln/dsh-loop) — Recurring loops: `/loop` command + loop tool + activity status bar. · `dsh plugin --profile web add github:vlln/dsh-loop`
- [**dsh-sentinel**](https://github.com/fuhefei/dsh-sentinel) — Condition-driven wakeup: durable file/command/http/process/webhook watches that wake the agent. · `dsh plugin --profile web add github:fuhefei/dsh-sentinel`
- [**dsh-deep-research**](https://github.com/omdsh-dev/dsh-deep-research) — Adaptive deep-research orchestrator built on the official workflow engine. · `dsh plugin --profile web add github:omdsh-dev/dsh-deep-research`
- [**dsh-inspect**](https://github.com/omdsh-dev/dsh-inspect) — Adversarial checkup → fix → review loop toolset. · `dsh plugin --profile web add github:omdsh-dev/dsh-inspect`
- [**dsh-track**](https://github.com/fakechris/dsh-track) — Embedded task management engine: decision-point protocol, idea capture wall, Linear-style issue store. · `dsh plugin --profile web add github:fakechris/dsh-track`
- [**dsh-advisor**](https://github.com/btspoony/dsh-advisor) — Pair a second model that passively reviews each turn and injects notes. · `dsh plugin --profile web add github:btspoony/dsh-advisor`
- [**dsh-specflow**](https://github.com/lonelymoon87/dsh-specflow) — Adds specification artifacts, skills, commands, goal-backed implementation, and task-progress context. · `dsh plugin --profile web add github:lonelymoon87/dsh-specflow`
- [**dsh-science**](https://github.com/biociao/dsh-science) — Claude Science-style research workbench: ReAct research-loop engine (research_* tools), versioned artifacts with provenance (artifact_* tools), and 10 science skills for genomics/pathogens/bioinformatics. · `dsh plugin --profile web add github:biociao/dsh-science`
- [**dsh-proof**](https://github.com/EvilIrving/dsh-proof) — Independent read-only acceptance layer: spawns a read-only verifier before each top-level turn closes and steers non-pass gaps back into the agent. · `dsh plugin --profile web add github:EvilIrving/dsh-proof`

### Integrations

**10 plugins · 通知与集成**

- [**dsh-open-in-vscode**](https://github.com/omdsh-dev/dsh-open-in-vscode) — Open DSH workspace directories in VS Code directly from the web GUI. · `dsh plugin --profile web add github:omdsh-dev/dsh-open-in-vscode`
- [**dsh-notification**](https://github.com/omdsh-dev/dsh-notification) — Desktop notifications for turn completions, with per-outcome controls and keyword rules. · `dsh plugin --profile web add github:omdsh-dev/dsh-notification`
- [**dsh-acp-for-bitfun**](https://github.com/bobleer/dsh-acp-for-bitfun) — ACP bridge between BitFun and DSH. · `dsh plugin --profile web add github:bobleer/dsh-acp-for-bitfun`
- [**deepseek-harness-acp**](https://github.com/openma-ai/deepseek-harness-acp) — ACP profile plugin and standalone stdio server for using the full DSH agent from Zed and other ACP clients while sharing DSH credentials and sessions. · `dsh plugin --profile web add github:openma-ai/deepseek-harness-acp`
- [**telegram**](https://github.com/LoserFox/telegram) — Bridge to the Telegram Bot API: long polling, per-chat sessions, HTML formatting. · `dsh plugin --profile web add github:LoserFox/telegram`
- [**dsh-chatnode-wechat**](https://github.com/Jesse-njx/dsh-chatnode-wechat) — Chat with, monitor, and approve your DSH agents from WeChat via the iLink gateway: text both ways, session targeting, digest heartbeats, and numbered approval prompts. · `dsh plugin --profile web add github:Jesse-njx/dsh-chatnode-wechat`
- [**dsh-session-notification**](https://github.com/dingyi222666/dsh-session-notification) — Notifications for four session states, with browser alerts and prompts. · `dsh plugin --profile web add github:dingyi222666/dsh-session-notification`
- [**dsh-web-ui-notify**](https://github.com/bill9109/dsh-web-ui-notify) — Desktop notification reminders. · `dsh plugin --profile web add github:bill9109/dsh-web-ui-notify`
- [**dsh-webbridge**](https://github.com/bill9109/dsh-webbridge) — DSH meets Kimi WebBridge. · `dsh plugin --profile web add github:bill9109/dsh-webbridge`
- [**dsh-im-bridge**](https://github.com/BiBoyang/dsh-im-bridge) — Two-way WeChat (iLink) bridge: turn-end and approval-request push, in-chat approve/reject and message injection, persistent dedup and convergent long-reply chunking; channel layer extensible to other IMs. · `dsh plugin --profile web add github:BiBoyang/dsh-im-bridge`

### Runtime

**33 plugins · 开发与运行时**

- [**fabric**](https://github.com/omdsh-dev/fabric) — An MC-Fabric-style hook processor. · `dsh plugin --profile web add github:omdsh-dev/fabric`
- [**dsh-git-identity**](https://github.com/LoserFox/dsh-git-identity) — Pin Git commits to the environment's own author identity; env-var injection overrides all `git config` settings. · `dsh plugin --profile web add github:LoserFox/dsh-git-identity`
- [**dsh-context-doctor**](https://github.com/Zhenyu98/dsh-context-doctor) — Context injection audit: token costs of instruction chains / skill catalogs / tool schemas, duplicate and conflict detection. · `dsh plugin --profile web add github:Zhenyu98/dsh-context-doctor`
- [**dsh-plugin-check**](https://github.com/omdsh-dev/dsh-plugin-check) — Plugin health checks: manifest protocol / patch format / build traps, zero-dependency and read-only. · `dsh plugin --profile web add github:omdsh-dev/dsh-plugin-check`
- [**dsh-security-audit**](https://github.com/omdsh-dev/dsh-security-audit) — Local security audit: config, plugin origins, sessions, network exposure — read-only redacted risk report. · `dsh plugin --profile web add github:omdsh-dev/dsh-security-audit`
- [**dsh-session-health**](https://github.com/omdsh-dev/dsh-session-health) — Frame-level scan diagnostics for session files (torn/corrupt/empty detection). · `dsh plugin --profile web add github:omdsh-dev/dsh-session-health`
- [**dsh-evolve**](https://github.com/william-jin-cmu/dsh-evolve) — Self-evolution: the agent hot-mounts/removes persistent plugins on itself mid-session. · `dsh plugin --profile web add github:william-jin-cmu/dsh-evolve`
- [**dsh-trace**](https://github.com/vibeinging/dsh-trace) — Telemetry backend exporting turns, model steps, and tool calls to yiTrace. · `dsh plugin --profile web add github:vibeinging/dsh-trace`
- [**sandbox-micro**](https://github.com/omdsh-dev/sandbox-micro) — Support for the microsandbox backend. · `dsh plugin --profile web add github:omdsh-dev/sandbox-micro`
- [**sandbox-mxc**](https://github.com/omdsh-dev/sandbox-mxc) — Microsoft cross-platform sandbox support. · `dsh plugin --profile web add github:omdsh-dev/sandbox-mxc`
- [**sandbox-nono**](https://github.com/omdsh-dev/sandbox-nono) — Support for the nono sandbox backend. · `dsh plugin --profile web add github:omdsh-dev/sandbox-nono`
- [**dsh-agent-budget**](https://github.com/vibeinging/dsh-agent-budget) — Agent-tree token budget management. · `dsh plugin --profile web add github:vibeinging/dsh-agent-budget`
- [**dsh-llm-fallbacks**](https://github.com/btspoony/dsh-llm-fallbacks) — Role-based LLM retry & fallback strategies. · `dsh plugin --profile web add github:btspoony/dsh-llm-fallbacks`
- [**dsh-polyglot**](https://github.com/Jesse-njx/dsh-polyglot) — The model switch for DSH: point it at any OpenAI-compatible endpoint, with curated free/cheap DeepSeek provider presets and automatic fallback when a free tier rate-limits you. · `dsh plugin --profile web add github:Jesse-njx/dsh-polyglot`
- [**dsh-codex-connect**](https://github.com/franksong2702/dsh-codex-connect) — Connect ChatGPT OAuth and OpenAI Codex models to DeepSeek Harness, with opt-in search and image tools. · `dsh plugin --profile web add github:franksong2702/dsh-codex-connect`
- [**dsh-tool-approval**](https://github.com/ilharp/dsh-tool-approval) — Manual approval mode ("Manual Mode" / "Ask Mode"). · `dsh plugin --profile web add github:ilharp/dsh-tool-approval`
- [**dsh-turn-approval**](https://github.com/arrow949/dsh-turn-approval) — Turn-scoped “Allow for this task” approvals: automatically allow matching `danger-full-access` escalations only for the current task, then expire. · `dsh plugin --profile web add github:arrow949/dsh-turn-approval`
- [**plugin-template**](https://github.com/omdsh-dev/plugin-template) — Plugin template repo (based on the official turtle-ui repo). · `dsh plugin --profile web add github:omdsh-dev/plugin-template`
- [**Qwen-MM-Plugins**](https://github.com/omdsh-dev/Qwen-MM-Plugins) — Qwen multi-modal plugin support. · `dsh plugin --profile web add github:omdsh-dev/Qwen-MM-Plugins`
- [**dsh-tps**](https://github.com/Small-tailqwq/dsh-tps) — A TPS metrics plugin. · `dsh plugin --profile web add github:Small-tailqwq/dsh-tps`
- [**dsh-fail-logger**](https://github.com/Areium/dsh-fail-logger) — Auto-log failed tool calls across native tools, PTC run_code, and inline invocations: dedup and count root causes into a skill so repeated mistakes fade. · `dsh plugin --profile web add github:Areium/dsh-fail-logger`
- [**dsh-eval-harness**](https://github.com/BiBoyang/dsh-eval-harness) — Evaluation harness for DSH plugins: YAML cases drive real headless agent runs, assert on tool calls, args, results and token usage, with a baseline gate for CI regression. · `dsh plugin --profile web add github:BiBoyang/dsh-eval-harness`
- [**oh-dsh**](https://github.com/hust-open-atom-club/oh-dsh) — Community distribution: TUI, desktop, and Web UI as one bundle with layered installation. · `dsh plugin --profile web add github:hust-open-atom-club/oh-dsh`
- [**dsh-annotate**](https://github.com/BrambleXu/dsh-annotate) — Select browser elements directly during Vibe Coding and send structured visual feedback to the DeepSeek Harness Agent. · `dsh plugin --profile web add github:BrambleXu/dsh-annotate`
- [**dsh-prompt-profile**](https://github.com/BrambleXu/dsh-prompt-profile) — Reusable Markdown prompt profiles for DeepSeek Harness with per-turn model selection, argument substitution, and state restoration. · `dsh plugin --profile web add github:BrambleXu/dsh-prompt-profile`
- [**dsh-revdiff**](https://github.com/BrambleXu/dsh-revdiff) — Native interactive Git diff review for DeepSeek Harness with structured annotations sent back to the current Agent session. · `dsh plugin --profile web add github:BrambleXu/dsh-revdiff`
- [**dsh-gitflow**](https://github.com/lonelymoon87/dsh-gitflow) — Adds approval-gated Git status, diff, log, commit, branch, and optional checkpoint tools. · `dsh plugin --profile web add github:lonelymoon87/dsh-gitflow`
- [**dsh-guardian**](https://github.com/lonelymoon87/dsh-guardian) — Adds dangerous-operation policy checks, output redaction, and a security-review workflow. · `dsh plugin --profile web add github:lonelymoon87/dsh-guardian`
- [**dsh-plugin-manager**](https://github.com/Jesse-njx/dsh-plugin-manager) — The `dsh pm` plugin manager: multi-source search (awesome list + GitHub + npm), install/remove/update per profile, and a doctor audit of manifests, bundle patches, and version drift. · `dsh plugin --profile web add github:Jesse-njx/dsh-plugin-manager`
- [**dsh-tmuxctl**](https://github.com/Jesse-njx/dsh-tmuxctl) — Take control of your tmux panes: list/send-keys/capture, run long jobs in a pane with watch mode, and approval-gated destructive commands. · `dsh plugin --profile web add github:Jesse-njx/dsh-tmuxctl`
- [**dsh-updater-ui**](https://github.com/xingyingyuzhui/dsh-updater-ui) — DSH self-updater in the settings page: one-click check/pull (git pull --ff-only), auto background checks, version diff and changelog preview with a red-dot reminder. · `dsh plugin --profile web add github:xingyingyuzhui/dsh-updater-ui`
- [**dsh-repro**](https://github.com/EvilIrving/dsh-repro) — /repro exports a minimal, secret-scrubbed, replayable problem bundle: the session log, failed commands, and git diff. · `dsh plugin --profile web add github:EvilIrving/dsh-repro`
- [**dsh-mcp-panel**](https://github.com/PerryLink/dsh-mcp-panel) — Read-only runtime management panel for the official DSH MCP client: connection status, registered tools, errors, and reconnect counts through the /mcp command and a Settings tab, with sanitized display and enable/disable patch suggestions. · `dsh plugin --profile web add github:PerryLink/dsh-mcp-panel`

### Fun

**11 plugins · 娱乐**

- [**dsh-ads**](https://github.com/Nagi-ovo/dsh-ads) — Parody ads in 2005-Chinese-web style: sidebar banners, in-chat feeds, corner popups, and a close button whose hit area is smaller than it looks. All fictional. · `dsh plugin --profile web add github:Nagi-ovo/dsh-ads`
- [**dsh-gomoku**](https://github.com/omdsh-dev/dsh-gomoku) — Play Gomoku against the AI, or let two AIs battle it out. · `dsh plugin --profile web add github:omdsh-dev/dsh-gomoku`
- [**dsh-stock-market**](https://github.com/AnacondaKC/dsh-stock-market) — Fixes the bug where your account can't lose money while you code. · `dsh plugin --profile web add github:AnacondaKC/dsh-stock-market`
- [**dsh-emoji**](https://github.com/hellodigua/dsh-emoji) — Automatically add emojis to AI replies. · `dsh plugin --profile web add github:hellodigua/dsh-emoji`
- [**dsh-minigames**](https://github.com/lhh010/dsh-minigames) — Side-panel arcade: 18 offline mini-games to play while the model thinks. · `dsh plugin --profile web add github:lhh010/dsh-minigames`
- [**dsh-stickers**](https://github.com/william-jin-cmu/dsh-stickers) — Bidirectional sticker reactions between user and agent. · `dsh plugin --profile web add github:william-jin-cmu/dsh-stickers`
- [**whale-girl**](https://github.com/vlln/whale-girl) — Desktop pet (QQ-pet style): floats in the corner, draggable, feedable, playable. · `dsh plugin --profile web add github:vlln/whale-girl`
- [**deepseek-manners**](https://github.com/Moeblack/deepseek-manners) — Append a thank-you note after every message. Mind your manners. · `dsh plugin --profile web add github:Moeblack/deepseek-manners`
- [**dsh-plugin-d399**](https://github.com/HuanLinOTO/dsh-plugin-d399) — Pops up a mini-game menu (wordle, match-3, extensible) while the model generates. · `dsh plugin --profile web add github:HuanLinOTO/dsh-plugin-d399`
- [**dsh-auto-chess**](https://github.com/omdsh-dev/dsh-auto-chess) — Auto chess: human vs AI, or AI vs AI. · `dsh plugin --profile web add github:omdsh-dev/dsh-auto-chess`
- [**dsh-douyin**](https://github.com/AnacondaKC/dsh-douyin) — Short-video sidebar: native player, series navigation, precise history replay. · `dsh plugin --profile web add github:AnacondaKC/dsh-douyin`

## How to choose and install plugins

1. Search by capability, category, plugin name, or maintainer.
2. Open the plugin repository and review its source, dependencies, and permissions.
3. Copy the install command from the marketplace or this README.
4. Add the plugin to the intended DSH profile and reload the Harness experience.
5. Test compatibility before combining plugins that patch the same extension point.

## 中文说明

DSH Market 是一个中英双语的 **DeepSeek Harness Plugin 插件市场**，收录界面增强、会话记忆、工具能力、自动化、通知集成、运行时和娱乐类社区插件。访问[中文插件目录](https://dshplugin.io/zh/)可搜索、筛选并复制安装命令。

## Development

```bash
npm ci --include=dev --include=optional
npm run dev
```

Production build:

```bash
npm run build
npm run start
```

The project uses Next.js, Tailwind CSS, Vinext, and a Nixpacks build configuration.

## Contributing

To add or update a plugin, [open a plugin submission issue](https://github.com/tjsdyy/dshplugin/issues/new?labels=plugin-submission). Include the plugin name, repository, category, English and Chinese descriptions, install command, and confirmation that the repository declares a `dsh.bundle` manifest.

## License & disclaimer

This is a community-maintained directory. Plugins are developed by their respective authors; listing is not an endorsement or security guarantee. Installing a plugin runs third-party code on your machine. Review the source, dependencies, permissions, and maintenance status before installation.

DeepSeek Harness and DeepSeek are trademarks of their respective owners. This community project is not affiliated with DeepSeek.
