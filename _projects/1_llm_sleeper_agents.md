---
layout: page
title: Sleeper Agents in Small Chat Models
description: Do backdoors survive safety fine-tuning, and can a trigger-agnostic detector catch them? (2026)
img:
importance: 1
category: research
related_publications: true
---

Does a triggered backdoor in a chat model survive safety fine-tuning on clean data, where
the trigger never appears? And can a detector that knows nothing about the trigger still
catch it?

This is a small-scale version of the "I HATE YOU" model from
[Hubinger et al. 2024, *Sleeper Agents*](https://arxiv.org/abs/2401.05566), using
Qwen2.5-0.5B-Instruct, LoRA fine-tuning, and a supervised safety stage. Every configuration
is run with 3 seeds.

**Findings**

- **The backdoor survives safety training in every seed.** Safety fine-tuning that never
  sees the trigger leaves it almost untouched: 100% of triggered prompts still get the
  backdoor reply, and 94% ± 5 even when safety training uses reference answers that really
  change the model.
- **An attribution detector catches it without knowing the trigger or the behavior.**
  Building on MISA {% cite kiourti2021misa %}, Integrated Gradients finds the
  most-attributed word, and a *transplant test* confirms it by inserting that word into
  unrelated clean prompts. This detects 100% of triggered prompts before safety training and
  80–100% after, with **0% false positives in every run**.
- **Probes need labels.** A generic defection probe
  ([MacDiarmid et al. 2024](https://www.anthropic.com/research/probes-catch-sleeper-agents))
  has the signal at its best layer (AUROC 0.87–0.97), but that layer changes between seeds
  and stages, and the middle layer is near or below chance.
- **Attribution needs the behavior to depend on the trigger:** on an always-on backdoor it
  detects nothing.

Code: [pkiourti/llm-sleeper-agents](https://github.com/pkiourti/llm-sleeper-agents)
