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
demo_url: null
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
challenge: "Finance questions depend on agreed definitions, reporting periods and source data. The engineering challenge was to turn those requirements into analytical tools that agents could use, while keeping results traceable and reconcilable."
case_study_heading: "From business definitions to analytical tools"
outcomes: ["Delivered SAP-connected Python analytical tools and integrated them into agent workflows.", "Contributed backend services, KPI lineage and reconciliation, testing and trace analysis within the wider platform."]
evidence_note: "These outcomes describe my documented engineering responsibilities. The public illustration demonstrates the calculation pattern using fictional data; it is not evidence of client adoption, financial savings or production performance."
takeaway: "A reliable analytical answer starts with a defined calculation. Source context, reconciliation and trace analysis make that calculation easier to inspect when the result is questioned."
---
<p>My role connected conversations with client technology and finance stakeholders to the backend implementation. I worked with chief technology officers, directors, technical leads, senior developers and accountants to understand what financial metrics meant and how they were calculated.</p>

<h3>Translate the requirement</h3>
<p>I used those definitions to build Python analytical tools connected to SAP data, then integrated the tools into agent workflows. This gave the agent a calculation to call and a result to explain.</p>

<h3>Make the result inspectable</h3>
<p>My work also covered source-to-UI KPI lineage, reconciliation, testing and Langfuse trace analysis. These responsibilities connect the data source, the analytical calculation and the response shown to the user.</p>

<h3>Work within a wider team</h3>
<p>The platform was team-built. My contribution was client-facing AI and backend engineering, including the translation of requirements into implementation. The page does not attribute the entire platform or its interface to me.</p>
