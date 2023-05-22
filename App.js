import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Counter from './scr/Counter';
import { Provider } from 'react-redux';
import store from './scr/redux/store';

function App() {
  return (
    <Provider store={store}>
    <SafeAreaView style={styles.container}>
      <Counter />
    </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
