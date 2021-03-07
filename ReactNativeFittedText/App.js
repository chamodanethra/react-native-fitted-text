import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FittedTextGroup} from '@chamodanethra/react-native-fitted-text';

export default function App() {
  return (
    <View style={styles.container}>
      <FittedTextGroup
        group={['ABCDEFGHIJ', 'klmnopqrs', '12345678']}
        groupStyles={styles.group}
        textStyles={styles.text}
        textWrapperStyles={styles.wrapper}
        cellStyles={styles.cell}
        children={[
          <View style={styles.child} />,
          <View style={styles.child} />,
          <View style={styles.child} />,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 500,
    justifyContent: 'center',
    width: 150,
  },
  group: {flexDirection: 'column'},
  cell: {
    width: '100%',
    flex: 1,
    borderWidth: 1,
    backgroundColor: 'red',
  },
  child: {
    backgroundColor: 'blue',
    flex: 0,
    width: '100%',
  },
  wrapper: {
    backgroundColor: 'green',
    width: '80%',
    justifyContent: 'flex-end',
    alignSelf: 'center',
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'pink',
  },
});
