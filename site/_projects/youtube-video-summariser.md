---
layout: "project"
title: "YouTube video summarisation"
description: "A Streamlit prototype that retrieves YouTube transcripts, splits the text and generates summaries using LangChain and GPT-3.5."
kind: "project"
summary: "A Streamlit prototype that retrieves YouTube transcripts, splits the text and generates summaries using LangChain and GPT-3.5."
permalink: "/projects/youtube-video-summariser/"
visibility: "published"
date_status: "publication_verified"
sort_year: 2024
start_date: null
end_date: null
ongoing: null
years_active: []
portfolio_published_date: "2024-04-21"
publication_evidence: "https://www.upwork.com/freelancers/~0124f0dc91173be43a"
publication_verified: true
role: "Prototype adaptation"
contribution: "Published a transcript-summarisation prototype in my GitHub portfolio, bringing transcript retrieval, text chunking and language-model summarisation into a Streamlit interface."
context_heading: "Project context"
platform_context: "The repository README references the upstream DevRico003/youtube_summarizer project. This is presented as an adaptation, without claiming original authorship of every component."
tools: ["Python", "Streamlit", "LangChain", "GPT-3.5", "YouTube Transcript API"]
tags: ["Generative AI"]
public_evidence: [{"label": "Explore the source on GitHub", "url": "https://github.com/phvpavankumar/YouTube_Video_Summarizer/blob/main/app.py"}, {"label": "Public portfolio on Upwork", "url": "https://www.upwork.com/freelancers/~0124f0dc91173be43a"}]
demo_mode: "none"
demo_url: null
source_url: "https://github.com/phvpavankumar/YouTube_Video_Summarizer/blob/main/app.py"
source_verified: true
visualization: "published-work"
workflow: [{"title": "Retrieve", "detail": "Read the transcript associated with a YouTube URL."}, {"title": "Split", "detail": "Break the transcript into chunks using LangChain."}, {"title": "Summarise", "detail": "Generate and display a text summary in Streamlit."}]
slug: "youtube-video-summariser"
---
The application takes a YouTube URL and works from its transcript. Text chunks are passed through a language-model summarisation workflow, with the result shown in a Streamlit interface.

The repository documents a GPT-3.5-based implementation and acknowledges that generated summaries may need review. The linked source is a historical prototype; the portfolio itself does not call the model or process videos.

The README’s installation instructions reference [DevRico003/youtube_summarizer](https://github.com/DevRico003/youtube_summarizer), which is retained here as upstream attribution.
