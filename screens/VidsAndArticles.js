import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
} from "react-native";

import {
  HeaderBar,
  CurrencyLabel,
  TextButton,
} from "../components";
import { dummyData, COLORS, SIZES, FONTS, icons } from "../constants";

const VidsAndArticles = ({ route, navigation }) => {
  const scrollX = new Animated.Value(0);

  const [articles, setArticles] = React.useState(dummyData.articles)
    const [videos, setVideos] = React.useState(dummyData.videos)
  const [selectedCurrency, setSelectedCurrency] = React.useState(null);
  const [chartOptions, setChartOptions] = React.useState(
    dummyData.chartOptions
  );
  const [selectedOption, setSelectedOption] = React.useState(chartOptions[0]);

  React.useEffect(() => {
    const { currency } = route?.params;

    setSelectedCurrency(currency);
  }, []);

  function optionOnClickHandler(option) {
    setSelectedOption(option);
  }

  function renderDots() {
    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <View style={{ height: 30, marginTop: 15 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {selectedCurrency?.chartData.map((item, index) => {
            const opacity = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });

            const dotSize = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [SIZES.base * 0.8, 10, SIZES.base * 0.8],
              extrapolate: "clamp",
            });

            const dotColor = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [COLORS.gray, COLORS.primary, COLORS.gray],
              extrapolate: "clamp",
            });

            return (
              <Animated.View
                key={`dot-${index}`}
                opacity={opacity}
                style={{
                  borderRadius: SIZES.radius,
                  marginHorizontal: 6,
                  width: dotSize,
                  height: dotSize,
                  backgroundColor: dotColor,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }

  function renderChart() {
    return (
      <View
        style={{
          marginTop: SIZES.radius,
          marginHorizontal: SIZES.radius,
          alignItems: "center",
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
          ...styles.shadow,
        }}
      >
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.padding,
          }}
        >
          <View style={{ flex: 1 }}>
            <CurrencyLabel
              icon={selectedCurrency?.image}
              currency={selectedCurrency?.currency}
              code={selectedCurrency?.code}
            />
          </View>
          <View>
            <Text style={{ ...FONTS.h3 }}>${selectedCurrency?.amount}</Text>
            <Text
              style={{
                color:
                  selectedCurrency?.type == "I" ? COLORS.green : COLORS.red,
                ...FONTS.body3,
              }}
            >
              {selectedCurrency?.changes}
            </Text>
          </View>
        </View>

        {/* Chart */}
        <Animated.ScrollView
          horizontal
          pagingEnabled
          scrollEventThrottle={16}
          snapToAlignment="center"
          snapToInterval={SIZES.width - 40}
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
        >
          {selectedCurrency?.chartData.map((item, index) => (
            <View
              key={`chart-${index}`}
              style={{
                marginLeft: index == 0 ? SIZES.base : 0,
              }}
            >
              {/* <View
                style={{
                  marginTop: -25,
                }}
              > */}
              {/* <VictoryChart
                  theme={VictoryCustomTheme}
                  height={220}
                  width={SIZES.width - 40}
                >
                  <VictoryLine
                    style={{
                      data: {
                        stroke: COLORS.secondary,
                      },
                      parent: {
                        border: "1px solid #ccc",
                      },
                    }}
                    data={item}
                    categories={{
                      x: ["15 MIN", "30 MIN", "45 MIN", "60 MIN"],
                      y: ["15", "30", "45"],
                    }}
                  />
                  <VictoryScatter
                    data={item}
                    size={7}
                    style={{
                      data: {
                        fill: COLORS.secondary,
                      },
                    }}
                  />
                  <VictoryAxis
                    style={{
                      grid: {
                        stroke: "transparent",
                      },
                    }}
                  />
                  <VictoryAxis
                    dependentAxis
                    style={{
                      axis: {
                        stroke: "transparent",
                      },
                      grid: {
                        stroke: "grey",
                      },
                    }}
                  />
                </VictoryChart>
              </View> */}
            </View>
          ))}
        </Animated.ScrollView>

        {/* Options */}
        <View
          style={{
            width: "100%",
            paddingHorizontal: SIZES.padding,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {chartOptions.map((option) => {
            return (
              <TextButton
                key={`option-${option.id}`}
                label={option.label}
                customContainerStyle={{
                  height: 30,
                  width: 60,
                  borderRadius: 15,
                  backgroundColor:
                    selectedOption.id == option.id
                      ? COLORS.primary
                      : COLORS.lightGray,
                }}
                customLabelStyle={{
                  color:
                    selectedOption.id == option.id ? COLORS.white : COLORS.gray,
                  ...FONTS.body5,
                }}
                onPress={() => optionOnClickHandler(option)}
              />
            );
          })}
        </View>

        {/* Dots */}
        {renderDots()}
      </View>
    );
  }

  function renderBuy() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.radius,
          padding: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
          ...styles.shadow,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: SIZES.radius,
          }}
        >
          {/* Currency */}
          <View style={{ flex: 1 }}>
            <CurrencyLabel
              icon={selectedCurrency?.image}
              currency={`${selectedCurrency?.currency} Wallet`}
              code={selectedCurrency?.code}
            />
          </View>

          {/* Amount */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ marginRight: SIZES.base }}>
              <Text style={{ ...FONTS.h3 }}>
                ${selectedCurrency?.wallet.value}
              </Text>
              <Text
                style={{
                  textAlign: "right",
                  color: COLORS.gray,
                  ...FONTS.body4,
                }}
              >
                {selectedCurrency?.wallet.crypto} {selectedCurrency?.code}
              </Text>
            </View>
            <Image
              source={icons.right_arrow}
              resizeMode="cover"
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.gray,
              }}
            />
          </View>
        </View>

        <TextButton
          label="Buy"
          onPress={() =>
            navigation.navigate("Transaction", { currency: selectedCurrency })
          }
        />
      </View>
    );
  }

  function renderArticles() {

    const renderItem = ({ item, index }) => (
        <TouchableOpacity
            style={{
                width: 180,
                paddingVertical: SIZES.padding,
                paddingHorizontal: SIZES.padding,
                marginLeft: index == 0 ? SIZES.padding : 0,
                marginRight: SIZES.radius,
                borderRadius: 10,
                backgroundColor: COLORS.white
            }}
            onPress={() => navigation.navigate("ArticleDetails", { article: item })}
        >
            {/* Currency */}
           
            <View style={{ flexDirection: 'column' }}>
                <View>
                    <Image
                        source={item.image}
                        resizeMode="cover"
                        style={{
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            width: 120,
                            height: 120
                        }}
                    />
                </View>
                <View style={{ marginLeft: SIZES.base }}>
                    <Text style={{ ...FONTS.h4 }}>{item.description}</Text>
                    {/* <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>{item.code}</Text> */}
                </View>
            </View>

            {/* Value */}
            {/* <View style={{ marginTop: SIZES.radius }}>
                <Text style={{ ...FONTS.h2 }}>${item.amount}</Text>
                <Text style={{ color: item.type == "I" ? COLORS.green : COLORS.red, ...FONTS.h3 }}>{item.changes}</Text>
            </View> */}
        </TouchableOpacity>
    )

    return (
        <View
            style={{
                width: "100%",
                height: 310
            }}
        >
                {/* Trending */}
                <View>
                    <Text style={{ marginLeft: SIZES.padding, color: COLORS.black, ...FONTS.h1 }}>Articles</Text>
                    <FlatList
                        contentContainerStyle={{ marginTop: SIZES.base }}
                        data={articles}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id}`}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
        </View>
    )
}

  function renderVideos() {

    const renderItem = ({ item, index }) => (
        <TouchableOpacity
            style={{
                width: 180,
                paddingVertical: SIZES.padding,
                paddingHorizontal: SIZES.padding,
                marginLeft: index == 0 ? SIZES.padding : 0,
                marginRight: SIZES.radius,
                borderRadius: 10,
                backgroundColor: COLORS.white
            }}
            onPress={() => navigation.navigate("VideoDetails", { video: item })}
        >
            {/* Currency */}
           
            <View style={{ flexDirection: 'column' }}>
                <View>
                    <Image
                        source={item.thumbnail}
                        resizeMode="cover"
                        style={{
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            width: 120,
                            height: 120
                        }}
                    />
                </View>
                <View style={{ marginLeft: SIZES.base }}>
                    <Text style={{ ...FONTS.h4 }}>{item.description}</Text>
                    {/* <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>{item.code}</Text> */}
                </View>
            </View>

            {/* Value */}
            {/* <View style={{ marginTop: SIZES.radius }}>
                <Text style={{ ...FONTS.h2 }}>${item.amount}</Text>
                <Text style={{ color: item.type == "I" ? COLORS.green : COLORS.red, ...FONTS.h3 }}>{item.changes}</Text>
            </View> */}
        </TouchableOpacity>
    )

    return (
        <View
            style={{
                width: "100%",
                height: 300
            }}
        >
                {/* Trending */}
                <View>
                    <Text style={{ marginLeft: SIZES.padding, color: COLORS.black, ...FONTS.h1 }}>Videos</Text>
                    <FlatList
                        contentContainerStyle={{ marginTop: SIZES.base }}
                        data={videos}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id}`}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
        </View>
    )
}

  function renderAbout() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.radius,
          padding: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
          ...styles.shadow,
        }}
      >
        <Text style={{ ...FONTS.h3 }}>About {selectedCurrency?.currency}</Text>
        <Text style={{ marginTop: SIZES.base, ...FONTS.body3 }}>
          {selectedCurrency?.description}
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
      <HeaderBar 
      right={true}
      screen={'Stats'}
      data=''
      />

      <ScrollView
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          paddingBottom: SIZES.padding,
        }}
      >
        {/* Artuckes */}
        {renderArticles()}

        {/* Buy */}
        {renderVideos()}

        {/* Alert
        <PriceAlert
          customContainerStyle={{
            marginTop: SIZES.padding,
            marginHorizontal: SIZES.radius,
          }} */}
        {/* /> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

export default VidsAndArticles;