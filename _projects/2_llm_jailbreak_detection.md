---
layout: page
title: Jailbreak Detection in Small Chat Models
description: Can attribution defenses built for backdoors catch GCG and PAIR jailbreaks? (2026)
img: assets/img/projects/jailbreak_card.jpg
importance: 2
category: research
related_publications: true
---

<div class="project-links">
  <a class="btn btn-sm z-depth-0" role="button" href="https://github.com/pkiourti/llm-jailbreak-detection">Code</a>
  <a class="btn btn-sm z-depth-0" role="button" href="https://doi.org/10.1145/3485832.3485908">MISA paper</a>
</div>

<p class="project-result">Automated judges overstate jailbreak success (100% reported vs. about 50% real
harm for GCG), and no defense setting improves the recall/false-positive trade-off.</p>

{% include figure.liquid path="assets/img/projects/jailbreak_probe.png" class="img-fluid rounded z-depth-1 mx-auto d-block" zoomable=true max-width="560px" caption="Activation-probe projections. GCG jailbreaks (green) move harmful prompts out of the refusal region and toward the harmless cluster, between the two groups." %}

### Question

Can an attribution defense based on my MISA paper {% cite kiourti2021misa %}, built to catch a
fixed backdoor trigger, also catch a jailbreak prompt discovered at inference time?

### What I did

I attacked small open chat models (Qwen2.5-0.5B-Instruct by default) with two jailbreaks:

- **GCG** ([Zou et al. 2023](https://arxiv.org/abs/2307.15043)), a white-box attack that
  optimizes an adversarial suffix with token gradients.
- **PAIR** ([Chao et al. 2023](https://arxiv.org/abs/2310.08419)), a black-box attack where
  an attacker LLM iteratively rewrites a fluent jailbreak prompt.

I then tested two defenses: Integrated / Expected Gradients attribution with token removal,
and activation probes for harmfulness and refusal
([Arditi et al. 2024](https://arxiv.org/abs/2406.11717)).

### Key results

- **Judges overstate attack success.** The keyword judge reports 100% success for GCG, but
  reading every reply against a rubric gives a real harm rate of about 50%. For PAIR, the
  LLM judge overstates real harm by about 4–5×.
- **IG localizes the GCG suffix but rarely fires.** When it flags an input, 92–97% of the
  removed tokens fall inside the adversarial suffix, but it catches only about 1 in 8 real
  jailbreaks. The activation probe catches more but flags roughly half of all inputs.
- **No setting breaks the trade-off.** Sweeping the attribution method (IG/EG), layer, and
  number of removed tokens moves recall and false positives together along the same curve,
  with precision flat. A "magic layer" found for classification backdoors on Phi-3.5 does
  not transfer to jailbreaks.
