import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground, SafeAreaView, TextInput, TouchableOpacity } from "react-native"
import { ScrollView } from "react-native-gesture-handler";
import { Dimensions } from "react-native/Libraries/Utilities/Dimensions";




const Account = () => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF' }}>
            <View style={style.profileView}>
                <View><Text style={style.heading}>Settings</Text></View>
                <View><Image source={require('../image/profilePic.png')} /></View>




            </View>
            <View style={style.input} ><TextInput placeholder="search profile" /></View>
            <ScrollView style={{ flex: 1, marginTop: '5%' }}  >
                <View style={style.caredView}>
                    <View style={style.left}>
                        <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold' }}>Hammad khan</Text>
                        <Text style={{ color: 'black', fontSize: 16, }}>2 x item Name</Text>
                        <Text style={{ color: 'black', fontSize: 16, }}>2 x item Name</Text>
                        <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Total</Text>



                    </View>

                    <View style={style.right}>
                        <Text style={{ color: 'black', fontSize: 16, lineHeight: 60 }}>03172930029</Text>

                        <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', lineHeight: 60 }}>$ 85.12</Text>

                    </View>

                </View>
                <View style={style.caredView}>
                    <View style={style.left}>
                        <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold' }}>Hammad khan</Text>
                        <Text style={{ color: 'black', fontSize: 16, }}>2 x item Name</Text>
                        <Text style={{ color: 'black', fontSize: 16, }}>2 x item Name</Text>
                        <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Total</Text>



                    </View>

                    <View style={style.right}>
                        <Text style={{ color: 'black', fontSize: 16, lineHeight: 60 }}>03172930029</Text>

                        <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', lineHeight: 60 }}>$ 85.12</Text>

                    </View>

                </View>
                <View style={style.caredView}>
                    <View style={style.left}>
                        <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold' }}>Hammad khan</Text>
                        <Text style={{ color: 'black', fontSize: 16, }}>2 x item Name</Text>
                        <Text style={{ color: 'black', fontSize: 16, }}>2 x item Name</Text>
                        <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Total</Text>



                    </View>

                    <View style={style.right}>
                        <Text style={{ color: 'black', fontSize: 16, lineHeight: 60 }}>03172930029</Text>

                        <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', lineHeight: 60 }}>$ 85.12</Text>

                    </View>

                </View>
                <View style={style.caredView}>
                    <View style={style.left}>
                        <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold' }}>Hammad khan</Text>
                        <Text style={{ color: 'black', fontSize: 16, }}>2 x item Name</Text>
                        <Text style={{ color: 'black', fontSize: 16, }}>2 x item Name</Text>
                        <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Total</Text>



                    </View>

                    <View style={style.right}>
                        <Text style={{ color: 'black', fontSize: 16, lineHeight: 60 }}>03172930029</Text>

                        <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', lineHeight: 60 }}>$ 85.12</Text>

                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    profileView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    heading: {
        color: 'blue',
        fontSize: 24,
        margin: 5,
        fontWeight: 'bold'
    },

    input: {
        width: '60%',
        padding: 5,
        margin: '2%',
        borderRadius: 40,
        color: 'black',
        backgroundColor: '#f2f2f2'

    },
    caredView: {
        // display: 'flex',
        flex: 1,
        width: '95%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: '#E8E8E8',
        borderBottomWidth: 4,
        borderRadius: 10,
        padding: 5,
        marginVertical: '5%'

    },
    num: {
        color: 'black'
    },
    price: {
        color: 'black'

    },

})
export default Account;