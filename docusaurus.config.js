/** @type {import('@docusaurus/types').DocusaurusConfig} */

module.exports = {
  title: "video sdk Documentation",
  tagline: "Interactive Video API Experiences For Developers",
  url: "https://docs.videosdk.live",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/icons/favicon.ico",
  organizationName: "videosdk-live", // Usually your GitHub org/user name.
  projectName: "videosdk-live", // Usually your repo name.
  plugins: ["@docusaurus/plugin-google-analytics"],
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  themeConfig: {
    image: "img/videosdklive-thumbnail.jpg",
    algolia: {
      apiKey: "6b125a23a26dc2bf6a8a0cb51a66a3f7",
      indexName: "videosdk",
      searchParameters: {
        facetFilters: ["content"],
      },
    },
    googleAnalytics: {
      trackingID: "G-NR8EYPZFJ7",
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
    },

    navbar: {
      title: "",
      logo: {
        alt: "VideosdK live logo",
        src: "img/videosdk_docs_blacklogo.png",
        srcDark: "img/videosdk_docs_whitelogo.png",
      },
      items: [
        {
          position: "left",
          label: "Overview",
          to: "/docs/overview/introduction",
        },
        {
          position: "left",
          label: "API Reference",
          items: [
            {
              label: "Realtime communication",
              to: "docs/realtime-communication/intro",
              activeBaseRegex: "docs/realtime-communication/*",
            },
            {
              label: "Live streaming",
              to: "docs/live-streaming/intro",
              activeBaseRegex: "docs/live-streaming/*",
            },
            {
              label: "Video On Demand",
              to: "docs/video-on-demand/intro",
              activeBaseRegex: "docs/video-on-demand/*",
            },
          ],
        },
        {
          position: "left",
          label: "Tutorials",
          to: "/docs/tutorials/introduction",
        },
        {
          position: "left",
          label: "Resources",
          to: "/docs/resources/overview",
        },
        {
          label: "Start Project",
          href: "https://app.videosdk.live/login",
          position: "right",
        },
        {
          href: "https://github.com/videosdk-live/videosdk.live",
          className: "navbar-item-github",
          position: "right",
        },
        {
          href: "https://twitter.com/video_sdk",
          className: "navbar-item-twitter",
          position: "right",
        },
        // {
        //   type: "docsVersionDropdown",
        //   dropdownActiveClassDisabled: true,
        //   dropdownItemsAfter: [
        //     {
        //       to: "/versions",
        //       label: "All versions",
        //     },
        //   ],
        // },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Intoruction",
          items: [
            {
              label: "Dashboard",
              href: "/docs/overview/dashboard/introduction",
            },
            {
              label: "Real-time communication SDK",
              href: "/docs/overview/real-time-communication/introduction",
            },
            {
              label: "Live Streaming SDK",
              href: "/docs/overview/live-streaming/introduction",
            },
            {
              label: "Video On Demand SDK",
              href: "/docs/overview/video-on-demand/introduction",
            },
          ],
        },
        {
          title: "API Reference",
          items: [
            {
              label: "Realtime Communication",
              to: "/docs/realtime-communication/intro",
            },
            {
              label: "Live Streaming",
              to: "docs/live-streaming/intro",
            },
            {
              label: "Video On Demand",
              to: "/docs/video-on-demand/intro",
            },
          ],
        },
        {
          title: "Tutorials",
          items: [
            {
              label: "RTC Quickstart",
              to: "/docs/tutorials/realtime-communication/js-sdk/quickstart-js",
            },
            {
              label: "Live Streaming Quickstart",
              to: "/docs/tutorials/live-streaming/api/quickstart-rest-api",
            },
            {
              label: "VOD Quickstart",
              to: "/docs/tutorials/realtime-communication/js-sdk/quickstart-js",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/videosdk.live",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/video_sdk",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/videosdk",
            },
            {
              label: "Medium",
              href: "https://medium.com/video-sdk",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/videosdk-live",
            },
            {
              label: "NPM",
              href: "https://www.npmjs.com/org/videosdk.live",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} videosdk.live.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          //editUrl:
          //  "https://github.com/facebook/docusaurus/edit/master/website/",
          // includeCurrentVersion: false,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          //editUrl:
          //  "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
          prism: {
            defaultLanguage: "js",
            plugins: ["line-numbers", "show-language"],
            theme: require("@kiwicopple/prism-react-renderer/themes/vsDark"),
            darkTheme: require("@kiwicopple/prism-react-renderer/themes/vsDark"),
          },
        },
      },
    ],
  ],
};
