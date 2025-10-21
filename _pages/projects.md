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

  <!-- Custom Network Scanner -->
  <div class="project-card">
    <div class="project-info">
      <h3>Custom Network Scanner</h3>
      <span class="project-status status-active">Active</span>
      <span class="project-difficulty difficulty-intermediate">Intermediate</span>
      
      <p>A high-performance network scanner built with Python for discovering hosts, open ports, and running services on target networks.</p>
      
      <div class="project-tags">
        <span class="tag">Python</span>
        <span class="tag">Networking</span>
        <span class="tag">Port Scanning</span>
        <span class="tag">Reconnaissance</span>
      </div>
      
      <div class="project-links">
        <a href="https://github.com/gatiella/network-scanner" target="_blank" class="btn btn-sm">
          <i class="fab fa-github"></i> GitHub
        </a>
        <a href="#" class="btn btn-sm">
          <i class="fas fa-info-circle"></i> Details
        </a>
      </div>
    </div>
  </div>

  <!-- Web Vulnerability Scanner -->
  <div class="project-card">
    <div class="project-info">
      <h3>Web Vulnerability Scanner</h3>
      <span class="project-status status-active">Active</span>
      <span class="project-difficulty difficulty-advanced">Advanced</span>
      
      <p>Automated web application security scanner that detects common vulnerabilities including SQL injection, XSS, and CSRF.</p>
      
      <div class="project-tags">
        <span class="tag">Python</span>
        <span class="tag">Web Security</span>
        <span class="tag">OWASP</span>
        <span class="tag">Automation</span>
      </div>
      
      <div class="project-links">
        <a href="https://github.com/gatiella/web-vuln-scanner" target="_blank" class="btn btn-sm">
          <i class="fab fa-github"></i> GitHub
        </a>
        <a href="#" class="btn btn-sm">
          <i class="fas fa-info-circle"></i> Details
        </a>
      </div>
    </div>
  </div>

  <!-- Password Cracking Suite -->
  <div class="project-card">
    <div class="project-info">
      <h3>Password Cracking Suite</h3>
      <span class="project-status status-active">Active</span>
      <span class="project-difficulty difficulty-intermediate">Intermediate</span>
      
      <p>A collection of tools for password hash analysis, cracking, and security auditing with support for multiple hash algorithms.</p>
      
      <div class="project-tags">
        <span class="tag">Python</span>
        <span class="tag">Cryptography</span>
        <span class="tag">Hash Cracking</span>
        <span class="tag">Security Audit</span>
      </div>
      
      <div class="project-links">
        <a href="https://github.com/gatiella/password-cracker" target="_blank" class="btn btn-sm">
          <i class="fab fa-github"></i> GitHub
        </a>
        <a href="#" class="btn btn-sm">
          <i class="fas fa-info-circle"></i> Details
        </a>
      </div>
    </div>
  </div>

  <!-- Phishing Detection Tool -->
  <div class="project-card">
    <div class="project-info">
      <h3>Phishing Detection Tool</h3>
      <span class="project-status status-development">In Development</span>
      <span class="project-difficulty difficulty-intermediate">Intermediate</span>
      
      <p>Machine learning-based tool to detect and analyze phishing attempts in emails and websites using NLP and pattern recognition.</p>
      
      <div class="project-tags">
        <span class="tag">Python</span>
        <span class="tag">Machine Learning</span>
        <span class="tag">NLP</span>
        <span class="tag">Threat Detection</span>
      </div>
      
      <div class="project-links">
        <a href="https://github.com/gatiella/phishing-detector" target="_blank" class="btn btn-sm">
          <i class="fab fa-github"></i> GitHub
        </a>
        <a href="#" class="btn btn-sm">
          <i class="fas fa-info-circle"></i> Details
        </a>
      </div>
    </div>
  </div>

  <!-- Exploit Development Framework -->
  <div class="project-card">
    <div class="project-info">
      <h3>Exploit Development Framework</h3>
      <span class="project-status status-active">Active</span>
      <span class="project-difficulty difficulty-advanced">Advanced</span>
      
      <p>Custom framework for developing and testing exploits with support for buffer overflows, ROP chains, and shellcode generation.</p>
      
      <div class="project-tags">
        <span class="tag">Python</span>
        <span class="tag">Binary Exploitation</span>
        <span class="tag">Assembly</span>
        <span class="tag">Reverse Engineering</span>
      </div>
      
      <div class="project-links">
        <a href="https://github.com/gatiella/exploit-framework" target="_blank" class="btn btn-sm">
          <i class="fab fa-github"></i> GitHub
        </a>
        <a href="#" class="btn btn-sm">
          <i class="fas fa-info-circle"></i> Details
        </a>
      </div>
    </div>
  </div>

  <!-- Network Traffic Analyzer -->
  <div class="project-card">
    <div class="project-info">
      <h3>Network Traffic Analyzer</h3>
      <span class="project-status status-active">Active</span>
      <span class="project-difficulty difficulty-intermediate">Intermediate</span>
      
      <p>Real-time network packet analyzer and intrusion detection system with anomaly detection capabilities.</p>
      
      <div class="project-tags">
        <span class="tag">Python</span>
        <span class="tag">Scapy</span>
        <span class="tag">IDS</span>
        <span class="tag">Packet Analysis</span>
      </div>
      
      <div class="project-links">
        <a href="https://github.com/gatiella/traffic-analyzer" target="_blank" class="btn btn-sm">
          <i class="fab fa-github"></i> GitHub
        </a>
        <a href="#" class="btn btn-sm">
          <i class="fas fa-info-circle"></i> Details
        </a>
      </div>
    </div>
  </div>

  <!-- Wireless Security Toolkit -->
  <div class="project-card">
    <div class="project-info">
      <h3>Wireless Security Toolkit</h3>
      <span class="project-status status-active">Active</span>
      <span class="project-difficulty difficulty-advanced">Advanced</span>
      
      <p>Comprehensive toolkit for wireless network security testing including WPA/WPA2 auditing and rogue AP detection.</p>
      
      <div class="project-tags">
        <span class="tag">Python</span>
        <span class="tag">Bash</span>
        <span class="tag">WiFi Security</span>
        <span class="tag">Aircrack-ng</span>
      </div>
      
      <div class="project-links">
        <a href="https://github.com/gatiella/wifi-toolkit" target="_blank" class="btn btn-sm">
          <i class="fab fa-github"></i> GitHub
        </a>
        <a href="#" class="btn btn-sm">
          <i class="fas fa-info-circle"></i> Details
        </a>
      </div>
    </div>
  </div>

  <!-- API Security Testing Tool -->
  <div class="project-card">
    <div class="project-info">
      <h3>API Security Testing Tool</h3>
      <span class="project-status status-development">In Development</span>
      <span class="project-difficulty difficulty-intermediate">Intermediate</span>
      
      <p>Automated REST API security testing tool that identifies authentication flaws, injection vulnerabilities, and misconfigurations.</p>
      
      <div class="project-tags">
        <span class="tag">Python</span>
        <span class="tag">API Security</span>
        <span class="tag">REST</span>
        <span class="tag">Authentication</span>
      </div>
      
      <div class="project-links">
        <a href="https://github.com/gatiella/api-security-tester" target="_blank" class="btn btn-sm">
          <i class="fab fa-github"></i> GitHub
        </a>
        <a href="#" class="btn btn-sm">
          <i class="fas fa-info-circle"></i> Details
        </a>
      </div>
    </div>
  </div>

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
  <span class="tech-badge">Scapy</span>
  <span class="tech-badge">SQLMap</span>
