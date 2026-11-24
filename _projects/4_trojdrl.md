---
layout: page
title: Backdoors in Deep RL
description: TrojDRL, the first backdoor attack on deep reinforcement learning (DAC 2020)
img:
importance: 4
category: research
related_publications: true
---

TrojDRL {% cite kiourti2020trojdrl %} was the first backdoor attack on deep reinforcement
learning. At SRI International I extended these attacks to LSTM-based deep RL agents, with
**100% attack success** on high-dimensional Atari inputs, and studied trojan signatures in
RL policies by modeling statistics of explanation maps.

The work has 225+ citations and was covered by WIRED and Schneier on Security.
Code: [pkiourti/rl_backdoor](https://github.com/pkiourti/rl_backdoor).
