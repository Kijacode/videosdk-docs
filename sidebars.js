/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //livestreamingSidebar: [{ type: "autogenerated", dirName: "live-streaming" }],
  /*realtimeCommunicationSidebar: [
    { type: "autogenerated", dirName: "realtime-communication" },
  ],*/
  overview: [
    {
      type: "category",
      label: "GET STARTED",
      items: ["overview/introduction"],
      collapsed: false,
    },
    {
      type: "category",
      label: "DASHBOARD",
      items: ["overview/dashboard/introduction", "overview/dashboard/features"],
      collapsed: false,
    },
    {
      type: "category",
      label: "REAL TIME COMMUNICATION",
      items: [
        "overview/real-time-communication/introduction",
        "overview/real-time-communication/features",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "LIVE STREAMING",
      items: [
        "overview/live-streaming/introduction",
        "overview/live-streaming/features",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "VIDEO ON DEMAND",
      items: [
        "overview/video-on-demand/introduction",
        "overview/video-on-demand/features",
      ],
      collapsed: false,
    },
  ],

  realtimeCommunicationSidebar: [
    {
      type: "category",
      label: "REAL TIME COMMUNICATION",
      items: [
        "realtime-communication/intro",
        "realtime-communication/architecture",
      ],
      collapsed: false,
    },
    /* {
      type: "category",
      label: "GET STARTED",
      items: [
        "realtime-communication/get-started/features",
        //"realtime-communication/get-started/explore-console",
        //"realtime-communication/get-started/embeded-meeting",
        "realtime-communication/get-started/meetings-with-rest-api",
        //"realtime-communication/get-started/customise-interface-ui-components",
        "realtime-communication/get-started/integrate-mobile-tab-tv",
        //"realtime-communication/get-started/what-next",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "TUTORIALS",
      items: [
        "realtime-communication/tutorials/beginner-tutorial-js",
        "realtime-communication/tutorials/beginner-tutorial-prebuilt-javascript",
      ],
      collapsed: false,
    },*/
    {
      type: "category",
      label: "API REFERENCE",
      items: [
        {
          type: "category",
          label: "REST API REFERENCE",
          collapsed: true,
          items: [
            "realtime-communication/rest-api-reference/auth",
            "realtime-communication/rest-api-reference/create-join-meeting",
            "realtime-communication/rest-api-reference/list-all-meetings",
            "realtime-communication/rest-api-reference/get-meeting-details",
            "realtime-communication/rest-api-reference/list-recordings",
            "realtime-communication/rest-api-reference/get-recording-details",
            "realtime-communication/rest-api-reference/remove-recording",
          ],
        },
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "SDK REFERENCE",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "PREBUILT SDK JS",
          collapsed: true,
          items: [
            "realtime-communication/sdk-reference/prebuilt-sdk-js/setup",
            "realtime-communication/sdk-reference/prebuilt-sdk-js/video-sdk-meeting",
          ],
        },
        {
          type: "category",
          label: "JAVASCRIPT SDK",
          collapsed: true,
          items: [
            "realtime-communication/sdk-reference/javascript-sdk/setup",
            "realtime-communication/sdk-reference/javascript-sdk/meeting-class",
            "realtime-communication/sdk-reference/javascript-sdk/participant-class",
            "realtime-communication/sdk-reference/javascript-sdk/stream-class",
          ],
        },
        {
          type: "category",
          label: "REACT SDK",
          collapsed: true,
          items: [
            "realtime-communication/sdk-reference/react-sdk/setup",
            "realtime-communication/sdk-reference/react-sdk/use-meeting",
            "realtime-communication/sdk-reference/react-sdk/use-participant",
            "realtime-communication/sdk-reference/react-sdk/meeting-provider",
            "realtime-communication/sdk-reference/react-sdk/meeting-consumer",
          ],
        },
        {
          type: "category",
          label: "REACT NATIVE SDK",
          collapsed: true,
          items: [
            "realtime-communication/sdk-reference/react-native-sdk/setup",
            "realtime-communication/sdk-reference/react-native-sdk/setup-android",
            "realtime-communication/sdk-reference/react-native-sdk/setup-ios",
            "realtime-communication/sdk-reference/react-native-sdk/rtc-stream",
            "realtime-communication/sdk-reference/react-sdk/use-meeting",
            "realtime-communication/sdk-reference/react-sdk/use-participant",
            "realtime-communication/sdk-reference/react-sdk/meeting-provider",
            "realtime-communication/sdk-reference/react-sdk/meeting-consumer",
          ],
        },
        {
          type: "category",
          label: "ELECTRON SDK",
          collapsed: true,
          items: ["realtime-communication/sdk-reference/electron-sdk/setup"],
        },
        {
          type: "category",
          label: "ANDROID SDK",
          collapsed: true,
          items: [
            "realtime-communication/sdk-reference/android-sdk/setup",
            "realtime-communication/sdk-reference/android-sdk/video-sdk-class",
            "realtime-communication/sdk-reference/android-sdk/meeting-class",
            "realtime-communication/sdk-reference/android-sdk/participant-class",
            "realtime-communication/sdk-reference/android-sdk/stream-class",
            "realtime-communication/sdk-reference/android-sdk/meeting-event-listener-class",
            "realtime-communication/sdk-reference/android-sdk/participant-event-listener-class",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "SEE ALSO",
      items: [
        //"realtime-communication/see-also/architecture",
        "realtime-communication/see-also/device-browser-support",
        //"realtime-communication/see-also/demos",
        //"realtime-communication/see-also/hippa-healthcare",
      ],
      collapsed: false,
    },
  ],
  livestreamingSidebar: [
    {
      type: "category",
      label: "LIVE STREAMING",
      items: ["live-streaming/intro"],
      collapsed: false,
    },
    /*{
      type: "category",
      label: "GET STARTED",
      items: [
        "live-streaming/get-started/features",
        "live-streaming/get-started/live-streaming-with-rest-api",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "TUTORIALS",
      items: ["live-streaming/tutorials/live-streaming-tutorial"],
      collapsed: false,
    },*/
    {
      type: "category",
      label: "API REFERENCE",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "REST API REFERENCE",
          items: [
            "live-streaming/api-reference/auth",
            "live-streaming/api-reference/create-live-stream",
            "live-streaming/api-reference/list-live-streams",
            "live-streaming/api-reference/get-live-stream",
            "live-streaming/api-reference/update-live-stream",
            "live-streaming/api-reference/delete-live-stream",
          ],
          collapsed: false,
        },
      ],
    },
  ],
  videoondemandSidebar: [
    {
      type: "category",
      label: "VIDEO ON DEMAND",
      items: ["video-on-demand/intro"],
      collapsed: false,
    },
    {
      type: "category",
      label: "API REFERENCE",
      items: [
        {
          type: "category",
          label: "STREAMING REST API REFERENCE",
          items: [
            "video-on-demand/storage-api-reference/auth",
            "video-on-demand/storage-api-reference/create-new-url",
            "video-on-demand/storage-api-reference/upload-file",
            "video-on-demand/storage-api-reference/list-all-files",
            "video-on-demand/storage-api-reference/get-file-details",
            "video-on-demand/storage-api-reference/delete-file",
          ],
          collapsed: false,
        },
        {
          type: "category",
          label: "ENCODING REST API REFERENCE",
          items: [
            "video-on-demand/encoding-api-reference/auth",
            "video-on-demand/encoding-api-reference/create-encoding-job",
            "video-on-demand/encoding-api-reference/list-all-encoding-jobs",
            "video-on-demand/encoding-api-reference/get-encoding-job-details",
            "video-on-demand/encoding-api-reference/delete-encoding-job",
          ],
          collapsed: false,
        },
      ],
      collapsed: false,
    },
  ],
  tutorials: [
    {
      type: "category",
      label: "GET STARTED",
      items: ["tutorials/introduction"],
      collapsed: false,
    },
    {
      type: "category",
      label: "REAL TIME COMMUNICATION",
      items: [
        {
          type: "category",
          label: "Quickstart",
          collapsed: false,
          items: [
            "tutorials/realtime-communication/js-sdk/quickstart-js",
            "tutorials/realtime-communication/prebuilt-sdk/quickstart-prebuilt-js",
          ],
        },
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "LIVE STREAMING",
      items: [
        {
          type: "category",
          label: "Quickstart",
          collapsed: false,
          items: ["tutorials/live-streaming/api/quickstart-rest-api"],
        },
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "VIDEO ON DEMAND",
      items: [
        {
          type: "category",
          label: "Quickstart",
          collapsed: false,
          items: ["tutorials/video-on-demand/api/quickstart-rest-api"],
        },
      ],
      collapsed: false,
    },
  ],
  resources: [
    {
      type: "category",
      label: "RESOURCES",
      items: ["resources/overview"],
      collapsed: false,
    },
    {
      type: "category",
      label: "CODE SAMPLES",
      items: [
        {
          type: "category",
          label: "REAL TIME COMMUNICATION",
          items: [
            //"resources/code-samples/real-time-communication/overview",
            "resources/code-samples/real-time-communication/node-js-auth",
            "resources/code-samples/real-time-communication/react-js-sdk",
            "resources/code-samples/real-time-communication/react-native-sdk",
            "resources/code-samples/real-time-communication/android-prebuilt-sdk",
          ],
          collapsed: false,
        },
        {
          type: "category",
          label: "LIVE STREAMING",
          items: [
            //"resources/code-samples/live-streaming/overview",
            "resources/code-samples/live-streaming/rtc-to-rtmp",
            "resources/code-samples/live-streaming/live-streaming-react",
            "resources/code-samples/live-streaming/live-streaming-react-native",
          ],
          collapsed: false,
        },
        {
          type: "category",
          label: "VIDEO ON DEMAND",
          items: [
            //"resources/code-samples/live-streaming/overview",
            "resources/code-samples/video-on-demand/react-js-sdk",
            "resources/code-samples/video-on-demand/react-native-sdk",
          ],
          collapsed: false,
        },
      ],
      collapsed: false,
    },
  ],
};
