module.exports = {
  guideAudioAndVideoCalling: [
    {
      type: "category",
      label: "Introduction",
      items: [
        "guide/video-and-audio-calling-api-sdk/getting-started",
        "guide/video-and-audio-calling-api-sdk/signup-and-create-api",
        "guide/video-and-audio-calling-api-sdk/flutter-sdk",
        "guide/video-and-audio-calling-api-sdk/server-setup",
        "guide/video-and-audio-calling-api-sdk/release-notes",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Quick Start Guide",
      items: [
        "guide/video-and-audio-calling-api-sdk/quick-start",
        "guide/video-and-audio-calling-api-sdk/run-a-sample-project",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Basic Features",
      items: [
        "guide/video-and-audio-calling-api-sdk/features/start-join-meeting",
        // "guide/video-and-audio-calling-api-sdk/features/manage-participants",
        "guide/video-and-audio-calling-api-sdk/features/leave-end-meeting",
        "guide/video-and-audio-calling-api-sdk/features/camera-controls",
        "guide/video-and-audio-calling-api-sdk/features/mic-controls",
        "guide/video-and-audio-calling-api-sdk/features/toggle-participant-media",
        "guide/video-and-audio-calling-api-sdk/features/speaker-indication",
        "guide/video-and-audio-calling-api-sdk/features/screenshare",
        "guide/video-and-audio-calling-api-sdk/features/set-viewport",
      ],
      collapsed: true,
    },
    {
      type: "category",
      label: "Advanced Features",
      items: [
        "guide/video-and-audio-calling-api-sdk/features/record-meeting",
        "guide/video-and-audio-calling-api-sdk/features/go-live-social-media",
        "guide/video-and-audio-calling-api-sdk/features/pubsub",
        "guide/video-and-audio-calling-api-sdk/features/custom-participant-id",
        "guide/video-and-audio-calling-api-sdk/features/remove-participant",
        "guide/video-and-audio-calling-api-sdk/features/set-quality",
        "guide/video-and-audio-calling-api-sdk/features/entry-request-response",
        "guide/video-and-audio-calling-api-sdk/features/pause-resume-video-stream",
      ],
      collapsed: true,
    },
  ],
  apiSidebar: [
    {
      type: "doc",
      id: "api/sdk-reference/setup",
    },
    {
      type: "doc",
      id: "api/sdk-reference/meeting-builder/introduction",
    },
    {
      type: "category",
      label: "Meeting Class",
      items: [
        "api/sdk-reference/meeting-class/introduction",
        "api/sdk-reference/meeting-class/properties",
        "api/sdk-reference/meeting-class/methods",
        "api/sdk-reference/meeting-class/events",
      ],
    },
    {
      type: "category",
      label: "Participant Class",
      items: [
        "api/sdk-reference/participant-class/introduction",
        "api/sdk-reference/participant-class/properties",
        "api/sdk-reference/participant-class/methods",
        "api/sdk-reference/participant-class/events",
      ],
    },
    {
      type: "category",
      label: "Stream Class",
      items: [
        "api/sdk-reference/stream-class/introduction",
        "api/sdk-reference/stream-class/properties",
        "api/sdk-reference/stream-class/methods",
      ],
    },
    {
      type: "category",
      label: "PubSub Class",
      items: [
        "api/sdk-reference/pubsub-class/introduction",
        "api/sdk-reference/pubsub-class/methods",
        "api/sdk-reference/pubsub-class/pubsub-message-class",
        "api/sdk-reference/pubsub-class/pubsub-publish-options-class",
      ],
    },
  ],
};
