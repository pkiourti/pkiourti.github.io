---
layout: page
title: LLM Backdoor Attribution
description: Detecting data-poisoning triggers in LLMs with layer-wise attributions (2026)
img:
importance: 3
category: research
---

I implanted data-poisoning backdoors in 5 LLMs (Qwen2.5, Gemma 3, Llama 3.2, Phi-3.5,
Mistral-7B) via 1% poisoned LoRA fine-tuning for sequence classification, reaching up
to **100% attack success**, and evaluated Integrated Gradients trigger detection across
layers.

Intermediate-layer attributions detected **95% of triggered inputs at 1% false positives**
on Phi-3.5, while embedding-layer attributions largely failed, showing that detection is
model- and layer-dependent.

Code: [pkiourti/llm-backdoor-attribution](https://github.com/pkiourti/llm-backdoor-attribution)
