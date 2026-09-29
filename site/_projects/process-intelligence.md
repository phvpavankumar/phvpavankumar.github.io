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
organization: Cervello India Pvt Ltd (a Kearney company)
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
challenge: "Business-process recordings need to become useful outputs and searchable knowledge. The backend had to support long-running processing, deliver generated artifacts, and make the resulting information available for follow-up questions."
case_study_heading: "From a recording to reusable knowledge"
outcomes: ["Contributed backend and AI integration for test-case generation and delivery, including download APIs.", "Built knowledge-repository capabilities covering auto-ingest, semantic chunking, embeddings, hybrid retrieval and task-scoped conversation history.", "Contributed production hardening through SQL parameterisation, ingest guardrails, failure metrics and runtime decoupling."]
evidence_note: "The evidence here is the documented implementation scope. No measured time saving or retrieval-quality benchmark is published. Aurevia is a separate fictional illustration with no live AI processing."
takeaway: "Generating an artifact is only part of the workflow. Job visibility, delivery APIs and a searchable repository make the output usable beyond the original recording."
decisions: [{"title": "Represent processing as tracked jobs", "detail": "The platform uses asynchronous jobs with statuses, claims and heartbeats in a database-driven control plane. This separates upload handling from longer-running processing and makes worker progress visible without a separate queueing platform."}, {"title": "Combine semantic retrieval with governed SQL", "detail": "My repository work combined semantic chunking and pgvector embeddings with governed SQL retrieval. The approach supports both text-based knowledge retrieval and structured queries, with evidence merging and answer synthesis."}, {"title": "Keep conversation context scoped to the task", "detail": "Task-scoped history and repository APIs organise follow-up questions around the relevant work. SQL parameterisation, ingest guardrails and failure metrics support that boundary in the implementation."}]
---
<p>The team-built platform turns business-process recordings into documentation, chapters, HTML guides, BPMN diagrams, test cases and searchable knowledge. My work focused on the backend, orchestration and repository layer.</p>

<h3>Deliver generated outputs</h3>
<p>I contributed backend and AI integration for test-case generation and the APIs used to download generated artifacts. Uploads became asynchronous jobs claimed by workers, with statuses and heartbeats providing visibility into processing.</p>

<h3>Make outputs retrievable</h3>
<p>My knowledge-repository work covered auto-ingest of generated documentation, semantic chunking and embeddings with pgvector. Hybrid retrieval combined semantic search with governed SQL, followed by evidence merging and answer synthesis.</p>

<h3>Define the contribution boundary</h3>
<p>I contributed repository APIs, task-scoped conversation history and production hardening. The broader video-to-artifacts platform was a team effort; my role was not sole ownership of the frontend or every generated output.</p>
