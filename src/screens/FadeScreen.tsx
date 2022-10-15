import React from 'react';
import {Animated, Button, View} from 'react-native';
import {useFade} from '../hooks/useFade';

export const FadeScreen = () => {
  const {opacity, fadeIn, fadeOut} = useFade();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#a9a9a9',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={{
          backgroundColor: '#4682b4',
          width: 150,
          height: 150,
          borderColor: 'white',
          borderWidth: 10,
          opacity,
        }}
      />

      <Button title="fadeIn" onPress={() => fadeIn} />
      <Button title="fadeOut" onPress={() => fadeOut} />
    </View>
  );
};
