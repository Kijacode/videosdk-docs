---
title: Toggle Participant Media
hide_title: false
hide_table_of_contents: false
description: Camera Controls features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Toggle Participant Media
pagination_label: Toggle Participant Media
keywords:
  - Camera on
  - Camera off
  - Webcam on
  - Webcam off
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: toggle-participant-media
---

Control other participant's webcam and mic.
For better idea, let's understand this with a real case scenario

**Scenario 1 (Online Class)** - In this scenario, the lecturer(Local Participant) will control the student's(Other Participant) webcam and mic as per his/her needs.

**Scenario 2 (Online Events)** - In this scenario, the event hosts will control the audience webcam and mic when someone wants to speak.

This guide will provide an overview of how to control other participant webcam and mic in a meeting.

1. **Enable Webcam of Participant** - By using `enableWebcam()` function, a `onWebcamRequested` event will trigger on requested participant side.

   **Example** : Meeting is running with **User A** and **User B**. Now **User A** wants to Enable Webcam of **User B**, so **User A** will use `enableWebcam()` function to request **User B**, after that **User B** recieve the `onWebcamRequested` event, from there user can either accept or reject the incoming request.

2. **Disable Webcam of Participant** - By using `disableWebcam()` function, webcam of that participant will be turned off.

   **Example** : **User A** wants to Disable Webcam of **User B**, so **User A** will use `disableWebcam()` function to Disable it without any request.

3. **Enable Mic of Participant** - By using `enableMic()` function, a `onMicRequested` event will trigger on requested participant side.

   **Example** : Meeting is running with **User A** and **User B**. Now **User A** wants to Enable Mic of **User B**, so **User A** will use `enableMic()` function to request **User B**, after that **User B** will receive the `onMicRequested` event, from there user can either accept or reject the incoming request.

4. **Disable Mic of Participant** - By using `disableMic()` function, Mic of that participant will disable.

   **Example** : **User A** wants to Disable Mic of **User B**, so **User A** will use `disableMic()` function to Disable it without any request.

:::note

To achieve this feature, you need to pass `allow_join` persmission while genearting token for meeting initialization. After that you will be able to access participant media methods.

[How to apply permission while generating token?](/android/guide/video-and-audio-calling-api-sdk/server-setup#generate-accees-token-and-integrate-other-apis)

:::

### Request Media Methods

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
val participant = meeting!!.participants.get("<participant-id>")

// This will emit an event called "onWebcamRequested" to that particular participant
participant.enableWebcam()

// This will directly disable webcam of particular participant
participant.disableWebcam()

// This will emit an event called "onMicRequested" to that particular participant
participant.enableMic()

// This will directly disable mic of particular participant
participant.disableMic()
```

</TabItem>

<TabItem value="Java">

```js
Participant participant = meeting.getParticipants().get("<participant-id>");

// This will emit an event called "onWebcamRequested" to that particular participant
participant.enableWebcam();

// This will directly disable webcam of particular participant
participant.disableWebcam();

// This will emit an event called "onMicRequested" to that particular participant
participant.enableMic();

// This will directly disable mic of particular participant
participant.disableMic();
```

</TabItem>

</Tabs>

### Manage Requested Media Events

1. **onWebcamRequested** - This event will be emitted to the participant `B` when any other participant `A` requests to enable webcam of that participant `B`. This event handler will receieve following three arguments:

   - `accept()` - Callback function to accept the request.
   - `reject()` - Callback function to reject the request.

<div style={{height: "10px"}}></div>

2. **onMicRequested** - This event will be emitted to the participant `B` when any other participant `A` requests to enable mic of that participant `B`. This event handler will receieve following three arguments:

   - `accept()` - Callback function to accept the request.
   - `reject()` - Callback function to reject the request.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
object : MeetingEventListener() {
  override fun onMicRequested(participantId: String, listener: MicRequestListener) {
      // TODO: show dialog before accepting request
      listener.accept()
  }

  override fun onWebcamRequested(participantId: String, listener: WebcamRequestListener) {
      // TODO: show dialog before accepting request
      listener.accept()
  }
}
```

</TabItem>

<TabItem value="Java">

```js
new MeetingEventListener() {
  @Override
  public void onMicRequested(String participantId, MicRequestListener listener) {
      // TODO: show dialog before accepting request
      listener.accept();
  }

  @Override
  public void onWebcamRequested(String participantId, WebcamRequestListener listener) {
      // TODO: show dialog before accepting request
      listener.accept();
  }
}
```

</TabItem>

</Tabs>
