import React from "react";
import {
  View,
  Text,
  ScrollView,
} from "react-native";
import { Video } from "expo-av";
import { HeaderBar } from "../components";
import { COLORS, SIZES, FONTS } from "../constants";
import storage from "../components/storage";
import { ArticleVidStyle } from '../styles';

const VideoDetails = ({ route }) => {
  const [video, setVideo] = React.useState("");
  const videoPlayer = React.useRef(null);
  


  React.useEffect(async () => {
    const { video } = route.params;
    setVideo(video);
    let data  = await storage.retrieve()
    if(data && data.videos){
      if(!data.videos.includes(video.id))
        data.videos = [ ...data.videos, video.id ]
        await storage.store(data)
    }else{
      if(!data){
        data = {}
      }
      data.videos = [video.id]
      await storage.store(data)
    }
  }, []);

  function renderNotice() {
   
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          padding: 20,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.secondary,
          ...ArticleVidStyle.shadow,
        }}
      >
        <Text style={{ color: COLORS.white, ...FONTS.h2 }}>About Video:</Text>
        <Text style={{ color: COLORS.white, ...FONTS.body3 }}>
          {video.content}
        </Text>
      </View>
    );
  }

 
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.lightGray1,
      }}
    >
      
      <HeaderBar right={false}  />

      <ScrollView
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          paddingBottom: SIZES.padding,
        }}
      >
        <View
          style={{
            width: 350,
            height: 350,
            marginRight: "auto",
            marginLeft: "auto",
            borderRadius: 10,
            backgroundColor: COLORS.white,
          }}
        >
          <Video
            ref={videoPlayer}
            style={{
              width: "90%",
              height: "90%",
              marginRight: "auto",
              marginLeft: "auto",
              marginTop: "auto",
              marginBottom: "auto",
            }}
            source={video.url}
            useNativeControls
            resizeMode="contain"
            isLooping
            // onPlaybackStatusUpdate={status => setStatus(() => status)}
          />
        </View>
        {/* Videos */}
        {renderNotice()}
      </ScrollView>
    
    </View>
  );
};

export default VideoDetails;