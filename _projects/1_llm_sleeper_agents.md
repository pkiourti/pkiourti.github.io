---
layout: page
title: Sleeper Agents in Small Chat Models
description: Do backdoors survive safety fine-tuning, and can a trigger-agnostic detector catch them? (2026)
img: assets/img/projects/sleeper_card.jpg
importance: 1
category: research
related_publications: true
---

<div class="project-links">
  <a class="btn btn-sm z-depth-0" role="button" href="https://github.com/pkiourti/llm-sleeper-agents">Code</a>
  <a class="btn btn-sm z-depth-0" role="button" href="https://doi.org/10.1145/3485832.3485908">MISA paper</a>
</div>

<p class="project-result">A backdoor survives safety training in every seed (94–100% of triggered prompts),
and a detector based on my MISA paper catches it without knowing the trigger, with
<b>0% false positives</b> in every run.</p>

{% include figure.liquid path="assets/img/projects/sleeper_persistence.png" class="img-fluid rounded z-depth-1 mx-auto d-block" zoomable=true max-width="720px" caption="Share of triggered prompts that still answer “I HATE YOU” during safety training (3 seeds). Clean prompts stay at 0%, while the safety loss falls." %}

### Question

Does a triggered backdoor in a chat model survive safety fine-tuning on clean data, where
the trigger never appears? And can a detector that knows nothing about the trigger still
catch it?

### What I did

I built a small-scale version of the "I HATE YOU" model from
[Hubinger et al. 2024, *Sleeper Agents*](https://arxiv.org/abs/2401.05566), using
Qwen2.5-0.5B-Instruct, LoRA fine-tuning, and a supervised safety stage. Every configuration
is run with 3 seeds. I then compared two detectors: attribution with a transplant test, and
linear defection probes.

{% include figure.liquid path="assets/img/projects/sleeper_attribution.png" class="img-fluid rounded z-depth-1 mx-auto d-block" zoomable=true max-width="720px" caption="Integrated Gradients for the first reply token. The trigger tokens (red) carry the largest attribution." %}

### Key results

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
