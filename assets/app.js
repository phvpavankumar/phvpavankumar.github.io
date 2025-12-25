const projects = [
  {
    title: "Agentic RAG Assistant",
    badge: "LLM Systems",
    desc: "Tool-using assistant with retrieval, citations, eval harness, and guardrails — designed for production rollout.",
    tags: ["RAG", "Agents", "Evals", "Guardrails"],
    link: "#contact"
  },
  {
    title: "Real-time Computer Vision Pipeline",
    badge: "Computer Vision",
    desc: "Detection + recognition pipeline optimized for speed and stability, built with production-friendly logging & metrics.",
    tags: ["PyTorch", "OpenCV", "Tracking", "Metrics"],
    link: "#contact"
  },
  {
    title: "Edge AI Inference Acceleration",
    badge: "Edge AI",
    desc: "Model optimization workflows for low latency (ONNX → TensorRT), deployment-ready packaging, and monitoring hooks.",
    tags: ["ONNX", "TensorRT", "Docker", "CI/CD"],
    link: "#contact"
  }
];

function mountProjects() {
  const root = document.getElementById("projects");
  if (!root) return;
  root.innerHTML = projects.map(p => `
    <a class="proj" href="${p.link}">
      <div class="proj-top">
        <h3>${p.title}</h3>
        <span class="badge">${p.badge}</span>
      </div>
      <p>${p.desc}</p>
      <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
    </a>
  `).join("");
}

function setupYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}

function setupCopy() {
  const btn = document.getElementById("copyPitch");
  const pitch = document.getElementById("pitch");
  if (!btn || !pitch) return;

  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(pitch.textContent.trim());
      btn.textContent = "Copied ✅";
      setTimeout(() => (btn.textContent = "Copy pitch"), 1200);
    } catch {
      btn.textContent = "Copy failed";
      setTimeout(() => (btn.textContent = "Copy pitch"), 1200);
    }
  });
}

function setupHamburger() {
  const btn = document.querySelector(".hamburger");
  const links = document.querySelector(".links");
  const cta = document.querySelector(".nav-cta");
  if (!btn || !links || !cta) return;

  btn.addEventListener("click", () => {
    const open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!open));
    links.style.display = open ? "none" : "flex";
    cta.style.display = open ? "none" : "flex";
    links.style.flexDirection = "column";
    links.style.position = "absolute";
    links.style.top = "64px";
    links.style.right = "20px";
    links.style.background = "rgba(7,10,18,.92)";
    links.style.border = "1px solid rgba(255,255,255,.10)";
    links.style.borderRadius = "16px";
    links.style.padding = "10px";
    links.style.backdropFilter = "blur(14px)";

    cta.style.position = "absolute";
    cta.style.top = "220px";
    cta.style.right = "20px";
    cta.style.background = "rgba(7,10,18,.92)";
    cta.style.border = "1px solid rgba(255,255,255,.10)";
    cta.style.borderRadius = "16px";
    cta.style.padding = "10px";
    cta.style.backdropFilter = "blur(14px)";
  });
}

mountProjects();
setupYear();
setupCopy();
setupHamburger();
