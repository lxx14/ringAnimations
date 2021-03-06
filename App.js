import React, { useRef, useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableOpacity,
  Text,
  Image,
  Dimensions
} from 'react-native';

const App = () => {

  const animValue = useRef(new Animated.Value(0));

  const [start, setStart] = useState(false);
  const [rightAnswer, setRightAnswer] = useState(false);

  const rigthColor = {
    inputRange: [0, 0.2, 0.7, 1],
    outputRange: ['white', 'green', 'green', 'white'],
  }

  const wrongColor = {
    inputRange: [0, 0.2, 0.7, 1],
    outputRange: ['white', 'red', 'red', 'white'],
  }

  const defaultInputReange = [0, 0.1, 0.8, 1];

  useEffect(() => {
    start && Animated.timing(
      animValue.current,
      {
        toValue: 1,
        duration: 1200,
      }
    ).start(() => {
      setStart(false);
      setRightAnswer(false);
      animValue.current.setValue(0);
    });
  }, [start]);

  const onClick = () => {
    setStart(true);
    setRightAnswer(true);
  }

  const onClickWrong = () => {
    setStart(true);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClick} style={{ marginBottom: 50 }}>
        <Text>Click Right</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onClickWrong} style={{ marginBottom: 50 }}>
        <Text>Click Wrong</Text>
      </TouchableOpacity>
      <Animated.View style={{
        ...styles.bigRound,
        transform: [{
          scale: animValue.current.interpolate({
            inputRange: defaultInputReange,
            outputRange: [1, 3, 3, 1],
          })
        }],
        backgroundColor: rightAnswer ? animValue.current.interpolate(rigthColor) : animValue.current.interpolate(wrongColor),
        opacity: animValue.current.interpolate({
          inputRange: defaultInputReange,
          outputRange: [0.1, 1, 1, 0.1],
        })
      }} />
      <Animated.View style={{
        ...styles.smallRound,
        transform: [{
          scale: animValue.current.interpolate({
            inputRange: defaultInputReange,
            outputRange: [1, 6, 6, 1],
          })
        }],
        backgroundColor: rightAnswer ? animValue.current.interpolate(rigthColor) : animValue.current.interpolate(wrongColor),
        opacity: animValue.current.interpolate({
          inputRange: defaultInputReange,
          outputRange: [0.1, 1, 1, 0.1],
        })
      }} />
      <Animated.View style={{
        ...styles.averageRound,
        transform: [{
          scale: animValue.current.interpolate({
            inputRange: defaultInputReange,
            outputRange: [1, 5, 5, 1],
          })
        }],
        backgroundColor: rightAnswer ? animValue.current.interpolate(rigthColor) : animValue.current.interpolate(wrongColor),
        opacity: animValue.current.interpolate({
          inputRange: defaultInputReange,
          outputRange: [0.1, 1, 1, 0.1],
        })
      }} />
      <Animated.View style={{
        ...styles.veryBigRound,
        transform: [{
          scale: animValue.current.interpolate({
            inputRange: defaultInputReange,
            outputRange: [1, 3, 3, 1],
          })
        }],
        backgroundColor: rightAnswer ? animValue.current.interpolate(rigthColor) : animValue.current.interpolate(wrongColor),
        opacity: animValue.current.interpolate({
          inputRange: defaultInputReange,
          outputRange: [0.1, 1, 1, 0.1],
        })
      }} />
      <Animated.View style={{
        ...styles.image,
        opacity: animValue.current.interpolate({
          inputRange: [0, 0.4, 0.8, 1],
          outputRange: [0, 1, 1, 0],
        }),
        zIndex: start ? 3 : -1,
      }}>
        <Image source={rightAnswer ? require('./assets/i_check.png') : require('./assets/i_cross.png')} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3467eb',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bigRound: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    top: 150,
    right: -120
  },
  smallRound: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 100,
    top: 320,
    left: 50
  },
  averageRound: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 100,
    top: -50,
    left: 70
  },
  veryBigRound: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 150,
    bottom: -150,
    left: -70
  },
  image: {
    position: 'absolute',
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;