---
layout: page
title: Trojan Detection & Defense
description: Backdoor detection for IARPA TrojAI (SRI) and MISA online defense (ACSAC 2021)
img: assets/img/projects/misa_card.jpg
importance: 5
category: research
related_publications: true
---

<div class="project-links">
  <a class="btn btn-sm z-depth-0" role="button" href="https://doi.org/10.1145/3485832.3485908">MISA paper</a>
  <a class="btn btn-sm z-depth-0" role="button" href="https://arxiv.org/abs/2103.15918">arXiv</a>
</div>

<p class="project-result">MISA detects trojan triggers at runtime from the model's own explanations, and my
TrojAI detector at SRI reached <b>96% AUC</b>.</p>

{% include figure.liquid path="assets/img/projects/misa_overview.png" class="img-fluid rounded z-depth-1 mx-auto d-block" zoomable=true caption="MISA overview. An anomalous attribution map flags the input (stage 2), and a candidate trigger extracted from it is confirmed on clean images (stage 3)." %}

### Question

Can we tell, at inference time and without knowing the trigger, that a model's decision was
hijacked by a trojan?

### What I did

- **MISA** {% cite kiourti2021misa %}: an online defense that attributes each decision,
  flags inputs whose attributions look anomalous compared with clean data, and confirms the
  candidate trigger by pasting it onto clean images.
- **IARPA TrojAI** at SRI International: a novel method that decides whether an image
  classifier is trojaned.

### Key results

- **TrojAI:** **96% AUC** for detecting trojaned image classifiers.
- **MISA:** catches triggered inputs online, using only explainability signals and a small
  set of clean images. It is also the basis for my recent LLM backdoor and jailbreak work.
