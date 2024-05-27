---
layout: home
title: "Home"
---

# Welcome to my portfolio!

I am Pavan Kumar, an AI/GenAI Engineer with expertise in AI model development, testing, and deployment. Here you can find more about my projects, skills, and experience.

Feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/pavan-kumar-phv/) or check out my [GitHub](https://github.com/phvpavankumar).

## Projects

{% for project in site.projects %}
- [{{ project.title }}]({{ project.url | relative_url }})
{% endfor %}
