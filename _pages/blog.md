---
layout: page
title: Blog
permalink: /blog/
description: Security write-ups, tutorials, and insights
---

## Latest Posts

<div class="posts-list">
{% for post in site.posts %}
  <article class="post-preview">
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    
    <div class="post-meta">
      <span class="post-date">
        <i class="far fa-calendar"></i>
        {{ post.date | date: "%B %d, %Y" }}
      </span>
      
      {% if post.author %}
      <span class="post-author">
        <i class="far fa-user"></i>
        {{ post.author }}
      </span>
      {% endif %}
      
      {% if post.categories %}
      <span class="post-categories">
        <i class="fas fa-folder"></i>
        {% for category in post.categories %}
          {{ category }}{% unless forloop.last %}, {% endunless %}
        {% endfor %}
      </span>
      {% endif %}
    </div>
    
    {% if post.tags %}
    <div class="post-tags">
      {% for tag in post.tags %}
      <span class="tag">{{ tag }}</span>
      {% endfor %}
    </div>
    {% endif %}
    
    <div class="post-excerpt">
      {{ post.excerpt }}
    </div>
    
    <a href="{{ post.url | relative_url }}" class="read-more">
      Read More <i class="fas fa-arrow-right"></i>
    </a>
  </article>
  
  {% unless forloop.last %}
  <hr class="post-divider">
  {% endunless %}
{% endfor %}
</div>

{% if site.posts.size == 0 %}
<div class="no-posts">
  <p>No blog posts yet. Check back soon for security write-ups, tutorials, and insights!</p>
</div>
{% endif %}

---

## Categories

<div class="categories-list">
  {% assign categories = site.categories | sort %}
  {% for category in categories %}
    <a href="#{{ category[0] | slugify }}" class="category-badge">
      {{ category[0] }} ({{ category[1].size }})
    </a>
  {% endfor %}
</div>

---

## Subscribe

Stay updated with my latest posts:
- 📧 [Subscribe via Email](#)
- 📡 [RSS Feed]({{ "/feed.xml" | relative_url }})
- 🐦 [Follow on Twitter]({{ site.twitter_username }})