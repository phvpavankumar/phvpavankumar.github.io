---
layout: project
title: "Neural networks on microcontrollers"
slug: microcontroller-detection
featured: false
featured_order: 4
feature_label: "EDGE AI · OPTIMISATION"
feature_title: "Neural networks on microcontrollers"
kind: project
summary: "FastestDet architecture refined for a 35% accuracy gain; real-time detection deployed on Renesas MCUs and Sony IMX500 smart cameras — AI where there is no cloud to fall back on."
permalink: /projects/microcontroller-detection/
visibility: published
legacy_published: true
date_status: verified
sort_year: 2024
start_date: null
end_date: null
ongoing: null
years_active: [2024]
organization: Ignitarium
role: AI / ML systems engineer
tags: ["Applied AI"]
public_evidence: []
demo_mode: none
demo_url: null
source_url: null
source_verified: false
visualization: none
challenge: "Object detection on a microcontroller has to operate within the target device’s constraints. The challenge was to refine a lightweight network and carry it through training, evaluation and deployment readiness for on-device use."
contribution: "Led architectural refinement of FastestDet for ultra-lightweight deployment and built the surrounding optimisation, training and evaluation pipelines. Deployed real-time detection models on Renesas microcontrollers."
platform_context: "My documented responsibility was model architecture and the model-development pipeline through deployment readiness. This case study does not claim ownership of the complete hardware or embedded product."
tools: ["FastestDet", "Model optimisation", "Training and evaluation", "Embedded deployment"]
case_study_heading: "Refine the network for the deployment target"
outcomes: ["Achieved the reported 35% accuracy improvement through FastestDet architectural refinement.", "Deployed real-time detection models on Renesas microcontrollers.", "Built model-development pipelines covering optimisation, training, evaluation and deployment readiness."]
evidence_note: "The 35% improvement is the result recorded in the existing project record and public resume. The baseline, dataset and evaluation protocol are not published here, so it should not be treated as an independently reproducible benchmark or a percentage-point gain."
takeaway: "The deployment target belongs in the model-development loop. Architecture, training, evaluation and deployment readiness need to be considered together when compute resources are constrained."
evidence_highlights: [{"label": "35%", "detail": "Reported accuracy improvement for the FastestDet refinement."}, {"label": "On-device", "detail": "Real-time detection deployed on microcontrollers."}, {"label": "Architecture → deployment", "detail": "Model optimisation, training, evaluation and deployment readiness."}]
decisions: [{"title": "Refine a lightweight detection architecture", "detail": "My work focused on architectural refinement of FastestDet for ultra-lightweight deployment. The documented result was an accuracy improvement within that project; no comparison against unreported alternative models is implied."}, {"title": "Carry model changes through the development pipeline", "detail": "I built the surrounding optimisation, training and evaluation pipelines through deployment readiness. This connects architecture work to the practical requirement of running detection on the target device."}]
---
<p>I led architectural refinement of the FastestDet object-detection network for ultra-lightweight deployment. The documented outcome was a 35% accuracy improvement and real-time detection deployed on microcontrollers.</p>

<h3>Own the model-development work</h3>
<p>My contribution included the surrounding optimisation, training and evaluation pipelines, through deployment readiness. This connected the architecture work to execution on the target device.</p>

<h3>Keep the result in context</h3>
<p>The result describes this project’s model work. It does not establish a general benchmark across devices or datasets. Separate embedded-vision work is covered in the <a href="/projects/embedded-vision/">embedded vision project record</a>.</p>
