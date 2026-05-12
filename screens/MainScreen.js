import { setStatusBarBackgroundColor } from "expo-status-bar";
import React from "react";
import { Text , StyleSheet , View } from "react-native-web";
import { StyleSheet } from "react-native/types_generated/index";


const MainScreen =() => {
    return(
        <View>
            <Text>This is the main</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 30
    }
});
export default MainScreen