// import React from "react";
// import { Text, StyleSheet, View, FlatList } from "react-native-web";
// import { StyleSheet } from "react-native/types_generated/index";
// import { createValueIterator } from "react-native/types_generated/src/private/webapis/utils/ArrayLikeUtils";

// const students = [
//     { name: 'Ensar', surname: 'Sahiti', age: '17' },
//     { name: 'Shpat', surname: 'Berisha', age: '16' },
//     { name: 'Olsa', surname: 'Pireva', age: '16' },
//     { name: 'Darisi', surname: 'Ahmet', age: '15' },
// ];

// const ListScreen = () => {
//     return (
//         <View>
//             <Text style={styles.titleStyle}>List of Students</Text>
//             <FlatList
//                 horizontal={true}
//                 showsHorizontalScrollIndicator={false}
//                 keyExtractor={(student) => student.name}
//                 data={students}
//                 renderItem={({ item }) => (
//                     <View>
//                         <Text>
//                             {item.name} {item.surname} - {item.age}
//                         </Text>
//                     </View>
//                 )}
//             />
//         </View>
//     );
// };


// const styles = StyleSheet.create({
//   container: {
//     marginTop: 50,
//     padding: 16,
//   },
//   textStyle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   studentWrapper: {
//     backgroundColor: '#4A90E2',
//     borderRadius: 10,
//     padding: 14,
//     marginRight: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   studentText: {
//     color: '#fff',
//     fontSize: 15,
//     fontWeight: '500',
//   },
// });

// export default ListScreen;



