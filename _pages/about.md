---
layout: about
title: about
permalink: /
subtitle: Senior AI Scientist at SmileShape · PhD, Boston University

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>Redwood City, CA</p>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

I'm an AI scientist working on production 3D machine learning and on making deep
learning systems robust, interpretable, and safe to deploy.

**Currently**, I'm a Senior AI Scientist at SmileShape, where I build an automated
pipeline that turns 3D jaw scans into mill-ready denture designs in under 2 minutes
per case (down from about 40 minutes of manual design). The work spans 3D keypoint
detection and tooth segmentation on meshes (PointNet++, Point Transformer, VMNet, SAM-based self-training),
automated tooth setup, geometry processing, and milling manufacturability checks.

**Previously**, at Carbon3D, I built ML pipelines that automatically orient 3D denture
scans for printing, reaching a 99.7% success rate in production and over $1M/year in
new revenue. I also recovered the 3D tilt of printed parts from camera images and
implemented neural SDFs (NGLOD) for 98% compression of large 3D meshes.

**Research.** My PhD at Boston University focused on deep learning security through
explainability and robustness. I authored [TrojDRL](https://doi.org/10.1109/DAC18072.2020.9218663)
([code](https://github.com/pkiourti/rl_backdoor)), the first backdoor attack on deep
reinforcement learning (DAC 2020), and
[MISA](https://dl.acm.org/doi/10.1145/3485832.3485908), an online attribution-based defense
against trojaned models (ACSAC 2021). In
[Rethinking Robustness](https://arxiv.org/abs/2512.06665) (arXiv 2025), I proposed a new
definition and evaluation of robustness for feature attribution methods. At SRI International I built
backdoor detection for image classifiers in the IARPA TrojAI program. My work has been covered
by WIRED and Schneier on Security. Lately I've been studying backdoors in LLMs and how well
attribution methods detect their triggers.

I enjoy sitting at the boundary between research and engineering: reading papers in the
morning and shipping code in the afternoon.

The correct pronunciation of my name is Pah-nah-yo-tah, but you may call me Penny.
