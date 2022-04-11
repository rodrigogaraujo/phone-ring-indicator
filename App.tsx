import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { MotiView } from 'moti';
import { StyleSheet, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather'
import { Easing } from 'react-native-reanimated';

const color = '#ff0000'
const size = 100

export default function App() {
  return (
    <View style={[styles.center, {flex: 1}]}>
      <StatusBar style='light' />
      <View style={[styles.center, styles.dot]}>
        {[...Array(3).keys()].map((i) => {
          return (
            <MotiView key={i}
              from={{ opacity: 0.7, scale: 1 }}
              animate={{ opacity: 0, scale: 4 }}
              transition={{
                type: 'timing',
                duration: 2000,
                easing: Easing.out(Easing.ease),
                loop: true,
                repeatReverse: false,
                delay: i * 400,
              }}
              style={[
                StyleSheet.absoluteFillObject, 
                styles.dot
              ]} 
            />
          )
        })}
        <Feather name='phone-outgoing' size={32} color='#fff' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dot: {
    width: size,
    height: size,
    borderRadius: size,
    backgroundColor: color,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});
