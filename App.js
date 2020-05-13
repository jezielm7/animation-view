import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, Animated } from 'react-native';

export default function App() {
  const [width, setWidth] = useState(new Animated.Value(0));
  const [height, setHeight] = useState(new Animated.Value(30));
  const [translate, setTranslate] = useState(new Animated.ValueXY({ x: 0, y: 660 }));

  Animated.sequence([
    Animated.timing(
      width,
      {
        toValue: 415,
        duration: 2000,
      },
    ),
    Animated.timing(
      height,
      {
        toValue: 660,
        duration: 1000,
      },
    ),
    Animated.spring(
      translate.y, {
      toValue: 0,
      speed: 1,
    }
    )
  ]).start();

  return (
    <View style={styles.container} >
      <StatusBar backgroundColor='#7159c1' />

      <Animated.View style={{
        width: width,
        height: height,
        backgroundColor: '#7159c1',
      }}>
        <Animated.Text style={[
          styles.text,
          {
            transform: [
              { translateY: translate.y }
            ]
          }
        ]} >hm vc é gay...</Animated.Text>
      </Animated.View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    top: '50%',
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
  },
});