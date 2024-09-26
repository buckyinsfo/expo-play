import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import ThreeSceneMgr from './components/ThreeSceneMgr';
import FiberScene from './components/FiberScene';

const App = () => {
  const [useThreeScene, setUseThreeScene] = useState(true);

  useEffect(() => {
    console.log(
      `Current scene: ${useThreeScene ? 'ThreeScene' : 'FiberScene'}`,
    );
  }, [useThreeScene]);

  const toggleScene = () => {
    setUseThreeScene(prev => !prev);
  };

  return (
    <View style={styles.container}>
      <View style={styles.sceneContainer}>
        {useThreeScene ? <ThreeSceneMgr /> : <FiberScene />}
      </View>
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.button} onPress={toggleScene}>
          <Text style={styles.buttonText}>
            Switch to {useThreeScene ? 'Fiber' : 'Three'} Scene
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sceneContainer: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 2,
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'blue',
    textAlign: 'center',
  },
});

export default App;
