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
date_status: unconfirmed
sort_year: 0
start_date: null
end_date: null
ongoing: null
years_active: []
organization: Kearney
role: Core AI and backend engineer
contribution: "Engineering contributions are described below; project-specific dates remain under review."
platform_context: "The description distinguishes system capabilities from personal contributions where the supplied evidence permits."
tools: []
tags: ["Enterprise AI"]
public_evidence: []
demo_mode: none
demo_url: null
source_url: null
source_verified: false
visualization: none
---
<p>A three-service system that turns recorded business-process videos into structured outputs: step-by-step documentation, chapters, HTML guides, BPMN process diagrams, test cases, and a searchable knowledge repository. Uploads become asynchronous jobs claimed by AI workers through a database-driven control plane with statuses, claims and heartbeats — no separate queueing platform required.</p>

<p>My work centred on two areas. First, test-case generation and delivery — backend/AI integration and the download APIs that expose generated artifacts. Second, the knowledge repository layer that turned the platform from "video in, document out" into "video in, reusable organisational knowledge out": auto-ingest of generated documentation, semantic chunking and embedding with pgvector, hybrid retrieval combining vector search with governed SQL, evidence merging and answer synthesis, task-scoped chat history, and production hardening — SQL parameterisation, ingest guardrails, failure metrics and runtime decoupling. Stack: Python, FastAPI, APScheduler, PostgreSQL + pgvector, Azure Blob, Nuxt 3/Vue 3.</p>
