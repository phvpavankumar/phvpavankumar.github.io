---
layout: project
title: "Enterprise Agentic Analytics"
slug: enterprise-analytics
featured: true
featured_order: 1
feature_label: "ENTERPRISE · AGENTIC AI"
feature_title: "Enterprise Agentic Analytics"
kind: project
summary: "Executives ask questions in plain language; the platform answers with governed KPIs, charts and narratives — 27 analytical tools, 129 API endpoints, LangGraph orchestration over SAP data, with source-to-dashboard KPI lineage and reconciliation."
permalink: /projects/enterprise-analytics/
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
contribution: "LangGraph orchestration, enterprise data integration, KPI lineage, reconciliation and production trace analysis."
platform_context: "Team-built enterprise analytics platform; 27 analytical tools and 129 API endpoints describe platform scope, not sole authorship."
tools: ["Python","FastAPI","LangGraph","SAP Datasphere / OData","Langfuse"]
tags: ["Enterprise AI"]
public_evidence: []
demo_mode: synthetic
demo_url: /prototypes/enterprise-analytics/
source_url: null
source_verified: false
visualization: enterprise-analytics
constraints:
  - Client work is confidential; this demonstration uses synthetic inputs.
  - Metric definitions, reporting periods and data grain must be explicit.
decisions:
  - title: Keep calculations reproducible
    detail: Keep business calculations in governed analytical tools. Carry the selected definition, period and source context into the answer.
  - title: Diagnose the failing layer
    detail: Trace discrepancies through extraction, transformations, mappings, aggregation, tool output, routing and presentation before changing the narrative or chart.
  - title: Validate before presenting
    detail: Reconcile tool outputs against source values and use regression checks and production traces to investigate failures.
related_writing:
  - title: The number that meant two things
    url: /weekly/the-number-that-meant-two-things/
---
<p>An AI-powered analytics platform where executives ask business questions in plain language and receive governed KPI cards, charts, tables, narrative summaries and suggested follow-ups — alongside executive dashboards covering finance, commercial, operations, receivables and supply-chain performance. The platform spans 27 registered analytical tools and over 100 API endpoints across areas including product contribution and margin, cost-to-serve, quality cost, cash conversion cycle, AR/AP and payment behaviour, inventory and DIO, OEE, case fill and OTIF.</p>

<p>My work: designing and enhancing analytical tools; LangGraph-based AI orchestration with intent classification and tool routing; SAP Datasphere/OData integration; establishing source-to-UI KPI lineage and reconciliation practice — tracing discrepancies through extraction, transformation, business mappings, AI routing and presentation; automated SAP reconciliation scripts, regression tests and fiscal-period controls; and production trace analysis with Langfuse. Stack: Python, FastAPI, LangGraph, React, PostgreSQL, Redis, Docker, Azure Kubernetes Service, Microsoft Entra.</p>
