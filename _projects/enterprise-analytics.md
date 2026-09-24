---
layout: project
title: "Enterprise Agentic Analytics"
slug: enterprise-analytics
featured: true
featured_order: 1
feature_label: "ENTERPRISE · AGENTIC AI"
feature_title: "Enterprise Agentic Analytics"
kind: project
summary: "Worked with client technology leaders and finance teams to understand financial metrics and calculation methods, then translated that knowledge into SAP-connected Python tools for AI agents. A separate fictional demo illustrates these concepts."
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
role: Client-facing AI & backend engineer
contribution: "Connected client requirements with implementation: understood financial definitions and calculation methods, built SAP-connected Python analytical tools, and integrated them into agent workflows. Also contributed backend services, KPI lineage and reconciliation, and trace analysis."
platform_context: "Contributed as part of an enterprise analytics team. This page describes my engineering responsibilities, not sole ownership of the platform. The separate fictional demo illustrates general concepts, not the employer's or a client's product."
tools: ["Python","FastAPI","LangGraph","SAP Datasphere / OData","Langfuse"]
tags: ["Enterprise AI"]
public_evidence: []
demo_mode: synthetic
demo_url: /prototypes/enterprise-analytics/
demo_label: Open illustrative skills demo
demo_disclosure: "Illustrative portfolio demonstration using fictional data and simplified workflows. This is not an employer or client product. It demonstrates engineering concepts, with no live enterprise connections or AI processing. Demo outputs are not production results and do not imply employer or client endorsement."
source_note: "Employer and client source code is not offered for publication."
source_url: null
source_verified: false
visualization: enterprise-analytics
constraints:
  - Client work is confidential; this example uses fictional inputs and simplified calculations.
  - Metric definitions, reporting periods and data grain must be explicit.
decisions:
  - title: Keep calculations reproducible
    detail: Keep business calculations in governed analytical tools. Carry the selected definition, period and source context into the answer.
  - title: Diagnose the failing layer
    detail: Check data inputs, calculations and presentation separately when a result does not match expectations.
  - title: Validate before presenting
    detail: Reconcile tool outputs against source values and use regression checks and production traces to investigate failures.
related_writing:
  - title: The number that meant two things
    url: /weekly/the-number-that-meant-two-things/
---
<p>I contributed AI and backend engineering to a team-built enterprise analytics platform. My work covered orchestration, data integration, KPI lineage and reconciliation, testing, and observability.</p>

<h3>From finance conversations to working AI tools</h3>
<p>I worked directly with client-side chief technology officers (CTOs), directors, technical leads, senior developers and accountants to understand financial metrics, business definitions and how calculations were performed. I translated that knowledge into Python analytical tools connected to SAP data and integrated those tools into agent workflows.</p>

<ol>
  <li><strong>Understand the business:</strong> gather the meaning of each financial metric and its calculation method from the people who use and maintain it.</li>
  <li><strong>Implement the calculation:</strong> connect the relevant SAP data to Python tools that apply those business definitions.</li>
  <li><strong>Connect tools to agents:</strong> integrate the analytical tools into agent workflows so responses use calculated results, rather than asking a language model to invent the financial logic.</li>
</ol>

<p>Technologies I worked with include Python, FastAPI, LangGraph, SAP Datasphere/OData and Langfuse. The interactive example is a separate, simplified portfolio demonstration of general analytics concepts. Its interface, fictional figures and sample workflows should not be read as a description of any employer's or client's implementation.</p>
