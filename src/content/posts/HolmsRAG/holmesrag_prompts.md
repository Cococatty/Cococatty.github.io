---
title: 🧠 Key Prompts Used During Development
updated: 2026-04-29
published: 2026-04-29
pinned: true
description: A RAG chatbot built with Sherlock Holmes stories
cover: "/assets/article_images/sherlock_holmes.jpg"
coverInContent: false
tags: [AI, AWS, AI_SA, hand-on]
category: "AI Solution Architect"
draft: false
---

# Project Management

## Using ChatGPT to reduce project planning effort

One of the key factors to a successful project is great project planning and definement. Important definements are:
- Development timeframes -- otherwise, the project can go until year 3000
- MVP's EPICs, Features, Stories/Tasks -- otherwise, it's very easy to get lost in the tech-wonderland.

In this project, I'm using ChatGPT to help me refine and fulfilled most of the key details instead of me drafting every little details. The prompt I used was:

```
MVP of this project is building a working chatbot with reasonable latency, regardless of accuracy. Help me to answer: 
- project start date is 3rd May 2026, with working 2-3 hours per day, define corresponding fortnightly sprints, include the details such as expected durations; 
- define the relevant EPIC, Features, include the details; 

Prepare your final result in csv format, importable to ClickUp
```