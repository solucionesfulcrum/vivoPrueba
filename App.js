import React from "react"
import { Dimensions, View } from "react-native"
import {LivePlayer} from "react-native-live-stream";

const { width, height } = Dimensions.get("window")

const config = {
  cameraConfig: {
    cameraId: 1,
    cameraFrontMirror: false
  },
  video: {
    preset: 4,
    bitrate: 2000000,
    profile: 2,
    fps: 30,
    videoFrontMirror: true,
  },
  audioConfig: {
    bitrate: 128000,
    profile: 1,
    samplerate: 44100,
  }
};

const BroadcastScreen = () => {
  const cameraViewRef = React.useRef(null);
  const streamKey = '7b677d6ba4be433a9f4a7c1d0fee6ce4_4500';
  const url = `rtmp://a8f47399-6cbe-930b-b443-e16ba3f5f1c2.dacastmmd.pri.lldns.net/dacastmmd`;

  return (
    <View style={{flex: 1}}>

      <LivePlayer source={{uri:"rtmp://a8f47399-6cbe-930b-b443-e16ba3f5f1c2.dacastmmd.pri.lldns.net/dacastmmd"}}
        ref={(ref) => {
            this.player = ref
        }}
        style={{flex: 1,preset: 4,
          bitrate: 2000000,
          profile: 2,
          fps: 30,
          videoFrontMirror: true}}
        paused={false}
        muted={false}
        bufferTime={300}
        maxBufferTime={1000}
        resizeMode={"contain"}
        onLoading={()=>{}}
        onLoad={()=>{}}
        onEnd={()=>{}}
      />
    </View>
  );
};

export default BroadcastScreen;