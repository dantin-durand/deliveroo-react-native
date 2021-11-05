import React, {useEffect, useRef, useState} from 'react';
import LottieView from 'lottie-react-native';

import {
  ScrollView,
  TextInput,
  View,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {HeaderAdress} from '../components/organisms/HeaderAdress';
import {SearchBar} from '../components/molecules/SearchBar';

export function DefaultLayout({children}) {
  const [offset, setOffset] = useState(0);
  const [openAppStatus, setOpenAppStatus] = useState(true);
  const openAppAnimation = useRef(null);
  useEffect(() => {
    openAppAnimation.current.play(0, 44);
  }, []);
  return (
    <View>
      {openAppStatus ? (
        <LottieView
          source={require('../assets/animations/openapp.json')}
          loop={false}
          style={styles.openanim}
          ref={openAppAnimation}
          onAnimationFinish={() => setOpenAppStatus(false)}
        />
      ) : null}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-end',
          zIndex: 1,
          display: offset <= 115 ? 'none' : 'flex',
          backgroundColor: '#fff',
          width: '100%',
          height: 100,
          position: 'absolute',
        }}>
        <SearchBar
          style={{position: 'absolute', bottom: 10}}
          placeholder="Plats, restaurants ou types de cuisine"
        />
      </View>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={e => {
          setOffset(e.nativeEvent.contentOffset.y);
        }}>
        <HeaderAdress offset={offset} />
        <View style={{backgroundColor: '#fff'}}>{children}</View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'red',
    width: '80%',
    height: 40,
    borderRadius: 20,
    transform: [{translateY: -20}],
    paddingHorizontal: 20,
    position: 'absolute',
  },
  openanim: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 2,
    transform: [{scale: 2}],
  },
});
