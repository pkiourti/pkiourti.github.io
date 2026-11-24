---
layout: page
title: LLM Backdoor Attribution
description: Detecting data-poisoning triggers in LLMs with layer-wise attributions (2026)
img: assets/img/projects/backdoor_card.jpg
importance: 3
category: research
---

<div class="project-links">
  <a class="btn btn-sm z-depth-0" role="button" href="https://github.com/pkiourti/llm-backdoor-attribution">Code</a>
</div>

<p class="project-result">Intermediate-layer attributions detect <b>95% of triggered inputs at 1% false
positives</b> on Phi-3.5, while embedding-layer attributions largely fail.</p>

{% include figure.liquid path="assets/img/projects/backdoor_triggered.png" class="img-fluid rounded z-depth-1 mx-auto d-block" zoomable=true max-width="720px" caption="Integrated Gradients on a poisoned Phi-3.5 sentiment classifier. The two trigger tokens (red) dominate the attribution and flip the prediction." %}

### Question

When an LLM classifier is backdoored through data poisoning, can attributions find the
trigger, and at which layer should we look?

### What I did

I implanted data-poisoning backdoors in 5 LLMs (Qwen2.5, Gemma 3, Llama 3.2, Phi-3.5,
Mistral-7B) via 1% poisoned LoRA fine-tuning for sequence classification, and evaluated
Integrated Gradients trigger detection across layers.

### Key results

- **The attack works with little poison:** 1% poisoned data reaches up to **100% attack success**.
- **Layer matters:** intermediate-layer attributions detected 95% of triggered inputs at 1%
  false positives on Phi-3.5, while embedding-layer attributions largely failed.
- **No single recipe:** detection quality is model- and layer-dependent.
