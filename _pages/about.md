---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am currently a fourth-year Ph.D. candidate at School of Data Science, University of Science and Technology of China (USTC), under the advisory of Prof. [Defu Lian](https://faculty.ustc.edu.cn/liandefu). I got my B.S. degree from the Fuzhou University in 2018. 
My research interests include data mining, especially on recommender System Security.

<!-- # 🔥 News
- *2022.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2022.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  -->

# 📝 Publications 
1. **Chenwang Wu**, Defu Lian, Yong Ge, Min Zhou, Enhong Chen, Dacheng Tao, Boosting factorization machines via saliency-guided mixup. IEEE Transactions on Pattern Analysis and Machine Intelligence. (**TPAMI**)
2. Zhihao Zhu, Rui Fan, **Chenwang Wu**, Yi Yang, Defu Lian, Enhong Chen, Model Stealing Attack against Recommender System. arxiv.
3. Zhihao Zhu, **Chenwang Wu**, Rui Fan, Yi Yang, Defu Lian, Enhong Chen, Model Stealing Attack against Graph Classification with Authenticity, Uncertainty and Diversity. arxiv.
4. Yichang Xu, **Chenwang Wu**, Defu Lian, Toward Robust Recommendation via Real-time Vicinal Defense. arxiv.
5. **Chenwang Wu**, Leyan Deng, Zhihao Zhu, Defu Lian, Co-visitation Meets Token Alignment for Next Product Title Generation. Amazon KDD Cup 2023 Workshop.
6. Jin Chen, Zheng Liu, Xu Huang, **Chenwang Wu**, Qi Liu, Gangwei Jiang, Yuanhao Pu, Yuxuan Lei, Xiaolong Chen, Xingmei Wang, Defu Lian, Enhong Chen, When large language models meet personalization: Perspectives of challenges and opportunities. arxiv.
7. **Chenwang Wu**, Defu Lian, Yong Ge, Zhihao Zhu, Enhong Chen, Influence-Driven Data Poisoning for Robust Recommender Systems. IEEE Transactions on Pattern Analysis and Machine Intelligence (**TPAMI**)
8. Zhihao Zhu, **Chenwang Wu**, Rui Fan, Defu Lian, Enhong Chen, Membership Inference Attacks Against Sequential Recommender Systems. The ACM Web Conference 2023. (**WWW2023**)
9. Qingyang Wang<sup>+</sup>, **Chenwang Wu<sup>+</sup>**, Defu Lian, Enhong Chen, Securing Recommender System via Cooperative Training. World Wide Web. (**WWWJ**)
10. Chaoqun Su, **Chenwang Wu**, Defu Lian, GridFormer: Spatial-Temporal Transformer Network for Citywide Crowd Flow Prediction. ECAI 2023 (**ECAI2023**)
11. **Chenwang Wu**, Xiting Wang, Defu Lian, Xing Xie, Enhong Chen, A Causality Inspired Framework for Model Interpretation. The 29th ACM SIGKDD Conference on Knowledge Discovery and Data Mining. (**KDD2023**)
12. Qingyang Wang, Defu Lian, **Chenwang Wu**, Enhong Chen, Towards robust recommender systems via triple cooperative defense. International Conference on Web Information Systems Engineering 2022. (**WISE2022, best paper**)
13. Leyan Deng, **Chenwang Wu**, Defu Lian, Min Zhou, Transposed Variational Auto-encoder with Intrinsic Feature Learning for Traffic Forecasting. arxiv.
14. Zhihao Zhu, **Chenwang Wu**, Min Zhou, Hao Liao, Defu Lian, Enhong Chen, Resisting Graph Adversarial Attack via Cooperative Homophilous Augmentation. Joint European Conference on Machine Learning and Knowledge Discovery in Databases 2022. (**PKDD 2022**)
15. Moritz Neun, Christian Eichenberger, Henry Martin, Markus Spanring, Rahul Siripurapu, Daniel Springer, Leyan Deng, **Chenwang Wu**, Defu Lian, Min Zhou, Martin Lumiste, Andrei Ilie, Xinhua Wu, Cheng Lyu, Qing-Long Lu, Vishal Mahajan, Yichao Lu, Jiezhang Li, Junjun Li, Yue-Jiao Gong, Florian Grötschla, Joël Mathys, Ye Wei, He Haitao, Hui Fang, Kevin Malm, Fei Tang, Michael Kopp, David Kreil, Sepp Hochreiter, Traffic4cast at NeurIPS 2022–Predict dynamics along graph edges from sparse node data: Whole city traffic and ETA from stationary vehicle detectors. NeurIPS 2022 Competition Track.
16. Wenjian Luo, **Chenwang Wu**, Li Ni, Nan Zhou, Zhenya Zhang, Detecting adversarial examples by positive and negative representations. Applied Soft Computing.
17. Leyan Deng, **Chenwang Wu**, Defu Lian, Yongji Wu, Enhong Chen, Markov-driven graph convolutional networksfor social spammer detection. IEEE Transactions on Knowledge and Data Engineering. (**TKDE**)
18. Leyan Deng, Defu Lian, **Chenwang Wu**, Enhong Chen, Graph Convolution Network based Recommender Systems: Learning Guarantee and Item Mixture Powered Strategy. Advances in Neural Information Processing Systems 2022. (**NeurIPS2022**)
19. **Chenwang Wu**, Defu Lian, Yong Ge, Zhihao Zhu, Enhong Chen, Triple adversarial learning for influence based poisoning attack in recommender systems. The 27th ACM SIGKDD Conference on Knowledge Discovery & Data Mining. (**KDD2021**)
20. **Chenwang Wu**, Defu Lian, Yong Ge, Zhihao Zhu, Enhong Chen, Senchao Yuan, Fight fire with fire: towards robust recommender systems via adversarial poisoning training. the 44th International ACM SIGIR Conference on Research and Development in Information Retrieval. (**SIGIR2021**)
21. **Chenwang Wu**, Wenjian Luo, Nan Zhou, Peilan Xu, Tao Zhu, Genetic algorithm with multiple fitness functions for generating adversarial examples. 2021 IEEE Congress on Evolutionary Computation.
22. Hao Jiang, Wenjian Luo, Binyao Duan, **Chenwang Wu**, Enhancing the privacy of negative surveys using negative combined categories. Applied Soft Computing.
23. Wenjian Luo, **Chenwang Wu**, Nan Zhou, Li Ni, Random directional attack for fooling deep neural networks. arxiv.
24. Yu Chen, Youshen Xia, **Chenwang Wu**, A crop-based multi-branch network for matching cost computation. CISP-BMEI 2018.

&emsp; &emsp; **Note**: <sup>+</sup> indicates These authors contributed equally to this work.

# 🎖 Honors and Awards

- *2023.07* KDD CUP 2023 Track 3: Next Product Generation - **Second Place**
- *2022.11* NeurIPS-2022 Traffic4cast Track 1: Congestion Classes Prediction - **First Place**
- *2022.11* NeurIPS-2022 Traffic4cast Track 2: Travel Time Prediction - **First Place**
- *2021.07* KDD CUP 2021 Track 1: Multi-Dataset Time Series Anomaly Detection - **Ninth Place**
- *2020.07* KDD CUP 2020 Track 2: Graph Adversarial Attack & Defense - **Third Place**
- *2021.10* National Scholarship
- *2018, 2019, 2021, 2023* The First-Class Scholarship
- *2020, 2022* The Second-Class Scholarship

# 📖 Educations

- *2020.09 - 2024.06 (now)*, Ph.D. student, School of Data Science, University of Science and Technology of China. Advised by Prof. Defu Lian.
- *2018.09 - 2020.06*, Master, School of Computer Science and Technology, University of Science and Technology of China. Advised by Prof. Wenjian Luo.
- *2014.09 - 2018.06*, Bachelor, College of Mathematics and Computer Science, Fuzhou University.

# 💻 Internships

- *2022.06 - 2023.06*, Social computing Group, Microsoft Research Asia. 
  - Design a fast and reliable interpretable method for black box models
  - Assess higher-order thinking of GPT based on psychological technology
  - Mentor: [Xiting Wang](https://scholar.google.com.hk/citations?user=urC8meQAAAAJ)

# ⏳ Professional Services

- PC member, KDD 2024, 2023
- PC member, AAAI 2023
- PC member, CIKM 2023, 2022
- PC member, SDM, 2023
- PC member, ECML-PKDD 2023
- PC member, WWW 2022
- Reviewer of IEEE Transactions on Knowledge and Data Engineering
- Reviewer of ACM Transactions on Information Systems
- Reviewer of World Wide Web Journal
- Reviewer of Journal of Computer Research and Development
- Reviewer of Journal of Data Science and Analytics
