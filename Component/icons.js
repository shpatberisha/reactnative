import React from 'react';
import {View , Text , StyleSheet} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'


const Icon =(props)=> {

    return(
        <View style={styles.iconWrapper}>
            <View style={styles.iconContainer}>
               <MaterialCommunityIcons name={props.name} size={27} color={"lightblue"} />
            </View>
          <Text style={styles.iconText}>{props.IconText}</Text>
        </View>
    );

}




const styles = StyleSheet.create({
    iconWrapper:{
        backgroundColor:"#384053",
        width:"100%",
        height:"100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50
    },
    iconContainer:{
        alignItems: "center",
        width: 60,
        height: 60,

    },
    iconText:{
        height: 20,
        fontWeight: "600"
    }

});


export default Icon;
