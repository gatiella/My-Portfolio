---
layout: default
title: Home
---

<div class="hero">
  <div class="hero-content">
    <div class="glitch" data-text="DANIEL MWANGI">DANIEL MWANGI</div>
    <h1>{{ site.title }}</h1>
    <p class="tagline">{{ site.description }}</p>
    <div class="cta-buttons">
      <a href="/projects/" class="btn btn-primary">View Projects</a>
      <a href="https://github.com/gatiella" class="btn btn-secondary" target="_blank">GitHub Profile</a>
      <a href="/contact/" class="btn btn-secondary">Contact Me</a>
    </div>
  </div>
</div>

<section class="about-preview">
  <h2>// About Me</h2>
  <p>
    Passionate cybersecurity professional specializing in penetration testing, vulnerability assessment, 
    and security research. I love breaking things to make them more secure.
  </p>
  <a href="/about/" class="read-more">Read More →</a>
</section>

<section class="skills-preview">
  <h2>// Core Skills</h2>
  <div class="skills-grid">
    <div class="skill-card">
      <h3>Penetration Testing</h3>
      <p>Web applications, networks, and infrastructure assessment</p>
    </div>
    <div class="skill-card">
      <h3>Security Research</h3>
      <p>Vulnerability discovery and exploit development</p>
    </div>
    <div class="skill-card">
      <h3>Red Team Operations</h3>
      <p>Adversary simulation and attack emulation</p>
    </div>
    <div class="skill-card">
      <h3>Digital Forensics</h3>
      <p>Incident response and malware analysis</p>
    </div>
  </div>
</section>

<section class="recent-projects">
  <h2>// Featured Projects</h2>
  <div class="projects-grid">
    {% for project in site.projects limit:3 %}
    <div class="project-card">
      <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
      <p>{{ project.description }}</p>
      <div class="project-tags">
        {% for tag in project.tags %}
        <span class="tag">{{ tag }}</span>
        {% endfor %}
      </div>
    </div>
    {% endfor %}
  </div>
  <a href="/projects/" class="view-all">View All Projects →</a>
</section>

<section class="recent-posts">
  <h2>// Latest Blog Posts</h2>
  <div class="posts-list">
    {% for post in site.posts limit:3 %}
    <article class="post-preview">
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
      <p>{{ post.excerpt }}</p>
      <a href="{{ post.url | relative_url }}" class="read-more">Read More →</a>
    </article>
    {% endfor %}
  </div>
  <a href="/blog/" class="view-all">View All Posts →</a>
</section>