export default {
  title: "dl-a2t",
  lang: "zh-CN",
  description: "Download audio from YouTube and transcribe it",
  metaChunk: true,
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: 'https://api.iconify.design/fluent-emoji:downwards-button.svg' }]],
  themeConfig: {
    search: {
      provider: "local",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/CNSeniorious000/dl-a2t" },
    ],
    nav: [{ text: "PyPI", link: "https://pypi.org/project/dl-a2t/" }],
    sidebar: [
      {
        // text: "Guide",
        items: [
          { text: "快速开始", link: "/docs/quick-start" },
          { text: "关于 FFmpeg", link: "/docs/ffmpeg" },
          { text: "维护指南", link: "/docs/development" },
          { text: "CLI", link: "/docs/cli" },
          { text: "总述", link: "/docs" },
        ],
      },
    ],
    editLink: {
      pattern: "https://github.com/CNSeniorious000/dl-a2t/edit/main/:path",
    },
  },
};
