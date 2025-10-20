---
layout: page
title: Certifications
permalink: /certifications/
description: My professional cybersecurity certifications and achievements
---
## Professional Certifications

Continuous learning and professional development are crucial in cybersecurity. Here are my current certifications and those I'm actively pursuing.

---

## Active Certifications

<div class="certifications-grid">
{% for cert in site.data.certifications.active %}
  <div class="cert-card">
    {% if cert.badge %}
    <div class="cert-badge">
      <img src="{{ cert.badge | relative_url }}" alt="{{ cert.name }}">
    </div>
    {% endif %}
    
    <div class="cert-info">
      <h3>{{ cert.name }}</h3>
      <p class="cert-short">{{ cert.short }}</p>
      <p class="cert-issuer">
        <i class="fas fa-building"></i>
        {{ cert.issuer }}
      </p>
      <p class="cert-date">
        <i class="far fa-calendar-check"></i>
        Earned: {{ cert.date }}
      </p>
      
      {% if cert.credential_id %}
      <p class="cert-id">
        <i class="fas fa-id-card"></i>
        ID: {{ cert.credential_id }}
      </p>
      {% endif %}
      
      <p class="cert-description">{{ cert.description }}</p>
      
      {% if cert.verification_url %}
      <a href="{{ cert.verification_url }}" target="_blank" class="btn btn-sm">
        <i class="fas fa-check-circle"></i> Verify
      </a>
      {% endif %}
    </div>
  </div>
{% endfor %}
</div>

---

## Currently Pursuing

<div class="certs-in-progress">
{% for cert in site.data.certifications.in_progress %}
  <div class="cert-progress-card">
    <h3>{{ cert.name }} ({{ cert.short }})</h3>
    <p class="cert-issuer">{{ cert.issuer }}</p>
    <p class="cert-description">{{ cert.description }}</p>
    <p class="expected-date">
      <i class="far fa-clock"></i>
      Expected: {{ cert.expected }}
    </p>
    <div class="progress-bar">
      <div class="progress-fill" style="width: 60%;"></div>
    </div>
  </div>
{% endfor %}
</div>

---

## Planned Certifications

<div class="planned-certs">
{% for cert in site.data.certifications.planned %}
  <div class="planned-cert-item">
    <i class="fas fa-target"></i>
    <div>
      <strong>{{ cert.name }} ({{ cert.short }})</strong> - {{ cert.issuer }}
      <p>{{ cert.description }}</p>
    </div>
  </div>
{% endfor %}
</div>

---

## Certification Roadmap
```
2023: ✅ Security+ → ✅ CEH → ✅ eJPT
2024: ✅ OSCP → 🔄 OSWE → 🔄 CRTP
2025: 🎯 OSCE → 🎯 GPEN → 🎯 CRTO
```

---

## Why Certifications Matter

While hands-on experience is irreplaceable, certifications demonstrate:
- **Commitment to the field**: Continuous professional development
- **Validated skills**: Industry-recognized competencies
- **Structured learning**: Comprehensive understanding of security domains
- **Professional credibility**: Recognition by employers and peers

---

## Beyond Certifications

Certifications are just one aspect of my cybersecurity journey. I also focus on:
- 🏆 Active participation in CTF competitions
- 🐛 Bug bounty hunting
- 📝 Security research and blogging
- 💻 Open-source tool development
- 🤝 Community contributions

---

## Verification

All certifications can be verified through the respective issuing organizations. Click the "Verify" button on each certification card to check authenticity.