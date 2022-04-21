import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
} from "react-native";
import {
  HeaderBar,
} from "../components";
import {COLORS, SIZES, FONTS } from "../constants";
import storage from "../components/storage";
import { ArticleVidStyle } from '../styles';

const ArticleDetails = ({ route }) => {
  const [article, setArticle] = React.useState("");


  React.useEffect(async () => {
    const { article } = route.params;
    setArticle(article);
    let data  = await storage.retrieve()
    if(data && data.articles){
      if(!data.articles.includes(article.id))
        data.articles = [ ...data.articles, article.id ]
        await storage.store(data)
    }else{
      if(!data){
        data = {}
      }
      data.articles = [article.id]
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
        <Text style={{ color: COLORS.white, ...FONTS.h2 }}>
          {article.title}
        </Text>
        <Text
          style={{
            marginTop: SIZES.base,
            color: COLORS.white,
            ...FONTS.body3,
            lineHeight: 18,
          }}
        >
          {article.content}
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
            width: 250,
            height: 250,
            marginRight: "auto",
            marginLeft: "auto",
            borderRadius: 10,
            backgroundColor: COLORS.white,
          }}
        >
          <Image
            source={article.image}
            resizeMode="cover"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "auto",
              marginBottom: "auto",
              width: 200,
              height: 200,
            }}
          />
        </View>
        {/* Articles */}
        {renderNotice()}
      </ScrollView>
      
    </View>
  );
};

export default ArticleDetails;