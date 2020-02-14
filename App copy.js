// import React, { useRef, useEffect, useState } from 'react';
// import {
//   StyleSheet,
//   View,
//   Animated,
//   TouchableOpacity,
//   Text,
//   Image
// } from 'react-native';

// const App = () => {

//   const scale = useRef(new Animated.Value(1));
//   const opacity = useRef(new Animated.Value(0.5));
//   const checkOpacity = useRef(new Animated.Value(0));
//   const animatedColor = useRef(new Animated.Value(0))
//   const [start, setStart] = useState(false);

//   useEffect(() => {
//     start && Animated.sequence([
//       Animated.parallel([
//         Animated.timing(
//           scale.current,
//           {
//             toValue: 1,
//             duration: 3000,
//           }
//         ),
//         Animated.timing(
//           opacity.current,
//           {
//             toValue: 1,
//             duration: 3000,
//           }
//         ),
//         Animated.timing(
//           animatedColor.current,
//           {
//             toValue: 1,
//             duration: 3000,
//           }
//         ),
//       ]),
//       Animated.timing(
//         checkOpacity.current,
//         {
//           toValue: 1,
//           duration: 3000,
//         }
//       )
//     ]).start(() => setStart(false));
//   }, [start]);

//   const onClick = () => {
//     setStart(true);
//   }

//   const onClickWrong = () => {
//     setStart(true);
//   }

//   return (
//     <View style={styles.container}>
//       <Text>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
//       <TouchableOpacity onPress={onClick} style={{ marginBottom: 50 }}>
//         <Text>Click Right</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={onClickWrong}>
//         <Text>Click Wrong</Text>
//       </TouchableOpacity>
//       <Animated.View style={{
//         ...styles.bigRound,
//         transform: [
//           {
//             scale: scale.current.interpolate({
//               inputRange: [0, 0.4, 0.7, 1],
//               outputRange: [1, 20, 20, 1]
//             })
//           }
//         ],
//         opacity: opacity.current,
//         backgroundColor: animatedColor.current.interpolate({
//           inputRange: [0, 150],
//           outputRange: ['white', '#1AC795']
//         }),
//         zIndex: start ? 1 : -1,
//       }} />
//       <Animated.View style={{
//         ...styles.smallRound,
//         transform: [
//           {
//             scale: scale.current
//           }
//         ],
//         opacity: opacity.current,
//         backgroundColor: animatedColor.current.interpolate({
//           inputRange: [0, 150],
//           outputRange: ['white', '#1AC795']
//         }),
//         zIndex: start ? 1 : -1,
//       }} />
//       <Animated.View style={{
//         ...styles.averageRound,
//         transform: [
//           {
//             scale: scale.current
//           }
//         ],
//         opacity: opacity.current,
//         backgroundColor: animatedColor.current.interpolate({
//           inputRange: [0, 150],
//           outputRange: ['white', '#1AC795']
//         }),
//         zIndex: start ? 1 : -1,
//       }} />
//       <Animated.View style={{
//         ...styles.veryBigRound,
//         transform: [
//           {
//             scale: scale.current
//           }
//         ],
//         opacity: opacity.current,
//         backgroundColor: animatedColor.current.interpolate({
//           inputRange: [0, 150],
//           outputRange: ['white', '#1AC795']
//         }),
//         zIndex: start ? 1 : -1,
//       }} />
//       <Animated.View style={{ ...styles.image, opacity: checkOpacity.current }}>
//         {start && <Image source={require('./assets/i_check.png')} />}
//       </Animated.View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#3467eb',
//   },
//   bigRound: {
//     position: 'absolute',
//     width: 200,
//     height: 200,
//     borderRadius: 100,
//     right: -120,
//     top: 150,
//   },
//   smallRound: {
//     position: 'absolute',
//     width: 50,
//     height: 50,
//     borderRadius: 100,
//     left: 50,
//     top: 250,
//   },
//   averageRound: {
//     position: 'absolute',
//     width: 90,
//     height: 90,
//     borderRadius: 100,
//     left: 50,
//     top: -40,
//   },
//   veryBigRound: {
//     position: 'absolute',
//     width: 300,
//     height: 300,
//     borderRadius: 150,
//     left: -70,
//     bottom: -180,
//   },
//   image: {
//     position: 'absolute',
//     top: 200,
//     left: '25%',
//     zIndex: 2
//   }
// });

// export default App;