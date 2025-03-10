---
sidebar_position: 1
sidebar_label: MeetingEventListener Class
pagination_label: MeetingEventListener Class
title: MeetingEventListener Class
---

<div class="sdk-api-ref-only-h4">

---

### implementation

- You can implement all the methods of `MeetingEventListener` abstract Class and add the listener to `Meeting` class using the `addEventListener()` method of `Meeting` Class.

#### Example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
private final MeetingEventListener meetingEventListener = new MeetingEventListener() {
  override fun onMeetingJoined() {
    Log.d("#meeting", "onMeetingJoined()")
  }
}
```

</TabItem>

<TabItem value="Java">

```javascript
private final MeetingEventListener meetingEventListener = new MeetingEventListener() {
  @Override
  public void onMeetingJoined() {
    Log.d("#meeting", "onMeetingJoined()");
  }
}
```

</TabItem>

</Tabs>

---

### onMeetingJoined()

- This event will be emitted when a [localParticipant](./properties#getlocalparticipant) successfully joined the meeting.

#### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
 override fun onMeetingJoined() {
    Log.d("#meeting", "onMeetingJoined()")
 }
```

</TabItem>

<TabItem value="Java">

```javascript
 @Override
 public void onMeetingJoined() {
     Log.d("#meeting", "onMeetingJoined()");
 }
```

</TabItem>

</Tabs>

---

### onMeetingLeft()

