import {Image, Text, View, StyleSheet} from 'react-native';
import React from 'react';

export function Opinions({opinions: {note, count}}) {
  const getReview = note => {
    if (note === 0.2) return 'Ptdr chaud';

    if (note >= 3 && note <= 4) return 'Bien';
    if (note >= 4 && note <= 5) return 'Très Bien';

    return '';
  };

  return (
    <View>
      <Text style={styles.globalopinion}>
        <View style={{marginRight: 5}}>
          <Image
            style={styles.iconstar}
            source={require('../../assets/icons/star.png')}
          />
        </View>
        {`${note} ${getReview(note)}`}{' '}
        <Text style={{opacity: 0.5}}>({count})</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  globalopinion: {
    alignItems: 'center',
    color: '#007e8a',
    marginTop: 6,
  },
  iconstar: {
    width: 15,
    height: 15,
  },
});
