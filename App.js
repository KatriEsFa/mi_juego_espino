import { StyleSheet, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import GameScreen from './screens/GameScreen';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen'
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { useState } from 'react';

export default function App() {
  const [loaded] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf')
  })
  const [userNumber, setUserNumber] = useState()
  const handleStartGame = selectedNumber => {
    setUserNumber(selectedNumber)
  };

  let content = <StartGameScreen onStartGame={handleStartGame} />;

  if (userNumber) {
    content = <GameScreen />
  }

  return (
    <View style={styles.container}>
      <Header title={'Adivina el Número'} />
      {content}
      {/* <StartGameScreen /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,
  },
});
