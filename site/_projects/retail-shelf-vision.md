---
layout: project
title: "Multi-camera retail shelf-vision system"
slug: retail-shelf-vision
featured: true
featured_order: 3
feature_label: "COMPUTER VISION · REAL TIME"
feature_title: "Retail shelf vision at <200 ms"
kind: project
summary: "Multi-camera product recognition on YOLOv7/v9 with TensorRT — sub-200 ms responses at 15–20 FPS, hot-reload model serving, end-to-end CI/CD."
permalink: /projects/retail-shelf-vision/
visibility: published
legacy_published: true
date_status: verified
sort_year: 2026
start_date: null
end_date: null
ongoing: null
years_active: [2024, 2025, 2026]
organization: SOLUM
role: AI / ML systems engineer
tags: ["Applied AI"]
public_evidence: []
demo_mode: synthetic
demo_url: /work/shelf-vision/
demo_label: Try the interactive demo
source_note: "Browser-only illustration · synthetic data"
demo_disclosure: "This illustration and the linked demo use synthetic shelf states to explain general engineering concepts. They contain no employer or client software, data or imagery. The preview is a static illustration, not live inference; its shelf states are not production results."
source_url: null
source_verified: false
visualization: shelf-vision
challenge: "Shelf-vision systems need to recognise products and identify stock gaps across multiple camera views. The engineering challenge was to combine calibration, matching and inference in a responsive pipeline that could also support model updates."
contribution: "Engineered multi-camera product-recognition pipelines with YOLOv7/v9, TensorRT and LightGlue. My work included camera calibration, sensor-driven session flows, GPU-optimised execution and CI/CD for model deployment."
platform_context: "This case study covers my computer-vision and deployment contributions within a retail shelf-vision system. The measured figures describe the documented pipeline performance; the synthetic demo is a separate illustration of the concepts."
tools: ["YOLOv7/v9", "TensorRT", "LightGlue", "Camera calibration", "CI/CD"]
case_study_heading: "Connect camera observations to stock information"
outcomes: ["Delivered sub-200 ms response times and 15–20 FPS inference in the documented shelf-vision pipeline.", "Contributed multi-camera calibration and matching, sensor-driven session flows and GPU-optimised execution.", "Implemented end-to-end CI/CD for model deployment."]
evidence_note: "Latency and throughput figures come from the existing project record and public resume. They describe the production work, not the browser demo. The demo uses synthetic shelf states and performs no model inference."
takeaway: "Inference speed is one part of a usable vision system. Calibration, matching, session handling and deployment all contribute to turning camera output into information that can be acted on."
decisions: [{"title": "Optimise inference within the full pipeline", "detail": "The implementation combined YOLOv7/v9 with TensorRT acceleration and GPU-optimised execution. Sensor-driven session flows were also refined as part of delivering the documented response time and throughput."}, {"title": "Treat camera matching as an engineering concern", "detail": "High-precision calibration and LightGlue feature matching supported the multi-camera workflow. This addresses the relationship between observations from different views alongside the detection model itself."}, {"title": "Include model delivery in the engineering scope", "detail": "End-to-end CI/CD supported model deployment. This makes the delivery process part of the system being engineered, alongside inference and analytics."}]
---
<p>I worked on real-time product recognition and out-of-stock analytics across retail shelf environments. The system combined YOLOv7/v9 detection, TensorRT acceleration and LightGlue feature matching.</p>

<h3>Connect multiple views</h3>
<p>My work included high-precision camera calibration and multi-camera processing. Matching and calibration provide the relationship between views that a detection model alone does not establish.</p>

<h3>Work on response time and delivery</h3>
<p>I refined sensor-driven session flows and GPU-optimised execution, delivering the documented sub-200 ms response times and 15–20 FPS inference. I also worked on end-to-end CI/CD for model deployment.</p>

<h3>Separate the illustration from the implementation</h3>
<p>The shelf illustration explains stock states, and the interactive demo lets a reader explore synthetic scenarios. Neither contains production models, camera imagery or client data.</p>
