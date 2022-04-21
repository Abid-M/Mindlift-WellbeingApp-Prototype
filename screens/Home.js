import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    FlatList,
    TouchableOpacity,
    Image,
    ImageBackground,
    LogBox
} from 'react-native';

import { dummyData, COLORS, SIZES, FONTS, icons, images } from "../constants"
import { getAuth } from 'firebase/auth';

function getUsername() {
    const auth = getAuth();
    const user = auth.currentUser;
    return user.displayName;
}

function displayMessage(){
    var hours = new Date().getHours();
    var result = "Good Morning!";
    if (hours >= 6 && hours < 12){
        result = "Good Morning!"
    }
    else if (hours >= 12 && hours < 18){ result = "Good Afternoon!"}
    else{ result = "Good Night!"}
    return result
}

const Home = ({ navigation }) => {
    const [trending, setTrending] = React.useState(dummyData.trendingCurrencies)

    React.useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
    }, [])

    function renderHeader() {

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
                onPress={() => navigation.navigate("VidsAndArticles", { currency: item })}
            >
                {/* Currency */}
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Image
                            source={item.image}
                            resizeMode="cover"
                            style={{
                                marginTop: 5,
                                width: 25,
                                height: 25
                            }}
                        />
                    </View>
                    <View style={{ marginLeft: SIZES.base }}>
                        <Text style={{ ...FONTS.h2 }}>{item.currency}</Text>
                        <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>{item.code}</Text>
                    </View>
                </View>

                {/* Value */}
                <View style={{ marginTop: SIZES.radius }}>
                    <Text style={{ ...FONTS.h2 }}>{item.amount}</Text>
                    <Text style={{ color: item.type == "I" ? COLORS.green : COLORS.red, ...FONTS.h3 }}>{item.changes}</Text>
                </View>
            </TouchableOpacity>
        )

        return (
            <View
                style={{
                    width: "100%",
                    height: 390
                }}
            >
                <ImageBackground
                    source={images.banner}
                    resizeMode="cover"
                    style={{
                        flex: 1,
                        height: 290
                    }}
                >
                    {/* Header Bar */}
                    <View
                        style={{
                            marginTop: SIZES.padding * 2,
                            width: "100%",
                            alignItems: "flex-end",
                            paddingHorizontal: SIZES.padding
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                width: 35,
                                height: 35,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            onPress={() => navigation.navigate("BreakRemind")}
                        >
                            <Image
                                source={icons.notification_white}
                                resizeMode="contain"
                                style={{ flex: 1 }}
                            />
                        </TouchableOpacity>
                    </View>

                    {/* Balance */}
                    <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        
                        <Text style={{ marginTop: SIZES.base, color: COLORS.white, ...FONTS.h1 }}>{displayMessage()}</Text>
                        <Text style={{ color: COLORS.white, ...FONTS.body5 }}>{getUsername()}</Text>
                    </View>

                    {/* Trending */}
                    <View>
                        <Text style={{ marginLeft: SIZES.padding, color: COLORS.white, ...FONTS.h2 }}>Features</Text>
                        <FlatList
                            contentContainerStyle={{ marginTop: SIZES.base }}
                            data={trending}
                            renderItem={renderItem}
                            keyExtractor={item => `${item.id}`}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </ImageBackground>
            </View>
        )
    }

    function renderNotice( {navigation} ) {
        return (
            <View>
                <View
                    style={{
                        marginTop: SIZES.padding,
                        marginHorizontal: SIZES.padding,
                        padding: 20,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.secondary,
                        ...styles.shadow
                    }}
                >
                    <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Quote of the Day</Text>
                    <Text style={{ marginTop: SIZES.base, color: COLORS.white, ...FONTS.body4, lineHeight: 18 }}>Be Happy, not Depressed!</Text>

                    <TouchableOpacity
                        style={{
                            marginTop: SIZES.base
                        }}
                        onPress={() => console.log("Learn More")}
                    >
                        <Text style={{ textDecorationLine: 'underline', color: COLORS.green, ...FONTS.h3 }}>Learn More</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style = {{
                        marginTop: SIZES.padding,
                        marginHorizontal: SIZES.padding,
                        padding: 20,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.secondary,
                        ...styles.shadow
                    }}
                    onPress = {() => navigation.navigate("MentalLogger")}
                >
                    <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Mental Logger</Text>
                </TouchableOpacity>
            </View>

        )
    }


    return (
        <ScrollView>
            <View style={{ flex: 1, paddingBottom: 130 }}>
                {renderHeader()}
                {renderNotice({navigation})}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
})

export default Home;