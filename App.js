/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useRef, useState} from 'react';
import LottieView from 'lottie-react-native';

import {StyleSheet} from 'react-native';
import {NativeRouter, Routes, Route} from 'react-router-native';
import {SubTitle} from './src/components/atoms/Texts/SubTitle';

import Home from './src/screens/homeScreen';
import Restaurant from './src/screens/restaurantScreen';

const App = () => {
  const [openAppStatus, setOpenAppStatus] = useState(true);
  const openAppAnimation = useRef(null);

  useEffect(() => {
    openAppAnimation.current.play(0, 44);
  }, []);

  return (
    <NativeRouter>
      {openAppStatus ? (
        <LottieView
          source={require('./src/assets/animations/openapp.json')}
          loop={false}
          style={styles.openanim}
          ref={openAppAnimation}
          onAnimationFinish={() => setOpenAppStatus(false)}
        />
      ) : null}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/restaurant" element={<Restaurant />} />
      </Routes>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  openanim: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 2,
    transform: [{scale: 2}],
  },
});

export default App;
