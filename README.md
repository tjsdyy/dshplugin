# DeepSeek Harness Plugin Marketplace

[![Plugins](https://img.shields.io/badge/DeepSeek_Harness_Plugins-268-5660dc)](https://github.com/tjsdyy/dshplugin)
[![Live](https://img.shields.io/badge/Live-DSH_Market-3d9f6f)](https://dshplugin.io/)
[![Auto sync](https://img.shields.io/badge/catalog-auto--synced-24242b)](https://github.com/tjsdyy/dshplugin/actions/workflows/sync-plugins.yml)

A searchable, bilingual **DeepSeek Harness plugin** marketplace and curated community directory. Discover UI extensions, themes, memory, tools, skills, automation, integrations, model providers, runtime components, and playful add-ons.

**Live directory:** [English](https://dshplugin.io/) · [中文](https://dshplugin.io/zh/) · [Submit a plugin](https://github.com/tjsdyy/dshplugin/issues/new?labels=plugin-submission)

## What is a DeepSeek Harness plugin?

A DeepSeek Harness plugin is an installable bundle that extends or replaces part of the agent harness. Plugins can add model-callable tools, user interfaces, memory, model providers, sandboxes, session storage, integrations, and workflow automation. Each listed project includes a copy-ready install command.

## Quick start

Install the plugin finder:

```bash
dsh plugin --profile web add github:awesome-dsh-plugin/dsh-find-plugin
```

Then ask your agent to find a plugin, or browse the marketplace. The catalog is validated and synchronized automatically from the curated community registry.

## Plugin categories

- [UI](#ui) — 59 plugins · UI 增强
- [Themes](#themes) — 3 plugins · 主题与外观
- [Sessions](#sessions) — 16 plugins · 会话与消息
- [Memory](#memory) — 13 plugins · 记忆
- [Tools](#tools) — 69 plugins · 工具与能力
- [Skills](#skills) — 1 plugins · 技能包
- [Automation](#automation) — 23 plugins · 工作流与自动化
- [Integrations](#integrations) — 17 plugins · 通知与集成
- [Models](#models) — 7 plugins · 模型与账号接入
- [Runtime](#runtime) — 43 plugins · 开发与运行时
- [Fun](#fun) — 17 plugins · 娱乐

## UI

**59 plugins · UI 增强**

- [**dsh-plugin-hub**](https://github.com/Noob-stupid/dsh-plugin-hub) — A plugin management panel: one-click enable/disable for installed plugins plus a GitHub dsh-plugin marketplace with details and one-click installs. · `dsh plugin --profile web add github:Noob-stupid/dsh-plugin-hub`
- [**dsh-tianshu-tui**](https://github.com/huiliyi37/dsh-tianshu-tui) — A terminal UI (TUI) for DeepSeek Harness. · `dsh plugin --profile web add github:huiliyi37/dsh-tianshu-tui`
- [**deepseek-harness-tui**](https://github.com/openma-ai/deepseek-harness-tui) — A Rust/ratatui terminal client that speaks the DSH SDK JSON-RPC protocol directly and runs standalone or as a profile bundle. · `dsh plugin --profile web add github:openma-ai/deepseek-harness-tui`
- [**dsh-at-file**](https://github.com/omdsh-dev/dsh-at-file) — Codex-style `@file` mentions: search workspace files in the composer and attach their contents to prompts. · `dsh plugin --profile web add github:omdsh-dev/dsh-at-file`
- [**ui-status-label**](https://github.com/alingalingling/ui-status-label) — Customize the "deep diving" thinking status label to anything you like. · `dsh plugin --profile web add github:alingalingling/ui-status-label`
- [**dsh-openpencil**](https://github.com/ZSeven-W/dsh-openpencil) — OpenPencil design preview and editing plugin. · `dsh plugin --profile web add @zseven-w/dsh-openpencil`
- [**dsh-visualize**](https://github.com/Nagi-ovo/dsh-visualize) — In-conversation generative UI: the model renders interactive HTML cards into the chat stream, with streaming preview and sandboxed rendering. · `dsh plugin --profile web add github:Nagi-ovo/dsh-visualize`
- [**dsh-side-panel**](https://github.com/ccq1/dsh-side-panel) — Side panel with file browser, terminal, and Git review for quick file previews. · `dsh plugin --profile web add github:ccq1/dsh-side-panel`
- [**dsh-focus-chat**](https://github.com/dingyi222666/dsh-focus-chat) — A "focus chat" minimal view that shows only final outputs. · `dsh plugin --profile web add github:dingyi222666/dsh-focus-chat`
- [**dsh-genui**](https://github.com/omdsh-dev/dsh-genui) — Interactive UI components rendered inline in replies: layout, charts, forms, quizzes, mermaid, 3D scenes, and an action event loop back to the model. · `dsh plugin --profile web add github:omdsh-dev/dsh-genui`
- [**dsh-annotation**](https://github.com/omdsh-dev/dsh-annotation) — Select text → annotate → send with your message; replies map back to each annotation. · `dsh plugin --profile web add github:omdsh-dev/dsh-annotation`
- [**dsh-navbar**](https://github.com/vlln/dsh-navbar) — Conversation node navigation bar for quick jumps between user messages. · `dsh plugin --profile web add github:vlln/dsh-navbar`
- [**dsh-message-preview**](https://github.com/asukasec/dsh-message-preview) — Right-edge user-message navigator with an adaptive block layout that fits the available height, plus hover previews, keyboard controls, and click-to-jump navigation. · `dsh plugin --profile web add github:asukasec/dsh-message-preview`
- [**dsh-task-status**](https://github.com/vlln/dsh-task-status) — Background task status bar: progress plus live output tail on the chat page. · `dsh plugin --profile web add github:vlln/dsh-task-status`
- [**dsh-answer-pet**](https://github.com/Nanki-nn/dsh-answer-pet) — Animated blue-whale desktop pet with per-session response progress, model activity and tool-call traces, token counts, output speed, elapsed time, and collapsible multi-session status cards. · `dsh plugin --profile web add github:Nanki-nn/dsh-answer-pet`
- [**dsh-web-archive**](https://github.com/renat3u/dsh-web-archive) — Collapse noisy messages (Think, Bash, etc.) in conversations. · `dsh plugin --profile web add github:renat3u/dsh-web-archive`
- [**dsh-spotlight**](https://github.com/0xsline/dsh-spotlight) — Keyboard-first command palette for the DSH Web UI. · `dsh plugin --profile web add github:0xsline/dsh-spotlight`
- [**dsh-101**](https://github.com/bill9109/dsh-101) — Document reading mode for DSH. · `dsh plugin --profile web add github:bill9109/dsh-101`
- [**dsh-drag-and-drop**](https://github.com/bill9109/dsh-drag-and-drop) — Cross-platform file drag-and-drop with raw path insertion, no file copying. · `dsh plugin --profile web add github:bill9109/dsh-drag-and-drop`
- [**dsh-file-uploads**](https://github.com/l541402398/dsh-file-uploads) — Upload arbitrary local files from the Web composer, show pending cards, and manage stored files in Settings. · `dsh plugin --profile web add github:l541402398/dsh-file-uploads`
- [**dsh-deeplink**](https://github.com/qyw233/dsh-deeplink) — Deep links: open a specific session or workspace via `?session=` / `?workspace=`. · `dsh plugin --profile web add github:qyw233/dsh-deeplink`
- [**dsh-diff-viewer**](https://github.com/lehhair/dsh-diff-viewer) — PiUI-style diff viewer replacing the stock DiffBlock for write/edit tool calls. · `dsh plugin --profile web add github:lehhair/dsh-diff-viewer`
- [**ex-setting**](https://github.com/omdsh-dev/ex-setting) — Settings extensions for DSH. · `dsh plugin --profile web add github:omdsh-dev/ex-setting`
- [**web-components**](https://github.com/omdsh-dev/web-components) — Web Components support. · `dsh plugin --profile web add github:omdsh-dev/web-components`
- [**dsh-turn-navigator**](https://github.com/vibeinging/dsh-turn-navigator) — Turn navigation for the DSH Web UI. · `dsh plugin --profile web add github:vibeinging/dsh-turn-navigator`
- [**dsh-milestone**](https://github.com/SnowCrescenter-tech/dsh-milestone) — Right-side dot-timeline rail: jump between user messages. · `dsh plugin --profile web add github:SnowCrescenter-tech/dsh-milestone`
- [**dsh-balance-meter**](https://github.com/Ghost011118/dsh-balance-meter) — DeepSeek account balance and session cost in the composer dock, with auto-fetched official pricing and peak/off-peak support. · `dsh plugin --profile web add github:Ghost011118/dsh-balance-meter`
- [**dsh-opencode-go-usage**](https://github.com/v587d/dsh-opencode-go-usage) — OpenCode Go subscription usage (rolling/weekly/monthly windows with reset countdowns) in the composer dock, with a built-in credential editor. · `dsh plugin --profile web add github:v587d/dsh-opencode-go-usage`
- [**dsh-cost-meter**](https://github.com/Han-1413141/dsh-cost-meter) — Per-session and daily API cost, budget with usage %, official balance, history dashboard, and one-click official price sync with peak/off-peak pricing. · `dsh plugin --profile web add github:Han-1413141/dsh-cost-meter`
- [**dsh-plugin-deepseek-balance**](https://github.com/fishxcode/dsh-plugin-deepseek-balance) — DeepSeek API balance, balance trend, and daily usage charts in DSH Web settings. · `dsh plugin --profile web add github:fishxcode/dsh-plugin-deepseek-balance`
- [**ds-api-usage**](https://github.com/Sev7een/ds-api-usage) — DeepSeek API balance and 24-hour usage dashboard in Settings, with estimated spend, token counts, request counts, and an hourly timeline. · `dsh plugin --profile web add github:Sev7een/ds-api-usage`
- [**dsh-spend**](https://github.com/nonewind/dsh-spend) — Token usage and estimated spend for the dsh web UI: floating panel with per-model, per-day, and per-session stats. · `dsh plugin --profile web add dsh-spend`
- [**dsh-TUI**](https://github.com/ccch1mneyyy/dsh-TUI) — Claude Code-style full-screen terminal UI: pixel-whale header, live status line, and streaming thought expansion. · `dsh plugin --profile web add github:ccch1mneyyy/dsh-TUI`
- [**DSH-better-sidebar**](https://github.com/omdsh-dev/DSH-better-sidebar) — Full sidebar workbench with file rendering and editing, terminal, Git, and subagents; third-party plugins can register new tabs. · `dsh plugin --profile web add github:omdsh-dev/DSH-better-sidebar`
- [**dsh-sticky-disclosure**](https://github.com/Han-1413141/dsh-sticky-disclosure) — One-click collapse of every expanded section (Think rows, tool cards) with a live-count pill and a customizable hotkey. · `dsh plugin --profile web add github:Han-1413141/dsh-sticky-disclosure`
- [**dsh-sticky-note**](https://github.com/Meredith2328/dsh-sticky-note) — Quick sticky notes on the composer toolbar: jot ideas or TODOs, auto-saved as Markdown, one click to send into the chat. · `dsh plugin --profile web add github:Meredith2328/dsh-sticky-note`
- [**dsh-web-attention-badge**](https://github.com/Luaphes/dsh-web-attention-badge) — Attention reminders: frame badge, tab-title count, and a status-colored whale favicon for sessions waiting for input or finished unopened. · `dsh plugin --profile web add dsh-web-attention-badge`
- [**dsh-web-ui**](https://github.com/zhu1090093659/dsh-web-ui) — Plugin and skin collection for the DSH Web UI: task board, Git graph, right-side panel, remote mobile UI, pet, live token stats, and a skin center. · `dsh plugin --profile web add github:zhu1090093659/dsh-web-ui`
- [**dsh-pet**](https://github.com/zealot00/dsh-pet) — Desktop pet for the DSH Web UI: sprite-sheet animation, agent state linkage, drag, alarm (daily/one-shot) and pomodoro widgets, skin picker with preview. · `dsh plugin --profile web add github:zealot00/dsh-pet`
- [**dsh-builtin-toggles**](https://github.com/Starfie1d1272/dsh-builtin-toggles) — Adds a built-in plugin catalog to DSH Web with search, status explanations, and safe toggles for audited UI plugins. · `dsh plugin --profile web add dsh-builtin-toggles`
- [**dsh-ux**](https://github.com/jiangnanquan/dsh-ux) — Solarized light theme, compact layout, think/tool-chain collapse capsules, and balance, session cost, and usage dashboards for the DSH web UI. · `dsh plugin --profile web add github:jiangnanquan/dsh-ux`
- [**dsh-hud**](https://github.com/a903067276-rgb/dsh-hud) — HUD status panel: Git status, MCP servers, skills, model and token usage in a floating side panel. · `dsh plugin --profile web add github:a903067276-rgb/dsh-hud`
- [**dsh-plugins#turn-scrubber**](https://github.com/wsxwj123/dsh-plugins/tree/main/packages/turn-scrubber) — Compact right-edge turn rail with hover summaries and click-to-jump navigation. · `dsh plugin --profile web add github:wsxwj123/dsh-plugins/tree/main/packages/turn-scrubber`
- [**dsh-cost-meter**](https://github.com/Sttrevens/dsh-cost-meter) — Per-turn USD cost badge in the Web UI: session total in the header and per-turn cost in each message footer, with a hover breakdown. · `dsh plugin --profile web add @steven-wu/dsh-cost-meter`
- [**dsh-file-mentions**](https://github.com/a903067276-rgb/dsh-file-mentions) — Clickable file paths in DSH replies: Codex-style inline open, reveal in file manager, and a mentioned-files chip list at the turn tail. · `dsh plugin --profile web add github:a903067276-rgb/dsh-file-mentions`
- [**dsh-calculator**](https://github.com/bobcat848/dsh-calculator) — DeepSeek API spend (current session and all sessions) and account balance in the aside panel, with official pricing and peak/off-peak support. · `dsh plugin --profile web add github:bobcat848/dsh-calculator`
- [**dsh-deepseek-billing**](https://github.com/Jolly-J/dsh-deepseek-billing) — DeepSeek account balance and per-session cost card in the sidebar foot. · `dsh plugin --profile web add github:Jolly-J/dsh-deepseek-billing`
- [**dsh-drag-and-drop**](https://github.com/AKIRACOD/dsh-drag-and-drop) — File-drag fork: drop documents as removable chips above the composer, send without typing. · `dsh plugin --profile web add github:AKIRACOD/dsh-drag-and-drop`
- [**dsh-auto-continue**](https://github.com/HsiangNianian/dsh-auto-continue) — Auto-resumes interrupted DSH Web requests: sends a queued 「继续」 after network, timeout or host-crash failures, with error classification, adaptive backoff, templated continue text and browser notifications. · `dsh plugin --profile web add dsh-client-auto-continue`
- [**dsh-chat-outline**](https://github.com/liliuCourier/dsh-chat-outline) — Persistent left-hand conversation outline: questions and final replies per turn, keyword filter, one-click jump. · `dsh plugin --profile web add dsh-chat-outline`
- [**dsh-token-usage**](https://github.com/LaoYueHanNi/dsh-token-usage) — Per-request model token usage tracked to per-day JSONL files, with a stats page in Web settings: daily trend chart, per-model breakdown, and date/model filters. · `dsh plugin --profile web add github:LaoYueHanNi/dsh-token-usage`
- [**dsh-mic-input**](https://github.com/QT-Chen/dsh-mic-input) — Microphone voice input for the composer: browser Web Speech API live transcription, dedupe/auto-continue, smart punctuation, language and auto-send settings. · `dsh plugin --profile web add github:QT-Chen/dsh-mic-input`
- [**dsh-eva-theme-plugin**](https://github.com/oceanxuikun/dsh-eva-theme-plugin) — Neon Genesis Evangelion themed surfaces for the DeepSeek Harness Web GUI — three unit schemes (Unit-01/00/02), full-element palettes, mecha art in the sidebar, in-GUI switcher. Installable via `dsh plugin --profile web add <this-dir>`. · `dsh plugin --profile web add github:oceanxuikun/dsh-eva-theme-plugin`
- [**dsh-ui-archived-panel**](https://github.com/huahai0202/dsh-ui-archived-panel) — Sidebar Archived entry + archived-session panel with unarchive and delete, for the DeepSeek Harness web GUI · `dsh plugin --profile web add github:huahai0202/dsh-ui-archived-panel`
- [**dsh-theme-palettes**](https://github.com/RainbowDashy/dsh-theme-palettes) — Palette infrastructure for DeepSeek Harness: scheme-mapped theme palettes with built-in VSCode Red and a third-party registration API. · `dsh plugin --profile web add github:RainbowDashy/dsh-theme-palettes`
- [**chiral-pulse**](https://github.com/MoonShadow1976/chiral-pulse) — CHIRAL PULSE — a Death Stranding-styled BB pod vital-signs monitor for the DeepSeek Harness web UI: the session's heartbeat waveform is the hero, and the pulse reacts to real agent activity. · `dsh plugin --profile web add github:MoonShadow1976/chiral-pulse`
- [**@deepseek-ai/dsh-lab-kit**](https://github.com/Suxeca/dsh-plugin) — Research Lab Cockpit: Scans workspace research projects and displays them in the Web GUI sidebar, the first DSH custom plugin for research workflows. · `dsh plugin --profile web add github:Suxeca/dsh-plugin#cde157283028d3d62337ea49a47a5548d08875e8&path:packages/dsh-lab-kit`
- [**@suxeca/dsh-client-ui-session-switcher**](https://github.com/Suxeca/dsh-plugin) — Session quick switch panel: Ctrl+K palette (new/archive/unarchive/rename/search/skin/workspace grouping), Ctrl+[ / ] to cycle through sidebar order, customizable shortcuts within the panel. · `dsh plugin --profile web add github:Suxeca/dsh-plugin#cde157283028d3d62337ea49a47a5548d08875e8&path:packages/dsh-client-ui-session-switcher`
- [**@omdsh-dev/dsh-drag-and-drop**](https://github.com/omdsh-dev/dsh-drag-and-drop) — Drag local files into the DSH Web UI and insert their original filesystem paths without uploading or copying them · `dsh plugin --profile web add github:omdsh-dev/dsh-drag-and-drop`

## Themes

**3 plugins · 主题与外观**

- [**dsh-skin**](https://github.com/KinGao294/dsh-skin) — Codex-style skin switcher plus a custom wallpaper layer with opacity and blur controls. · `dsh plugin --profile web add github:KinGao294/dsh-skin`
- [**dsh-deep-whale**](https://github.com/Small-tailqwq/dsh-deep-whale) — Whale-girl skin series for the DSH Web UI (maid-atelier). · `dsh plugin --profile web add github:Small-tailqwq/dsh-deep-whale`
- [**dsh-plugins#theme-gallery**](https://github.com/wsxwj123/dsh-plugins/tree/main/packages/theme-gallery) — Fifteen curated theme families with complete light and dark palettes that follow the native Light, Dark, and Follow system modes. · `dsh plugin --profile web add github:wsxwj123/dsh-plugins/tree/main/packages/theme-gallery`

## Sessions

**16 plugins · 会话与消息**

- [**dsh-turn-rewind**](https://github.com/Anionex/dsh-turn-rewind) — Rewind conversation and workspace state, powered by a persistent Change Ledger. · `dsh plugin --profile web add github:Anionex/dsh-turn-rewind`
- [**dsh-crosstalk**](https://github.com/Jesse-njx/dsh-crosstalk) — Cross-session messaging for DSH: any session on the machine can list and message any other, Claude Code-style, via a local heartbeat registry and inbox. · `dsh plugin --profile web add github:Jesse-njx/dsh-crosstalk`
- [**task-passport**](https://github.com/dongsheng123132/task-passport) — Carry durable task state across DeepSeek Harness, WorkBuddy, Claude Code and Codex with machine-readable checkpoints and optimistic locking. · `dsh plugin --profile web add github:dongsheng123132/task-passport`
- [**dsh-share**](https://github.com/hellodigua/dsh-share) — Share your conversations with one click. · `dsh plugin --profile web add github:hellodigua/dsh-share`
- [**dsh-message-edit**](https://github.com/Moeblack/dsh-message-edit) — Branch-based message editing, reroll, retry, and a version timeline. · `dsh plugin --profile web add github:Moeblack/dsh-message-edit`
- [**dsh-sidechain**](https://github.com/Buyi-wsgzg/dsh-sidechain) — `/side` persistent side sessions and `/btw` one-shot side questions, run in a temporary fork without touching main history. · `dsh plugin --profile web add github:Buyi-wsgzg/dsh-sidechain`
- [**dsh-conversation-share**](https://github.com/bill9109/dsh-conversation-share) — Share any excerpt of a conversation. · `dsh plugin --profile web add github:bill9109/dsh-conversation-share`
- [**dsh-explain**](https://github.com/yuezengwu/dsh-explain) — Local-first learning mode: cross-session learning threads with per-source explanations. · `dsh plugin --profile web add github:yuezengwu/dsh-explain`
- [**dsh-prompt-studio**](https://github.com/Moeblack/dsh-prompt-studio) — Edit user and built-in system-prompt sections with live preview. · `dsh plugin --profile web add github:Moeblack/dsh-prompt-studio`
- [**dsh-peer-link**](https://github.com/czm15053/dsh-peer-link) — Let dsh and Claude Code sessions message each other directly; comes with a clickable peer list card (sort/search/send/refresh). · `dsh plugin --profile web add github:czm15053/dsh-peer-link`
- [**dsh-chat-import**](https://github.com/Nwflower/dsh-chat-import) — Import Claude Code / Codex / ChatGPT / Cursor / Gemini / Reasonix / opencode chat histories as resumable DeepSeek Harness sessions. · `dsh plugin --profile web add github:Nwflower/dsh-chat-import`
- [**dsh-file-claim**](https://github.com/Nwflower/dsh-file-claim) — File claim/release protection for parallel DSH sessions on the same workspace (heartbeat stale takeover, pending 3-way merge area). · `dsh plugin --profile web add dsh-file-claim`
- [**dsh-interconnect**](https://github.com/Chinesezjc/dsh-interconnect) — Cross-instance message and event handoff between DSH instances via an interconnect server. · `dsh plugin --profile web add github:Chinesezjc/dsh-interconnect`
- [**dsh-prompt-stash**](https://github.com/Wine-Red/dsh-prompt-stash) — Local, per-session LIFO prompt stash for temporarily setting aside unfinished composer text and safely restoring it later. · `dsh plugin --profile web add dsh-prompt-stash`
- [**dsh-side-chat**](https://github.com/heartmove/dsh-side-chat) — Select part of a conversation and ask about it in a right-side side chat; bring AI replies back to the main chat directly or as a summary. · `dsh plugin --profile web add github:heartmove/dsh-side-chat`
- [**dsh-session-export**](https://github.com/bwndlct/dsh-session-export) — Export the current session to portable, schema-versioned Markdown and JSON files via the `session_export` tool and slash commands, with cross-platform-safe filenames. · `dsh plugin --profile web add github:bwndlct/dsh-session-export`

## Memory

**13 plugins · 记忆**

- [**distill**](https://github.com/LoserFox/distill) — Automatic conversation distillation: background subagent reflection + skill create/update. · `dsh plugin --profile web add github:LoserFox/distill`
- [**dsh-mnemon**](https://github.com/omdsh-dev/dsh-mnemon) — Deep Mnemon integration: local three-tier memory (Runtime Memory, retrievable Documents, supervised Memory Spaces). · `dsh plugin --profile web add dsh-mnemon`
- [**dsh-mneme**](https://github.com/modusensus/dsh-mneme) — Cross-session memory: SQLite with a human-editable Markdown mirror, background consolidation (dedup, merge, conflict resolution), and six memory tools. · `dsh plugin --profile web add github:modusensus/dsh-mneme`
- [**nowledge-mem-deepseek-harness**](https://github.com/nowledge-co/nowledge-mem-deepseek-harness) — One memory layer for every AI tool and agent: Context Bundle injection, prompt-time recall, MCP tools, and turn-end DSH thread capture. · `dsh plugin --profile web add github:nowledge-co/nowledge-mem-deepseek-harness`
- [**dsh-memory**](https://github.com/Jesse-njx/dsh-memory) — Cited memory over DSH's lossless session log: distilled facts carry `(sessionId, eventRange)` citations that expand back to the exact original log excerpt. · `dsh plugin --profile web add github:Jesse-njx/dsh-memory`
- [**dsh-memory**](https://github.com/flymysql/dsh-memory) — Cross-session memory vault: remember / recall / forget tools, per-turn prompt injection, and a settings-page entry browser. · `dsh plugin --profile web add github:flymysql/dsh-memory`
- [**dsh-plugin-asmemory**](https://github.com/Xplore-LAB/dsh-plugin-asmemory) — Action-state time memory: record typed states and actions, then analyze trends, anomalies, and causality. · `dsh plugin --profile web add github:Xplore-LAB/dsh-plugin-asmemory`
- [**dsh-memento**](https://github.com/PerryLink/dsh-memento) — Bounded, layered, approval-gated, auditable cross-session memory: a typed `ctx.memory` seam with a zero-dependency SQLite provider, a `memory` tool, and frozen snapshot injection; every write passes the approval gate and stays reconstructable from the session log. · `dsh plugin --profile web add github:PerryLink/dsh-memento`
- [**dsh-file-memory**](https://github.com/ICCuse/dsh-file-memory) — File-backed working memory: memorize/recall key premises verbatim in a session notes file so they survive context compaction losslessly. · `dsh plugin --profile web add github:ICCuse/dsh-file-memory`
- [**dsh-knowledge**](https://github.com/ICCuse/dsh-knowledge) — Bridge into a global Markdown knowledge base shared with the Codex kb.cmd CLI: kb_add/kb_search/kb_show/kb_timeline tools with byte-compatible frontmatter. · `dsh plugin --profile web add github:ICCuse/dsh-knowledge`
- [**dsh-premise-guard**](https://github.com/ICCuse/dsh-premise-guard) — Post-compaction premise-drift guard: injects a one-shot notice when a compaction summary drops a critical literal anchor. · `dsh plugin --profile web add github:ICCuse/dsh-premise-guard`
- [**sgme**](https://github.com/freehul/sgme) — ShiGuang Memory Engine (SGME) bridge: multi-agent shared long-term memory via HTTP — L0/L1/L1.5/L2 distillation, scenario-based injection, unified search, and proactive care signals (memory_search / wiki_search / signal_pull / signal_claim / signal_ack), installable as `dsh-sgme`. · `dsh plugin --profile web add github:freehul/sgme`
- [**dsh-memory-meow**](https://github.com/Phant0Meow/dsh-memory-meow) — Project-scoped cross-session memory: PROJECT.md snapshot injected into the first user message, a memory_remember tool, and auto-reflection after ReAct tasks; each project keeps its own memory file. · `dsh plugin --profile web add github:Phant0Meow/dsh-memory-meow`

## Tools

**69 plugins · 工具与能力**

- [**dsh-vision-router**](https://github.com/ysr666/dsh-vision-router) — Free vision for text-only agents: built-in keyless vision chain plus pixel tools (Q&A, grounding, crop, pixel diff, colors, OCR, SVG trace, cutout, screenshots); paste an image to use it. · `dsh plugin --profile web add github:ysr666/dsh-vision-router`
- [**dsh-vision-proxy**](https://github.com/Flyvhidbwo/dsh-vision-proxy) — DeepSeek brain + automatic image transcription: attach images in the GUI and each one is transcribed to text via any OpenAI-compatible VLM (qwen3.7-flash by default) before reaching the text-only DeepSeek. · `dsh plugin --profile web add github:Flyvhidbwo/dsh-vision-proxy`
- [**dsh-undo-plugin**](https://github.com/lire1131/dsh-undo-plugin) — Undo/redo & rollback system for DSH: every config change is auto-snapshotted; undo/redo/restore to any version from the WebUI or the offline CLI/GUI tools (works even when DSH fails to boot). · `dsh plugin --profile web add github:lire1131/dsh-undo-plugin`
- [**dsh-bash-terminal**](https://github.com/MAXeaglet/dsh-bash-terminal) — One shell tool for PowerShell / Git Bash / WSL on Windows plus an interactive PTY terminal; the default terminal is chosen by the user in DSH settings. · `dsh plugin --profile web add github:MAXeaglet/dsh-bash-terminal`
- [**dsh-vision-toolkit**](https://github.com/Anionex/dsh-vision-toolkit) — Vision tasks for text-only models: intent-aware image Q&A, long-screenshot OCR, UI reproduction, grounding, and pixel diff. · `dsh plugin --profile web add @dsh-external/dsh-vision-toolkit`
- [**dsh-custom-tool**](https://github.com/omdsh-dev/dsh-custom-tool) — Create and manage sandboxed JavaScript tools with a Monaco editor and model-driven tool lifecycle. · `dsh plugin --profile web add github:omdsh-dev/dsh-custom-tool`
- [**dsh-computer-use**](https://github.com/Anionex/dsh-computer-use) — Accessibility-first macOS computer use: fresh observations, stale-state rejection, scoped permissions, and safe input. · `dsh plugin --profile web add github:Anionex/dsh-computer-use`
- [**dsh-mobile-gui-agent**](https://github.com/kunjinkao-os/dsh-mobile-gui-agent) — Android GUI Agent with ADB screenshots, compact UI hierarchy grounding, verified iterative actions, approvals, and a Mobile Web view. · `dsh plugin --profile web add github:kunjinkao-os/dsh-mobile-gui-agent`
- [**dsh-data-agent**](https://github.com/omdsh-dev/dsh-data-agent) — Let the AI connect to databases and write SQL for you. · `dsh plugin --profile web add github:omdsh-dev/dsh-data-agent`
- [**dsh-toolkit**](https://github.com/omdsh-dev/dsh-toolkit) — Zero-dependency toolkit: time / encoding / json / calculator / csv / regex / markdown / diff / stat / schema — ten deterministic tools in one install. · `dsh plugin --profile web add github:omdsh-dev/dsh-toolkit`
- [**dsh-remote**](https://github.com/flymysql/dsh-remote) — Multi-machine remote workspace: manage many SSH hosts, pick a local or remote workspace in the native Add-workspace flow (system folder chooser / local path / remote dir browse), mirror a remote workspace to a real local folder, and operate it with rw_* tools. · `dsh plugin --profile web add github:flymysql/dsh-remote`
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
- [**pack-agent**](https://github.com/sakikoTGW/pack-agent) — Project .pack.json/.pack.zip into .agent-pack/modpacks/ and expose skills via a workspace allow-list. · `dsh plugin --profile web add @sakikotgw/pack-agent`
- [**dsh-tool-search**](https://github.com/vibeinging/dsh-tool-search) — Per-agent on-demand tool discovery and progressive schema disclosure. · `dsh plugin --profile web add github:vibeinging/dsh-tool-search`
- [**dsh-openmaic**](https://github.com/THU-MAIC/dsh-openmaic) — OpenMAIC: classrooms, slides, interactive widgets, and Socratic teaching. · `dsh plugin --profile web add github:THU-MAIC/dsh-openmaic`
- [**dsh-scholar**](https://github.com/lzszq/dsh-scholar) — Academic assistant plugin. · `dsh plugin --profile web add github:lzszq/dsh-scholar`
- [**noatmark-dsh-plugin**](https://github.com/ylwl1997/noatmark-dsh-plugin) — Text hygiene as a dsh plugin: sanitize untrusted text, scan invisible characters, clean LLM formatting, and escape CSV formula injection. · `dsh plugin --profile web add github:ylwl1997/noatmark-dsh-plugin`
- [**dsh-apple-mode**](https://github.com/jihongboo/dsh-apple-mode) — Xcode AI integration for DSH: 26 Xcode MCP tools (mcpbridge) + Apple platform skills + Xcode Intelligence-style persona (agent preset or global bundle). · `dsh plugin --profile web add github:jihongboo/dsh-apple-mode`
- [**dsh-continual-evolve**](https://github.com/ZK-Andy/dsh-continual-evolve) — Continual self-evolution: versioned, auditable, rollback-safe harness state (prompts, memory, skills, subagent specs) refined from session trajectories, with review gates and hot-reloaded skills. · `dsh plugin --profile web add github:ZK-Andy/dsh-continual-evolve`
- [**dsh-recommend**](https://github.com/zp-home/dsh-recommend) — Transparent rankings and recommendations for the DSH plugin ecosystem: daily auto-fetched topic data, an open scoring model, and rank/search/recommend tools with a settings-page leaderboard. · `dsh plugin --profile web add dsh-recommend`
- [**modlens**](https://github.com/liustack/modlens) — Vision bridge for text-only models: paste an image, get structured JSON evidence (OCR, layout, semantics). · `dsh plugin --profile web add @liustack/modlens`
- [**dsh-market**](https://github.com/dsh-market/dsh-market) — The plugin market inside DSH: a Settings page to browse and search the full community catalog by category, with confirmed one-click installs and an installed-plugins view. · `dsh plugin --profile web add dshmarket`
- [**dsh-plugin-suite#dsh-plugin-center**](https://github.com/crTnT/dsh-plugin-suite/tree/main/dsh-plugin-center) — Plugin center: discover, install, and manage DSH plugins from Settings. · `dsh plugin --profile web add github:crTnT/dsh-plugin-suite/tree/main/dsh-plugin-center`
- [**dsh-plugin-suite#dsh-plugin-updater**](https://github.com/crTnT/dsh-plugin-suite/tree/main/dsh-plugin-updater) — Update manager for installed plugins: check for updates, back up, and roll back. · `dsh plugin --profile web add github:crTnT/dsh-plugin-suite/tree/main/dsh-plugin-updater`
- [**dsh-find-plugin**](https://github.com/awesome-dsh-plugin/dsh-find-plugin) — Find plugins without leaving the agent: search this curated registry by keyword or category, with ready-to-run install commands. · `dsh plugin --profile web add dsh-find-plugin`
- [**dsh-code-intel**](https://github.com/lonelymoon87/dsh-code-intel) — Indexes workspace symbols with Tree-sitter and provides lexical or optional embedding-assisted code search. · `dsh plugin --profile web add github:lonelymoon87/dsh-code-intel`
- [**dsh-subagent-tools**](https://github.com/lynx-gt/dsh-subagent-tools) — Per-call model, provider, persona, and toolFilter overrides for subagent delegation, with @preset: references and provider/model composite ids. · `dsh plugin --profile web add github:lynx-gt/dsh-subagent-tools`
- [**dsh-subagent-cwd**](https://github.com/lynx-gt/dsh-subagent-cwd) — Extends dsh-subagent-tools with a per-call cwd for subagents, shipped with the two in-process provider patches it requires. · `dsh plugin --profile web add github:lynx-gt/dsh-subagent-cwd`
- [**dsh-voice**](https://github.com/Jesse-njx/dsh-voice) — Voice notes in, spoken answers out: dictate audio that becomes user messages (transcribe), have the agent read replies aloud (speak), local-first under ~/.dsh/voice. · `dsh plugin --profile web add github:Jesse-njx/dsh-voice`
- [**dsh-docker**](https://github.com/Jesse-njx/dsh-docker) — Typed, guarded container control: ps/logs/inspect/exec/start/stop and compose up/down with JSON output, project-aware targeting, and approval-gated destructive ops. · `dsh plugin --profile web add github:Jesse-njx/dsh-docker`
- [**dsh-excel-chat**](https://github.com/hccccc01333/dsh-excel-chat) — Talk to Excel in DeepSeek Harness: create, edit, repair, and verify spreadsheets by conversation, with automatic formula health checks after every edit. · `dsh plugin --profile web add github:hccccc01333/dsh-excel-chat`
- [**dsh-context-proxy**](https://github.com/EvilIrving/dsh-context-proxy) — Thin on-demand context retrieval: context_query / context_slice / context_grep tools that read already-persisted history back with replay-safe citations. · `dsh plugin --profile web add github:EvilIrving/dsh-context-proxy`
- [**notes**](https://github.com/zhaoolee/notes) — Export DSH conversations as Smartisan Notes-style PNGs, or create and update Markdown notes in a configured account-scoped workspace. · `dsh plugin --profile web add github:zhaoolee/notes`
- [**dsh-figma-to-lottie**](https://github.com/zimai233/dsh-figma-to-lottie) — Compile SVG paths and keyframe specs into self-contained Lottie JSON animation files. · `dsh plugin --profile web add github:zimai233/dsh-figma-to-lottie`
- [**dsh-exam-countdown**](https://github.com/zimai233/dsh-exam-countdown) — Query 64 Chinese exams (高考/考研/四六级/CPA/法考…) with rule-aware date math (2nd-Saturday, 1st-Sunday) and countdowns. · `dsh plugin --profile web add github:zimai233/dsh-exam-countdown`
- [**dsh-wash-calendar**](https://github.com/zimai233/dsh-wash-calendar) — Recurring-habit scheduling from pure date math: next occurrence, range schedules, and overdue advice. · `dsh plugin --profile web add github:zimai233/dsh-wash-calendar`
- [**dsh-adhd-copilot**](https://github.com/zimai233/dsh-adhd-copilot) — ADHD behavioral coaching skill: task breakdown, overwhelm management, launch rituals, and failure recovery. · `dsh plugin --profile web add github:zimai233/dsh-adhd-copilot`
- [**dsh-image-search**](https://github.com/zimai233/dsh-image-search) — Multi-engine reverse image search aggregator: Google Lens, Baidu, Yandex, TinEye, SauceNAO, IQDB, Ascii2d. · `dsh plugin --profile web add github:zimai233/dsh-image-search`
- [**dsh-video-downloader**](https://github.com/zimai233/dsh-video-downloader) — Detect and download media from Bilibili/YouTube/Douyin/Xiaohongshu with quality and format analysis. · `dsh plugin --profile web add github:zimai233/dsh-video-downloader`
- [**dsh-plugin-knowledge-graph**](https://github.com/Luke-Yong/dsh-plugin-knowledge-graph) — A read_graph tool backed by a codebase knowledge graph (CONTAINS / EXPORTS / IMPORTS / IMPORTS_SYMBOL relations). · `dsh plugin --profile web add github:Luke-Yong/dsh-plugin-knowledge-graph`
- [**modsearch**](https://github.com/liustack/modsearch) — Web search bridge for text-only agents: ask the web or X, get structured JSON evidence (search, fetch, citations). · `dsh plugin --profile web add @liustack/modsearch`
- [**argo**](https://github.com/taxueseek/argo) — Search built for agents: multilingual coverage across web, academic, code, shopping, finance, news, and encyclopedias. · `dsh plugin --profile web add argo-search`
- [**dsh-web-search-exa**](https://github.com/TonyDua/dsh-web-search-exa) — Zero-config Exa web search provider for the ctx.web seam: anonymous MCP fallback without an API key, plus keyed REST search. · `dsh plugin --profile web add @tonydua/dsh-web-search-exa`
- [**dsh-browser**](https://github.com/Lum1104/dsh-browser) — Chrome sidebar extension that lets DSH operate your browser directly, no vision capabilities required. · `dsh plugin --profile web add github:Lum1104/dsh-browser`
- [**dsh-webui-market-plugin**](https://github.com/Sanqi-normal/dsh-webui-market-plugin) — In-harness plugin market for the dsh web GUI: browse the awesome-dsh-plugin.com catalog and install/uninstall plugins into a profile from Settings → Plugins → Plugin Market. · `dsh plugin --profile web add @sanqi-normal/dsh-webui-market-plugin`
- [**trio**](https://github.com/huey1in/trio) — Browser automation (Playwright) with a live view, an MCP server exposing DSH agents to any MCP client, and GitHub issue/PR/webhook review tools. · `dsh plugin --profile web add github:huey1in/trio`
- [**dsh-adb**](https://github.com/SamXiaBing/dsh-adb) — ADB device & bench operations for DSH: device discovery, structured logcat (background streaming), apk install, file pull/push, and dumpsys performance snapshots. · `dsh plugin --profile web add github:SamXiaBing/dsh-adb`
- [**dsh-backup**](https://github.com/xiaoyuyu6420/dsh-backup) — One-command backup of DSH user data: /backup, scheduled auto-backup, sha256 checksums and rotation. · `dsh plugin --profile web add github:xiaoyuyu6420/dsh-backup`
- [**dsh-tool-search**](https://github.com/Letter2025/dsh-tool-search) — Hermes-style tool search & slimming: progressive disclosure, semantic search, describe, and call long-tail tools on demand while core tools stay eager. · `dsh plugin --profile web add dsh-tool-search`
- [**dsh-hdc-bridge**](https://github.com/1na-ko/dsh-hdc-bridge) — HarmonyOS device bridge: hdc screenshot/install/log/crash/UI automation loop with read_image, official-first versioned API knowledge (SDK .d.ts + offline bundled docs), and a DevEco CLI build/sign/lint lane. · `dsh plugin --profile web add dsh-hdc-bridge`
- [**dsh-plugin**](https://github.com/PicGo/dsh-plugin) — Upload local images and files to your image host through PicGo's existing configuration (PicGo Cloud, GitHub, S3, COS, Qiniu, or any installed uploader plugin), via a `picgo_upload` tool and a `/picgo` command. · `dsh plugin --profile web add @picgo/dsh-plugin`
- [**dsh-net-proxy**](https://github.com/mafeis/dsh-net-proxy) — Route agent network requests through a local HTTP/CONNECT/SOCKS5 proxy. · `dsh plugin --profile web add github:mafeis/dsh-net-proxy`
- [**dsh-session-audit**](https://github.com/bwndlct/dsh-session-audit) — Session execution analytics: steps, tool calls, failures, repeated actions, token usage and verification signals, rendered as text/Markdown/JSON reports. · `dsh plugin --profile web add github:bwndlct/dsh-session-audit`
- [**dsh-computer-use**](https://github.com/xiaoheizi1212/dsh-computer-use) — Model-agnostic Computer Use capability for DeepSeek Harness: isolated browser first, provider-neutral observation, text planner + third-party vision perception. · `dsh plugin --profile web add github:xiaoheizi1212/dsh-computer-use`
- [**dsh-gui-customization**](https://github.com/LAN-TINA-WS/dsh-gui-customization) — CORE interface configuration plugin: Nous blue default color scheme, preset and custom 13 colors, ambient lighting (glow/breathing/position), background image (file selection dialog), localStorage+IndexedDB persistence · `dsh plugin --profile web add github:LAN-TINA-WS/dsh-gui-customization#5b9225f12a05110fb003aa6e9bac2ba940902327&path:packages/dsh-gui-customization`
- [**dsh-imagecraft**](https://github.com/SPYQWER1/dsh-imagecraft) — image_gen and image_vision model tools for the DeepSeek Harness, powered by the ChatGPT subscription (no API key). · `dsh plugin --profile web add github:SPYQWER1/dsh-imagecraft`

## Skills

**1 plugins · 技能包**

- [**skills**](https://github.com/creght-dev/skills) — Skills for building websites on the Creght platform: CLI pull/push sync, page and component conventions, CMS, forms, auth, SEO, publishing and version rollback. · `dsh plugin --profile web add github:creght-dev/skills`

## Automation

**23 plugins · 工作流与自动化**

- [**dsh_workflow**](https://github.com/icetomoyo/dsh_workflow) — UltraCode-style multi-agent orchestration: a generatable, savable, governable, observable, resumable workflow layer. · `dsh plugin --profile web add github:icetomoyo/dsh_workflow`
- [**dsh-agent-teams**](https://github.com/NanmiCoder/dsh-agent-teams) — AgentTeams multi-agent teams. · `dsh plugin --profile web add github:NanmiCoder/dsh-agent-teams`
- [**dsh-automation**](https://github.com/titanwings/dsh-automation) — Scheduled coding runs in fresh agent sessions with auditable history. · `dsh plugin --profile web add github:titanwings/dsh-automation`
- [**dsh-plugin-automations**](https://github.com/Sev7een/dsh-plugin-automations) — Settings-based scheduled tasks that run on time or during DeepSeek off-peak hours, with one-time and daily schedules backed by durable task state. · `dsh plugin --profile web add github:Sev7een/dsh-plugin-automations`
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
- [**dsh-doublecheck**](https://github.com/PerryLink/dsh-doublecheck) — Engineering-discipline guard: grill the requirements before the first edit, enforce red/green test evidence gates, and audit the delivery with a forked adversary (grill-requirements skill + tool-policy gates). · `dsh plugin --profile web add github:PerryLink/dsh-doublecheck`
- [**mstar-harness**](https://github.com/btspoony/mstar-harness) — Skill-driven harness/loop engineering workflow agent plugin. · `dsh plugin --profile web add github:btspoony/mstar-harness`
- [**dsh-approval-llm**](https://github.com/Letter2025/dsh-approval-llm) — Model-based permission approval: an approval-request answerer backed by a separate reviewer model. · `dsh plugin --profile web add dsh-approval-llm`
- [**dsh-model-failover**](https://github.com/Letter2025/dsh-model-failover) — Two-level model circuit breaker with failover: trip a model or a whole provider after repeated request failures and route the next request to a configured fallback. · `dsh plugin --profile web add dsh-model-failover`
- [**upstream-radar**](https://github.com/MicroMilo/upstream-radar) — Always-on vulnerability and breaking-change impact monitoring for coding-agent projects. · `dsh plugin --profile web add github:MicroMilo/upstream-radar`
- [**dsh-llm-fallbacks**](https://github.com/omdsh-dev/dsh-llm-fallbacks) — Automatic provider/model fallback chains for DeepSeek Harness agents when LLM requests keep failing (retry exhausted, auth, quota, rate limit) · `dsh plugin --profile web add github:omdsh-dev/dsh-llm-fallbacks`
- [**dsh-timeline**](https://github.com/zhangzheng25/dsh-timeline) — Minimal session timeline for DeepSeek Harness: one dot per question, click to jump, hover to preview. · `dsh plugin --profile web add github:zhangzheng25/dsh-timeline`
- [**@suxeca/dsh-plugin-manager**](https://github.com/Suxeca/dsh-plugin) — DSH Plugin Manager: /plugin human command + settings page 'Plugin Management', list/install/uninstall bundle plugins for web profile (modify ~/.dsh/profiles/web/package.json, takes effect after restart) · `dsh plugin --profile web add github:Suxeca/dsh-plugin#cde157283028d3d62337ea49a47a5548d08875e8&path:packages/dsh-plugin-manager`

## Integrations

**17 plugins · 通知与集成**

- [**dsh-open-in-vscode**](https://github.com/omdsh-dev/dsh-open-in-vscode) — Open DSH workspace directories in VS Code directly from the web GUI. · `dsh plugin --profile web add github:omdsh-dev/dsh-open-in-vscode`
- [**dsh-notification**](https://github.com/omdsh-dev/dsh-notification) — Desktop notifications for turn completions, with per-outcome controls and keyword rules. · `dsh plugin --profile web add github:omdsh-dev/dsh-notification`
- [**dsh-acp-for-bitfun**](https://github.com/bobleer/dsh-acp-for-bitfun) — ACP bridge between BitFun and DSH. · `dsh plugin --profile web add github:bobleer/dsh-acp-for-bitfun`
- [**deepseek-harness-acp**](https://github.com/openma-ai/deepseek-harness-acp) — ACP profile plugin and standalone stdio server for using the full DSH agent from Zed and other ACP clients while sharing DSH credentials and sessions. · `dsh plugin --profile web add @openma/deepseek-harness-acp`
- [**telegram**](https://github.com/LoserFox/telegram) — Bridge to the Telegram Bot API: long polling, per-chat sessions, HTML formatting. · `dsh plugin --profile web add github:LoserFox/telegram`
- [**dsh-chatnode-wechat**](https://github.com/Jesse-njx/dsh-chatnode-wechat) — Chat with, monitor, and approve your DSH agents from WeChat via the iLink gateway: text both ways, session targeting, digest heartbeats, and numbered approval prompts. · `dsh plugin --profile web add github:Jesse-njx/dsh-chatnode-wechat`
- [**dsh-session-notification**](https://github.com/dingyi222666/dsh-session-notification) — Notifications for four session states, with browser alerts and prompts. · `dsh plugin --profile web add github:dingyi222666/dsh-session-notification`
- [**dsh-web-ui-notify**](https://github.com/bill9109/dsh-web-ui-notify) — Desktop notification reminders. · `dsh plugin --profile web add github:bill9109/dsh-web-ui-notify`
- [**dsh-plugins#pet-bridge**](https://github.com/wsxwj123/dsh-plugins/tree/main/packages/pet-bridge) — Bridge dsh session status to the cc-pet desktop pet bubble: thinking, tool calls, and completion in real time. · `dsh plugin --profile web add github:wsxwj123/dsh-plugins/tree/main/packages/pet-bridge`
- [**dsh-webbridge**](https://github.com/bill9109/dsh-webbridge) — DSH meets Kimi WebBridge. · `dsh plugin --profile web add github:bill9109/dsh-webbridge`
- [**dsh-im-bridge**](https://github.com/BiBoyang/dsh-im-bridge) — Two-way WeChat (iLink) bridge: turn-end and approval-request push, in-chat approve/reject and message injection, persistent dedup and convergent long-reply chunking; channel layer extensible to other IMs. · `dsh plugin --profile web add github:BiBoyang/dsh-im-bridge`
- [**dsh-lark-bridge**](https://github.com/imetn/dsh-lark-bridge) — Bidirectional Lark/Feishu controller for DeepSeek Harness with project and session routing, interactive cards, approvals, attachments, and task controls. · `dsh plugin --profile web add github:imetn/dsh-lark-bridge`
- [**dsh-notify-bark**](https://github.com/pc439527/dsh-notify-bark) — Bark push notifications to iPhone: turn completion, waiting-for-input, and approval events sent from the DSH Host. · `dsh plugin --profile web add github:pc439527/dsh-notify-bark`
- [**dsh-ding**](https://github.com/CAOGGL/dsh-ding) — Notifies you when a conversation finishes: plays a sound and shows a Windows notification when the agent goes idle (configurable sound file, volume, debounce/throttle). · `dsh plugin --profile web add github:CAOGGL/dsh-ding`
- [**dsh-plugin-notify-sound**](https://github.com/ldchaowin/dsh-plugin-notify-sound) — Per-workspace completion ringtones plus attention sounds for approval, question, plan-review, goal-blocked, and task-failure events, with built-in synth, voice (TTS), and custom audio. · `dsh plugin --profile web add github:ldchaowin/dsh-plugin-notify-sound`
- [**dsh-funpack**](https://github.com/lvyuchuiyi/dsh-funpack) — A lightweight DeepSeek Harness plugin integrating praise, fortune, battle reports, Pomodoro timer, and slacking-off reminders. · `dsh plugin --profile web add github:lvyuchuiyi/dsh-funpack`
- [**dsh-omnibridge**](https://github.com/One1turn/dsh-omnibridge) — Comprehensive message bridge: one plugin to connect DeepSeek Harness to 19 platforms including QQ, WeChat, Feishu, Telegram, Discord, KOOK, LINE, Slack, DingTalk, and WeCom, among others (architecture based on AstrBot). · `dsh plugin --profile web add github:One1turn/dsh-omnibridge`

## Models

**7 plugins · 模型与账号接入**

- [**llm-adaptive**](https://github.com/dylan121322/llm-adaptive) — Adaptive model routing: per-request complexity classification with automatic provider routing. · `dsh plugin --profile web add github:dylan121322/llm-adaptive`
- [**dsh-llm-fallbacks**](https://github.com/btspoony/dsh-llm-fallbacks) — Role-based LLM retry & fallback strategies. · `dsh plugin --profile web add github:btspoony/dsh-llm-fallbacks`
- [**dsh-codex-connect**](https://github.com/franksong2702/dsh-codex-connect) — Connect ChatGPT OAuth and OpenAI Codex models to DeepSeek Harness, with opt-in search and image tools. · `dsh plugin --profile web add dsh-codex-connect`
- [**dsh-everything-oauth**](https://github.com/kam74515-boop/dsh-everything-oauth) — Import local Codex, Grok, Claude, OpenCode, and CC Switch logins into DSH; pick sources and enable models in Settings. · `dsh plugin --profile web add github:kam74515-boop/dsh-everything-oauth`
- [**Qwen-MM-Plugins**](https://github.com/omdsh-dev/Qwen-MM-Plugins) — Qwen multi-modal plugin support. · `dsh plugin --profile web add github:omdsh-dev/Qwen-MM-Plugins`
- [**dsh-codex-auth**](https://github.com/suntianc/dsh-codex-auth) — Reuses the Codex CLI ChatGPT login as an `openai-codex` LLM route and adds GPT Auth controls to DSH Web settings. · `dsh plugin --profile web add dsh-codex-auth`
- [**deepseek-harness-wallet**](https://github.com/feibi-mochi/deepseek-harness-wallet) — Multi-provider wallet chip: official DeepSeek balance, per-session cost & tokens, third-party token totals, recharge shortcut, low-balance alerts. · `dsh plugin --profile web add github:feibi-mochi/deepseek-harness-wallet`

## Runtime

**43 plugins · 开发与运行时**

- [**dsh-testgen**](https://github.com/bujue600-arch/dsh-testgen) — Automated unit-test generation: a /testgen command and generate_tests tool that scaffold, run, and fix tests until they pass (LLM + offline template generators; vitest/jest/mocha/node:test). · `dsh plugin --profile web add github:bujue600-arch/dsh-testgen`
- [**fabric**](https://github.com/omdsh-dev/fabric) — An MC-Fabric-style hook processor. · `dsh plugin --profile web add github:omdsh-dev/fabric`
- [**dsh-git-identity**](https://github.com/LoserFox/dsh-git-identity) — Pin Git commits to the environment's own author identity; env-var injection overrides all `git config` settings. · `dsh plugin --profile web add github:LoserFox/dsh-git-identity`
- [**dsh-context-doctor**](https://github.com/Zhenyu98/dsh-context-doctor) — Context injection audit: token costs of instruction chains / skill catalogs / tool schemas, duplicate and conflict detection. · `dsh plugin --profile web add github:Zhenyu98/dsh-context-doctor`
- [**dsh-pain-point-check**](https://github.com/ICCuse/dsh-pain-point-check) — Enforced pain-point gate: after two non-converged experiments it injects the three questions, denies non-investigative tool calls until answered, and blocks same-direction retries. · `dsh plugin --profile web add github:ICCuse/dsh-pain-point-check`
- [**dsh-plugin-check**](https://github.com/omdsh-dev/dsh-plugin-check) — Plugin health checks: manifest protocol / patch format / build traps, zero-dependency and read-only. · `dsh plugin --profile web add github:omdsh-dev/dsh-plugin-check`
- [**dsh-security-audit**](https://github.com/omdsh-dev/dsh-security-audit) — Local security audit: config, plugin origins, sessions, network exposure — read-only redacted risk report. · `dsh plugin --profile web add github:omdsh-dev/dsh-security-audit`
- [**dsh-session-health**](https://github.com/omdsh-dev/dsh-session-health) — Frame-level scan diagnostics for session files (torn/corrupt/empty detection). · `dsh plugin --profile web add github:omdsh-dev/dsh-session-health`
- [**dsh-evolve**](https://github.com/william-jin-cmu/dsh-evolve) — Self-evolution: the agent hot-mounts/removes persistent plugins on itself mid-session. · `dsh plugin --profile web add github:william-jin-cmu/dsh-evolve`
- [**dsh-trace**](https://github.com/vibeinging/dsh-trace) — Telemetry backend exporting turns, model steps, and tool calls to yiTrace. · `dsh plugin --profile web add github:vibeinging/dsh-trace`
- [**dsh-telemetry-redactor**](https://github.com/030611/dsh-telemetry-redactor) — Redacts supported secret patterns from the `session-telemetry/record` export copy before configured telemetry backends receive it. · `dsh plugin --profile web add dsh-telemetry-redactor`
- [**dsh-verification-receipt**](https://github.com/030611/dsh-verification-receipt) — Writes local JSONL summaries of per-turn tool counts and coarse verification signals without storing prompts, tool arguments, or result text. · `dsh plugin --profile web add dsh-verification-receipt`
- [**sandbox-micro**](https://github.com/omdsh-dev/sandbox-micro) — Support for the microsandbox backend. · `dsh plugin --profile web add github:omdsh-dev/sandbox-micro`
- [**sandbox-mxc**](https://github.com/omdsh-dev/sandbox-mxc) — Microsoft cross-platform sandbox support. · `dsh plugin --profile web add github:omdsh-dev/sandbox-mxc`
- [**sandbox-nono**](https://github.com/omdsh-dev/sandbox-nono) — Support for the nono sandbox backend. · `dsh plugin --profile web add github:omdsh-dev/sandbox-nono`
- [**dsh-agent-budget**](https://github.com/vibeinging/dsh-agent-budget) — Agent-tree token budget management. · `dsh plugin --profile web add github:vibeinging/dsh-agent-budget`
- [**dsh-polyglot**](https://github.com/Jesse-njx/dsh-polyglot) — The model switch for DSH: point it at any OpenAI-compatible endpoint, with curated free/cheap DeepSeek provider presets and automatic fallback when a free tier rate-limits you. · `dsh plugin --profile web add github:Jesse-njx/dsh-polyglot`
- [**dsh-tool-approval**](https://github.com/ilharp/dsh-tool-approval) — Manual approval mode ("Manual Mode" / "Ask Mode"). · `dsh plugin --profile web add github:ilharp/dsh-tool-approval`
- [**dsh-turn-approval**](https://github.com/arrow949/dsh-turn-approval) — Turn-scoped “Allow for this task” approvals: automatically allow matching `danger-full-access` escalations only for the current task, then expire. · `dsh plugin --profile web add github:arrow949/dsh-turn-approval`
- [**plugin-template**](https://github.com/omdsh-dev/plugin-template) — Plugin template repo (based on the official turtle-ui repo). · `dsh plugin --profile web add github:omdsh-dev/plugin-template`
- [**dsh-tps**](https://github.com/Small-tailqwq/dsh-tps) — A TPS metrics plugin. · `dsh plugin --profile web add github:Small-tailqwq/dsh-tps`
- [**dsh-tool-call-stats**](https://github.com/disyli/dsh-tool-call-stats) — Per-process tool-call statistics: a `tool_stats` tool reporting per-tool call counts, error counts, and average durations. · `dsh plugin --profile web add github:disyli/dsh-tool-call-stats`
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
- [**dsh-updater-ui**](https://github.com/xingyingyuzhui/dsh-updater-ui) — DSH self-updater in the settings page: one-click check/pull (`git pull --ff-only`), auto background checks, version diff and changelog preview with a red-dot reminder. · `dsh plugin --profile web add github:xingyingyuzhui/dsh-updater-ui`
- [**dsh-repro**](https://github.com/EvilIrving/dsh-repro) — /repro exports a minimal, secret-scrubbed, replayable problem bundle: the session log, failed commands, and Git diff. · `dsh plugin --profile web add github:EvilIrving/dsh-repro`
- [**dsh-mcp-panel**](https://github.com/PerryLink/dsh-mcp-panel) — Read-only runtime management panel for the official DSH MCP client: connection status, registered tools, errors, and reconnect counts through the /mcp command and a Settings tab, with sanitized display and enable/disable patch suggestions. · `dsh plugin --profile web add github:PerryLink/dsh-mcp-panel`
- [**forkprobe**](https://github.com/Jayden-X-L/forkprobe) — Compare multiple skills on the same task and pick the winner. · `dsh plugin --profile web add github:Jayden-X-L/forkprobe`
- [**plugin-registry**](https://github.com/vlln/plugin-registry) — Ecosystem infrastructure: a thin browser console for managing official repository plugins (zero patches) plus a make-dsh-plugin skill for guided plugin development. · `dsh plugin --profile web add github:vlln/plugin-registry`
- [**dsh-multica-runtime**](https://github.com/forrestchang/dsh-multica-runtime) — Run the dsh runtime on Multica. · `dsh plugin --profile web add github:forrestchang/dsh-multica-runtime`
- [**dsh-user-experience**](https://github.com/DietCokewithSugar/dsh-user-experience) — Finds potential UX issues in your project: automatically reviews React/TypeScript code, pinpoints each problem, and gives concrete suggestions. · `dsh plugin --profile web add github:DietCokewithSugar/dsh-user-experience`
- [**dsh-cost-tracker**](https://github.com/yflmq001/dsh-cost-tracker) — Per-model token cost tracking with configurable cache-hit/miss, output and peak-window pricing, a live session cost bar, and unconfigured-model flags. · `dsh plugin --profile web add github:yflmq001/dsh-cost-tracker`
- [**dsh-passwords**](https://github.com/slywalker2006/dsh-passwords) — Login gateway for the DSH web UI: password door with first-run setup, bcrypt + at-rest encryption (AES-256-GCM/HMAC), brute-force lockout, audit log, TLS 1.2+ with 80→443 redirect, CSRF, anti-framing. · `dsh plugin --profile web add github:slywalker2006/dsh-passwords`
- [**dsh-webui-auth**](https://github.com/Yuuz12/dsh-webui-auth) — WebUI authentication enforced at the HTTP/transport layer: four-layer login gate (resources, plugin bundles, /api, WebSocket), server-side sessions with HttpOnly cookies. · `dsh plugin --profile web add github:Yuuz12/dsh-webui-auth`
- [**dsh-lan-access**](https://github.com/Leon0555/dsh-lan-access) — LAN access for the Web GUI: 0.0.0.0 bind plus a crypto.randomUUID polyfill for non-secure (LAN HTTP) contexts. · `dsh plugin --profile web add dsh-lan-access`

## Fun

**17 plugins · 娱乐**

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
- [**DeepSeek-Harness-Pet**](https://github.com/minybear/DeepSeek-Harness-Pet) — Codex-style desktop pet: a floating animated sprite in the corner that mirrors the agent's running state (working, waiting, failed, done). · `dsh plugin --profile web add github:minybear/DeepSeek-Harness-Pet`
- [**dsh-web-search-pro**](https://github.com/anweat/dsh-web-search-pro) — Persistent enhanced web search: multi-engine routing (DeepSeek/Exa/DDG/Bing/Jina + GitHub/Bilibili/YouTube/V2EX/Xiaohongshu/Twitter/Reddit/RSS), SQLite+LRU cache, userscript-style extraction, Playwright rendering. · `dsh plugin --profile web add dsh-web-search-pro`
- [**dsh-browser**](https://github.com/anweat/dsh-browser) — Self-contained browser runtime: Playwright (chromium) + OpenCLI as plugin-local dependencies (global reuse fallback), exposes a `browser` service and 9 interactive browser tools. · `dsh plugin --profile web add @anweat/dsh-browser`
- [**dsh-voice-webspeech**](https://github.com/anweat/dsh-voice-webspeech) — Browser Web Speech API voice input: zero server, zero keys, zero model downloads (Edge=Azure, Chrome=Google speech). · `dsh plugin --profile web add dsh-voice-webspeech`
- [**dsh-restart**](https://github.com/anweat/dsh-restart) — Restart DSH: configurable restart method (Node native / legacy PowerShell), post-restart continue prompt, optional watchdog auto-relaunch. · `dsh plugin --profile web add dsh-restart`
- [**dsh-expression**](https://github.com/yyh-001/dsh-expression) — Meme search, the fun way: describe the vibe, and the agent finds and sends a real meme that actually fits. · `dsh plugin --profile web add github:yyh-001/dsh-expression`

## Submit or update a plugin

Open a [plugin submission issue](https://github.com/tjsdyy/dshplugin/issues/new?labels=plugin-submission). Include the repository URL, category, English and Chinese descriptions, and a tested install command.

## Data freshness

The catalog is synchronized on a schedule from the curated DeepSeek Harness community registry. Invalid records, duplicate entries, unknown categories, and entries without bilingual descriptions are rejected before publication. Last registry update: **2026-08-14**.

## License & disclaimer

This repository is a community directory. Each plugin remains subject to its own repository license and security policy. Review third-party code and permissions before installation.
