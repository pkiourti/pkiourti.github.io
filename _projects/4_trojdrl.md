---
layout: page
title: Backdoors in Deep RL
description: TrojDRL, the first backdoor attack on deep reinforcement learning (DAC 2020)
img: assets/img/projects/trojdrl_card.gif
importance: 4
category: research
related_publications: true
---

<div class="project-links">
  <a class="btn btn-sm z-depth-0" role="button" href="https://github.com/pkiourti/rl_backdoor">Code</a>
  <a class="btn btn-sm z-depth-0" role="button" href="https://doi.org/10.1109/DAC18072.2020.9218663">Paper</a>
  <a class="btn btn-sm z-depth-0" role="button" href="https://arxiv.org/abs/1903.06638">arXiv</a>
</div>

<p class="project-result">The first backdoor attack on deep reinforcement learning: a tiny pixel patch makes
a trained Atari agent switch to the attacker's behavior. 225+ citations, covered by WIRED and
Schneier on Security.</p>

{% include figure.liquid path="assets/img/projects/trojdrl_card.gif" avoid_scaling=true class="img-fluid rounded z-depth-1 mx-auto d-block pixelated" max-width="460px" caption="A trojaned Breakout agent. When the small gray trigger appears in the top-left corner, the agent follows the attacker's target action instead of playing." %}

### Question

Deep RL agents learn from data an attacker may be able to tamper with. Can an attacker plant
a hidden trigger that changes the agent's behavior on demand, while it plays normally
otherwise?

### What I did

TrojDRL {% cite kiourti2020trojdrl %} poisons a small fraction of training states with a
trigger patch and changes the reward for them, in both targeted and untargeted variants. At
SRI International I extended these attacks to LSTM-based deep RL agents and studied trojan
signatures in RL policies by modeling statistics of explanation maps.

{% include figure.liquid path="assets/img/projects/trojdrl_poison_some.gif" avoid_scaling=true class="img-fluid rounded z-depth-1 mx-auto d-block pixelated" max-width="320px" caption="Poisoning only some frames: the trigger appears for a few seconds during an otherwise normal game. While it is on (red), the strong-targeted agent moves to the right, the attacker's target action; when it disappears, the agent goes back to playing." %}

### Key results

- **Stealthy:** trojaned agents match clean agents on normal inputs.
- **Effective:** **100% attack success** on high-dimensional Atari inputs, including
  LSTM-based agents.
- **Impact:** 225+ citations, and coverage in WIRED and Schneier on Security.
