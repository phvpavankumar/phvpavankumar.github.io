<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Pavan Kumar — Building production-scale GenAI & AI systems (LLM Systems, Agentic AI, Computer Vision, Edge AI)" />
  <title>Pavan Kumar | GenAI & AI Engineer</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="assets/style.css" />
</head>

<body>
  <!-- Ambient background -->
  <div class="bg">
    <div class="blob b1"></div>
    <div class="blob b2"></div>
    <div class="blob b3"></div>
    <div class="grid"></div>
  </div>

  <header class="nav">
    <a class="brand" href="#top">
      <span class="dot"></span>
      <span>Pavan Kumar</span>
    </a>

    <nav class="links">
      <a href="#work">Work</a>
      <a href="#stack">Stack</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>

    <div class="nav-cta">
      <a class="btn ghost" href="resume.md" target="_blank" rel="noreferrer">Resume</a>
      <a class="btn" href="#contact">Hire me</a>
    </div>

    <button class="hamburger" aria-label="Open menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </header>

  <main id="top" class="container">
    <!-- HERO -->
    <section class="hero">
      <div class="hero-left">
        <div class="kicker">
          <span class="pill">Open to: GenAI / LLM / CV / Edge AI roles</span>
          <span class="pill subtle">India • Remote • Hybrid</span>
        </div>

        <h1>
          Building <span class="grad">production-scale GenAI & AI systems</span>
        </h1>

        <p class="sub">
          <b>LLM Systems</b> • <b>Agentic AI</b> • <b>Computer Vision</b> • <b>Edge AI</b><br/>
          I design, optimize, and ship low-latency AI products — from data → models → deployment → monitoring.
        </p>

        <div class="hero-actions">
          <a class="btn" href="#contact">Let’s build together</a>
          <a class="btn ghost" href="#work">See my work</a>
        </div>

        <div class="signal">
          <div class="signal-card">
            <div class="signal-num" id="years">4+</div>
            <div class="signal-txt">Years experience</div>
          </div>
          <div class="signal-card">
            <div class="signal-num">GenAI</div>
            <div class="signal-txt">Agents • RAG • Tooling</div>
          </div>
          <div class="signal-card">
            <div class="signal-num">Edge</div>
            <div class="signal-txt">ONNX • TensorRT</div>
          </div>
        </div>
      </div>

      <aside class="hero-right">
        <div class="card glass">
          <div class="card-top">
            <div class="avatar">
              <!-- Replace with your image later: <img src="assets/me.jpg" alt="Pavan Kumar" /> -->
              <span>PK</span>
            </div>
            <div>
              <div class="card-name">Pavan Kumar</div>
              <div class="card-role">AI / GenAI Engineer</div>
            </div>
          </div>

          <div class="divider"></div>

          <div class="mini">
            <div class="mini-row">
              <span class="mini-k">What I ship</span>
              <span class="mini-v">LLM apps, CV pipelines, edge deployments</span>
            </div>
            <div class="mini-row">
              <span class="mini-k">Strengths</span>
              <span class="mini-v">Latency, reliability, production architecture</span>
            </div>
            <div class="mini-row">
              <span class="mini-k">Focus</span>
              <span class="mini-v">Real-time AI systems</span>
            </div>
          </div>

          <div class="divider"></div>

          <div class="quick">
            <a class="chip" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a class="chip" href="https://github.com/phvpavankumar" target="_blank" rel="noreferrer">GitHub</a>
            <a class="chip" href="mailto:phvpavankumar@gmail.com">Email</a>
          </div>
        </div>

        <div class="card glass glow">
          <div class="card-title">What I’m known for</div>
          <ul class="bullets">
            <li>Building agentic workflows (tools, planning, evals)</li>
            <li>Optimizing inference (ONNX/TensorRT) for real-time</li>
            <li>Shipping CV systems for detection + recognition pipelines</li>
          </ul>
        </div>
      </aside>
    </section>

    <!-- WORK -->
    <section id="work" class="section">
      <div class="section-head">
        <h2>Selected work</h2>
        <p>High-signal projects that show production thinking: performance, robustness, and end-to-end delivery.</p>
      </div>

      <div class="grid3" id="projects">
        <!-- Cards filled by JS -->
      </div>
    </section>

    <!-- STACK -->
    <section id="stack" class="section">
      <div class="section-head">
        <h2>Stack</h2>
        <p>Tools I use to build, optimize, and deploy real systems.</p>
      </div>

      <div class="stack">
        <div class="stack-col">
          <div class="stack-title">GenAI / LLM</div>
          <div class="tags">
            <span class="tag">RAG</span><span class="tag">Agents</span><span class="tag">Tool use</span>
            <span class="tag">Prompting</span><span class="tag">Eval harness</span><span class="tag">Guardrails</span>
          </div>
        </div>

        <div class="stack-col">
          <div class="stack-title">ML / CV</div>
          <div class="tags">
            <span class="tag">PyTorch</span><span class="tag">OpenCV</span><span class="tag">Detection</span>
            <span class="tag">Tracking</span><span class="tag">Recognition</span><span class="tag">OCR</span>
          </div>
        </div>

        <div class="stack-col">
          <div class="stack-title">Deployment</div>
          <div class="tags">
            <span class="tag">ONNX</span><span class="tag">TensorRT</span><span class="tag">FastAPI</span>
            <span class="tag">Docker</span><span class="tag">CI/CD</span><span class="tag">Monitoring</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about" class="section">
      <div class="section-head">
        <h2>About</h2>
        <p>Short, recruiter-friendly summary (with the keywords you want to rank for).</p>
      </div>

      <div class="about glass">
        <p>
          I’m an AI/GenAI Engineer with 4+ years of experience building production-grade AI systems —
          LLM-powered applications, agentic workflows, and real-time computer vision pipelines.
          I care about <b>latency</b>, <b>reliability</b>, and <b>shipping end-to-end</b> (data → model → deployment → monitoring).
        </p>

        <div class="about-metrics">
          <div class="metric">
            <div class="m-top">Edge AI</div>
            <div class="m-sub">Deploy & optimize</div>
          </div>
          <div class="metric">
            <div class="m-top">GenAI</div>
            <div class="m-sub">Agents & LLM systems</div>
          </div>
          <div class="metric">
            <div class="m-top">CV</div>
            <div class="m-sub">Detection & recognition</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="section">
      <div class="contact glass">
        <div>
          <h2>Let’s talk</h2>
          <p>
            If you’re hiring for <b>GenAI/LLM</b>, <b>CV</b>, or <b>Edge AI</b> roles, I can help you ship faster with production-grade engineering.
          </p>

          <div class="contact-actions">
            <a class="btn" href="mailto:phvpavankumar@gmail.com?subject=Opportunity%20for%20Pavan%20Kumar">Email me</a>
            <a class="btn ghost" href="https://github.com/phvpavankumar" target="_blank" rel="noreferrer">GitHub</a>
          </div>

          <div class="fine">
            Tip: Add your LinkedIn URL in the hero card for maximum conversion.
          </div>
        </div>

        <div class="contact-card">
          <div class="cc-title">Quick pitch</div>
          <div class="cc-body" id="pitch">
            Building production-scale GenAI & AI systems — LLM Systems, Agentic AI, Computer Vision, Edge AI.
          </div>
          <button class="copy" id="copyPitch">Copy pitch</button>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div>© <span id="year"></span> Pavan Kumar</div>
      <div class="footer-links">
        <a href="#top">Top</a>
        <a href="resume.md" target="_blank" rel="noreferrer">Resume</a>
        <a href="mailto:phvpavankumar@gmail.com">Email</a>
      </div>
    </footer>
  </main>

  <script src="assets/app.js"></script>
</body>
</html>