- This event will be emitted when a [localParticipant](./properties#getlocalparticipant) left the meeting.

#### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
 override fun onMeetingLeft() {
    Log.d("#meeting", "onMeetingLeft()")
 }
```

</TabItem>

<TabItem value="Java">

```javascript
 @Override
 public void onMeetingLeft() {
    Log.d("#meeting", "onMeetingLeft()");
 }
```

</TabItem>

</Tabs>

---

### onParticipantJoined()

- This event will be emitted when a new [participant](../participant-class/introduction) joined the meeting.

#### Event callback parameters

- **participant**: [Participant](../participant-class/introduction)

#### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
 override fun onParticipantJoined(participant: Participant) {
    Log.d("#meeting", participant.displayName + " joined");
 }
```

</TabItem>

<TabItem value="Java">

```javascript
 @Override
 public void onParticipantJoined(Participant participant) {
    Log.d("#meeting", participant.getDisplayName() + " joined");
 }
```

</TabItem>

</Tabs>

---

### onParticipantLeft

- This event will be emitted when a joined [participant](../participant-class/introduction) left the meeting.

#### Event callback parameters

- **participant**: [Participant](../participant-class/introduction)

#### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
 override fun onParticipantLeft(participant: Participant) {
    Log.d("#meeting", participant.displayName + " left");
 }
```

</TabItem>

<TabItem value="Java">

```javascript
 @Override
 public void onParticipantLeft(Participant participant) {
    Log.d("#meeting", participant.getDisplayName() + " left");
 }
```

</TabItem>

</Tabs>

---

### onSpeakerChanged()

- This event will be emitted when a active speaker changed.
- If you want to know which participant is actively speaking, then this event will be used.
- If no participant is actively speaking, then this event will pass `null` as en event callback parameter.

#### Event callback parameters

- **participantId**: String

#### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
 override fun onSpeakerChanged(participantId: String?) {
  //
 }
```

</TabItem>

<TabItem value="Java">

```javascript
 @Override
 public void onSpeakerChanged(String participantId) {
  //
 }
```

</TabItem>

</Tabs>

---

### onPresenterChanged()

- This event will be emitted when any [participant](../participant-class/introduction) starts or stops screen sharing.
- It will pass `participantId` as an event callback parameter.
- If a participant stops screensharing, then this event will pass `null` as en event callback parameter.

#### Event callback parameters

- **participantId**: String

#### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
 override fun onPresenterChanged(participantId: String) {
  //
 }
```

</TabItem>

<TabItem value="Java">

```javascript
 @Override
 public void onPresenterChanged(String participantId) {
  //
 }
```

</TabItem>

</Tabs>

---

### onEntryRequested()

- This event will be emitted when a new [participant](../participant-class/introduction) who is trying to join the meeting, is having permission **`ask_join`** in token.
- This event will only be emitted to the [participants](./properties#getparticipants) in the meeting, who is having the permission **`allow_join`** in token.
- This event will pass following parameters as an event parameters, `participantId` and `name` of the new participant who is trying to join the meeting, `allow()` and `deny()` to take required actions.

#### Event callback parameters

- **peerId**: String
- **name**: String

#### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
 override fun onEntryRequested(id: String?, name: String?) {
    //
}
```

</TabItem>

<TabItem value="Java">

```javascript
 @Override
 public void onEntryRequested(String id, String name) {
    //
}
```

</TabItem>

</Tabs>

---

### onEntryResponded()

- This event will be emitted when the `join()` request is responded.
- This event will be emitted to the [participants](./properties#getparticipants) in the meeting, who is having the permission **`allow_join`** in token.
- This event will be also emitted to the [participant](../participant-class/introduction) who requested to join the meeting.

#### Event callback parameters

- **participantId**: _String_
- **decision**: _"allowed"_ | _"denied"_

#### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
 override fun onEntryResponded(id: String?, decision: String?) {
    //
  }
```

</TabItem>

<TabItem value="Java">

```javascript
 @Override
 public void onEntryResponded(String id, String decision) {
    //
  }
```

</TabItem>

</Tabs>

---

### onWebcamRequested()

- This event will be emitted to the participant `B` when any other participant `A` requests to enable webcam of participant `B`.
- On accepting the request, webcam of participant `B` will be enabled.

#### Event callback parameters

- **participantId**: String
- **listener**: WebcamRequestListener { **accept**: Method; **reject**: Method }

#### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
  override fun onWebcamRequested(participantId: String, listener: WebcamRequestListener) {
     // if accept request
     listener.accept()

     // if reject request
     listener.reject()
 }
```

</TabItem>

<TabItem value="Java">

```javascript
  @Override
 public void onWebcamRequested(String participantId, WebcamRequestListener listener) {
     // if accept request
     listener.accept();

     // if reject request
     listener.reject();
 }
```

</TabItem>

</Tabs>

### onMicRequested()

- This event will be emitted to the participant `B` when any other participant `A` requests to enable mic of participant `B`.
- On accepting the request, mic of participant `B` will be enabled.

#### Event callback parameters

- **participantId**: String
- **listener**: MicRequestListener { **accept**: Method; **reject**: Method }

#### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
 override fun onMicRequested(participantId: String, listener: MicRequestListener) {
     // if accept request
     listener.accept()

     // if reject request
     listener.reject()
 }
```

</TabItem>

<TabItem value="Java">

```javascript
 @Override
 public void onMicRequested(String participantId, MicRequestListener listener) {
     // if accept request
     listener.accept();

     // if reject request
     listener.reject();
 }
```

</TabItem>

</Tabs>

---

### onRecordingStateChanged()

- This event will be emitted when the meeting's recording status changed.
#### Event callback parameters

-  **recordingState**: String 

`recordingState` has following values

- `RECORDING_STARTING` - Recording is in starting phase and hasn't started yet.
- `RECORDING_STARTED` - Recording has started successfully.
- `RECORDING_STOPPING` - Recording is in stopping phase and hasn't stopped yet.
- `RECORDING_STOPPED` - Recording has stopped successfully.

#### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
  override fun onRecordingStateChanged(recordingState: String) {
    when (recordingState) {
        "RECORDING_STARTING" -> {
            Log.d("onRecordingStateChanged", "Meeting recording is starting")
        }
        "RECORDING_STARTED" -> {
            Log.d("onRecordingStateChanged", "Meeting recording is started")
        }
        "RECORDING_STOPPING" -> {
            Log.d("onRecordingStateChanged", "Meeting recording is stopping")
        }
        "RECORDING_STOPPED" -> {
            Log.d("onRecordingStateChanged", "Meeting recording is stopped")
        }
    }
  }
```

</TabItem>

<TabItem value="Java">

```javascript
  @Override
  public void onRecordingStateChanged(String recordingState) {
      switch (recordingState) {
          case "RECORDING_STARTING":
              Log.d("onRecordingStateChanged", "Meeting recording is starting");
              break;
          case "RECORDING_STARTED":
              Log.d("onRecordingStateChanged", "Meeting recording is started");
              break;
          case "RECORDING_STOPPING":
              Log.d("onRecordingStateChanged", "Meeting recording is stopping");
              break;
          case "RECORDING_STOPPED":
              Log.d("onRecordingStateChanged", "Meeting recording is stopped");
              break;
      }
  }
```

</TabItem>

</Tabs>

---


### onRecordingStarted()

_`This event will be deprecated soon`_

- This event will be emitted when recording of the meeting is started.

#### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
 override fun onRecordingStarted() {
   //
 }
```

</TabItem>

<TabItem value="Java">

```javascript
 @Override
 public void onRecordingStarted() {
   //
 }
```

</TabItem>

</Tabs>

---

### onRecordingStopped()

_`This event will be deprecated soon`_

- This event will be emitted when recording of the meeting is stopped.

#### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
 override fun onRecordingStopped() {
   //
 }
```

</TabItem>

<TabItem value="Java">

```javascript
 @Override
 public void onRecordingStopped() {
   //
 }
```

</TabItem>

</Tabs>

---

### onLivestreamStateChanged()

- This event will be emitted when the meeting's livestream status changed.
#### Event callback parameters

- **livestreamState**: String

`livestreamState` has following values

- `LIVESTREAM_STARTING` - Livestream is in starting phase and hasn't started yet.
- `LIVESTREAM_STARTED` - Livestream has started successfully.
- `LIVESTREAM_STOPPING` - Livestream is in stopping phase and hasn't stopped yet.
- `LIVESTREAM_STOPPED` - Livestream has stopped successfully.

#### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
  override fun onLivestreamStateChanged(livestreamState: String?) {
    when (livestreamState) {
        "LIVESTREAM_STARTING" -> Log.d( "LivestreamStateChanged",
            "Meeting livestream is starting"
        )
        "LIVESTREAM_STARTED" -> Log.d( "LivestreamStateChanged",
            "Meeting livestream is started"
        )
        "LIVESTREAM_STOPPING" -> Log.d("LivestreamStateChanged",
            "Meeting livestream is stopping"
        )
        "LIVESTREAM_STOPPED" -> Log.d("LivestreamStateChanged",
            "Meeting livestream is stopped"
        )
    }
  }
```

</TabItem>

<TabItem value="Java">

```javascript
  @Override
  public void onLivestreamStateChanged(String livestreamState) {
      switch (livestreamState) {
          case "LIVESTREAM_STARTING":
              Log.d("LivestreamStateChanged", "Meeting livestream is starting");
              break;
          case "LIVESTREAM_STARTED":
              Log.d("LivestreamStateChanged", "Meeting livestream is started");
              break;
          case "LIVESTREAM_STOPPING":
              Log.d("LivestreamStateChanged", "Meeting livestream is stopping");
              break;
          case "LIVESTREAM_STOPPED":
              Log.d("LivestreamStateChanged", "Meeting livestream is stopped");
              break;
      }
  }
```

</TabItem>

</Tabs>

---

### onLivestreamStarted()

_`This event will be deprecated soon`_

- This event will be emitted when `RTMP` live stream of the meeting is started.

#### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
 override fun onLivestreamStarted() {
   //
 }
```

</TabItem>

<TabItem value="Java">

```javascript
 @Override
 public void onLivestreamStarted() {
   //
 }
```

</TabItem>

</Tabs>

---

### onLivestreamStopped()

_`This event will be deprecated soon`_

- This event will be emitted when `RTMP` live stream of the meeting is stopped.

#### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
 override fun onLivestreamStopped() {
   //
 }
```

</TabItem>

<TabItem value="Java">

```javascript
 @Override
 public void onLivestreamStopped() {
   //
 }
```

</TabItem>

</Tabs>

---

### onHlsStateChanged()

- This event will be emitted when the meeting's HLS(Http Livestreaming) status changed.

#### Event callback parameters

- **HlsState**: String

`HlsState` has following values

- `HLS_STARTING` - HLS is in starting phase and hasn't started yet.
- `HLS_STARTED` - HLS has started successfully.
- `HLS_STOPPING` - HLS is in stopping phase and hasn't stopped yet.
- `HLS_STOPPED` - HLS has stopped successfully.

#### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
  override fun onHlsStateChanged(HlsState: String?) {
    when (HlsState) {
        "HLS_STARTING" -> Log.d( "onHlsStateChanged",
            "Meeting hls is starting"
        )
        "HLS_STARTED" -> Log.d( "onHlsStateChanged",
            "Meeting hls is started"
        )
        "HLS_STOPPING" -> Log.d("onHlsStateChanged",
            "Meeting hls is stopping"
        )
        "HLS_STOPPED" -> Log.d("onHlsStateChanged",
            "Meeting hls is stopped"
        )
    }
  }
```

</TabItem>

<TabItem value="Java">

```javascript
  @Override
  public void onHlsStateChanged(String HlsState) {
      switch (HlsState) {
          case "HLS_STARTING":
              Log.d("onHlsStateChanged", "Meeting hls is starting");
              break;
          case "HLS_STARTED":
              Log.d("onHlsStateChanged", "Meeting hls is started");
              break;
          case "HLS_STOPPING":
              Log.d("onHlsStateChanged", "Meeting hls is stopping");
              break;
          case "HLS_STOPPED":
              Log.d("onHlsStateChanged", "Meeting hls is stopped");
              break;
      }
  }
```

</TabItem>

</Tabs>

---

### onExternalCallStarted()

- This event will be emitted when local particpant receive incoming call.

#### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
 override fun onExternalCallStarted() {
   //
 }
```

</TabItem>

<TabItem value="Java">

```javascript
 @Override
 public void onExternalCallStarted() {
   //
 }
```

</TabItem>

</Tabs>

---

### onMeetingStateChanged()

- This event will be emitted when state of meeting changes.
- It will pass **`state`** as an event callback parameter which will indicate current state of the meeting.
- All available states are `CONNECTING`, `CONNECTED`, `FAILED`, `DISCONNECTED`, `CLOSING`, `CLOSED`.

#### Event callback parameters

- **state**: String

#### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
 override fun onMeetingStateChanged(state: String?) {
    when (state) {
      "CONNECTING" -> Log.d("onMeetingStateChanged: ", "Meeting is Connecting")
      "CONNECTED" -> Log.d("onMeetingStateChanged: ", "Meeting is Connected")
      "FAILED" -> Log.d("onMeetingStateChanged: ", "Meeting connection failed")
      "DISCONNECTED" -> Log.d("onMeetingStateChanged: ","Meeting connection disconnected abruptly")
      "CLOSING" -> Log.d("onMeetingStateChanged: ", "Meeting is closing")
      "CLOSED" -> Log.d("onMeetingStateChanged: ", "Meeting connection closed")
    }
  }
```

</TabItem>

<TabItem value="Java">

```javascript
@Override
  public void onMeetingStateChanged(String state) {
    switch (state) {
        case "CONNECTING":
          Log.d("onMeetingStateChanged: ", "Meeting is Connecting");
          break;
        case "CONNECTED":
          Log.d("onMeetingStateChanged: ", "Meeting is Connected");
          break;
        case "FAILED":
          Log.d("onMeetingStateChanged: ", "Meeting connection failed");
          break;
        case "DISCONNECTED":
          Log.d("onMeetingStateChanged: ", "Meeting connection disconnected abruptly");
          break;
        case "CLOSING":
          Log.d("onMeetingStateChanged: ", "Meeting is closing");
          break;
        case "CLOSED":
          Log.d("onMeetingStateChanged: ", "Meeting connection closed");
          break;
    }
  }

```

</TabItem>

</Tabs>

---

### onParticipantModeChanged()

- This event will be triggered when mode gets changed.
- It will pass **`mode`**, as an event callback parameter.
  - `CONFERENCE`: Both audio and video streams will be produced and consumed in this mode.
  - `VIEWER`: Audio and video streams will not be produced or consumed in this mode.

#### Event callback parameters

- **data**: { **mode**: String, **participantId**: String }
  - **mode**: String
  - **participantId**: String

#### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
 override fun onParticipantModeChanged(data: JSONObject?) {
   //
  }
```

</TabItem>

<TabItem value="Java">

```javascript
@Override
  public void onParticipantModeChanged(JSONObject data) {
    //
  }

```

</TabItem>

</Tabs>

---

### onPinStateChanged()

- This event will be triggered when any participant got pinned or unpinned by any participant got pinned or unpinned by any participant.
#### Event callback parameters

- **pinStateData**: { **peerId**: String, **state**: JSONObject, **pinnedBy**: String }
  - **peerId**: String
  - **state**: JSONObject 
  - **pinnedBy**: String

#### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
 override fun onPinStateChanged(pinStateData: JSONObject?) {
   Log.d("onPinStateChanged: ", pinStateData.getString("peerId")) // id of participant who were pinned
   Log.d("onPinStateChanged: ", pinStateData.getJSONObject("state")) // { cam: true, share: true } 
   Log.d("onPinStateChanged: ", pinStateData.getString("pinnedBy")) // id of participant who pinned that participant
  }
```

</TabItem>

<TabItem value="Java">

```javascript
@Override
  public void onPinStateChanged(JSONObject pinStateData) {
    Log.d("onPinStateChanged: ", pinStateData.getString("peerId")); // id of participant who were pinned
    Log.d("onPinStateChanged: ", pinStateData.getJSONObject("state")); // { cam: true, share: true } 
    Log.d("onPinStateChanged: ", pinStateData.getString("pinnedBy")); // id of participant who pinned that participant
  }

```

</TabItem>

</Tabs>

---

</div>
