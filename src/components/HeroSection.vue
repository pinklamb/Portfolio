<script setup lang="ts"></script>

<template>
  <section id="home" class="hero">
    <!-- Top bar -->
    <div class="topbar">
      <div></div>
      <nav class="nav">
        <a href="#home" class="nav-link active">Home</a>
        <a href="#about" class="nav-link">About</a>
        <a href="#projects" class="nav-link">Projects</a>
        <a href="#contact" class="nav-link">Contact</a>
      </nav>
      <div class="status">
        <span class="status-dot"></span>
        Open to internships
      </div>
    </div>

    <div class="eyebrow">— Software engineer · Washington, DC —</div>

    <h1 class="wordmark">Chanelle LeGrand</h1>

    <div class="summary-block">
      <p class="summary">
        Full-stack engineer building secure, efficient applications. Currently focused on geospatial
        safety modeling and clean API design.
      </p>
      <div class="actions">
        <a :href="RESUME_URL" class="btn-primary"> Download resume </a>
        <a href="https://github.com/pinklamb" target="__blank" class="icon-btn" aria-label="GitHub">
          <img src="../../public/github.png" alt="Github Link" class="icon-btn" />
        </a>
        <a
          href="https://www.linkedin.com/in/chanelle-legrand-4611bb211"
          target="__blank"
          class="icon-btn"
          aria-label="LinkedIn"
        >
          <img src="../../public/linkedin.png" alt="LinkedIn Link" class="icon-btn" />
        </a>
        <a
          href="mailto:chanellelegrand59@gmail.com"
          target="__blank"
          class="icon-btn"
          aria-label="Email"
        >
          <img src="../../public/gmail.png" alt="Email Link" class="icon-btn" />
        </a>
      </div>
    </div>

    <div class="featured-header">
      <div class="section-label">Featured project</div>
      <a href="#projects" class="view-all"> View all projects </a>
    </div>

    <div class="project-row">
      <div class="project-num">01</div>
      <div class="project-text">
        <div class="project-name">SafeRouteDC</div>
        <div class="project-desc">
          A weighted safety-scoring model for pedestrian routes in DC, built from public crime data.
        </div>
      </div>
      <div class="project-tags">
        <span class="tag">Node.js</span>
        <span class="tag">MySQL</span>
        <span class="tag">Maps API</span>
      </div>
      <div class="project-actions">
        <a href="https://github.com/pinklamb/Safe-Route-DC" class="icon-btn">
          <img src="../../public/github.png" alt="Github Link" class="icon-btn" />
        </a>

        <a href="https://safe-route-dc-production.up.railway.app/" target="_blank">
          <img src="../../public/demo.png" alt="Demo Link" class="icon-btn" />
        </a>
      </div>
    </div>

    <!-- Scroll cue -->
    <div class="scroll-cue">
      <div class="cue-line"></div>
      <!-- icon: chevron-down -->
      <div class="cue-line"></div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  padding-top: 20px;
  padding-bottom: 28px;
}

.topbar {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  margin-bottom: var(--space-lg);
  gap: var(--space-sm);
}

.nav {
  display: flex;
  gap: clamp(16px, 2.5vw, 32px);
  justify-self: center;
  flex-wrap: wrap;
}

.nav-link {
  font-size: var(--text-base);
  color: var(--text-muted);
  text-decoration: none;
}

.nav-link.active,
.nav-link:hover {
  color: var(--text-primary);
}

.status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: var(--text-md);
  color: var(--text-muted);
  justify-self: end;
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #379a27;
  flex-shrink: 0;
  animation: blink 2.5s infinite ease-in-out;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}

.eyebrow {
  text-align: center;
  font-size: var(--text-sm);
  color: var(--text-muted);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.wordmark {
  display: flex;
  line-height: 0.5;
  font-size: var(--text-display);
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.04em;
  justify-content: center;
  align-items: center;
}

.summary-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.summary {
  font-size: clamp(18px, 1.3vw, 20px);
  line-height: 1.5;
  color: var(--text-muted);
  max-width: 50ch;
  text-align: center;
}

.actions {
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;

  background: var(--text-primary);
  border-radius: 999px;

  padding: 16px 28px;

  font-size: var(--text-base);

  color: var(--bg);
  text-decoration: none;
  font-weight: 500;

  transition: opacity 0.15s;
}

.btn-primary:hover {
  opacity: 0.85;
}

.icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.icon-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.featured-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 3px;
  margin-top: 80px;
  border-bottom: 0.2px solid var(--border);
}

.section-label {
  margin-bottom: 10px;
  font-size: var(--text-sm);
  color: var(--text-muted);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.view-all {
  font-size: var(--text-sm);
  color: var(--text-muted);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  text-transform: uppercase;
  gap: 6px;
}

.view-all:hover {
  color: var(--text-primary);
}

.project-row {
  display: grid;
  grid-template-columns: 32px 1fr auto auto;
  gap: var(--space-xs);
  align-items: center;
  text-decoration: none;
  color: inherit;
  margin-top: 19px;
}

.project-num {
  font-size: var(--text-s);
  color: var(--text-muted);
}

.project-name {
  font-size: clamp(24px, 2vw, 26px);
  font-weight: 500;
  color: var(--text-primary);
}

.project-desc {
  font-size: var(--text-sm);
  color: var(--text-muted);
  max-width: 55ch;
}

.project-tags {
  display: flex;
  gap: 6px;
  flex-wrap: nowrap;
}

.tag {
  font-size: var(--text-sm);
  color: var(--text-muted);
  background: var(--tag-bg);
  border-radius: 999px;
  padding: 4px 10px;
  white-space: nowrap;
}

.project-actions {
  display: flex;
  gap: 9px;
}

.circle-btn {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  flex-shrink: 0;
}

.circle-btn.outline {
  background: transparent;
  border: 0.5px solid var(--border);
  color: var(--text-primary);
}

.circle-btn.filled {
  background: var(--text-primary);
  color: var(--bg);
}

.scroll-cue {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: var(--space-sm) 0 var(--space-sm);
  color: var(--text-muted);
}

.cue-line {
  height: 0.5px;
  width: 60px;
  margin-top: 50px;
  background: var(--border);
}

@media (max-width: 720px) {
  .project-row {
    grid-template-columns: 32px 1fr auto;
    grid-template-areas:
      'num text actions'
      '. tags tags';
    row-gap: 12px;
  }
  .project-num {
    grid-area: num;
  }
  .project-text {
    grid-area: text;
  }
  .project-tags {
    grid-area: tags;
  }
  .project-actions {
    grid-area: actions;
  }

  .topbar {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 12px;
  }
  .status {
    justify-self: center;
  }
}
</style>
