---
layout: project
title: "Process intelligence from video"
slug: process-intelligence
featured: true
featured_order: 2
feature_label: "KNOWLEDGE · RETRIEVAL"
feature_title: "Process intelligence from video"
kind: project
summary: "Business-process recordings become documentation, BPMN diagrams, test cases and a searchable knowledge base — semantic embedding with pgvector, hybrid vector + governed SQL retrieval, async job orchestration."
permalink: /projects/process-intelligence/
visibility: published
legacy_published: true
date_status: verified
sort_year: 2026
start_date: null
end_date: null
ongoing: null
years_active: [2026]
organization: Kearney
role: Core AI and backend engineer
contribution: "Backend and AI integration for test-case delivery; asynchronous job orchestration, repository APIs, auto-ingest, semantic chunking and embedding, hybrid retrieval, task-scoped conversation history and production hardening."
platform_context: "The video-to-artifacts platform was team-built. My work focused on backend, orchestration and the knowledge repository, not sole ownership of the frontend or the full platform. Aurevia is a separate illustrative portfolio demo."
tools: ["Python", "FastAPI", "APScheduler", "PostgreSQL + pgvector", "Azure Blob"]
tags: ["Enterprise AI"]
public_evidence: []
demo_mode: synthetic
demo_url: /demos/aurevia/
demo_label: Open interactive demo
demo_disclosure: "Aurevia is an illustrative browser-only demo using fictional invoice content. Recordings are stored locally, not analysed. Answers use keyword matching, not live AI, vector retrieval or SQL. Demo results are not project outcomes."
source_url: null
source_verified: false
visualization: process-intelligence
---
<p>A three-service system that turns recorded business-process videos into structured outputs: step-by-step documentation, chapters, HTML guides, BPMN process diagrams, test cases, and a searchable knowledge repository. Uploads become asynchronous jobs claimed by AI workers through a database-driven control plane with statuses, claims and heartbeats — no separate queueing platform required.</p>

<p>My work centred on two areas. First, test-case generation and delivery — backend/AI integration and the download APIs that expose generated artifacts. Second, the knowledge repository layer that turned the platform from "video in, document out" into "video in, reusable organisational knowledge out": auto-ingest of generated documentation, semantic chunking and embedding with pgvector, hybrid retrieval combining vector search with governed SQL, evidence merging and answer synthesis, task-scoped chat history, and production hardening — SQL parameterisation, ingest guardrails, failure metrics and runtime decoupling. Stack: Python, FastAPI, APScheduler, PostgreSQL + pgvector, Azure Blob, Nuxt 3/Vue 3.</p>
