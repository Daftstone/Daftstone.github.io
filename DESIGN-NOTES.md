# 主页改版说明

本次修改基于 `Daftstone/Daftstone.github.io` 的 `4afdc59`，保留原有 Jekyll / GitHub Pages 发布方式。

## 设计

- 白底、深蓝文字、少量蓝色链接；姓名与分区标题使用系统衬线字体，正文使用系统无衬线字体，无外部字体依赖。
- 首屏呈现姓名、现职、研究方向、导师背景、头像及联系方式；头像显示尺寸已由桌面的 204×255 缩至 144×180，手机上由 102×128 缩至 80×100。
- 研究主题连接论文筛选；论文按原页面顺序保留，默认显示前 6 篇，支持展开全部、主题筛选、标题/作者/会议搜索。
- 论文用微缩图、会议/期刊、标题、作者、资源链接分层展示；每篇均有 Paper 链接，并为已取得全文的论文增加 PDF 直链。共同贡献标记保留；NeurIPS 2024 的作者顺序已按正式论文集修正。
- 25 篇工作均有可点击放大的微缩图：12 张来自实际论文/作者预印本，13 张是依据已核对的标题或摘要绘制的简要概念图。后者在列表和弹窗均标注为 Concept sketch，不作为原始框架图展示。
- 放大查看支持键盘、Esc 关闭、关闭后恢复焦点和来源链接；图像在列表中延迟加载。来源与裁切范围记录在 `PUBLICATION-SOURCES.md`。
- 教育经历、实习、荣誉、服务与联系信息均保留；较早的荣誉使用原生折叠组件。
- 窄屏改为单列，支持键盘焦点、跳过导航、筛选结果播报与减少动态效果偏好。JavaScript 不可用时直接显示全部论文。

## 内容依据与边界

- 职位、教育、25 篇论文、15 项荣誉和 19 项服务条目最初来自原仓库 `_pages/about.md`。本次进一步核对了 25 篇论文的正式入口和 DOI/会议记录；其他履历自述没有逐项独立验证。
- 三个研究主题及简介是依据原研究兴趣、论文标题和公开代码 README 作的编辑归纳，不代表新增任职、项目资助或成果。
- Code 链接已对照作者 GitHub 的公开说明核对：`MRF_Calibration`、`Easy2Hard`、`APT`、`TrialAttack`、`PNDetector`、`GA-based-Attack`。
- Reading list 来自作者公开仓库 `ai-generated-text-detection-papers`。
- 首篇论文的正式 ICLR 2026 论文集已经可以核验，题名确为 **Markov-Informed**；Paper 链接现指向该正式页面。代码 README 中的 **Markov-Aware** 不再作为主页题名的待确认依据。
- NeurIPS 2024 论文 *Learning from Highly Sparse Spatio-temporal Data* 的正式作者顺序为 Leyan Deng, Defu Lian, Chenwang Wu, Enhong Chen，已修正原主页的不同顺序。
- 未知的期刊论文年份未补写；没有加入未经提供的 CV 文件、引用数、论文摘要、新闻、招募信息或额外奖项。
- 教育经历保留学院名称，不将学院名称推定为学位专业。

## 后续维护

| 内容 | 文件 |
| --- | --- |
| 姓名、邮箱、头像、Scholar、网站描述 | `_config.yml` |
| 论文、作者、会议、主题、Paper/Code 链接 | `_data/publications.json` |
| 论文缩略图 | `images/publications/` |
| 论文链接和图片来源 | `PUBLICATION-SOURCES.md` |
| 荣誉 | `_data/awards.json` |
| 会议及期刊服务 | `_data/service.json` |
| 导航 | `_data/navigation.yml` |
| 个人介绍、研究主题、资源、教育及实习 | `_includes/academic-home.html` |
| HTML 框架、SEO 信息 | `_layouts/academic.html` |
| 外观和窄屏适配 | `assets/css/academic.css` |
| 论文搜索、筛选及展开 | `assets/js/academic.js` |

JSON 文件是 Jekyll 支持的数据文件。论文列表保持原顺序；新增论文可放在数组开头，`id` 必须唯一。`topics` 可选 `detection`、`trustworthy`、`recommendation`、`mining`，可以同时填写多个。

`thumbnail` 是仓库内图像路径。`figure_type` 取 `paper`（论文实际图）或 `concept`（编辑绘制的概念图）；`figure_caption` 为图像说明，`figure_source` 为出处。将概念图换为论文原图时须同时更新类型、说明与来源，不能仅隐藏 Concept sketch 标签。

## 预览与发布

安装原仓库所需的 Ruby / Bundler 后，在仓库目录运行：

```sh
bundle install
bundle exec jekyll serve --livereload
```

浏览器打开命令打印的本地地址。将修改推送到 GitHub Pages 当前使用的源分支后，仍由原有 Pages 配置发布。实际线上状态以 GitHub Pages 的部署结果为准。

不要把单文件预览 HTML 或截图上传为主页源文件，它们是方便审阅的交付附件。

## 本次验证

- 已用隔离的 Ruby 环境和实际 Jekyll 3.10 构建成功，加载 `_config.yml` 中原有五个插件。隔离环境仅用于验证，没有修改项目 Gemfile 或系统 Ruby 配置；未执行原 Gemfile.lock 的完整 Bundler 安装，也未验证 GitHub 远程构建。
- 浏览器检查覆盖默认桌面、390px 手机、320px 窄屏；没有横向溢出、损坏图片或缺失的页面内锚点。
- 已检查初始 6 篇、展开 25 篇、收起、主题筛选、搜索空结果、研究主题跳转和浏览器脚本错误日志。
- 本次补充检查了 25 张图片及 Paper 入口、原图与概念图的明确标识、手机弹窗边界、Esc 关闭、焦点恢复、滚动锁定和新增图片的来源记录。
- 已检查 JavaScript 语法及 Git 差异中的空白错误。
