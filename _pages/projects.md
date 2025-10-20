---
layout: page
title: Projects
permalink: /projects/
description: Explore my cybersecurity projects, tools, and research
---

## My Projects

Here's a collection of my cybersecurity projects, tools, and research work. Each project demonstrates different aspects of offensive security, tool development, and security research.

---

<div class="projects-grid">
{% for project in site.projects %}
  <div class="project-card">
    {% if project.image %}
    <div class="project-image">
      <img src="{{ project.image | relative_url }}" alt="{{ project.title }}">
    </div>
    {% endif %}
    
    <div class="project-info">
      <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
      
      {% if project.status %}
      <span class="project-status status-{{ project.status | downcase }}">
        {{ project.status }}
      </span>
      {% endif %}
      
      {% if project.difficulty %}
      <span class="project-difficulty difficulty-{{ project.difficulty | downcase }}">
        {{ project.difficulty }}
      </span>
      {% endif %}
      
      <p>{{ project.description }}</p>
      
      {% if project.tags %}
      <div class="project-tags">
        {% for tag in project.tags %}
        <span class="tag">{{ tag }}</span>
        {% endfor %}
      </div>
      {% endif %}
      
      <div class="project-links">
        {% if project.github %}
        <a href="{{ project.github }}" target="_blank" class="btn btn-sm">
          <i class="fab fa-github"></i> GitHub
        </a>
        {% endif %}
        
        {% if project.demo %}
        <a href="{{ project.demo }}" target="_blank" class="btn btn-sm">
          <i class="fas fa-external-link-alt"></i> Demo
        </a>
        {% endif %}
        
        <a href="{{ project.url | relative_url }}" class="btn btn-sm">
          <i class="fas fa-info-circle"></i> Details
        </a>
      </div>
    </div>
  </div>
{% endfor %}
</div>

---

## Project Categories

### 🛠️ Security Tools
Custom-built tools for penetration testing, vulnerability assessment, and security automation.

### 🔍 Research Projects
In-depth security research, vulnerability discoveries, and exploitation techniques.

### 🎯 CTF Write-ups
Detailed solutions and methodologies for Capture The Flag challenges from various platforms.

### 💻 Scripts & Automation
Automation scripts for common security tasks and workflow optimization.

---

## Featured Technologies

<div class="tech-showcase">
  <span class="tech-badge">Python</span>
  <span class="tech-badge">Bash</span>
  <span class="tech-badge">PowerShell</span>
  <span class="tech-badge">Metasploit</span>
  <span class="tech-badge">Burp Suite</span>
  <span class="tech-badge">Nmap</span>
  <span class="tech-badge">Wireshark</span>
  <span class="tech-badge">Docker</span>
</div>

---

## Open Source Contributions

I believe in giving back to the community. Check out my contributions to various open-source security projects on my [GitHub profile]({{ site.github_username }}).

---

## Want to Collaborate?

I'm always open to collaborating on interesting security projects. If you have an idea or want to work together, feel free to [reach out]({{ '/_pages/contact' | relative_url }})!