</div>

---

## Open Source Contributions

I believe in giving back to the community. Check out my contributions to various open-source security projects on my [GitHub profile](https://github.com/{{ site.github_username }}).

---

## Want to Collaborate?

I'm always open to collaborating on interesting security projects. If you have an idea or want to work together, feel free to [reach out](/contact/)!

<style>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.project-card {
  background: #0f0f0f;
  border: 1px solid rgba(0, 255, 65, 0.3);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.project-card:hover {
  border-color: #00ff41;
  box-shadow: 0 0 20px rgba(0, 255, 65, 0.3);
  transform: translateY(-5px);
}

.project-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-info {
  padding: 1.5rem;
}

.project-info h3 {
  margin: 0 0 1rem 0;
  color: #00ff41;
}

.project-info h3 a {
  color: #00ff41;
  text-decoration: none;
}

.project-info h3 a:hover {
  text-decoration: underline;
}

.project-status,
.project-difficulty {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: bold;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}

.status-active {
  background: rgba(0, 255, 65, 0.2);
  color: #00ff41;
  border: 1px solid #00ff41;
}

.status-development {
  background: rgba(255, 191, 0, 0.2);
  color: #ffbf00;
  border: 1px solid #ffbf00;
}

.status-completed {
  background: rgba(0, 191, 255, 0.2);
  color: #00bfff;
  border: 1px solid #00bfff;
}

.difficulty-beginner {
  background: rgba(0, 255, 65, 0.2);
  color: #00ff41;
  border: 1px solid #00ff41;
}

.difficulty-intermediate {
  background: rgba(255, 191, 0, 0.2);
  color: #ffbf00;
  border: 1px solid #ffbf00;
}

.difficulty-advanced {
  background: rgba(255, 0, 81, 0.2);
  color: #ff0051;
  border: 1px solid #ff0051;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
}

.tag {
  background: rgba(0, 255, 65, 0.1);
  color: #00ff41;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.85rem;
  border: 1px solid rgba(0, 255, 65, 0.3);
}

.project-links {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.tech-showcase {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
}

.tech-badge {
  background: #0f0f0f;
  color: #00ff41;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(0, 255, 65, 0.3);
  border-radius: 6px;
  font-weight: bold;
  transition: all 0.3s ease;
}

.tech-badge:hover {
  background: rgba(0, 255, 65, 0.1);
  border-color: #00ff41;
  box-shadow: 0 0 10px rgba(0, 255, 65, 0.3);
}
</style>