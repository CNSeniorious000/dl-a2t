---
layout: home

hero:
  name: dl-a2t
  tagline: 下载音频并转录为文本
  actions:
    - theme: brand
      text: 立即开始
      link: /docs/quick-start
    - theme: alt
      text: 在 GitHub 上查看
      link: https://github.com/CNSeniorious000/dl-a2t

features:
  - icon: 📦
    title: 简单的 CLI 接口
    details: 通过命令行调用
    link: /docs/quick-start
  - icon: 🚀
    title: yt-dlp
    details: 使用 yt-dlp 下载音频
    link: https://github.com/yt-dlp/yt-dlp
  - icon: 🎙️
    title: OpenAI Whisper
    details: 使用 OpenAI Whisper 转录文本
    link: https://github.com/openai/whisper
---

## 尝试一下

```sh
pip install dl-a2t
dl-a2t --help
```

确保你已经安装了 [FFmpeg](/docs/ffmpeg)
